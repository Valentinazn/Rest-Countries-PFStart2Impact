import dynamic from "next/dynamic";

const Button = dynamic(() => import("../Button"));
import { usePaginationContext } from "@/app/context/PaginationContext";

interface IPagination {
  currentPage: number;
  cardsPerpage: number;
  totalCards: number;
}

const Pagination = ({ currentPage, cardsPerpage, totalCards }: IPagination) => {
  const pageNumbers = [];
  const { setCurrentPage } = usePaginationContext();

  for (let i = 0; i < Math.ceil(totalCards / cardsPerpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button
        text={"< Prev"}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      />

      <p className="text-black dark:text-white font-extrabold">{currentPage}</p>
      <p> of</p>
      <p className="text-black dark:text-white  font-extrabold">
        {pageNumbers.length}
      </p>
      <Button
        text={"Next >"}
        disabled={currentPage > pageNumbers.length - 1}
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
