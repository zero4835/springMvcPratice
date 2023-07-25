import React, { useState, useEffect } from 'react';
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
import PostRoutes from './Route/PostRoute';

import '../node_modules/bootstrap/dist/css/bootstrap.css';


import {
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [islogin, setIslogin] = useState(false)

  const firstName = user ? user.firstName : null;

  useEffect(() => {

  }, [user])

  return (
    <React.StrictMode>
      <MyNavbar user={user} setUser={setUser} islogin={islogin} setIslogin={setIslogin} />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/members/new" element={<AddMember />} />
        <Route path="/members" element={<Member />}></Route>
        <Route path="/skilltree" element={<SkillTree />}></Route>
        <Route path="/certificates" element={<Certificate />}></Route>
        <Route path="/vendors" element={<Vendor />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path={`/userpage/${firstName}`} element={<UserPage user={user} setUser={setUser} islogin={islogin} setIslogin={setIslogin} />}></Route>
        <Route path="/post/*" element={<PostRoutes/>}></Route>
      </Routes>
    </React.StrictMode>
  );
}

export default App;
