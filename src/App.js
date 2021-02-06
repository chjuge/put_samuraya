import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Header from './components/Header/Header.jsx';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News';
import Profile from './components/Profile/Profile.jsx';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route
            path='/profile'
            render={() =>
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewText={props.updateNewText} />} />

          <Route
            path='/dialogs'
            render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route
            path='/news'
            render={() => <News />} />
          <Route
            path='/music'
            render={() => <Music />} />
          <Route
            path='/settings'
            render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
