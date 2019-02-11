import React from 'react'
import { connect } from 'react-redux'
import price from 'crypto-price'
import MiniSidebar from 'components/shared/MiniSidebar'
import TitleBar from 'components/shared/TitleBar'
import SearchProjectBar from 'components/shared/SearchProjectBar'
import ProjectCardGrid from 'components/shared/ProjectCardGrid'
import RoleSelectionModal from 'components/shared/modals/RoleSelectionModal'
import { getUserStatusWallet } from 'actions/userActions'
import { getProjects } from 'actions/projectActions'
import { eth } from 'utilities/blockchain'
import { lightgradient3 } from 'styles/colors'
import gql from 'graphql-tag'

let projQuery = gql`
  { allProjectsinState(state: 2){
      address,
      id,
      ipfsHash,
      location,
      name
      nextDeadline,
      photo,
      prelimTaskLists,
      reputationBalance,
      reputationCost,
      nextDeadline,
      summary,
      tokenBalance,
      weiBal,
      weiCost,

    }
  }`

class Planner extends React.Component {
  constructor () {
    super()
    this.state = {
      firstTime: true,
      role: 'Plan',
      showSidebarIcons: true,
      ethPrice: 0
    }
    this.redirect = this.redirect.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount () {
    eth.getAccounts((err, accounts) => {
      if (!err) {
        if (accounts.length) {
          this.props.getUserStatusWallet(accounts[0])
          this.props.getProjects()
          price.getCryptoPrice('USD', 'ETH').then(res => {
            if (res) {
              this.setState({ ethPrice: parseFloat(res.price) })
            }
          })
        }
      }
    })
  }

  redirect (url, state) {
    this.props.history.push(url, Object.assign({}, state, { user: this.props.user }))
  }

  closeModal () {
    this.setState({ firstTime: !this.state.firstTime })
  }

  render () {
    return (
      <div style={{ backgroundColor: lightgradient3, height: '100vh' }}>
        { this.state.firstTime ? <RoleSelectionModal role='Plan' visible={this.state.firstTime} handleCancel={this.closeModal} /> : null }
        <MiniSidebar user={this.props.user} showIcons={this.state.showSidebarIcons} highlightIcon={this.state.role} redirect={this.redirect} />
        <TitleBar title={this.state.role} role={this.state.role} />
        <SearchProjectBar />
        <ProjectCardGrid nullText={<p>No proposals have currently been funded.<br />Go ahead and look for a project to support</p>}
          nullAction={'Find'}
          role={'Plan'}
          projectData={this.props.projects['2']} ethPrice={this.state.ethPrice} redirect={this.redirect} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // projects: state.projects,
    projects: { '2': [{ name: 'Project 1', address: '0x150y10571' }] },
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserStatusWallet: (userAccount) => dispatch(getUserStatusWallet(userAccount)),
    getProjects: () => dispatch(getProjects(2, projQuery))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner)