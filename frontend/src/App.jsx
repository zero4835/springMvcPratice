import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';
import PostRoutes from './Route/PostRoute';
import BoardRoutes from './Route/BoardRoute';
import UserRoutes from './Route/UserRoute';

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
        <Route path="/user/*" element={<UserRoutes firstName={firstName} user={user} setUser={setUser} islogin={islogin} setIslogin={setIslogin} />}></Route>
        <Route path="/post/*" element={<PostRoutes />}></Route>
        <Route path="/board/*" element={<BoardRoutes />}></Route>
      </Routes>
    </React.StrictMode>
  );
}

export default App;
