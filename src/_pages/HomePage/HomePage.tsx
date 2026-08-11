import GlossyContainer from "../../_components/GlossyContainer/GlossyContainer";
import ProfileSection from "./sections/ProfileSection/ProfileSection";
import SocialsSection from "./sections/SocialsSection/SocialsSection";
import WorksSection from "./sections/WorksSection/WorksSection";

const HomePage = () => {
  return (
    <>
      <GlossyContainer id="profile">
        <ProfileSection />
      </GlossyContainer>
      <GlossyContainer id="works">
        <WorksSection />
      </GlossyContainer>
      <GlossyContainer id="socials">
        <SocialsSection />
      </GlossyContainer>
      <GlossyContainer id="credits">
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
