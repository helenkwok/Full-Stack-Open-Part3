const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, 'Name too short'],
    required: [true, 'Name required']
  },
  number: {
    type: String,
    validate: {
      validator: v => /^\d{2,3}-\d{5,8}$/.test(v),
      message: props => `${props.value} is not a valid phone number!`
    },
    minLength: [8, 'Number too short'],
    required: [true, 'Number required']
  },
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)