import React from "react";

export default function Conversations() {
  return (
    <div className="flex items-center p-[10px] cursor-pointer hover:bg-gray-100">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt=""
        className="w-[40px] h-[40px] object-cover mr-[20px]"
        style={{
          borderRadius: "50%",
        }}
      />
      <span className="font-medium">John Doe</span>
    </div>
  );
}
