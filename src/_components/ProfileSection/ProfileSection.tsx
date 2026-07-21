import Img from "../Img/Img";
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
      <h1>Zyriak</h1>
      <p>
        <i>Just vibing...</i>
      </p>
    </div>
  );
};

export default ProfileSection;
