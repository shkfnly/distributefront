import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Card, Button, Table } from 'antd'
import {eth, pr, tr, P} from '../../utilities/blockchain'
import hashing from '../../utilities/hashing'
import { setProjectTaskList, indicateTaskClaimed, indicateTaskListSubmitted, indicateTaskSubmitted, indicateTaskValidated } from '../../actions/projectActions'

class ValidateTasks extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '',
      percentages: '',
      tasks: '',
      tempTask: {},
      taskList: [],
      isSubmitted: false,
      call: [],
      nextDeadline: ''
    }
  }

  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  validateTask (val, index, status) {
    let validator
    let valStatus = status
    eth.getAccounts(async (err, accounts) => {
      validator = accounts[0]
      if (!err) {
        if (accounts.length) {
          await tr.validateTask(this.props.address, index, val, status, {from: accounts[0]})
          .then(async () => {
            this.setState({['val' + index]: ''})
            this.props.indicateTaskValidated({ address: this.props.address, validator: validator, index: index, status: valStatus })
          })
        }
      }
    })
  }

  getProjectStatus (p) {
    let accounts
    eth.getAccounts(async (err, result) => {
      if (!err) {
        accounts = result
        if (accounts.length) {
          let nextDeadline, projectState
          p.nextDeadline().then(result => {
            // blockchain reports time in seconds, javascript in milliseconds
            nextDeadline = result.toNumber() * 1000
            this.setState({nextDeadline: nextDeadline})
          }).then(() => {
            p.state().then(result => {
              let states = ['none', 'proposed', 'staked', 'active', 'validation', 'voting', 'complete', 'failed', 'expired']
              projectState = states[result]
              this.setState({projectState: projectState})
            })
          })
        }
      }
    })
  }

  componentWillMount () {
    let p = P.at(this.props.address)
    this.getProjectStatus(p)
    this.setState({project: p, taskList: this.props.taskList})
  }

  checkVoting () {
    eth.getAccounts(async (err, accounts) => {
      if (!err) {
        await pr.checkVoting(this.props.address, {from: accounts[0]}).then((res) => {
          return res
        })
      }
    })
  }

  render () {
    let d
    if (typeof this.state.nextDeadline !== 'undefined') { d = moment(this.state.nextDeadline) }
    let tasks
    if (typeof this.props.taskList !== 'undefined') {
      tasks = this.props.taskList.map((task, i) => {
        let weiReward
        typeof task.weiReward !== 'undefined'
         ? weiReward = task.weiReward + ' wei'
         : weiReward = ''
        let val = 'val'
        let account = eth.accounts[0]
        // console.log(this.state.tasks)
        let input =
          <div>
            <div>
              <input
                name={val + i}
                placeholder='tokens'
                onChange={(e) => this.onChange(e)}
                value={this.state[val + i] || ''}
              />
            </div>
            <div>
              <Button
                type='danger'
                disabled={this.props.taskList[i].validated[account]}
                onClick={() => this.validateTask(this.state[val + i], i, true)} >Yes</Button>
              <Button
                type='danger'
                disabled={this.props.taskList[i].validated[account]}
                onClick={() => this.validateTask(this.state[val + i], i, false)} >No</Button>
            </div>
          </div>
        return {
          key: i,
          description: task.description,
          ethReward: weiReward,
          input: input
        }
      })
    } else {
      tasks = []
    }
    const columns = [{
      title: 'Task Description',
      dataIndex: 'description',
      key: 'description'
    }, {
      title: 'ETH Reward',
      dataIndex: 'ethReward',
      key: 'ethReward'
    }, {
      title: '',
      dataIndex: 'input',
      key: 'input'
    }]

    return (
      // <Col sm='10'>
      <Card title={`${typeof this.state.projectData !== 'undefined' ? this.state.projectData.name : 'N/A'}`} style={{backgroundColor: '#DDE4E5', marginTop: 30}} >
        <div style={{wordWrap: 'break-word'}}>{`${this.props.address}`}</div>
        <div>project funds: {`${this.props.cost}`} ETH</div>
        <div>project state: <strong>{`${this.state.projectState}`}</strong></div>
        {/* <td>{typeof d !== 'undefined' ? `${d.toLocaleDateString()} ${d.toLocaleTimeString()}` : 'N/A'}</td> */}
        <div>
          <div>
            task completion expires {typeof d !== 'undefined' ? `${d.fromNow()}` : 'N/A'}
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: '#DDD3AA', marginTop: 30}}>
          <Table dataSource={tasks} columns={columns} />
        </div>
        <Button
          onClick={() => this.checkVoting()}>
            Check Voting</Button>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    projects: state.projects.allProjects,
    taskList: state.projects.allProjects[ownProps.address].taskList,
    submissions: state.projects.allProjects[ownProps.address].submittedTasks
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setProjectTaskList: (taskDetails) => dispatch(setProjectTaskList(taskDetails)),
    indicateTaskClaimed: (submissionDetails) => dispatch(indicateTaskClaimed(submissionDetails)),
    indicateTaskListSubmitted: (taskDetails) => dispatch(indicateTaskListSubmitted(taskDetails)),
    indicateTaskSubmitted: (taskDetails) => dispatch(indicateTaskSubmitted(taskDetails)),
    indicateTaskValidated: (validationDetails) => dispatch(indicateTaskValidated(validationDetails))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ValidateTasks)