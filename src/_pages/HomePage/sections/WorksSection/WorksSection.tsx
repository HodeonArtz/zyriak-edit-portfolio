import Button from "../../../../_components/Button/Button";
import Title from "../../../../_components/Title/Title";
import "./WorksSection.css";
import editsConfig from "../../../../../public/edits.json";
import WorkVideoLink from "./_components/WorkVideoLink/WorkVideoLink";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

interface WorksSectionProps {
  onClickToSocialsSection: () => void;
}

const WorksSection = ({ onClickToSocialsSection }: WorksSectionProps) => {
  const { contextSafe } = useGSAP();

  const handleClickToSocialsSection = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(window, {
      duration: 1,
      scrollTo: {
        y: "#socials-section",
        offsetY: 60,
      },
      ease: "power4.out",
    }).call(onClickToSocialsSection, [], "-=0.6");
  });

  return (
    <div className="works-section">
      <Title as="h2">My works</Title>
      <article
        className="works__edits"
        aria-label="Variety of Zyriak's works (mainly edits)"
      >
        {editsConfig.edits.map(({ id, alt, img: src, url }) => (
          <WorkVideoLink
            href={url}
            key={`work-video-link-${id}`}
            alt={alt}
            src={src}
          />
        ))}
      </article>

      <div className="works__goto-socials-button-container">
        <Button
          onClick={handleClickToSocialsSection}
          aria-label="Navigate to 'My Socials' section"
          aria-description="Button to navigate to Zyriak's socials"
        >
          Go watch my other works!
        </Button>
      </div>
    </div>
  );
};

export default WorksSection;
