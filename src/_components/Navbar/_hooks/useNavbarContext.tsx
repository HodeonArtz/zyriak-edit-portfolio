import { useContext, useEffect } from "react";
import { NavbarContext } from "../NavbarContext";

const useNavbarContext = (initialNavbarDisplayStatus: boolean) => {
  const { isNavbarDisplayed, setNavbarDisplay } = useContext(NavbarContext);
  useEffect(() => {
    setNavbarDisplay(initialNavbarDisplayStatus);
  }, [setNavbarDisplay, initialNavbarDisplayStatus]);
  return { isNavbarDisplayed, setNavbarDisplay };
};
export default useNavbarContext;
