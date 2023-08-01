import Link from "next/link";
import { Welcome } from "@/app/type";
import Image from "next/image";
import React, { memo } from "react";

interface ICard {
  data: Welcome[];
  indexOfFistCard: number;
  indexOfLastCard: number;
}

const Card = ({ data, indexOfFistCard, indexOfLastCard }: ICard) => {
  return (
    <section>
      <div className="grid sm:grid-cols-4 sm:w-[90%] w-[264px] grid-cols-1 max-w-[1360px] my-0 mx-auto gap-[74px] min-h-[100vh]">
        {React.Children.toArray(
          data?.slice(indexOfFistCard, indexOfLastCard).map((i) => {
            return (
              <div
                className="grid grid-cols-1 w-full dark:bg-darkBlue   bg-white h-[336px] rounded-md overflow-hidden"
                style={{ boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)" }}
              >
                <Image
                  className="w-full object-cover h-[160px]"
                  src={i.flags.png}
                  alt={i.name.common}
                  width={267}
                  height={160}
                />
                <div className="grid grid-cols-1 p-[24px]  pb-[46px]">
                  <Link href={`/details/${i.cca2}`}>
                    <h3 className="text-black text-[18px] font-extrabold leading-[26px] gap-[16px]">
                      {i.name.common}
                    </h3>
                  </Link>

                  <div className="grid grid-cols-1 text-black text-[14px] font-[600] leading-[16px] gap-[8px]">
                    <p>
                      Population:
                      <span className="font-[300]">{i.population}</span>
                    </p>
                    <p>
                      Region:<span className="font-[300]">{i.region}</span>
                    </p>
                    <p>
                      Capital:<span className="font-[300]">{i.capital}</span>
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
