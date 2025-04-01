import React from 'react';
//import ThemeToggle from './components/ThemeToggle';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Functional from './components/Functional';
import Class from './components/Class';
import Props from './components/props';
import Profile1 from './components/Profile1';
import Myform from './components/events';
import './App.css';
import './index.css'
function App() {
  return (
    <div className="App">
           <Welcome/>
           <Profile/>
           <Functional/>
           <Class/>
           <Props isLoggedIn={true} name="bob"/>
           <Profile1/>
           <Myform/>
    </div>
  );
}

export default App;