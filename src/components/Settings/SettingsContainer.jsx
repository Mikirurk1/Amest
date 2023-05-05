import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProfile } from '../../redux/selectors/settingsSelectors';
import Settings from './Settings';
import { Navigate } from 'react-router';



const SettingsContainer = (props) => {
    if(!props.profile)return<Navigate to='/profile'/>
    return <Settings/>
}

let mapStateToProps=(state)=>({
profile:getProfile(state)
})

export default compose(connect(mapStateToProps))(SettingsContainer)