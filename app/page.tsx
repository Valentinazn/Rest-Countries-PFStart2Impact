"use client";

import { useFetchCountriesQuery } from "@/redux/features/countries/countriesApiSlice";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";

import SearchInput from "./components/SearchInput";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import { isOpen } from "@/redux/features/open/openSlice";

export default function Home() {
  const { data } = useFetchCountriesQuery(null);

  const open = useAppSelector((state) => state.open.open);
  const dispatch = useAppDispatch();
  return (
    <main>
      <section className="max-w-[1360px]  w-[90%] grid grid-cols-1 sm:grid-cols-2 my-0 mx-auto gap-[40px] sm:gap-0 mt-6 sm:mt-[48px]">
        <div className="justify-self-start">
          <SearchInput placeHolderText={"Search for a country…"} />
        </div>
        <div className="justify-self-start sm:justify-self-end mb-[48px]">
          <Dropdown
            onClickOpen={() => dispatch(isOpen())}
            dropdownText={"Filter by Region..."}
            isOpen={open}
            onClick={() => {}}
          />
        </div>
      </section>
      <Card data={data ?? []} />
    </main>
  );
}
