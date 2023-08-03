"use client";
import { useFetchCountriesQuery } from "@/redux/features/countries/countriesApiSlice";
import React, { ChangeEvent, useMemo, useState } from "react";
import { MyPaginationContext } from "@/app/context/PaginationContext";
import dynamic from "next/dynamic";
const Dropdown = dynamic(() => import("../Dropdown"));
const Card = dynamic(() => import("../Card"));
const SearchInput = dynamic(() => import("../SearchInput"));
const Pagination = dynamic(() => import("../Pagination"));

const MainContent = () => {
  const [search, setSearch] = useState<string>("");
  const [isActive, setIsActive] = useState<string>("");
  const { data } = useFetchCountriesQuery(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardPerPage: number = 8;

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFistCard = indexOfLastCard - cardPerPage;

  const dataWithFilter = useMemo(() => {
    const regionItems = [
      ...new Set(
        data?.filter((i) =>
          i.region.toLowerCase().includes(isActive.toLowerCase())
        )
      ),
    ];

    const searchItems = [
      ...new Set(
        data?.filter((i) =>
          i.name.common.toLowerCase().includes(search.toLowerCase())
        )
      ),
    ];

    if (isActive) {
      return regionItems;
    }
    if (search) {
      return searchItems;
    }

    return data;
  }, [data, search, isActive]);

  const handleClickRegion = (e: string) => {
    setIsActive(e);
    setIsOpen(false);
    setCurrentPage(1);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    setIsActive("");
    setCurrentPage(1);
  };

  return (
    <main className="max-w-[1360px]  w-[90%]  my-0 mx-auto min-h-[100vh]">
      <section className="grid grid-cols-1 sm:grid-cols-2  gap-[40px] sm:gap-0 mt-6 sm:mt-[48px]">
        <div className="justify-self-start w-full">
          <SearchInput
            placeHolderText={"Search for a country…"}
            onChange={handleSearch}
          />
        </div>
        <div className="justify-self-start sm:justify-self-end mb-[48px]">
          <Dropdown
            onClickOpen={() => setIsOpen(!isOpen)}
            dropdownText={isActive ? isActive : "Filter by Region..."}
            isOpen={isOpen}
            onClick={handleClickRegion}
          />
        </div>
      </section>
      <section>
        <Card
          data={dataWithFilter ?? []}
          indexOfFistCard={indexOfFistCard}
          indexOfLastCard={indexOfLastCard}
          capitalText={"Capital"}
          populationText={"Population"}
          regionText={"Region"}
        />
      </section>

      <section className="my-[48px]">
        <MyPaginationContext.Provider value={{ currentPage, setCurrentPage }}>
          <Pagination
            cardsPerpage={cardPerPage}
            totalCards={dataWithFilter?.length ?? 0}
            currentPage={currentPage}
          />
        </MyPaginationContext.Provider>
      </section>
    </main>
  );
};

export default MainContent;
