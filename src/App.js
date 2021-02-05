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
        <Header></Header>
        <Navbar></Navbar>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile state={props.appState.profilePage} addPost={props.addPost}/>}></Route>
          <Route path='/dialogs' render={() => <Dialogs state={props.appState.dialogsPage}/>}></Route>
          <Route path='/news' render={() => <News/>}></Route>
          <Route path='/music' render={() => <Music/>}></Route>
          <Route path='/settings' render={() =><Settings/>}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
