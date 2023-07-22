import { Welcome } from "@/app/type";
import Image from "next/image";
import React from "react";

interface ICard {
  data: Welcome[];
  search: string;
  isActive: string;
}

const Card = ({ data, search, isActive }: ICard) => {
  return (
    <section className="grid sm:grid-cols-4 sm:w-[90%] w-[264px] grid-cols-1 max-w-[1360px] my-0 mx-auto gap-[74px]">
      {React.Children.toArray(
        data
          .filter((i) => {
            if (search) {
              return i.name.common
                .toLowerCase()
                .trim()
                .includes(search.toLowerCase().trim());
            }

            if (isActive) {
              return i.region.toLowerCase().includes(isActive.toLowerCase());
            }

            return i;
          })
          .map((i) => {
            return (
              <div
                className="grid grid-cols-1 w-full   bg-white h-[336px] rounded-md overflow-hidden"
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
                  <h3 className="text-black text-[18px] font-extrabold leading-[26px] gap-[16px]">
                    {i.name.common}
                  </h3>
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
    </section>
  );
};

export default Card;
