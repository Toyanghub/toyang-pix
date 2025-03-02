import React from "react";
import "./footer.css";

// function Footer() {
//   return (
//     <div className="footer">
//       <div className="footer-content">
//         Created and Designed <span className="emoji">🔥</span> by{" "}
//         <span className="author-name">Selwyn Tayong</span>{" "}
//         <span className="year">© {new Date().getFullYear()}</span>
//       </div>
//     </div>
//   );
// }

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        Crafted with passion <span className="emoji">🔥</span> by{" "}
        <span className="author-name">Selwyn Tayong</span> ©{" "}
        <span className="year">{new Date().getFullYear()}</span>
      </div>
    </div>
  );
}

export default Footer;
