import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddMember from '../pages/user/AddMember'
import Member from '../pages/user/Member'
import UserPage from '../pages/user/UserPage'
import SkillTree from '../pages/user/SkillTree'
import Certificate from '../pages/user/Certificate'
import Vendor from '../pages/user/Vendor'

function UserRoutes({user, setUser, islogin, setIslogin, firstName}) {
  return (
    <Routes>
      <Route path="/new" element={<AddMember />} />
      <Route path="/list" element={<Member />}></Route>
      <Route path={`/${firstName}`} element={<UserPage user={user} setUser={setUser} islogin={islogin} setIslogin={setIslogin} />}></Route>
      <Route path="/skilltree" element={<SkillTree />}></Route>
      <Route path="/certificates" element={<Certificate />}></Route>
      <Route path="/vendors" element={<Vendor />}></Route>
    </Routes>
  )
}

export default UserRoutes
