import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

// function About() {
//   return (
//     <div className="about">
//       <div className="about-top">
//         <div className="about-info">
//           Hey there! 👋 I'm <br />{" "}
//           <span className="info-name">Selwyn Tayong.</span>
//           <br /> Crafting code with a smile. Let's build something awesome!
//         </div>
//         <div className="about-photo">
//           <img
//             src={require("../../../assets/coding.png")}
//             className="picture"
//           />
//         </div>
//       </div>
//       <SocialContact />
//     </div>
//   );
// }

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h1>
            Hey there! 👋 I'm <br />
            <span className="info-name">Selwyn Tayong.</span>
          </h1>
          <p>Crafting code with a smile. Let's build something awesome!</p>
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
            alt="Developer illustration"
          />
        </div>
      </div>
      <div className="about-social">
        <SocialContact />
      </div>
    </div>
  );
}

export default About;
