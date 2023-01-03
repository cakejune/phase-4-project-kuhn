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
import ContainerBS from 'react-bootstrap/Container';
import NavBS from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';



function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    //auto-login
    fetch('/me')
    .then((r)=>{
      if (r.ok) {
        r.json().then((user)=> {
          console.log(user)
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
      <header className="App-header">
        <p> {user.username} Team Info: </p>
      <NavbarBS bg="dark" variant="dark">
        <ContainerBS>
          <NavbarBS.Brand href="#home">Navbar</NavbarBS.Brand>
          <NavBS className="me-auto">
            <NavBS.Link href="/newgame">New Game</NavBS.Link>
            <NavBS.Link href="#features">Features</NavBS.Link>
            <NavBS.Link href="#pricing">Pricing</NavBS.Link>
          </NavBS>
        </ContainerBS>
      </NavbarBS>
        <Navbar/>
        
          <Routes>
          <Route path="/currentgame"
          element={
          <CurrentGame/>
          }></Route>
          <Route path="/newgame"
          element={<NewGame user={user}/>}></Route>
          <Route path="/profile"
          element={<Profile user={user}/>}>
          </Route>
          </Routes>
      
          <button onClick={onLogout}>Log Out</button>
      </header>
    </div>
  );
  
}

export default App;
