import { Model, DataTypes } from 'sequelize';
import sequelize from '../db.js';

class Activity extends Model {}

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      set(value) {
        if (typeof value === 'string' && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          throw new Error('Start date must be in YYYY-MM-DD format');
        }
        this.setDataValue('start_date', value);
      },
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      set(value) {
        if (typeof value === 'string' && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          throw new Error('End date must be in YYYY-MM-DD format');
        }
        this.setDataValue('end_date', value);
      },
    },
  },
  {
    sequelize,
    modelName: 'Activity',
    tableName: 'activities',
    timestamps: true,
  }
);

export default Activity;
