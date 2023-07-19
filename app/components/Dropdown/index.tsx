import React from "react";
import ArrowIconSvg from "../svg/ArrowIconSvg";
import { Regions } from "@/app/emun";

interface IDropdown {
  dropdownText: string;
}

const Dropdown = ({ dropdownText }: IDropdown) => {
  return (
    <div
      className="min-w-[200px] w-full rounded-[5px] bg-white h-[56px] flex gap-1 flex-col"
      style={{ boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05);" }}
    >
      <div className="flex items-center justify-center gap-[47px] py-[18px] px-6">
        <p className="sm:text-[14px] text-sm font-[400] leading-[20px] text-black">
          {dropdownText}
        </p>
        <ArrowIconSvg />
      </div>
      <div className="min-w-[200px] w-full rounded-[5px] bg-white px-6 py-4 flex gap-2 flex-col">
        {React.Children.toArray(
          [
            Regions.Africa,
            Regions.America,
            Regions.Asia,
            Regions.Europe,
            Regions.Oceania,
          ].map((region) => {
            return <p>{region}</p>;
          })
        )}
      </div>
    </div>
  );
};

export default Dropdown;
