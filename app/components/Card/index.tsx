import Link from "next/link";
import { Welcome } from "@/app/type";
import Image from "next/image";
import React, { memo } from "react";
import imageLoader from "@/app/assets/imageLoader";

interface ICard {
  data: Welcome[];
  indexOfFistCard: number;
  indexOfLastCard: number;
  capitalText: string;
  populationText: string;
  regionText: string;
}

const Card = ({
  data,
  indexOfFistCard,
  indexOfLastCard,
  capitalText,
  populationText,
  regionText,
}: ICard) => {
  return (
    <section>
      <div className="grid sm:grid-cols-4 sm:w-full w-[300px] grid-cols-1 my-0 mx-auto gap-[74px] ">
        {React.Children.toArray(
          data?.slice(indexOfFistCard, indexOfLastCard).map((i) => {
            return (
              <div
                className="grid grid-cols-1 w-full  bg-white  dark:bg-darkBlue  h-[336px] rounded-md overflow-hidden"
                style={{ boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)" }}
              >
                <div className="w-full relative h-[160px]">
                  <Image
                    className="object-cover w-full"
                    unoptimized
                    loader={imageLoader}
                    src={i.flags.png}
                    alt={i.name.common}
                    objectFit="cover"
                    layout="fill"
                    priority
                  />
                </div>

                <div className="grid grid-cols-1 p-[24px]  pb-[46px]">
                  <Link href={`/details/${i.cca2}`}>
                    <h3 className="text-black dark:text-white  text-[18px] font-extrabold leading-[26px] gap-[16px]">
                      {i.name.common}
                    </h3>
                  </Link>

                  <div className="grid grid-cols-1 text-black dark:text-white text-[14px] font-[600] leading-[16px] gap-[8px]">
                    <p>
                      {populationText}:
                      <span className="font-[300]">{i.population}</span>
                    </p>
                    <p>
                      {regionText}:{" "}
                      <span className="font-[300]">{i.region}</span>
                    </p>
                    <p>
                      {capitalText}:{" "}
                      <span className="font-[300]">{i.capital}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default memo(Card);
