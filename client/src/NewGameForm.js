import React, { useEffect, useState } from "react";

export default function NewGameForm({ username }) {
  const [teamAName, setTeamAName] = useState("");
  const [teamBName, setTeamBName] = useState("");
  const [clue1a, setClue1a] = useState("");
  const [clue2a, setClue2a] = useState("");
  const [clue3a, setClue3a] = useState("");
  const [clue1b, setClue1b] = useState("");
  const [clue2b, setClue2b] = useState("");
  const [clue3b, setClue3b] = useState("");
  // const [nickname, setNickname] = useState("");
  const [aCaptain, setACaptain] = useState("");
  const [bCaptain, setBCaptain] = useState("");

  const [currentTeam, setCurrentTeam] = useState(null);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/newgame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        u: {
          team_name: teamAName,
          nickname: aCaptain,
          clue1: clue1a,
          clue2: clue2a,
          clue3: clue3a,
        },
        g: {
          team_name: teamBName,
          nickname: bCaptain,
          clue1: clue1b,
          clue2: clue2b,
          clue3: clue3b,
        }
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newGame) => {
          alert(`New game created! Navigate to "Current Game" to enter your game lobby.`)
          setACaptain(""); setBCaptain(""); setClue1a(""); setClue1b(""); setClue2a(""); setClue2b(""); setClue3a(""); setClue3b(""); setTeamAName(""); setTeamBName("");         
        });
      } else {
        res.json().then((err) => {  
          setErrors(err.error);
          //errors is now an array of errors
          alert(`Error(s): ${err.error}`);
        });
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="team-a-div">
          <h3 className="team-a-header">Team {teamAName}</h3>
          <input
            type="text"
            id="teamAName"
            name="teamAName"
            value={teamAName} //was teamName
            placeholder="Team Name"
            onChange={(e) => setTeamAName(e.target.value)} //was setTeamName
          />
          <input
            type="text"
            id="aCaptain"
            name="aCaptain"
            value={aCaptain} //was nickname
            placeholder={`Team Captain (${username}'s team)`}
            onChange={(e) => setACaptain(e.target.value)} //was setNickname
          />

          <input
            type="password"
            id="clue1a"
            name="clue1a"
            value={clue1a} //was clue1
            placeholder="Clue 1"
            onChange={(e) => setClue1a(e.target.value)} //was setClue1
          />

          <input
            type="password"
            id="clue2a"
            name="clue2a"
            value={clue2a} //was clue2
            placeholder="Clue 2"
            onChange={(e) => setClue2a(e.target.value)}
          />

          <input
            type="password"
            id="clue3a"
            name="clue3a"
            value={clue3a}
            placeholder="Clue 3"
            onChange={(e) => setClue3a(e.target.value)}
          />
        </div>
        <div className="team-b-div">
          <h3 className="team-b-header">Team {teamBName}</h3>
          <input
            type="text"
            id="teamBName"
            name="teamBName"
            value={teamBName} //was teamName
            placeholder="Team Name"
            onChange={(e) => setTeamBName(e.target.value)} //was setTeamName
          />
          <input
            type="text"
            id="bCaptain"
            name="bCaptain"
            value={bCaptain} //was nickname
            placeholder={`Team Captain (Guest's Team)`}
            onChange={(e) => setBCaptain(e.target.value)} //was setNickname
          />

          <input
            type="password"
            id="clue1b"
            name="clue1b"
            value={clue1b} //was clue1
            placeholder="Clue 1"
            onChange={(e) => setClue1b(e.target.value)} //was setClue1
          />

          <input
            type="password"
            id="clue2b"
            name="clue2b"
            value={clue2b} //was clue2
            placeholder="Clue 2"
            onChange={(e) => setClue2b(e.target.value)}
          />

          <input
            type="password"
            id="clue3b"
            name="clue3b"
            value={clue3b}
            placeholder="Clue 3"
            onChange={(e) => setClue3b(e.target.value)}
          />

          <label>
            <button type="submit">Create Game</button>
          </label>
        </div>
        <div className="createNewGame">
          <div className="newGameCreator"></div>
        </div>
      </form>
    </>
  );
}
