import { createContext, useContext } from "react";
export type PaginationContent = {
  currentPage: number;
  setCurrentPage: (e: number) => void;
};
export const MyPaginationContext = createContext<PaginationContent>({
  currentPage: 0,
  setCurrentPage: () => {},
});
export const usePaginationContext = () => useContext(MyPaginationContext);
