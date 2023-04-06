import mongoose from 'mongoose';
import validator from 'validator';

export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: 6,
      maxlength: 32,
      required: [true, 'NAME_IS_BLANK'],
    },
    email: {
      type: String,
      lowercase: true,
      validate: validator.isEmail,
      maxlength: 255,
      minlength: 6,
      required: [true, 'EMAIL_IS_BLANK'],
    },
    password: {
      type: String,
      minlength: 5,
      maxlength: 1024,
      required: [true, 'PASSWORD_IS_BLANK'],
    },
    roles: {
      type: [String],
      default: ['user'],
    },
  },
  { timestamps: true },
);
