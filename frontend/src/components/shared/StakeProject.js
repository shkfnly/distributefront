import React, { Component } from 'react'
import moment from 'moment'
import { Card, CardBody, CardTitle, CardText, Button, Col } from 'reactstrap'
import {eth, web3, tr, dt, P} from '../../utilities/blockchain'

class StakeProject extends Component {
  constructor () {
    super()
    this.state = {
      value: 0
    }
  }

  getProjectStatus (p) {
    try {
      let accounts
      eth.getAccounts((err, result) => {
        if (!err) {
          accounts = result
          console.log(accounts)
          if (accounts.length) {
            let weiBal,
              weiCost,
              reputationCost,
              totalTokensStaked,
              totalReputationStaked
            let currentPrice
            p.weiBal((err, result) => {
              if (!err) {
                weiBal = result.toNumber()
                console.log('weiBal', weiBal)
                console.log('p', p)
              }
            })
            p.weiCost((err, result) => {
              if (!err) {
                weiCost = result.toNumber()
                console.log('weiCost', weiCost)
              }
            })
          }
        }
      })

        // await p.weiCost({from: accounts[0]}, (err, val) => {
        //   if (!err) {
        //     weiCost = val.toNumber()
        //     console.log('weiCost', weiCost)
        //   }
        // })
        // await p.reputationCost((err, val) => {
        //   if (!err) {
        //     reputationCost = val.toNumber()
        //     console.log('repCost', reputationCost)
        //   }
        // })
        // await p.totalTokensStaked((err, val) => {
        //   if (!err) {
        //     totalTokensStaked = val.toNumber()
        //     console.log('totalTokens', totalTokensStaked)
        //   }
        // })
        // await p.totalReputationStaked((err, val) => {
        //   if (!err) {
        //     totalReputationStaked = val.toNumber()
        //     console.log('totalRep', totalReputationStaked)
        //   }
        // })
        // dt.currentPrice((err, val) => {
        //   if (!err) {
        //     currentPrice = val.toNumber()
        //     this.setState({
        //       weiBal,
        //       // weiCost,
        //       // reputationCost,
        //       // totalTokensStaked,
        //       // totalReputationStaked,
        //       currentPrice: web3.fromWei(currentPrice, 'ether')
        //     })
        //   }
        // })
    } catch (error) {
      console.error(error)
    }
  }

  componentWillMount () {
    let p = P.at(this.props.address)
    // console.log(p)
    this.getProjectStatus(p)
    this.setState({project: p})
  }

  onChange (val) {
    try {
      this.setState({value: val})
      // console.log('set state for description')
    } catch (error) {
      throw new Error(error)
    }
  }

  render () {
    let d
    // if (typeof stakingEndDate !== 'undefined') { d = new Date(stakingEndDate) }
    if (typeof this.props.stakingEndDate !== 'undefined') { d = moment(this.props.stakingEndDate) }
    // console.log(this.state)
    return (
      <Col sm='10'>
        <Card body style={{marginLeft: 10}}>
          <CardBody>
            <CardTitle>{`${this.props.description}`}</CardTitle>
            <CardText>{`${this.props.address}`}</CardText>
            <CardText>{`${this.props.cost}`} ETH</CardText>
            <CardText>needs {`${this.state.tokensLeft}`} tokens</CardText>
            {/* <td>{typeof d !== 'undefined' ? `${d.toLocaleDateString()} ${d.toLocaleTimeString()}` : 'N/A'}</td> */}
            <CardText>staking expires in {typeof d !== 'undefined' ? `${d.fromNow()}` : 'N/A'}</CardText>
            <input
              ref={(input) => (this.stakedValue = input)}
              placeholder='token amount'
              onChange={() => this.onChange(this.stakedValue.value)}
              value={this.state.value}
            />
            <Button color='primary' onClick={() => this.props.stakeProject(this.state.value)} style={{marginLeft: 10}}>
              Stake
            </Button>
            <Button color='primary' onClick={() => this.props.unstakeProject(this.state.value)} style={{marginLeft: 10}}>
              Unstake
            </Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

 // = ({cost, description, stakingEndDate, address, index, stakeProject, unstakeProject, stakingAmount}) => {

export default StakeProject
