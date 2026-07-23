import "./SocialsSection.css";

const SocialsSection = () => {
  return (
    <div className="socials-section">
      <h2>My socials</h2>
      <div className="socials__links">
        <div className="socials__socials">
          <button>YouTube</button>
          <button>Instagram</button>
          <button>TikTok</button>
        </div>
        <div className="socials__contacts">
          <button>davidpetersen.0318@gmail.com</button>
        </div>
      </div>
    </div>
  );
};

export default SocialsSection;
