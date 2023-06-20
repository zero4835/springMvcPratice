import React , {Component} from 'react';
import './App.css';
import Member from './pages/Member';
import Certificate from './pages/Certificate';
import Vendor from './pages/Vendor';
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


import {
  Route,
  Routes
} from 'react-router-dom';

function App(){
    return (
      <div>
        <MyNavbar/>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/members" element={<Member/>}></Route>
          <Route path="/certificates" element={<Certificate/>}></Route>
          <Route path="/vendors" element={<Vendor/>}></Route>
        </Routes>
      </div>
    );
}

export default App;
