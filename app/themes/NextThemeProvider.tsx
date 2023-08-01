"use client";

import { ThemeProvider } from "next-themes";

import React, { useEffect, useState } from "react";

interface IProvider {
  children: React.ReactNode;
}

const NextThemeProvider = ({ children }: IProvider) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
