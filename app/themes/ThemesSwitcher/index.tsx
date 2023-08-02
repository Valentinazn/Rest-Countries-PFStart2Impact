"use client";
import { useTheme } from "next-themes";

const DarkModeIconSvg = dynamic(
  () => import("@/app/assets/svg/DarkModeIconSvg")
);
const LightModeIconSvg = dynamic(
  () => import("@/app/assets/svg/LightModeIconSvg")
);

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="inline-flex gap-2 justify-center items-start">
      {theme === "dark" ? (
        <LightModeIconSvg
          className={"w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] cursor-pointer"}
          fill={"white"}
          stroke={"#111517"}
          onClick={() => setTheme("light")}
        />
      ) : (
        <DarkModeIconSvg
          onClick={() => setTheme("dark")}
          className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] cursor-pointer "
          fill={"white"}
          stroke={"#111517"}
        />
      )}

      <h3 className="font-[600] sm:text-base text-xs ">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </h3>
    </div>
  );
};

export default ThemeSwitcher;
