import Button from "../../../../_components/Button/Button";
import Title from "../../../../_components/Title/Title";
import "./WorksSection.css";
import editsConfig from "../../../../../public/edits.json";
import WorkVideoLink from "./_components/WorkVideoLink/WorkVideoLink";

const WorksSection = () => {
  return (
    <div className="works-section">
      <Title as="h2">My works</Title>
      <article className="works__edits">
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
        <Button>Go watch my other works!</Button>
      </div>
    </div>
  );
};

export default WorksSection;
