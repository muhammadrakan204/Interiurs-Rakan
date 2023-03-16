import "../styles/header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-kiri">
          <div className="title-header">
            <a href="/" className="target-cursor">
              Interiurs
            </a>
          </div>
          <div className="tagline">
            <div className="tagline-wrapper">
              <p>Design your home with passion</p>
            </div>
            <button>
              <a href="/shop" className="button-header">
                View Project
              </a>
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="header-kanan">
          <div className="img-header"></div>
        </div>
        <div className="body-cursor"></div>
        <div className="child-cursor"></div>
      </header>
    </>
  );
};

export default Header;
