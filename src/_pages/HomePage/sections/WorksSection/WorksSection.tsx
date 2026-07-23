import Img from "../../../../_components/Img/Img";
import "./WorksSection.css";

const WorksSection = () => {
  return (
    <div className="works-section">
      <h2>My works</h2>
      <article className="works__edits">
        <Img glossy src="" alt="edit-1" />
        <Img glossy src="" alt="edit-2" />
        <Img glossy src="" alt="edit-3" />
        <Img glossy src="" alt="edit-4" />
        <Img glossy src="" alt="edit-5" />
        <Img glossy src="" alt="edit-6" />
        <Img glossy src="" alt="edit-7" />
        <Img glossy src="" alt="edit-8" />
        <Img glossy src="" alt="edit-9" />
        <Img glossy src="" alt="edit-10" />
        <Img glossy src="" alt="edit-11" />
        <Img glossy src="" alt="edit-12" />
      </article>

      <div className="works__goto-socials-button-container">
        <button>Go watch my other works!</button>
      </div>
    </div>
  );
};

export default WorksSection;
