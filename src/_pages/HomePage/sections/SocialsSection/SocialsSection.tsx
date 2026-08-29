import Button from "../../../../_components/Button/Button";
import Title from "../../../../_components/Title/Title";
import "./SocialsSection.css";
import socials from "../../../../../socials.json";

const SocialsSection = () => {
  return (
    <div className="socials-section">
      <Title as="h2">My socials</Title>
      <div className="socials__links">
        <div className="socials__socials">
          <Button
            className="socials__button-link"
            color="yt"
            as="anchor"
            href={socials.urls.youtube}
            target="_blank"
          >
            YouTube
          </Button>
          <Button
            className="socials__button-link"
            color="ig"
            as="anchor"
            href={socials.urls.instagram}
            target="_blank"
          >
            Instagram
          </Button>
          <Button
            className="socials__button-link"
            color="tiktok"
            as="anchor"
            href={socials.urls.tiktok}
            target="_blank"
          >
            TikTok
          </Button>
        </div>
        <div className="socials__contacts">
          <Button
            className="socials__button-link"
            color="blue"
            as="anchor"
            href={`mailto:${socials.contact.email}`}
            target="_blank"
          >
            davidpetersen.0318@gmail.com
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialsSection;
