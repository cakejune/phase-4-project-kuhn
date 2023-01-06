import { useState } from "react";

export default function JoinGameForm() {
  const [activeGames, setActiveGames] = useState([])
  const [isSelected, setIsSelected] = useState(false)
  const [showLoadGames, setShowLoadGames] = useState(false)

  function loadGames() {
    setShowLoadGames(!showLoadGames)
    console.log("hello")
    fetch("/games").then((r) => {
      if (r.ok) {
        r.json().then((games) => {
            const tempActiveGames = games.filter((game) => {
             return game.active === true;
            });
            setActiveGames([...tempActiveGames])
        });
      }
    });
  }

  return (
    <>
      <button onClick={loadGames}>Load Games</button>
      <div className="join-active-games-container">
        {activeGames.length ? activeGames.map((activeGame)=> {
        return (
            <div
              key={activeGame.id}
              className={`active-game ${isSelected ? "selected" : ""}`}
              onClick={() => {
                setIsSelected(!isSelected)
              }}
            >
              {activeGame.id}
            </div>)})
            : null}
        </div>
        
    </>
  );
}
