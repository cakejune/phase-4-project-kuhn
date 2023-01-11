import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
  FlatList,
  LayoutAnimation,
  Animated,
} from "react-native";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [team1Name, setTeam1Name] = useState("");
  const [team2Name, setTeam2Name] = useState("");
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [slideAnim] = useState(new Animated.Value(0));

  const addPlayer = (team, name) => {
    if (team === 1) {
      setTeam1Players([...team1Players, { name }]);
    } else {
      setTeam2Players([...team2Players, { name }]);
    }
  };

  const renderPlayer = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setSelectedPlayer(item)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderLobby = () => {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Team 1 Name"
          value={team1Name}
          onChangeText={setTeam1Name}
        />
        <FlatList
          data={team1Players}
          renderItem={renderPlayer}
          keyExtractor={(item) => item.name}
        />
        <TouchableOpacity onPress={() => addPlayer(1, "New Player")}>
          <Text>Add Player to Team 1</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Team 2 Name"
          value={team2Name}
          onChangeText={setTeam2Name}
        />
        <FlatList
          data={team2Players}
          renderItem={renderPlayer}
          keyExtractor={(item) => item.name}
        />
        <TouchableOpacity onPress={() => addPlayer(2, "New Player")}>
          <Text>Add Player to Team 2</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderPlayerScreen = () => {
    return (
      <View>
        <Text>{selectedPlayer.name}</Text>
        <TextInput placeholder="Clue 1" />
        <TextInput placeholder="Clue 2" />
        <TextInput placeholder="Clue 3" />
        <TouchableOpacity onPress={() => setSelectedPlayer(null)}>
          <Text>Finish</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    return selectedPlayer ? renderPlayerScreen() : renderLobby();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salad Bowl</Text>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text style={styles.text}>Tap to Play</Text>
      </TouchableOpacity>
      <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
        <Animated.View style={[styles.modalContent, { right: slideAnim }]}>
          {renderContent()}
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4dc72",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 4,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: 32,
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    color: "#000000",
  },
  text: {
    fontSize: 18,
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    color: "#000000",
  },
  modalContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f4dc72",
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    padding: 20,
  },
  closeButton: {
    fontSize: 18,
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    color: "#000000",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  },
  playerScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  clueInput: {
    width: "80%",
  },
});

export default App;
