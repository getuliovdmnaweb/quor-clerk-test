import { UserButton } from "@clerk/nextjs";
import React from "react";

const HeaderBar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-black py-8 px-20 sticky ">
      <span className="text-white">logo</span>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default HeaderBar;
