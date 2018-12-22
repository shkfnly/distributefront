const mongoose = require('mongoose')

let StakeSchema = mongoose.Schema({
  amount: Number,
  projectId: mongoose.Schema.Types.ObjectId,
  type: String,
  userId: mongoose.Schema.Types.ObjectId
})

const Stake = mongoose.model('Stake', StakeSchema)

module.exports = Stake
