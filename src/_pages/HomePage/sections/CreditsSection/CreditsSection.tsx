import "./CreditsSection.css";
const CreditsSection = () => {
  return (
    <div className="credits-section">
      <div className="credits__copyright-section">
        <span className="credits__brand-logo">Zyriak</span>
        <p>© {new Date().getFullYear()} Zyriak</p>
      </div>
      <div className="credits__producer-section">
        <p>Website designed and built by:</p>
        <a href="https://github.com/HodeonArtz" target="_blank">
          <img
            className="credits__producer-logo"
            alt="hdn logo"
            src="img/hodeon-logo-80x80.png"
            title="HodeonArtz"
          />
        </a>
      </div>
    </div>
  );
};

export default CreditsSection;
