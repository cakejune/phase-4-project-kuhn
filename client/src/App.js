import "./App.css";
import { useEffect, useState } from "react";
import LoginPage from "./LoginPage";
import SignupForm from "./SignupForm";
import CurrentGame from "./CurrentGame";
import NewGame from "./NewGame";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Navbar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./Chat";
// import { API_ROOT } from "../constants";

function App() {
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState(null)
  useEffect(() => {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);
  function onLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  const handleReceivedChat = (response) => {
    const { message } = response;
    setChats([...chats, message]);
  };

  const handleNewChat = (event) => {
    console.log(event.target.value)
  }
  //   if (event.key === "Enter") {
  //     const content = event.target.value;
  //     const user_id = user.id;
  //     const username = user.username;
  //     fetch(`${API_ROOT}/messages`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         user_id,
  //         content,
  //         username,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((chat) => {
  //         setChats([...chats, chat]);
  //       });
  //   }
  // };

  const renderChats = () => {
    return chats.map((chat) => {
      return (
        <p key={chat.id}>
          {chat.username}: {chat.content}
        </p>
      );
    });
  };

  if (!user)
    return (
      <>
        <LoginPage onLogin={setUser} />
        <SignupForm onLogin={setUser} />
      </>
    );

  return (
    <div className="App">
      <Navbar />

      <header>
        <p> {user.username} Team Info: </p>

        <button onClick={onLogout} style={{ marginTop: "4vw" }}>
          Log Out
        </button>
      </header>
      <Routes>
        <Route
          path="/currentgame"
          element={<CurrentGame user={user} />}
        ></Route>
        <Route path="/newgame" element={<NewGame user={user} />}></Route>
        <Route path="/profile" element={<Profile user={user} />}></Route>
        <Route path="/chat" element={<Chat user={user} renderChats={renderChats} handleNewChat={handleNewChat} handleReceivedChat={handleReceivedChat} />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
