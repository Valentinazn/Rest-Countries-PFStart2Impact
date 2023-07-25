import React from "react";
import ArrowIconSvg from "../svg/ArrowIconSvg";
import { Regions } from "@/app/emun";

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
      className="min-w-[200px] w-full rounded-[5px] bg-white h-[56px] flex gap-1 flex-col sm:text-[14px] text-sm font-[400] leading-[20px] text-black"
      style={{ boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div
        onClick={() => onClickOpen()}
        className="flex items-center justify-center gap-[47px] py-[18px] px-6  cursor-pointer"
      >
        <p>{dropdownText}</p>
        <ArrowIconSvg />
      </div>
      {isOpen ? (
        <ul className="min-w-[200px] w-full rounded-[5px] bg-white px-6 py-4 flex gap-2 flex-col z-50">
          {React.Children.toArray(
            [
              Regions.Africa,
              Regions.Americas,
              Regions.Asia,
              Regions.Europe,
              Regions.Oceania,
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
