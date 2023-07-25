import React, { ButtonHTMLAttributes } from "react";
interface IButton {
  text: string;
  disabled: boolean;
  onClick: (e: any) => void;
}

const Button = ({ disabled, onClick, text }: IButton) => {
  return (
    <button
      className="rounded-[5px] bg-white leading-[20px] p-[10px] disabled:cursor-not-allowed cursor-pointer"
      disabled={disabled}
      style={{ boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05)" }}
      onClick={(e) => onClick(e)}
    >
      {text}
    </button>
  );
};

export default Button;