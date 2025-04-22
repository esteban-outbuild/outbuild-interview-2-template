import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);
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
    } catch (error) {
      console.error('Error fetching activities:', error);
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

      <h2>Activities List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Schedule ID</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.schedule_id}</td>
              <td>{new Date(activity.start_date).toLocaleString()}</td>
              <td>{new Date(activity.end_date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
