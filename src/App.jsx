import React from 'react';
//import ThemeToggle from './components/ThemeToggle';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Functional from './components/Functional';
import './App.css';
import './index.css'
function App() {
  return (
    <div className="App">
           <Welcome/>
           <Profile/>
           <Functional/>
    </div>
  );
}

export default App;