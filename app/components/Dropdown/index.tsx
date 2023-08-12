import React from "react";
import dynamic from "next/dynamic";
import { Region } from "@/app/type";

const ArrowIconSvg = dynamic(() => import("../../assets/svg/ArrowIconSvg"));

interface IDropdown {
  dropdownText: string;
  onClickOpen: () => void;
  onClick: (e: string) => void;
  isOpen: boolean;
}

const Dropdown = ({
  dropdownText,
  onClick,
  isOpen,
  onClickOpen,
}: IDropdown) => {
  return (
    <div
      className="min-w-[200px] w-full rounded-[5px] bg-white  dark:bg-darkBlue  h-[56px] flex gap-1 flex-col sm:text-[14px] text-sm font-[400] leading-[20px] text-black dark:text-white"
      style={{ boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div
        onClick={() => onClickOpen()}
        className="flex items-center justify-center gap-[47px] py-[18px] px-6  cursor-pointer"
      >
        <p>{dropdownText}</p>
        <ArrowIconSvg
          className={`fill-darkBlue dark:fill-white transition-all duration-1 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <ul
        className={`${
          isOpen ? "opacity-[100%] " : " opacity-0 "
        } min-w-[200px] w-full rounded-[5px] bg-white h-[100vh] dark:bg-darkBlue py-4 flex flex-col z-50 transition-all duration-5 ease-in-out`}
      >
        {React.Children.toArray(
          [
            Region.Africa,
            Region.Antarctic,
            Region.Americas,
            Region.Asia,
            Region.Europe,
            Region.Oceania,
          ].map((region) => {
            return (
              <li
                className="hover:cursor-pointer hover:bg-darkGray hover:text-white dark:hover:bg-darkModeBackground  px-6 py-2"
                value={region}
                onClick={() => onClick(region)}
              >
                {region}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
