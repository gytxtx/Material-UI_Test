// import logo from './logo.svg';
// import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';

import DashboardLayoutBasic from './components/DashboardLayoutBasic.tsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>MUI 示例</p>
        <Button variant="contained">Hello world</Button> */}

      </header>
      
      <DashboardLayoutBasic />

      <Button variant="contained" onClick={() => alert("I love MUI!")}>Hello world</Button>


    </div>
  );
}

export default App;
