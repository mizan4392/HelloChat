import React from "react";
import Conversations from "../Conversations/Conversations.component";

export default function ChatMenu() {
  return (
    <div className="wrapper">
      <input
        placeholder="Search for Friends"
        className="w-[90%] px-0 py-[10px] "
        style={{
          border: "none",
          borderBottom: "1px solid gray",
        }}
      />
      <Conversations />
      <Conversations />
      <Conversations />
      <Conversations />
      <Conversations />
      <Conversations />
      <Conversations />
      <Conversations />
    </div>
  );
}
