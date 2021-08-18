import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="headerWrapper">
        <a to="/">
          <div className="logo">
            <h1 className="logoHeading">Employee services</h1>
            <div>
              <img
                src="http://localhost:3005/assets/img/LeverX group.svg"
                alt="LeverX group"
              />
            </div>
            <div>
              <img
                src="http://localhost:3005/assets/img/Employee services.svg"
                alt="Employee services"
              />
            </div>
          </div>
        </a>
        <nav className="headerNavigation">
          <ul className="navigation">
            <li className="navigationList">
              <a className="navigationItem">Address Book</a>
            </li>
            <li className="navigationList">
              <a className="navigationItem__checked" href="#">Leave Requests</a>
            </li>
          </ul>
        </nav>
        <div className="sideItems">
          <div className="headerItem">
            <img
              src="http://localhost:3005/assets/img/plane.svg"
              alt="message icon"
              className="itemImg itemImg_message"
            />
          </div>
          <div className="header__side-items_personal-info">
            <img
              className="personal-mini-avatar"
              alt="personal avatar"
              src="http://localhost:3005/assets/img/userpic_28px.png"
            />
            <p className="personal-name">Anna smith</p>
          </div>
          <div className="headerItem log-out">
            <a>
              <img
                src="http://localhost:3005/assets/img/Vector.svg"
                alt="on off button"
                className="itemImg"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
