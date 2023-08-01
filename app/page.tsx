"use client";
import dynamic from "next/dynamic";
import { useFetchCountriesQuery } from "@/redux/features/countries/countriesApiSlice";
import { ChangeEvent, useMemo, useState } from "react";
import { MyPaginationContext } from "./context/PaginationContext";

const Card = dynamic(() => import("./components/Card"), {
  loading: () => <p>Loading...</p>,
});
const Dropdown = dynamic(() => import("./components/Dropdown"), {
  loading: () => <p>Loading...</p>,
});
const SearchInput = dynamic(() => import("./components/SearchInput"), {
  loading: () => <p>Loading...</p>,
});
const Pagination = dynamic(() => import("./components/Pagination"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [isActive, setIsActive] = useState<string>("");
  const { data } = useFetchCountriesQuery(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardPerPage: number = 8;

  // Get currentPage

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
    <main className="dark:bg-black">
      <section className="max-w-[1360px]  w-[90%] grid grid-cols-1 sm:grid-cols-2 my-0 mx-auto gap-[40px] sm:gap-0 mt-6 sm:mt-[48px]">
        <div className="justify-self-start">
          <SearchInput
            placeHolderText={"Search for a country…"}
            onChange={handleSearch}
          />
        </div>
        <div className="justify-self-start sm:justify-self-end mb-[48px]">
          <Dropdown
            onClickOpen={() => setIsOpen(!isOpen)}
            dropdownText={isActive ? isActive : "Search by Region..."}
            isOpen={isOpen}
            onClick={handleClickRegion}
          />
        </div>
      </section>
      <Card
        data={dataWithFilter ?? []}
        indexOfFistCard={indexOfFistCard}
        indexOfLastCard={indexOfLastCard}
      />
      <section className="max-w-[1360px]  w-[90%] my-[48px] mx-auto">
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
}
