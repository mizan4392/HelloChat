interface Props {
  isOwnMessage?: boolean;
}
export default function Message({ isOwnMessage = false }: Props) {
  return (
    <div
      className={`flex flex-col mt-[20px] ${isOwnMessage ? "items-end" : ""}`}
    >
      <div className="flex">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
          className="w-[32px] h-[32px] object-cover mr-[10px]"
          style={{ borderRadius: "50%" }}
        />
        <p
          className={`p-[10px] bg-[#1877f2] text-white max-w-[300px] ${
            isOwnMessage ? "bg-slate-300 text-black" : ""
          }`}
          style={{
            borderRadius: "20px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="text-[12px] mt-[10px]">1 hour ago</div>
    </div>
  );
}
