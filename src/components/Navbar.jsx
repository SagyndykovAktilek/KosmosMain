import React from "react";
import logoImage from "../img/Mask group 2.png";
import Us from "../img/US.png (1).png";
import cart from "../icons/SVG (1).svg";
import MenuImage from "../icons/Menu.svg";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo-block">
          <img src={logoImage} alt="logo" />
        </div>
        <div className="info-block">
          <div className="btn-block">
            <button>
              <img src={Us} alt="usaimage" />
              <p>US</p>
            </button>
            <button>
              <img src={cart} alt="" />
            </button>
          </div>
          <div className="menu-block">
            <p>Menu</p>
            <button>
              <img src={MenuImage} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
