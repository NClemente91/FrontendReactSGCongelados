import React from "react";

import "../Contact/Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactContainer-text">
        <p>SG Congelados - Página Educativa</p>
      </div>
      <div className="contactContainer-logos">
        <a
          href="https://www.facebook.com/search/top?q=sg%20congelados"
          className="contactContainer-links"
        >
          <img src="/assets/images/icons/logo-fb.svg" alt="Logo Facebook" />
        </a>
        <a
          href="https://www.instagram.com/sg_congelados/?hl=es-la"
          className="contactContainer-links"
        >
          <img src="/assets/images/icons/logo-ig.svg" alt="Logo Instagram" />
        </a>
        <a href="https://web.whatsapp.com/" className="contactContainer-links">
          <img src="/assets/images/icons/logo-wsp.svg" alt="Logo WhatsApp" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
