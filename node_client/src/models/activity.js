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
      validate: {
        isDate: true,
        isFormatValid(value) {
          if (!value) {
            throw new Error('Start date cannot be null');
          }
          const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
          if (!dateFormatRegex.test(value)) {
            throw new Error('Start date must be in YYYY-MM-DD format');
          }
        },
      },
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
        isFormatValid(value) {
          if (!value) {
            throw new Error('End date cannot be null');
          }
          const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
          if (!dateFormatRegex.test(value)) {
            throw new Error('End date must be in YYYY-MM-DD format');
          }
        },
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
