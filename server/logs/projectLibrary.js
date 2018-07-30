const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
const PL = require('../../frontend/src/abi/ProjectLibrary')
const mongoose = require('mongoose')
const Project = require('../models/project')
const Task = require('../models/task')
const Network = require('../models/network')

module.exports = function () {
  // filter for tasks passing, no vote needed
  const taskPassedFilter = web3.eth.filter({
    fromBlock: 0,
    toBlock: 'latest',
    address: PL.projectLibraryAddress,
    topics: [web3.sha3('LogTaskPass(address,address,bool)')]
  })
  taskPassedFilter.watch(async (err, result) => {
    if (err) console.error(err)
    let txHash = result.transactionHash
    let eventParams = result.data
    let eventParamArr = eventParams.slice(2).match(/.{1,64}/g)
    let taskAddress = eventParamArr[0]
    taskAddress = '0x' + taskAddress.substr(-40)
    let projectAddress = eventParamArr[1]
    projectAddress = '0x' + projectAddress.substr(-40)
    let confirmation = eventParamArr[2]
    console.log('should be true', confirmation)
    Network.findOne({}).exec((err, netStatus) => {
      if (err) console.error(err)
      if (typeof netStatus.processedTxs[txHash] === 'undefined') {
        netStatus.processedTxs[txHash] = true
        netStatus.markModified('processedTxs')
        netStatus.save((err, returned) => {
          if (err) throw Error
        })
        Project.findOne({address: projectAddress}).exec((err, doc) => {
          if (err) console.error(err)
          if (doc) {
            doc.state = 5
            doc.save(err => {
              if (err) console.error(err)
              console.log('project in voting stage')
            })
            Task.findOne({address: taskAddress}).exec((err, task) => {
              if (err) console.error(err)
              task.confirmation = confirmation
              task.workerRewardClaimable = confirmation
              task.validationRewardClaimable = true
              task.save(err => {
                if (err) console.error(err)
                console.log('task passed')
              })
            })
          }
        })
      }
    })
  })
  // filter for tasks failing, no vote needed
  const taskFailedFilter = web3.eth.filter({
    fromBlock: 0,
    toBlock: 'latest',
    address: PL.projectLibraryAddress,
    topics: [web3.sha3('LogTaskPass(address,address,bool)')]
  })
  taskFailedFilter.watch(async (err, result) => {
    if (err) console.error(err)
    let txHash = result.transactionHash
    let eventParams = result.data
    let eventParamArr = eventParams.slice(2).match(/.{1,64}/g)
    let taskAddress = eventParamArr[0]
    taskAddress = '0x' + taskAddress.substr(-40)
    let projectAddress = eventParamArr[1]
    projectAddress = '0x' + projectAddress.substr(-40)
    let confirmation = eventParamArr[2]
    console.log('should be false', confirmation)
    Network.findOne({}).exec((err, netStatus) => {
      if (err) console.error(err)
      if (typeof netStatus.processedTxs[txHash] === 'undefined') {
        netStatus.processedTxs[txHash] = true
        netStatus.markModified('processedTxs')
        netStatus.save((err, returned) => {
          if (err) throw Error
        })
        Project.findOne({address: projectAddress}).exec((err, doc) => {
          if (err) console.error(err)
          doc.state = 5
          doc.save(err => {
            if (err) console.error(err)
            console.log('project in voting stage')
          })
        })
        Task.findOne({address: taskAddress}).exec((err, task) => {
          if (err) console.error(err)
          task.confirmation = confirmation
          task.workerRewardClaimable = confirmation
          task.validationRewardClaimable = true
          task.save(err => {
            if (err) console.error(err)
            console.log('task failed')
          })
        })
      }
    })
  })
  const taskVoteFilter = web3.eth.filter({
    fromBlock: 0,
    toBlock: 'latest',
    address: PL.projectLibraryAddress,
    topics: [web3.sha3('LogTaskVote(address,address,uint)')]
  })
  taskVoteFilter.watch(async (err, result) => {
    if (err) console.error(err)
    let txHash = result.transactionHash
    let eventParams = result.data
    let eventParamArr = eventParams.slice(2).match(/.{1,64}/g)
    let taskAddress = eventParamArr[0]
    taskAddress = '0x' + taskAddress.substr(-40)
    let projectAddress = eventParamArr[1]
    projectAddress = '0x' + projectAddress.substr(-40)
    let pollNonce = parseInt(eventParamArr[2], 16)
    Network.findOne({}).exec((err, netStatus) => {
      if (err) console.error(err)
      if (typeof netStatus.processedTxs[txHash] === 'undefined') {
        netStatus.processedTxs[txHash] = true
        netStatus.markModified('processedTxs')
        netStatus.save((err, returned) => {
          if (err) throw Error
        })
        Project.findOne({address: projectAddress}).exec((err, doc) => {
          if (err) console.error(err)
          doc.state = 5
          doc.save(err => {
            if (err) console.error(err)
            console.log('project in voting stage')
          })
          Task.findOne({address: taskAddress}).exec((err, task) => {
            if (err) console.error(err)
            task.state = 5
            task.pollNonce = pollNonce
            task.save(err => {
              if (err) console.error(err)
              console.log('task uncomfirmed, poll created')
            })
          })
        })
      }
    })
  })
}
