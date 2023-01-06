import './App.css';
import { useEffect, useState } from 'react';
import LoginPage from './LoginPage';
import SignupForm from './SignupForm';
import CurrentGame from './CurrentGame';
import NewGame from './NewGame';
import { Route, Routes } from "react-router-dom";
import Profile from './Profile';
import Navbar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [user, setUser] = useState(null);
  useEffect(()=> {
    //auto-login
    fetch('/me')
    .then((r)=>{
      if (r.ok) {
        r.json().then((user)=> {
          setUser(user)
        })
      }
    });
  },[]); 
  function onLogout(){
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  if(!user) return (
  <>
  <LoginPage onLogin={setUser}/>
  <SignupForm onLogin={setUser}/>
  
  </>
  )

  return (
    <div className="App">
       <Navbar/>
        
        
      <header>
        <p> {user.username} Team Info: </p>
        
          <button onClick={onLogout} style={{marginTop: '4vw'}}>Log Out</button>
      </header>
      <Routes>
        <Route path="/currentgame"
        element={
        <CurrentGame user={user}/>
        }></Route>
        <Route path="/newgame"
        element={<NewGame user={user}/>}></Route>
        <Route path="/profile"
        element={<Profile user={user}/>}>
        </Route>
        </Routes>
    </div>
  );
  
}

export default App;
