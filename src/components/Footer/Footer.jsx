import React from "react";
import "./footer.css";
import  TwitterLogo from "../../assets/twitter-3-svgrepo-com.svg"
import DiscordLogo from "../../assets/discord-svgrepo-com.svg"

const Footer = () => {
  const list = [
    { id: 1, name: "Kujira" },
    { id: 2, name: "Developer" },
    { id: 3, name: "Docs" },
    { id: 4, name: "Merch" },
    { id: 5, name: "Apps" },
    { id: 6, name: "Connect to Migration Network" },
  ];
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-list">
              <ul>
                {list.map((item) => (
                  <li key={item.id}>
                    <a href="/">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-icons">
                  <img src={TwitterLogo} alt="logo" />
                  <img src={DiscordLogo} alt="logo" />
                  <img src={TwitterLogo} alt="logo" />
                  <img src={TwitterLogo} alt="logo" />
                  <img src={TwitterLogo} alt="logo" />
            </div>
          </div>
          {/* <div className="footer-bottom">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;