import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Navbar></Navbar>
      <Profile></Profile>
    </div>
  )
}

export default App;
