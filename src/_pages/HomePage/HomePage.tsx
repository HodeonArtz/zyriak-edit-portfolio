import GlossyContainer from "../../_components/GlossyContainer/GlossyContainer";
import ProfileSection from "./sections/ProfileSection/ProfileSection";
import SocialsSection from "./sections/SocialsSection/SocialsSection";
import WorksSection from "./sections/WorksSection/WorksSection";

const HomePage = () => {
  return (
    <>
      <GlossyContainer id="profile-section">
        <ProfileSection />
      </GlossyContainer>
      <GlossyContainer id="works-section">
        <WorksSection />
      </GlossyContainer>
      <GlossyContainer id="socials-section">
        <SocialsSection />
      </GlossyContainer>
      <GlossyContainer id="credits-section">
        <div>
          <div className="credits-section">
            <p>
              Website designed and built by: <img alt="hdn logo" />
            </p>
          </div>
        </div>
      </GlossyContainer>
      <div className="space"> </div>
    </>
  );
};

export default HomePage;
