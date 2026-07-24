import Img from "../../../../_components/Img/Img";
import Title from "../../../../_components/Title/Title";
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
        <Title as="h1">Zyriak</Title>
        <p>
          <i>Just vibing...</i>
        </p>
      </article>
    </div>
  );
};

export default ProfileSection;
