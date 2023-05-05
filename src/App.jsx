import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import { initialization } from './redux/reduser/appReduser';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import ProfoleEditorContainer from './components/Settings/UserInfoEditor/ProfoleEditorContainer';
import InterfaceEditorContainer from './components/Settings/InterfaceEditor/InterfaceEditorConter';
import SettingsContainer from './components/Settings/SettingsContainer';
import Message from './components/Dialogs/Message/Message';




class App extends React.Component {
  componentDidMount() {
    this.props.initialization()

  }


  render() {
    // if (!this.props.isInitialized) {return <div className='preloaderApp'>  <Preloader /> Hmmm......</div>}
return(
<div>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route
            path='profile'
            element={<ProfileContainer />}
          />
          <Route
            path='profile/:userId'
            element={<ProfileContainer />}
          />
          <Route
            path='dialogs/'
            element={<DialogsContainer />}>
            <Route
              path=':userId'
              element={<Message />}
            />
          </Route>
          <Route
            path='users'
            element={<UsersContainer />}
          />
          <Route
            path='login'
            element={<LoginContainer />}
          />
          <Route
            path='settings/'
            element={<SettingsContainer />}
          >
            <Route
              path='profile-edit'
              element={<ProfoleEditorContainer />}
            />
            <Route
              path='interface-edit'
              element={<InterfaceEditorContainer />}
            />
          </Route>
        </Route>
      </Routes>
      </div>
    )  
 }
 
}




let mapStatetoProps = (state) => ({
  isInitialized: state.app.isInitialized,
})

export default compose(connect(mapStatetoProps, { initialization }))(App);
