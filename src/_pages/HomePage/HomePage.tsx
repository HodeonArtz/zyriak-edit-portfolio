import GlossyContainer from "../../_components/GlossyContainer/GlossyContainer";
import ProfileSection from "./sections/ProfileSection/ProfileSection";
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
        <div>
          <h2>My socials</h2>
          <button>YouTube</button>
          <button>Instagram</button>
          <button>TikTok</button>
          <button>davidpetersen.0318@gmail.com</button>
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
