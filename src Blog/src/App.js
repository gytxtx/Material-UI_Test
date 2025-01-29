// import logo from './logo.svg';
import './App.css';

import * as React from 'react';
// import Button from '@mui/material/Button';

import Blog from './blog/Blog';  // 根据实际路径修改

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>MUI 示例</p>
        <Button variant="contained">Hello world</Button>

      </header> */}
      <Blog />
    </div>
  );
}

export default App;
