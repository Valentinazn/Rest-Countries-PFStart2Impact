import React from "react";
import SearchIconSvg from "../svg/SearchIconSvg";

interface ISearchInput {
  placeHolderText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ placeHolderText, onChange }: ISearchInput) => {
  return (
    <form
      className="flex justify-start items-center gap-6 border-none w-full relative min-w-[343px]  sm:w-[480px] h-[56px] bg-white rounded-[5px] py-[19px] px-[32px]"
      style={{ boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05);" }}
    >
      <SearchIconSvg />

      <input
        onChange={(e) => onChange(e)}
        className="focus:outline-none sm:placeholder:text-[14px] placeholder:text-xs placeholder:leading-[20px] placeholder:font-[400] placeholder:text-darkGray"
        type="text"
        placeholder={placeHolderText}
      />
    </form>
  );
};

export default SearchInput;
