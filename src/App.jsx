import React from 'react';
//import ThemeToggle from './components/ThemeToggle';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Functional from './components/Functional';
import Class from './components/Class';
import './App.css';
import './index.css'
function App() {
  return (
    <div className="App">
           <Welcome/>
           <Profile/>
           <Functional/>
           <Class/>
    </div>
  );
}

export default App;