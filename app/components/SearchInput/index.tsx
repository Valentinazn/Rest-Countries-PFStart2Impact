import React from "react";
import SearchIconSvg from "../svg/SearchIconSvg";

interface ISearchInput {
  placeHolderText: string;
}

const SearchInput = ({ placeHolderText }: ISearchInput) => {
  return (
    <form
      className="flex justify-start items-center gap-6 border-none w-full relative min-w-[343px]  sm:w-[480px] h-[56px] bg-white rounded-[5px] py-[19px] px-[32px]"
      style={{ boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05);" }}
    >
      <SearchIconSvg />

      <input
        className="focus:outline-none sm:placeholder:text-[14px] placeholder:text-xs placeholder:leading-[20px] placeholder:font-[400] placeholder:text-darkGray"
        type="search"
        placeholder={placeHolderText}
      />
    </form>
  );
};

export default SearchInput;
