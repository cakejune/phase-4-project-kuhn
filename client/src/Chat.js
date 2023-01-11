
import { ActionCableConsumer } from "react-actioncable-provider";
import { useState } from "react";
// import { API_ROOT } from "../constants";
export default function Chat({ chats, handleReceivedChat, user, handleNewChat, renderChats }) {

const Cable = ({ chats, handleReceivedChat }) => {
  return (
    <ActionCableConsumer
      channel={{ channel: "ChatChannel" }}
      onReceived={handleReceivedChat}
    />
  );
};


  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetch(`/contents`)
      .then((res) => res.json())
      .then((chats) => setChats(chats));
  }, []);

return (
    <div>
      <h2>Chat</h2>
      <Cable chats={chats} handleReceivedChat={handleReceivedChat} />
      {renderChats()}
      <input type="text" onKeyDown={handleNewChat} />
    </div>
  )
}
