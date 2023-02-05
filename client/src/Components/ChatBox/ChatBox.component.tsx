import React from "react";
import Message from "../Message/Message.component";

export default function ChatBox() {
  return (
    <div className="wrapper flex flex-col ">
      <div className="boxTop h-full overflow-y-scroll px-[10px]">
        <Message isOwnMessage={true} />
        <Message />
        <Message isOwnMessage={true} />
        <Message />
        <Message isOwnMessage={true} />
        <Message />
      </div>
      <div className="boxBottom mt-[5px] flex items-center justify-between ">
        <textarea
          className="w-[80%] h-[90px] p-[10px]"
          placeholder="Write something"
        ></textarea>
        <button
          className="w-[70px] h-[40px] cursor-pointer text-white"
          style={{ border: "none", borderRadius: "5px", background: "teal" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
