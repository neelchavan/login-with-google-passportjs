import mongoose from 'mongoose'

const userShema = new mongoose.Schema({
  googleId: String,
  email: String,
  username: String,
  imageUrl: String,
})

const User = mongoose.model('User', userShema)

export default User