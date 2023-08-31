import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="title-footer">
          <h1>INTERIURS</h1>
          <a href="https://www.instagram.com/m.rakann/" className="ig">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-tiktok"></i>
          <p className="desc-foot">Created by Rakan</p>
        </div>
        <div className="location-footer">
          <h1>Location</h1>
          <p className="desc-foot">Jl. Daan Mogot No.62</p>
          <p className="desc-foot">Banten, Indonesia</p>
        </div>
        <div className="links-footer">
          <h1>Links</h1>
          <ul>
            <li>
              <a href="/" className="desc-foot">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="desc-foot">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="desc-foot">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="desc-foot">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="legal-footer">
          <h1>Legal</h1>
          <p className="desc-foot">Privacy Policy</p>
          <p className="desc-foot">Terms of Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
