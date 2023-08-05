import { Currencies, Translation, Welcome } from "@/app/type";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

interface ICardDetails {
  country: Welcome[];
  nativeNameText: string;
  populationText: string;
  regionText: string;
  subRegionText: string;
  capitalText: string;
  topLevelDomainText: string;
  currenciesText: string;
  languagesText: string;
  borderCountries: string;
}

const CardDetails = (props: ICardDetails) => {
  const array: string[] = [];

  function getValueForEachKeys(obj: keyof Translation) {
    if (obj) {
      return Object.keys(obj).forEach((key) =>
        array
          // @ts-ignore
          .push(obj[key].official)
      );
    } else {
      return array.push("Not found");
    }
  }

  return (
    <>
      {React.Children.toArray(
        props.country?.map((x) => {
          const currency = x.currencies
            ? x.currencies[
                Object.keys(x.currencies) as unknown as keyof Currencies
              ]?.name
            : "Not found";

          const languages = x.languages
            ? Object.values(x.languages).toString().split(",").join(",")
            : "Not found";

          getValueForEachKeys(
            x.name.nativeName as unknown as keyof Translation
          );

          return (
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-[40px] lg:gap-[144px] lg:place-items-center">
              <div className=" justify-self-start relative lg:min-w-[450px] w-full   h-full lg:min-h-[400px] min-h-[297px]">
                <Image
                  unoptimized
                  className="rounded-xl absolute lg:object-cover"
                  src={x.flags.svg}
                  alt={x.name.common}
                  layout="fill"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 w-full gap-[70px]">
                <div className="grid grid-cols-1 gap-[16px]">
                  <h2 className="text-[32px] font-extrabold text-lightModeText  dark:text-white">
                    {x.name.common ?? "Not Found"}
                  </h2>
                  <div className="grid 2xl:grid-cols-[auto_auto] grid-cols-1 text-lightModeText  dark:text-white leading-8 gap-8">
                    <div>
                      <p>
                        <span className="font-[600]">
                          {props.nativeNameText}
                        </span>
                        : {array.join(",")}
                      </p>
                      <p>
                        <span className="font-[600]">
                          {" "}
                          {props.populationText}
                        </span>
                        : {x.population ?? "Not Found"}
                      </p>
                      <p>
                        <span className="font-[600]"> {props.regionText}</span>:{" "}
                        {x.region ?? "Not Found"}
                      </p>
                      <p>
                        <span className="font-[600]">
                          {" "}
                          {props.subRegionText}
                        </span>
                        : {x.subregion ?? "Not Found"}
                      </p>
                      <p>
                        <span className="font-[600]">{props.capitalText}</span>:{" "}
                        {x.capital ?? "Not Found"}
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="font-[600]">
                          {props.topLevelDomainText}
                        </span>
                        : {x.tld ?? "Not Found"}
                      </p>
                      <p>
                        <span className="font-[600]">
                          {props.currenciesText}:{" "}
                        </span>
                        {currency}
                      </p>
                      <p>
                        <span className="font-[600]">
                          {" "}
                          {props.languagesText}
                        </span>
                        : {languages}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-[auto_auto] grid-cols-1 lg:h-[28px] items-start gap-4 lg:gap-0 text-lightModeText dark:text-white">
                  <p className="font-[600] leading-6">
                    {props.borderCountries}:
                  </p>

                  <div className="grid md:grid-cols-5 grid-cols-3 gap-[10px] text-center mb-10">
                    {x.borders ? (
                      React.Children.toArray(
                        x.borders?.map((i) => {
                          return (
                            <Link href={`/details/${i}`}>
                              <p
                                className="text-[14px] border dark:border-none rounded-[2px]  py-[5px] max-w-[96px]  bg-white  dark:bg-darkBlue"
                                style={{
                                  boxShadow:
                                    "0px 0px 4px 1px rgba(0, 0, 0, 0.10)",
                                }}
                              >
                                {i}
                              </p>
                            </Link>
                          );
                        })
                      )
                    ) : (
                      <p className="text-left min-w-[96px] lg:text-center">
                        Not found
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default React.memo(CardDetails);
