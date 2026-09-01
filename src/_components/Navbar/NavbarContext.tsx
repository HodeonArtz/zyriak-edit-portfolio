import { createContext } from "react";

interface NavbarContextType {
  isNavbarDisplayed: boolean;
  setNavbarDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarContext = createContext<NavbarContextType>({
  isNavbarDisplayed: true,
  setNavbarDisplay: () => {},
});
