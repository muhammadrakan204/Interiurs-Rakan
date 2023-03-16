import "./headerAbout.css";

const HeaderAbout = () => {
  return (
    <>
      <div className="header-about">
        <p className="title-about target-cursor">
          <a href="/about">ABOUT</a>
        </p>
        <img
          src="./images/Header_kiri.webp"
          alt="photo_header"
          className="img-header-kiri"
        />
        <img
          src="./images/Header_kanan.webp"
          alt="photo_header"
          className="img-header-kanan"
        />
      </div>
      <div className="body-cursor"></div>
      <div className="child-cursor"></div>
    </>
  );
};

export default HeaderAbout;
