import React from "react";

export default function ChatOnline() {
  return (
    <div className="wrapper">
      <div className="flex items-center font-medium cursor-pointer mt-[10px]">
        <div className="relative mr-[10px] ">
          <img
            className="w-[40px] h-[40px] object-cover"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
            style={{
              borderRadius: "50%",
              border: "1px solid white",
            }}
          />
          <div
            className="chatOnlineBadge w-[10px] h-[10px] absolute top-[2px] right-[2px]"
            style={{
              backgroundColor: "limegreen",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <span className="chatOnlineName">Jhon Doe</span>
      </div>
    </div>
  );
}
