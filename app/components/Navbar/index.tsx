import dynamic from "next/dynamic";

const DarkModeIconSvg = dynamic(() => import("../svg/DarkModeIconSvg"));

interface INavbar {
  logo: string;
  mode: string;
}

const Navbar = ({ logo, mode }: INavbar) => {
  return (
    <nav
      className="w-full  bg-white "
      style={{ boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)" }}
    >
      <div className="max-w-[1360px]  w-[90%] flex justify-between items-center my-0 mx-auto py-[24px] ">
        <h2 className="sm:text-[24px] text-[14px] leading-[20px] sm:leading-normal font-extrabold text-black">
          {logo}
        </h2>
        <div className="inline-flex gap-2 justify-center items-start">
          <DarkModeIconSvg
            className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] "
            fill={"white"}
            stroke={"#111517"}
          />
          <h3 className="font-[600] sm:text-base text-xs ">{mode}</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
