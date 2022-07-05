import Widgets from './components/Widgets';
import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed';

import {useDispatch, useSelector} from 'react-redux'
import {login, selectUser} from './features/userSlice'
import Login from './components/Login'
import { auth } from './firebase';


function App() {
const user=useSelector(selectUser)
const dispatch=useDispatch()
useEffect(()=>{
  auth.onAuthStateChanged(userAuth=>{
    if(userAuth){
      dispatch(login({email:userAuth.email, uid: userAuth.uid,
      displayName: userAuth.displayName, photoUrl: userAuth.photoUrl}))
    }
  })
},[])

  return (
    <div className="App">
      <h1> Career Firebase App</h1>
      <Header/>
      {!user? (<Login/>):(

      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
      )}
    </div>
  );
}

export default App;


/*import logo from './logo.svg';*/
/*import { Counter } from './features/counter/Counter';*/
