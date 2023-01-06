import { useEffect, useState } from "react";
import AddPlayer from "./AddPlayer";
// import Modal from 'bootstrap';
// import Button from 'bootstrap';

export default function CurrentGame({ user }) {
  const [activeGame, setActiveGame] = useState([]);
  const [errors, setErrors] = useState([]);
  const [show, setShow] = useState(false);
  const userGame = user.games.find((game) => game.active === true);
  const [teamAPlayers, setTeamAPlayers] = useState([]);
  const [teamBPlayers, setTeamBPlayers] = useState([]);
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const [currentClue, setCurrentClue] = useState("Clue Will Appear Here");
  const [actor, setActor] = useState(null)

  useEffect(() => {
    if (userGame) {
      fetch(`/games/${userGame.id}`).then((res) =>
        res.json().then((game) => {
          setActiveGame(game);
          if (activeGame.teams && activeGame.teams[0])
            setTeamAPlayers(game.teams[0].members.forEach((player) => player));
          if (activeGame.teams && activeGame.teams[1])
            setTeamBPlayers(game.teams[1].members.forEach((player) => player));
        })
      );
    }
  }, [userGame]);

  function submitNewPlayer(newPlayer) {
    fetch("/addplayer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname: newPlayer.nickname,
        team_id: newPlayer.team_id,
        game_id: activeGame.id,
        clue1: newPlayer.clue1,
        clue2: newPlayer.clue2,
        clue3: newPlayer.clue3,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((addedPlayer) => {
          if (addedPlayer.team === activeGame.teams[0].name) {
            setTeamAPlayers([...teamAPlayers, addedPlayer]);
          } else {
            setTeamBPlayers([...teamBPlayers, addedPlayer]);
          }
        })
      } else {
        res.json().then((err) => {
          setErrors(err.error);
          //errors is now an array of errors
          alert(`Error(s): ${err.error}`);
        });
      }
    });
  }

  function handleAddTeamB(){

  }

  function showAClue(){
    if (activeGame.teams && activeGame.teams[0]){
      setCurrentClue(activeGame.teams[0].clues[Math.floor(Math.random()*activeGame.teams[0].clues.length)])
    }
  }
  function showBClue(){
    if (activeGame.teams && activeGame.teams[1]){
      setCurrentClue(activeGame.teams[1].clues[Math.floor(Math.random()*activeGame.teams[1].clues.length)])
    }
  }

  function generateActor(){
    if (activeGame.teams && activeGame.teams[0]){
      setActor(activeGame.teams[0].members[Math.floor(Math.random()*activeGame.teams[0].members.length)].nickname)
    }
  }
  function generateBActor(){
    if (activeGame.teams && activeGame.teams[1]){
      setActor(activeGame.teams[1].members[Math.floor(Math.random()*activeGame.teams[1].members.length)].nickname)
    }
  }

  function minimize() {}

  function maximize() {}

  function onClose() {}
  return (
    <>
    {userGame ? 
      <div className="whole-game-container">
        <div className="top-bar">
          <p>info</p>
          <p className="top-bar-title">Salad Bowl</p>
          <div className="top-bar-buttons">
            <button onClick={minimize}>-</button>
            <button onClick={maximize}>[]</button>
            <button onClick={onClose}>x</button>
          </div>
        </div>
        <div className="active-game-container">
          <div className="lobby-container">
            <div className="team-list left">
              <h3 style={{paddingBottom: '30px'}}>Team 1: {activeGame.teams && activeGame.teams[0] ? activeGame.teams[0].name : ""}</h3>
              {activeGame.teams && activeGame.teams[0] ? (
                <>
                  <ul>
                    {activeGame.teams[0].members.map((member) => {
                      return <li key={member}>{member.nickname}</li>;
                    })}
                  </ul>
                </>
              ) : null}
            </div>
            <div className="center-window">
              <button
                id="add-player-b-btn"
                onClick={() => setShowAddPlayer(!showAddPlayer)}
              >
                {showAddPlayer ? "Minimize" : "Add Player"}
              </button>
              <div className="add-player-container">
                {showAddPlayer ? (
                  <AddPlayer
                    handleAddPlayer={submitNewPlayer}
                    activeGame={activeGame}
                  />
                ) : null}
              </div>
              
            </div>
            <div className="team-list right">
              <h3 style={{paddingBottom: '30px'}}>Team 2: {activeGame.teams && activeGame.teams[1] ? activeGame.teams[1].name : ""}</h3>
              {activeGame.teams && activeGame.teams[1] ? (
                <>
                  <ul>
                    {activeGame.teams[1].members.map((member) => {
                      return <li key={member}>{member.nickname}</li>;
                    })}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
          <div className="bottom-half-container" style={{ display: "flex" }}>
            <div className="team-info left">
              <ul>
                {/* generate clue here */}
                <button onClick={showAClue}>Generate Clue</button>
                <button className="choose-player" onClick={generateBActor}>Generate Actor</button>
               
              </ul>
            </div>
            <div className="chat-box">
              <div className="current-actor">{actor ? `${actor}, you're up!` : "Chosen actor will appear here"}</div>
              <div className="current-clue-container">{currentClue ? currentClue : "Clue Will Appear Here"}</div>
              </div>
              
            <div className="team-info right">
              <ul>
              <button onClick={showBClue}>Generate Clue</button>
              <button className="choose-player" onClick={generateActor}>Generate Actor</button>
              </ul>
            </div>
          </div>
            <button
                id="start-game-btn"
                onClick={() => console.log("startRound")}
              >
                Start Game
              </button>
        </div>
      </div>
: <p>You do not have an active game</p> }
    </>
  );
}

//works but old formatting
// return (
//   <>
//     <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
//     <div style={{ display: show ? "block" : "none" }}>
//       <div id="modal-header">
//         <h2>Salad Bowl</h2>
//       </div>
//       <div id="modal-body">
//         <div id="team-a-container">
//           {activeGame.teams && activeGame.teams[0] ? (
//             <>
//               <h3>Team {activeGame.teams[0].name}</h3>
//               <ul id="team-a-players">
//                 {activeGame.teams[0].members.map((member) => {
//                   return <li key={member}>{member.nickname}</li>;
//                 })}
//               </ul>
//               {/* <button id="add-player-a-btn">Add Player</button> */}
//             </>
//           ) : null}
//         </div>
//         <div id="team-b-container">
//           {activeGame.teams && activeGame.teams[1] ? (
//             <>
//               <h3>{activeGame.teams[1].name}</h3>
//               <ul id="team-b-players">
//                 {activeGame.teams[1].members.map((member) => {
//                   <li key={member}>{member.nickname}</li>;
//                 })}
//               </ul>
//             </>
//           ) : null}
//         </div>
//         <button id="add-player-b-btn" onClick={() => setShowAddPlayer(!showAddPlayer)}>{showAddPlayer ? "Minimize" : "Add Player"}</button>
//               {showAddPlayer ? <AddPlayer handleAddPlayer={submitNewPlayer} activeGame={activeGame}/> : null}
//       </div>
//       <div id="modal-footer">
//         <button id="start-game-btn" onClick={() => console.log("startRound")}>
//           Start Game
//         </button>
//       </div>
//     </div>
//     <div>{activeGame ? "" : "No Active Game"}</div>
//   </>
// );
