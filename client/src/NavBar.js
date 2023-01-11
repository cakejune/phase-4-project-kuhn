import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/newgame">
        New Game
      </NavLink>
      <NavLink className="nav-link" to="/profile">
        My Profile
      </NavLink>
      <NavLink className="nav-link" to="/currentgame">
        Current Game
      </NavLink>
      <NavLink className="nav-link" to="/chat">
        Chat
      </NavLink>
     
    </>
  );
}
