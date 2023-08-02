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
        <ArrowIconSvg className={"fill-darkBlue dark:fill-white"} />
      </div>
      {isOpen ? (
        <ul className="min-w-[200px] w-full rounded-[5px] bg-white  dark:bg-darkBlue  px-6 py-4 flex gap-2 flex-col z-50">
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
                  className="hover:cursor-pointer"
                  value={region}
                  onClick={() => onClick(region)}
                >
                  {region}
                </li>
              );
            })
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
