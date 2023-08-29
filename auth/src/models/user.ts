import mongoose from 'mongoose';

// Desribes properties used to create a new user
interface UserAttributes {
  email: string;
  password: string;
}

// Describes properties of a user model
interface UserModel extends mongoose.Model<UserDoc> {
  build(attributes: UserAttributes): UserDoc;
}

// Describes properties a user has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes);
};
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
