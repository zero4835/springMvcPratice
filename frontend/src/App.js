import React from 'react';
import './App.css';
import Member from './pages/Member';
import Certificate from './pages/Certificate';
import Vender from './pages/Vendor';

function App() {
  return (
    <React.StrictMode>
      <Member/>
      <Certificate/>
      <Vender/>
    </React.StrictMode>
  );
}

export default App;
