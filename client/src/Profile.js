import React from "react";
import { useState } from "react";

export default function Profile({ user }) {
  const [lobbies, setLobbies] = useState([]);

  
  return (
    <p>yo</p>
    );
  }
  
  // <div className="lobby-list">
  //   function loadLobbies() {
  //     fetch("/lobbies").then((r) => {
  //       if (r.ok) {
  //         r.json().then((lobbies) => {
  //           setLobbies(lobbies);
  //         });
  //       }
  //     });
  //   }
// <div className="lobby-list-header">
//   <h3>Active Game Lobbies</h3>
//   <button onClick={loadLobbies}>Refresh</button>
// </div>
// <div className="lobby-list-body">
//   {lobbies.length ? (
//     <table>
//       <thead>
//         <tr>
//           <th>Lobby Name</th>
//           <th>Game Mode</th>
//           <th>Players</th>
//           <th>Map</th>
//         </tr>
//       </thead>
//       <tbody>
//         {lobbies.map((lobby) => {
//           return (
//             <tr key={lobby.id}>
//               <td>{lobby.name}</td>
//               <td>{lobby.gameMode}</td>
//               <td>
//                 {lobby.players} / {lobby.maxPlayers}
//               </td>
//               <td>{lobby.map}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   ) : (
//     <p>No active lobbies</p>
//   )}
// </div>
// </div>
