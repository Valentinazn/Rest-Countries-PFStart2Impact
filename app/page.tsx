import { CardContainer } from "./components/CardContainer";
import ContainerDropdown from "./components/ContainerDropdown";

import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <main>
      <section className="max-w-[1360px]  w-[90%] grid grid-cols-1 sm:grid-cols-2 my-0 mx-auto gap-[40px] sm:gap-0 mt-6 sm:mt-[48px]">
        <div className="justify-self-start">
          <SearchInput placeHolderText={"Search for a country…"} />
        </div>
        <div className="justify-self-start sm:justify-self-end">
          <ContainerDropdown />
        </div>
      </section>
      <section className="max-w-[1360px]  w-[90%] grid grid-cols-1 sm:grid-cols-4 my-0 mx-auto gap-[75px]">
        <CardContainer />
      </section>
    </main>
  );
}
