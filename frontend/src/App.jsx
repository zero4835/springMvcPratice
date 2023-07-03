import React, { useState, useEffect} from 'react';
import './App.css';
import Member from './pages/Member';
import Certificate from './pages/Certificate';
import Vendor from './pages/Vendor';
import Home from './pages/Home';
import SkillTree from './pages/SkillTree';
import AddMember from './pages/AddMember';
import Test from './pages/Test';
import MyNavbar from './components/MyNavbar';
import UserPage from './pages/UserPage';

import '../node_modules/bootstrap/dist/css/bootstrap.css';


import {
  Route,
  Routes
} from 'react-router-dom';

function App(){
  const [user, setUser] = useState(null);
  

  useEffect(()=>{

  },[user])

    return (
      <div>
        <MyNavbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/members/new" element={<AddMember/>} />
          <Route path="/members" element={<Member/>}></Route>
          <Route path="/skilltree" element={<SkillTree/>}></Route>
          <Route path="/certificates" element={<Certificate/>}></Route>
          <Route path="/vendors" element={<Vendor/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
          <Route path="/userpage" element={<UserPage user={user} setUser={setUser} />}></Route>

        </Routes>
      </div>
    );
}

export default App;
