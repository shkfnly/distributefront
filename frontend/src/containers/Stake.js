import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'antd'
import StakeProject from '../components/shared/StakeProject'
import {eth, web3, tr, dt} from '../utilities/blockchain'

class Stake extends React.Component {
  constructor () {
    super()
    this.state = {
      value: 0,
      description: '',
      projects: [],
      tempProject: {},
      currPrice: 0
    }

    window.projects = this.state.projects
  }

  componentWillMount () {
    // this.getProjects()
    // dt.currentPrice((err, val) => {
    //   if (!err) {
    //     this.setState({currPrice: val.toNumber()})
    //   }
    // })
  }
  stakeProject (address, val, cb) {
    console.log(address, val)
    eth.getAccounts((err, accounts) => {
      if (!err) {
        tr.stakeTokens(address, val, {from: accounts[0]}, (err, txHash) => {
          if (!err) {
            eth.getTransactionReceipt(txHash, (err, txReceipt) => {
              if (!err) {
                console.log(txReceipt)
                console.log('ether is a ponzi schemeeeee')
                setTimeout(cb, 4000)
              }
            })
          }
        })
      }
    })
  }

  unstakeProject (address, val, cb) {
    console.log(address, val)
    eth.getAccounts((err, accounts) => {
      if (!err) {
        tr.unstakeTokens(address, val, {from: accounts[0]}, (err, txHash) => {
          if (!err) {
            eth.getTransactionReceipt(txHash, (err, txReceipt) => {
              if (!err) {
                console.log(txReceipt)
                cb()
              }
            })
          }
        })
      }
    })
  }

  render () {
    const projects = this.props.projects.projects.map((proj, i) => {
      return <Col span={8}>
        <StakeProject
          key={i}
          cost={proj.cost}
          description={proj.description}
          index={i}
          stakingEndDate={proj.stakingEndDate}
          address={proj.address}
          stakeProject={(val) => this.stakeProject(proj.address, val)}
          unstakeProject={(val) => this.unstakeProject(proj.address, val)}
        />
      </Col>
    })
    return (
      <div style={{marginLeft: 200}}>
        <header className='App-header'>
          {/* <img src={logoclassName='App-logo' alt='logo' /> */}
          <h1 className='App-title'>distribute</h1>
        </header>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{marginLeft: 20, marginTop: 40}}>
            <h3>Stakeable Proposals</h3>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Row type='flex' justify='space-around'>
                {projects}
              </Row>
              {/* <CardColumns> */}
              {/* {projects} */}
              {/* </CardColumns> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     proposeProject: (projectDetails) => dispatch(proposeProject(projectDetails))
//   }
// }

export default connect(mapStateToProps)(Stake)
