import { useState } from 'react'

import login  from "./pages/login";
import {Routes, Route, Navigate,  Outlet, useLocation}  from "react-router-dom";
import User from './pages/User';
import Taskdetails from './pages/Taskdetails';
import Toaster from "sonner";
import trash from './pages/trash';
import task from './pages/task';
import dashboard from './pages/dashboard';


function Layout(){
  const user =" ";
   
  const location = useLocation();
  return user ?(
  <div className="w-full h-screen flex flex-col md: flex-row">
    <div className ="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
      { /* <Sidebar/> */}
      </div>

      {/* <MobileSidebar/> */}

      <div className ="flex-1 overflow-auto">
        {/*<Navbar/> */}

        <div className="p-4 2xl:px-10">
          <Outlet />
           

      </div> 

      </div>
    </div>

  ) :(
    <Navigate to ="/log-in" state = {{from: location}} replace/>
  )
}
function App(){

  return(
    <main className="w-full min-h-screen bg-[#f3f4f6]">
    <Routes> 
      <Route Route element= {<Layout/>}>
        <Route path= "/" element={<Navigate to ="/dashboard"/>}/>
        <Route path='/dashboard >' element ={<dashboard/>}/>
        <Route path='/task >' element ={<task/>}/>
        <Route path='/completed/: status >' element ={<task/>}/>
        <Route path='/in-progress/: status >' element ={<task/>}/>
        <Route path='/todo/: status >' element ={<task/>}/>

        <Route path='/team >' element ={<User/>}/>
        <Route path='/trashed >' element ={<trash/>}/>
        <Route path='/task/:id >' element ={<Taskdetails/>}/>

      </Route>
      <Route path ='/log-in >' element ={<login />} />
    </Routes>
    <Toaster richColors />

   </main>

  ) 

  
}

export default App
