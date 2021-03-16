import { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar.jsx'
import News from './components/News/News'
import ProfileContainer from './components/Profile/ProfileContainer'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { initializeApp } from './redux/appReducer'
import { compose } from 'redux'

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized)
      return <div></div>

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route
            path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route
            path='/dialogs'
            render={() => <DialogsContainer />} />
          <Route
            path='/news'
            render={() => <News />} />
          <Route
            path='/music'
            render={() => <Music />} />
          <Route
            path='/settings'
            render={() => <Settings />} />
          <Route
            path='/users'
            render={() => <UsersContainer />} />
          <Route
            path='/login'
            render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)
