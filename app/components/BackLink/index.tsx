import Link from "next/link";
import React from "react";
import ArrowLeft from "../svg/ArrowLeft";

interface IBackLink {
  text: string;
}

const BackLink = ({ text }: IBackLink) => {
  return (
    <Link href={"/"}>
      <div className="w-[136px] h-[40px] bg-white inline-flex justify-center items-center gap-[10px]">
        <ArrowLeft />
        <p className="text-darkBlue leading-5">{text}</p>
      </div>
    </Link>
  );
};

export default BackLink;
