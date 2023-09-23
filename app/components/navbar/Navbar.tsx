"use client";

import Container from "../Container";
import UserMenu from "./UserMenu";


const Navbar = () => {
  return (
    <div className="w-full fixed z-10 bg-black shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
                "
          >
            Blockchain Vault
            <UserMenu  />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;