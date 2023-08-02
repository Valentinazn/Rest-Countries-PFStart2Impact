import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

const ArrowLeftIcon = dynamic(() => import("../../assets/svg/ArrowLeft"));

interface IBackLink {
  text: string;
}

const BackLink = ({ text }: IBackLink) => {
  return (
    <Link href={"/"}>
      <div className="w-[136px] h-[40px] bg-white dark:bg-darkBlue  inline-flex justify-center items-center gap-[10px] rounded-[6px]">
        <ArrowLeftIcon className={"fill-black dark:fill-white"} />
        <p className="text-darkBlue dark:text-white  leading-5">{text}</p>
      </div>
    </Link>
  );
};

export default BackLink;
