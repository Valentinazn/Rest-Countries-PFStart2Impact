"use client";

import dynamic from "next/dynamic";

const CardDetails = dynamic(() => import("@/app/components/CardDetails"));
const BackLink = dynamic(() => import("@/app/components/BackLink"));

import { useFetchCountriesQuery } from "@/redux/features/countries/countriesApiSlice";

interface IDetails {
  params: { name: string };
}

const Details = ({ params }: IDetails) => {
  const { data } = useFetchCountriesQuery(null);

  const country = data?.filter((i) => i.cca2 === params.name);

  return (
    <main className="max-w-[1360px]  w-[90%]  my-0 mx-auto min-h-[100vh]">
      <section className="lg:my-[80px] my-[64px]">
        <BackLink text={"Back"} />
      </section>
      <section>
        <CardDetails
          country={country ?? []}
          nativeNameText={"Native Name"}
          populationText={"Population"}
          regionText={"Region"}
          subRegionText={"Sub Region"}
          capitalText={"Capital"}
          topLevelDomainText={"Top Level Domain"}
          currenciesText={"Currencies"}
          languagesText={"Languages"}
          borderCountries={"Border Countries"}
        />
      </section>
    </main>
  );
};

export default Details;
