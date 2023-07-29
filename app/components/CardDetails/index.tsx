import { Currencies, Translation, Welcome } from "@/app/type";
import Image from "next/image";

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
  return (
    <>
      {props.country?.map((x) => {
        const currency = x.currencies
          ? x.currencies[
              Object.keys(x.currencies) as unknown as keyof Currencies
            ]?.name
          : "Not found";

        const nativeName = x.name.nativeName
          ? x.name.nativeName[
              Object.keys(x.name.nativeName) as unknown as keyof Translation
            ]?.official
          : "Not found";

        const languages = x.languages
          ? Object.values(x.languages).toString().split(",").join(",")
          : "Not found";

        return (
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-[40px] lg:gap-[144px] lg:place-items-center">
            <div className=" justify-self-start">
              <Image
                className="w-full rounded-xl max-w-[600px] h-full min-h-[297px]"
                src={x.flags.svg}
                alt={x.name.common}
                width={300}
                height={300}
              />
            </div>

            <div className="grid grid-cols-1 w-full gap-[70px]">
              <div className="grid grid-cols-1 gap-[16px]">
                <h2 className="text-[32px] font-extrabold text-lightModeText">
                  {x.name.common}
                </h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 text-lightModeText leading-8 gap-8 lg:gap-0">
                  <div>
                    <p>
                      <span className="font-[600]">{props.nativeNameText}</span>
                      :{nativeName}
                    </p>
                    <p>
                      <span className="font-[600]">
                        {" "}
                        {props.populationText}
                      </span>
                      :{x.population}
                    </p>
                    <p>
                      <span className="font-[600]"> {props.regionText}</span>:
                      {x.region}
                    </p>
                    <p>
                      <span className="font-[600]"> {props.subRegionText}</span>
                      :{x.subregion}
                    </p>
                    <p>
                      <span className="font-[600]">{props.capitalText}</span> :
                      {x.capital}
                    </p>
                  </div>
                  <div className="lg:justify-self-end">
                    <p>
                      <span className="font-[600]">
                        {props.topLevelDomainText}
                      </span>
                      : {x.tld}
                    </p>
                    <p>
                      <span className="font-[600]">
                        {props.currenciesText}{" "}
                      </span>
                      : {currency}
                    </p>
                    <p>
                      <span className="font-[600]"> {props.languagesText}</span>
                      :{languages}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-[25%_65%] grid-cols-1 h-[28px] items-start gap-4 lg:gap-0 text-lightModeText">
                <p className="font-[600] leading-6">{props.borderCountries}:</p>
                <div className="grid lg:grid-cols-5 grid-cols-3 gap-[10px] text-center">
                  {x.borders ? (
                    x.borders?.map((x) => {
                      return (
                        <p
                          className="text-[14px] border rounded-[5px]  py-[5px] max-w-[96px] bg-white"
                          style={{
                            boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.10)",
                          }}
                        >
                          {x}
                        </p>
                      );
                    })
                  ) : (
                    <p className="text-left">Not found</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardDetails;
