import Img from "../../../../_components/Img/Img";
import BrandLogotype from "./_components/BrandLogotype";
import "./ProfileSection.css";

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <Img
        src="img/zyriak-profile-photo.jpg"
        alt="zyriak photo"
        className="profile__profile-picture"
        glossy
      />
      <article className="profile__content">
        <BrandLogotype />
        <p>
          <i>Just vibing...</i>
        </p>
      </article>
    </div>
  );
};

export default ProfileSection;
