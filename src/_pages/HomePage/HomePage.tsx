import GlossyContainer from "../../_components/GlossyContainer/GlossyContainer";
import ProfileSection from "./sections/ProfileSection/ProfileSection";
import SocialsSection from "./sections/SocialsSection/SocialsSection";
import WorksSection from "./sections/WorksSection/WorksSection";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";
import CreditsSection from "./sections/CreditsSection/CreditsSection";
import useNavbarContext from "../../_components/Navbar/_hooks/useNavbarContext";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

const HomePage = () => {
  const { contextSafe } = useGSAP();
  const handleClickToSocialsSection = contextSafe(() => {
    gsap.to(".socials__button-link", {
      scale: 1.1,
      yoyo: true,
      duration: 0.2,
      ease: "power4.out",
      stagger: {
        each: 0.1,
        yoyo: true,
        repeat: 1,
        amount: 0.3,
      },
      onComplete: function () {
        gsap.set(this.targets(), { clearProps: "all" });
      },
    });
  });

  useNavbarContext(true);
  return (
    <>
      <GlossyContainer id="profile-section">
        <ProfileSection />
      </GlossyContainer>
      <GlossyContainer id="works-section">
        <WorksSection onClickToSocialsSection={handleClickToSocialsSection} />
      </GlossyContainer>
      <GlossyContainer id="socials-section">
        <SocialsSection />
      </GlossyContainer>
      <GlossyContainer id="credits-section">
        <CreditsSection />
      </GlossyContainer>
      <div className="space"> </div>
    </>
  );
};

export default HomePage;
