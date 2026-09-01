import Button from "../../_components/Button/Button";
import GlossyContainer from "../../_components/GlossyContainer/GlossyContainer";
import useNavbarContext from "../../_components/Navbar/_hooks/useNavbarContext";
import Title from "../../_components/Title/Title";
import "./NotFound.css";

const NotFound = () => {
  useNavbarContext(false);
  return (
    <div className="not-found__layout">
      <GlossyContainer>
        <div className="not-found__section">
          <div className="not-found__heading">
            <Title
              as="h1"
              className="not-found__title"
              aria-label="Error 404 - Not Found"
            >
              404
            </Title>
            <Title as="h2" className="not-found__subtitle">
              not found
            </Title>
          </div>
          <div className="not-found__description">
            <p>The requested page was not found. However... You can always:</p>
            <Button as="anchor" href="/">
              Return to homepage
            </Button>
          </div>
        </div>
      </GlossyContainer>
    </div>
  );
};

export default NotFound;
