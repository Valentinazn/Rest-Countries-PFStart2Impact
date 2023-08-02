import ThemeSwitcher from "@/app/themes/ThemesSwitcher";

interface INavbar {
  logo: string;
}

const Navbar = ({ logo }: INavbar) => {
  return (
    <nav
      className="w-full bg-white dark:bg-darkBlue"
      style={{ boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)" }}
    >
      <div className="max-w-[1360px]  w-[90%] flex justify-between items-center my-0 mx-auto py-[24px] ">
        <h2 className="sm:text-[24px] text-[14px] leading-[20px] sm:leading-normal font-extrabold ">
          {logo}
        </h2>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
