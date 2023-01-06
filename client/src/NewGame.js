import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import NewGameForm from "./NewGameForm";
import JoinGameForm from "./JoinGameForm";

export default function NewGame({ user }) {

  const [showCreateNewGame, setShowCreateNewGame] = useState(false);
  const [showJoinGame, setShowJoinGame] = useState(false);

  return (
    <>
      <h2>Welcome</h2>
      {/* {this needs to be changed} */}
      <Button variant="outline-primary" onClick={()=>{
        setShowCreateNewGame(false)
        setShowJoinGame(!showJoinGame)
      }
        }>
        Join Game
      </Button>
      <Button variant="outline-primary" onClick={()=>{
        setShowJoinGame(false)
        setShowCreateNewGame(!showCreateNewGame)}
        }>
        Create New Game
      </Button>
      {showCreateNewGame ? <NewGameForm username={user.username}/> : null}
      {showJoinGame ? <JoinGameForm username={user.username}/> : null}
    </>
  );
}


// setShow(true) --- launch modal button
// setShow(false) --- button inside the modal 



/*
const [show, setShow] = useState(false)

<button onClick={()=>setShow(true)}>Show Modal</button>

//
<button onClick={()=> setShow(!show)}> ONE BUTTON TO RULE THEM ALL </button>
//


<Modal>

<button onClick={()=>setShow(false)}>Close Window</button>

</Modal>




*/