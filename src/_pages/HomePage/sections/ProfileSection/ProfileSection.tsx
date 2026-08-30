import Img from "../../../../_components/Img/Img";
import BrandLogotype from "./_components/BrandLogotype/BrandLogotype";
import GraphicDecoration1 from "./_components/GraphicDecoration1/GraphicDecoration1";
import "./ProfileSection.css";

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile__whitespace-decoration">
        <div className="decoration-wrapper">
          <GraphicDecoration1 />
        </div>
      </div>
      <Img
        src="img/zyriak-profile-photo.jpg"
        alt="zyriak photo"
        className="profile__profile-picture"
        glossy
      ></Img>

      <article className="profile__content" aria-label="About Zyriak">
        <BrandLogotype />
        <p className="profile__description" aria-label="Zyriak's description">
          <i>Just vibing...</i>
        </p>
      </article>
    </div>
  );
};

export default ProfileSection;
