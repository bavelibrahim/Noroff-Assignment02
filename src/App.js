import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Login from './components/Login';
import Translations from './components/Translations';
import Profile from './components/Profile';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/'            element = { <Login/> }/>
          <Route path='translations' element = { <Translations/> }/>
          <Route path='profile'      element = { <Profile/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
