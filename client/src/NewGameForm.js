import React, {useState} from "react";

export default function NewGameForm() {
    const [teamName, setTeamName] = useState("");
    const [clue1, setClue1] = useState("");
    const [clue2, setClue2] = useState("");
    const [clue3, setClue3] = useState("");
    const [currentTeam, setCurrentTeam] = useState(null)

    function handleSubmit(e) {
        // fetch("/teams", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         name: teamName,

        //     })
        // })
        }
    
  return (
    <div className="createNewGame">
      <div className="newGameCreator">
        <form onSubmit={handleSubmit}>
          <label>
            Team Name:
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </label>
          <label>
            Clue 1:
            <input
              type="text"
              id="clue1"
              name="clue1"
              value={clue1}
              onChange={(e) => setClue1(e.target.value)}
            />
          </label>
          <label>
            Clue 2:
            <input
              type="text"
              id="clue2"
              name="clue2"
              value={clue2}
              onChange={(e) => setClue2(e.target.value)}
            />
          </label>
          <label>
            Clue 3:
            <input
              type="text"
              id="clue3"
              name="clue3"
              value={clue3}
              onChange={(e) => setClue3(e.target.value)}
            />
          </label>
          <label>
            <button type="submit">Create Game</button>
          </label>
        </form>
      </div>
    </div>
  );
}
