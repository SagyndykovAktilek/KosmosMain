import React from "react";
// import "./footer.module.css";
import myStoryLogo from "../../icons/My-Story-Logo.svg";
import facebook from "../../icons/facebook(2).svg";
import instagram from "../../icons/instagram(3).svg";
import linkedin from "../../icons/linkedin(2).svg";
import line from '../../icons/Line 7.svg'
import meteor from '../../icons/line-meteor.svg'
import someMeteor from '../../img/some-meteor.png'

function Footer() {
  return (
    <>
      <main>
				<img className="line-meteor" src={meteor} alt="" width={200} />
				<img className="some-meteor" src={someMeteor} alt="" width={290} />
        <section-1>
          <div>
            <img src={myStoryLogo} alt="" />
            <p>
              Explore the Magic <br /> A unique gift for your loved one
            </p>
          </div>
          <div>
            <div className="link">
              <a href="#">Home</a>
              <a href="#">Personalized Books</a>
              <a href="#">Contact</a>
              <a href="#">Privacy</a>
            </div>
            <div className="social-media-block">
              <h3>Social</h3>
              <div>
                <a href="">
                  <img src={facebook} alt="" />
                </a>
                <a href="">
                  <img src={instagram} alt="" />
                </a>
                <a href="">
                  <img src={linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section-1>
        <section-2>
          <div className="main-sec-2">
						<img src={line} alt="" />
            <p>mystory.com© all right reserve</p>
          </div>
        </section-2>
      </main>
    </>
  );
}

export default Footer;
