"use client";
import BackLink from "@/app/components/BackLink";
import { Currencies } from "@/app/type";
import { useFetchCountriesQuery } from "@/redux/features/countries/countriesApiSlice";
import Image from "next/image";
import React from "react";

interface IDetails {
  params: { name: string };
}

const Details = ({ params }: IDetails) => {
  const { data } = useFetchCountriesQuery(null);

  const country = data?.filter((i) => i.cca2 === params.name);

  console.log(country);

  function getObjectProps<Obj, Key extends keyof Obj>(
    obj: Obj,
    key: Key
  ): Obj[Key] {
    return obj[key];
  }

  return (
    <main className="max-w-[1360px]  w-[90%]  my-0 mx-auto">
      <div className="mt-[80px]">
        <BackLink text={"Back"} />
      </div>
      {country?.map((x) => {
        const g = getObjectProps(
          x.currencies,
          Object.keys(x.currencies) as unknown as keyof Currencies
        );

        const c: Currencies[] = [];

        return (
          <div className="grid mt-[80px] grid-cols-2 gap-[120px]">
            <Image
              className="w-full"
              src={x.flags.svg}
              alt={""}
              width={300}
              height={300}
            />
            <div className="grid grid-cols-1">
              <h2>{x.name.common}</h2>
              <div className="grid grid-cols-2">
                <div>
                  <p>Native Name:</p>
                  <p>Population:{x.population}</p>
                  <p>Region:{x.region}</p>
                  <p>Sub Region:{x.subregion}</p>
                  <p>Capital:{x.capital}</p>
                </div>
                <div>
                  <p>Top Level Domain:{x.tld}</p>
                  <p>Currencies: {g?.name}</p>
                  <p>Languages</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Details;
