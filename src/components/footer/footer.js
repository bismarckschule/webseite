import React from "react";
import footerData from "./footer.data.js";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>{footerData.companyName}</p>
          </div>
          <div className="footer-right">
            <ul className="social-media-links">
              {footerData.socialMediaLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{footerData.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
