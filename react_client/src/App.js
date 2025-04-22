import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newActivity, setNewActivity] = useState({
    schedule_id: '',
    start_date: '',
    end_date: '',
  });

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/activities');
      setActivities(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch activities');
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/activities', newActivity);
      setNewActivity({ schedule_id: '', start_date: '', end_date: '' });
      fetchActivities();
    } catch (error) {
      console.error('Error creating activity:', error);
    }
  };

  const handleChange = (e) => {
    setNewActivity({
      ...newActivity,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Activities Manager</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <label>Schedule ID:</label>
          <input
            type='number'
            name='schedule_id'
            value={newActivity.schedule_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type='datetime-local'
            name='start_date'
            value={newActivity.start_date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type='datetime-local'
            name='end_date'
            value={newActivity.end_date}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Add Activity</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h2>Activities List</h2>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '10px',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>
                Schedule ID
              </th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Start Date</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>End Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{activity.id}</td>
                <td style={{ padding: '10px' }}>{activity.schedule_id}</td>
                <td style={{ padding: '10px' }}>
                  {new Date(activity.start_date).toLocaleString()}
                </td>
                <td style={{ padding: '10px' }}>
                  {new Date(activity.end_date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
