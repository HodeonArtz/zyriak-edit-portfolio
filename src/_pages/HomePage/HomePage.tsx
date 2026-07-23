import GlossyContainer from "../../_components/GlossyContainer/GlossyContainer";
import ProfileSection from "./sections/ProfileSection/ProfileSection";
import SocialsSection from "./sections/SocialsSection/SocialsSection";
import WorksSection from "./sections/WorksSection/WorksSection";

const HomePage = () => {
  return (
    <>
      <GlossyContainer>
        <ProfileSection />
      </GlossyContainer>
      <GlossyContainer>
        <WorksSection />
      </GlossyContainer>
      <GlossyContainer>
        <SocialsSection />
      </GlossyContainer>
      <GlossyContainer>
        <div>
          <div className="credits-section">
            <p>
              Website designed and built by: <img alt="hdn logo" />
            </p>
          </div>
        </div>
      </GlossyContainer>
    </>
  );
};

export default HomePage;
