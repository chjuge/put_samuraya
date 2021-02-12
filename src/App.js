import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header.jsx';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News';
import Profile from './components/Profile/Profile.jsx';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route
          path='/profile'
          render={() => <Profile />} />
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
      </div>
    </div>
  );
}

export default App;
