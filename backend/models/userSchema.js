import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

  name: String,

  email: { 
    type: String, 
    unique: true 
  },

  password: String,

  createdAt: {
    type: Date,
    default: Date.now
  },

  resumeHistory: [
    {
      score: Number,
      date: {
        type: Date,
        default: Date.now
      },
      feedback: String
    }
  ],

  roomsJoined: [
    {
      roomId: String,
      joinedAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
});

const User = mongoose.model('User', userSchema);

export default User;