import ChatBox from "../../Components/ChatBox/ChatBox.component";
import ChatMenu from "../../Components/ChatMenu/ChatMenu.component";
import ChatOnline from "../../Components/ChatOnline/ChatOnline.component";

export default function Messenger() {
  return (
    <div className="h-[calc(100vh-70px)] flex">
      <div className="chatMenu flex-[3.5] p-[10px] h-full">
        <ChatMenu />
      </div>
      <div className="chatBox flex-[4.5] p-[10px]  h-full">
        <ChatBox />
      </div>
      <div className="chatOnline flex-[3] p-[10px] h-full">
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
      </div>
    </div>
  );
}
