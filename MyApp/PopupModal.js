// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList, TextInput } from 'react-native';

// const players = [  { id: 1, name: 'Player 1', team: 'Team 1' },  { id: 2, name: 'Player 2', team: 'Team 1' },  { id: 3, name: 'Player 3', team: 'Team 2' },  { id: 4, name: 'Player 4', team: 'Team 2' },];

// export default function App() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedPlayer, setSelectedPlayer] = useState(null);
//   const [clues, setClues] = useState([]);

//   const handleAddPlayer = (team) => {
//     setPlayers([...players, { id: players.length + 1, name: `Player ${players.length + 1}`, team }]);
//   };

//   const handleEditPlayer = (player) => {
//     setSelectedPlayer(player);
//   };

//   const handleAddClue = (clue) => {
//     setClues([...clues, clue]);
//   };

//   const handleFinish = () => {
//     setSelectedPlayer(null);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Salad Bowl</Text>
//       <TouchableOpacity onPress={() => setShowModal(true)}>
//         <Text style={styles.
//  //</TouchableOpacity>

//  import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, ScrollView, } from 'react-native';

// const ModalContent = ({ showModal, setShowModal }) => {
//   const [currentView, setCurrentView] = useState('teams');
//   const [team1Name, setTeam1Name] = useState('Team 1');
//   const [team2Name, setTeam2Name] = useState('Team 2');
//   const [team1Players, setTeam1Players] = useState([]);
//   const [team2Players, setTeam2Players] = useState([]);
//   const [currentPlayer, setCurrentPlayer] = useState(null);
//   const [clues, setClues] = useState({});

//   const addPlayer = (team) => {
//     if (team === 'team1') {
//       setTeam1Players([...team1Players, '']);
//     } else {
//       setTeam2Players([...team2Players, '']);
//     }
//   };

//   const editPlayerName = (team, index, value) => {
//     if (team === 'team1') {
//       const updatedTeam1Players = [...team1Players];
//       updatedTeam1Players[index] = value;
//       setTeam1Players(updatedTeam1Players);
//     } else {
//       const updatedTeam2Players = [...team2Players];
//       updatedTeam2Players[index] = value;
//       setTeam2Players(updatedTeam2Players);
//     }
//   };

//   const onEditClues = (player, index, value) => {
//     setClues({
//       ...clues,
//       [player]: {
//         ...clues[player],
//         [index]:
// //

// </TouchableOpacity>

// //</View>

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   LayoutAnimation,
//   Animated,
// } from 'react-native';

// const App = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [team1Name, setTeam1Name] = useState('');
//   const [team2Name, setTeam2Name] = useState('');
//   const [team1Players, setTeam1Players] = useState([]);
//   const [team2Players, setTeam2Players] = useState([]);
//   const [selectedPlayer, setSelectedPlayer] = useState(null);
//   const [slideAnim] = useState(new Animated.Value(0));

//   const addPlayer = (team, name) => {
//     if (team === 1) {
//       setTeam1Players([...team1Players, { name }]);
//     } else {
//       setTeam2Players([...team2Players, { name }]);
//     }
//   };

//   const renderPlayer = ({ item }) => {
//     return (
//       <TouchableOpacity onPress={() => setSelectedPlayer(item)}>
//         <Text>{item.name}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const render
