import { Welcome } from "@/app/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1",
  }),
  endpoints(build) {
    return {
      fetchCountries: build.query<Welcome[], null>({
        query: () => "/all",
      }),
    };
  },
});

export const { useFetchCountriesQuery } = countriesApi;
