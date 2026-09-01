import { useContext, useEffect } from "react";
import { NavbarContext } from "../NavbarContext";

const useNavbarContext = (displayNavbar: boolean) => {
  const { isNavbarDisplayed, setNavbarDisplay } = useContext(NavbarContext);
  useEffect(() => {
    setNavbarDisplay(displayNavbar);
  }, [setNavbarDisplay, displayNavbar]);
  return { isNavbarDisplayed, setNavbarDisplay };
};
export default useNavbarContext;
