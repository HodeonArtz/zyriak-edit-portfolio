import Button from "../../../../_components/Button/Button";
import Title from "../../../../_components/Title/Title";
import "./SocialsSection.css";

const SocialsSection = () => {
  return (
    <div className="socials-section">
      <Title as="h2">My socials</Title>
      <div className="socials__links">
        <div className="socials__socials">
          <Button color="yt">YouTube</Button>
          <Button color="ig">Instagram</Button>
          <Button color="tiktok">TikTok</Button>
        </div>
        <div className="socials__contacts">
          <Button color="blue">davidpetersen.0318@gmail.com</Button>
        </div>
      </div>
    </div>
  );
};

export default SocialsSection;
