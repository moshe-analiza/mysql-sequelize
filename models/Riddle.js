import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Riddle = sequelize.define('Riddle', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  correctAnswer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'riddles', // תואם לשם בטבלה במסד הנתונים
  timestamps: false,     // אם אין createdAt / updatedAt
});

export default Riddle;