import Link from "next/link";
import { Welcome } from "@/app/type";
import Image from "next/legacy/image";
import React, { memo } from "react";

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
    <>
      {data.length > 0 ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 w-full  grid-cols-1 my-0 mx-auto gap-[74px] ">
          {React.Children.toArray(
            data?.slice(indexOfFistCard, indexOfLastCard).map((i) => {
              return (
                <div
                  className="grid grid-cols-1 w-full  bg-white  dark:bg-darkBlue  min-h-[336px] rounded-md overflow-hidden h-full"
                  style={{ boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)" }}
                >
                  <div className="w-full relative h-[160px]">
                    <Image
                      className="object-cover w-full"
                      unoptimized
                      src={i.flags.png}
                      alt={i.name.common}
                      objectFit="cover"
                      layout="fill"
                      priority
                    />
                  </div>

                  <div className="grid grid-cols-1 p-[24px]  pb-[46px]">
                    <Link href={`/details/${i.cca3}`}>
                      <h3 className=" hover:text-[#06c] hover:underline  dark:hover:text-[#2997ff] text-black dark:text-white  text-[18px] font-extrabold leading-[26px] gap-[16px]">
                        {i.name.common}
                      </h3>
                    </Link>

                    <div className="grid grid-cols-1 text-black dark:text-white text-[14px] font-[600] leading-[16px] gap-[8px]">
                      <p className="leading-5">
                        {populationText}:{" "}
                        <span className="font-[300]">
                          {i.population ?? "Not found"}
                        </span>
                      </p>
                      <p className="leading-5">
                        {regionText}:{" "}
                        <span className="font-[300]">
                          {i.region ?? "Not found"}
                        </span>
                      </p>
                      <p className="leading-5">
                        {capitalText}:{" "}
                        <span className="font-[300]">
                          {i.capital ?? "Not found"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : (
        <div className="w-full text-center h-[100vh]">
          <h3 className="font-[600] text-[24px]">No result</h3>
        </div>
      )}
    </>
  );
};

export default memo(Card);
