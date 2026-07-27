import Title from "../../../../../_components/Title/Title";

import "./BrandLogotype.css";

const BrandLogotype = () => {
  return (
    <div className="brand-logotype__wrapper">
      <img
        className="brand-logotype__decoration"
        src="vectors/BackgroundDecoration.svg"
        alt=""
      />
      <Title className="brand-logotype__text" as="h1">
        Zyriak
      </Title>
    </div>
  );
};

export default BrandLogotype;
