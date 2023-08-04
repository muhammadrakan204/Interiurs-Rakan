import "./headercontact.css";

const HeaderContact = () => {
  return (
    <>
      <div className="container-contact">
        <div className="title-contact-wrapper">
          <p className="title-contact tc1">Interior design &</p>
          <p className="title-contact">architecture studio</p>
        </div>
        <div className="hero-contact">
          <p className="git"> GET IN TOUCH</p>
          <div className="email">
            <p className="email-contact">EMAIL</p>
            <p className="email-contact-desc">INTERIURS@GMAIL.COM</p>
            <p className="email-contact">CHEALSEA OFFICE</p>
            <p className="email-contact-desc">(+44) 1536 6222</p>
            <p className="email-contact">BERLIN OFFICE</p>
            <p className="email-contact-desc">(+49) 19288 092321</p>
            <i class="fa-solid fa-chevron-right"></i>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className="body-cursor"></div>
        <div className="child-cursor"></div>
      </div>
    </>
  );
};

export default HeaderContact;
