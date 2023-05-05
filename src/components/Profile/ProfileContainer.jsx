import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getUser, getStatus, updateStatus } from '../../redux/reduser/profileReduser';
import { withUrlParams } from "../../hoc/withUrlParams";
//import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { Unauthorized } from "../common/Unauth/Unauthorized";




class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.params, this.props.auth)
    this.props.getStatus(this.props.params, this.props.auth)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.params !== prevProps.params) {
      this.props.getUser(this.props.params, this.props.auth)
      this.props.getStatus(this.props.params, this.props.auth)
    }
  }

  render() {
    if (!this.props.params.userId) {
      if (!this.props.isAuth) return <Unauthorized />
    }
    return <Profile {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus}
      isAuth={this.props.isAuth}
      userId={this.props.params.userId}
      numberPhone={this.props.numberPhone}
      email={this.props.email}
    />
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  auth: state.auth.data.userId,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  numberPhone: state.profilePage.phoneNumber,
  email: state.auth.data.email,
})

export default compose(
  connect(mapStateToProps, { getUser, getStatus, updateStatus }),
  withUrlParams,
  // withAuthRedirect
)(ProfileContainer)


