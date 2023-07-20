"use client";

import React, { useState } from "react";
import Dropdown from "../Dropdown";

const ContainerDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dropdown
      onClickOpen={() => setIsOpen(!isOpen)}
      dropdownText={"Filter by Region..."}
      isOpen={isOpen}
      onClick={() => {}}
    />
  );
};

export default ContainerDropdown;
