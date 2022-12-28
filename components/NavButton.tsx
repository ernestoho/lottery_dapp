import React from "react";

interface Props {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

function NavButton({ title, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={
        '${isActive && "bg-gradient-to-br from-[#350336] to-[#E056FD]"} hover:bg-gradient-to-br from-[#350336] to-[#E056FD] text-white py-2 px-4 rounded font-bold'
      }
    >
      {title}
    </button>
  );
}

export default NavButton;
