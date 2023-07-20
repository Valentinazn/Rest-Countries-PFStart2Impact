import { Welcome } from "@/app/type";

interface ICard {
  data: Welcome[];
}

const Card = ({ data }: ICard) => {
  return (
    <div className="grid grid-cols-4 w-full">
      {data.slice(0, 7).map((i) => {
        return (
          <div
            className="grid grid-cols-1 min-w-[264px] w-full bg-white"
            style={{ boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)" }}
          >
            <img src={i.flags.png} alt="" />
            <div className="grid grid-cols-1">
              <h3 className="text-black text-[18px] font-extrabold leading-[26px]">
                {i.capital}
              </h3>
              <div className="grid grid-cols-1 text-black text-[14px] font-[600] leading-[16px]">
                <p>
                  Population:<span className="font-[300]">{i.population}</span>
                </p>
                <p>
                  Region_<span className="font-[300]">{i.region}</span>
                </p>
                <p>
                  Capital:<span className="font-[300]">{i.capital}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
