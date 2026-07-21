import GlossyContainer from "../_components/GlossyContainer/GlossyContainer";
import ProfileSection from "../_components/ProfileSection/ProfileSection";

const HomePage = () => {
  return (
    <>
      <GlossyContainer>
        <ProfileSection />
      </GlossyContainer>
      <section>
        <h2>My works</h2>
        <img src="" alt="edit-1" />
        <img src="" alt="edit-2" />
        <img src="" alt="edit-3" />
        <img src="" alt="edit-4" />
        <img src="" alt="edit-5" />
        <img src="" alt="edit-6" />
        <img src="" alt="edit-7" />
        <img src="" alt="edit-8" />
        <img src="" alt="edit-9" />
        <img src="" alt="edit-10" />
        <img src="" alt="edit-11" />
        <img src="" alt="edit-12" />
        <div className="goto-socials-button-container">
          <button>Go watch my other works!</button>
        </div>
      </section>
      <section>
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
      </section>
    </>
  );
};

export default HomePage;
