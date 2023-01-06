import React from "react";
import { useState } from "react";

export default function AddPlayer({ handleAddPlayer, activeGame }) {
  //   const [newPlayer, setNewPlayer] = useState([]);
  const [nickname, setNickname] = useState("");
  const [clue1, setClue1] = useState("");
  const [clue2, setClue2] = useState("");
  const [clue3, setClue3] = useState("");
  const [teamId, setTeamId] = useState(0);
  const newPlayer = {
    nickname: nickname,
    clue1: clue1,
    clue2: clue2,
    clue3: clue3,
    team_id: teamId,
  };
  const teamA =
    activeGame.teams && activeGame.teams[0]
      ? {
          name: activeGame.teams[0].name,
          id: activeGame.teams[0].id,
        }
      : "";
  const teamB =
    activeGame.teams && activeGame.teams[1]
      ? {
          name: activeGame.teams[1].name,
          id: activeGame.teams[1].id,
        }
      : "";

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    // backgroundImage: 'url(' + imgUrl + ')',
  };

  function handleSubmit(e) {
    e.preventDefault();
        if(clue1&&clue2&&clue3&&nickname&&teamId){
        handleAddPlayer(newPlayer);
        }
        else{
            alert(`Please fill out all the forms`);
        }
  }

  return (
    <>
      <div style={divStyle}>
        <form onSubmit={handleSubmit}>
          <label>Team:</label>
          <select onChange={(e) => setTeamId(e.target.value)}>
            <option selected value={false}>
              Choose Team
            </option>
            <option value={teamA.id}>
              {teamA.name}
            </option>
            <option value={teamB.id}>{teamB.name}</option>
          </select>
          <label>
            nickname:
            <input
              type="text"
              id="newPlayerNickname"
              name="newPlayerNickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </label>
          <label>
            Clue #1:
            <input
              type="text"
              id="newPlayerClue1"
              name="newPlayerClue1"
              value={clue1}
              onChange={(e) => setClue1(e.target.value)}
            />
          </label>
          <label>
            Clue #2:
            <input
              type="text"
              id="newPlayerClue2"
              name="newPlayerClue2"
              value={clue2}
              onChange={(e) => setClue2(e.target.value)}
            />
          </label>
          <label>
            Clue #3:
            <input
              type="text"
              id="newPlayerClue3"
              name="newPlayerClue3"
              value={clue3}
              onChange={(e) => setClue3(e.target.value)}
            />
          </label>
          <label>
            <button type="submit">Submit Player</button>
          </label>
        </form>
      </div>
    </>
  );
}
