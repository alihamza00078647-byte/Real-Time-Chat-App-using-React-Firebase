import "./Chat.css";
import Chatbox from "../../components/chatBox/chatBox";
import RightSidebar from "../../components/rightSidebar/rightSidebar";
import LeftSidebar from "../../components/leftSidebar/leftSidebar";


function Chat() {
  return (
    <div className="chat">
      <div className="chat-container">
        <LeftSidebar />
        <Chatbox />
        <RightSidebar />
      </div>
    </div>
  );
}

export default Chat;
