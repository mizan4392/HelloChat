import React from "react";
import Message from "../Message/Message.component";

export default function ChatBox() {
  return (
    <div className="wrapper">
      <div className="boxTop">
        <Message isOwnMessage={true} />
        <Message />
        <Message isOwnMessage={true} />
        <Message />
        <Message isOwnMessage={true} />
        <Message />
      </div>
      <div className="boxBottom"></div>
    </div>
  );
}
