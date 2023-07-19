import Image from "next/image";
import SearchInput from "./components/SearchInput";
import Dropdown from "./components/Dropdown";

export default function Home() {
  return (
    <main className="">
      <div className="max-w-[1360px]  w-[90%] grid grid-cols-1 sm:grid-cols-2 my-0 mx-auto gap-[40px] sm:gap-0 mt-6 sm:mt-[48px]">
        <div className="justify-self-start">
          <SearchInput placeHolderText={"Search for a country…"} />
        </div>
        <div className="justify-self-start sm:justify-self-end">
          <Dropdown dropdownText={"Filter by Region..."} />
        </div>
      </div>
    </main>
  );
}
