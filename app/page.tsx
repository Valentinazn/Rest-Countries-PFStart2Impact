"use client";

import { useFetchCountriesQuery } from "@/redux/features/countries/countriesApiSlice";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import SearchInput from "./components/SearchInput";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import { isOpen } from "@/redux/features/open/openSlice";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [isActive, setIsActive] = useState<string>("");
  const { data } = useFetchCountriesQuery(null);

  const open = useAppSelector((state) => state.open.open);
  const dispatch = useAppDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <main>
      <section className="max-w-[1360px]  w-[90%] grid grid-cols-1 sm:grid-cols-2 my-0 mx-auto gap-[40px] sm:gap-0 mt-6 sm:mt-[48px]">
        <div className="justify-self-start">
          <SearchInput
            placeHolderText={"Search for a country…"}
            onChange={handleSearch}
          />
        </div>
        <div className="justify-self-start sm:justify-self-end mb-[48px]">
          <Dropdown
            onClickOpen={() => dispatch(isOpen())}
            dropdownText={isActive ? isActive : "Search by Region..."}
            isOpen={open}
            onClick={(e: string) => setIsActive(e)}
          />
        </div>
      </section>
      <Card data={data ?? []} search={search} isActive={isActive} />
    </main>
  );
}
