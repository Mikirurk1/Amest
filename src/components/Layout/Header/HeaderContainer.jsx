import React from 'react'
import Header from './Header';

import { connect } from 'react-redux';
import { logout } from '../../../redux/reduser/authReduser';
import { compose } from 'redux';

class HeaderComponent extends React.Component {
  
    render() {
        return <Header {...this.props} login={this.props.login} userId={this.props.userId} />
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.data.login,
    userId: state.auth.data.userId,
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
})
export default compose (connect(mapStateToProps, { logout }))(HeaderComponent)
