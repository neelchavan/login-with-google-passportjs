import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/login-with-google',{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}, (e) => {
  if (!e) {
      return console.log('Database connected')
  } else {
      return console.log(e)
        
  }   
})