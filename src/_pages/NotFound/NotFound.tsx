import useNavbarContext from "../../_components/Navbar/_hooks/useNavbarContext";

const NotFound = () => {
  useNavbarContext(false);
  return <div>NotFound</div>;
};

export default NotFound;
