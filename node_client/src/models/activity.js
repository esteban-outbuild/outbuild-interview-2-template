const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Activity extends Model {}

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Activity',
    tableName: 'activities',
    timestamps: true,
  }
);

module.exports = Activity;
