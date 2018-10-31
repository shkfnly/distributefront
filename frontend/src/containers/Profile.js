import React from 'react'
import { connect } from 'react-redux'
import ProfileComponent from '../components/Profile'
import TextContinueModal from '../components/shared/TextContinueModal'
import { getUserStatus } from '../actions/userActions'
import { eth } from '../utilities/blockchain'

class Profile extends React.Component {
  constructor () {
    super()
    this.state = {
      firstProfile: true
    }
    this.roleSelection = this.roleSelection.bind(this)
    this.makeInvisible = this.makeInvisible.bind(this)
  }

  componentWillMount () {
    eth.getAccounts(async (err, accounts) => {
      if (!err) {
        if (accounts.length) {
          this.props.getUserStatus(accounts[0])
        }
      }
    })
  }

  makeInvisible () {
    this.setState({firstProfile: false})
  }

  roleSelection () {
    this.props.history.push('/roleselection')
  }

  render () {
    return (
      <div>
        <TextContinueModal visible={this.state.firstProfile} text={'firstprofile'} continue={this.makeInvisible} />
        <ProfileComponent
          name={this.props.user.name}
          location={'Brooklyn, NY'}
          handleSave={this.roleSelection}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user || {},
    network: state.network
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserStatus: (userAccount) => dispatch(getUserStatus(userAccount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)