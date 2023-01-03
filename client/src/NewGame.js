import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import NewGameForm from "./NewGameForm";

export default function NewGame({ user }) {

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <h2>Welcome</h2>
      {/* {this needs to be changed} */}
      <Button variant="outline-primary" onClick={()=>setShowForm(!showForm)}>
        Create New Game
      </Button>
      {showForm ? <NewGameForm/> : null}
    </>
  );
}
