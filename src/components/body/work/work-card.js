// import React from "react";
import React, { useState } from "react";
import "./work-card.css";

// function WorkCard({ item }) {
//   return (
//     <div className="work-card">
//       <img src={item.companyLogo} className="work-logo" />
//       <div className="work-info">
//         <label className="company-name">{item.company}</label>
//         <div className="work-dates">
//           <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
//         </div>
//         <div className="work-desc">
//           <p>{item.work}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function WorkCard({ item }) {
//   return (
//     <div className="work-card">
//       <img
//         src={item.companyLogo}
//         className="work-logo"
//         alt={`${item.company} logo`}
//       />
//       <div className="work-info">
//         <h3 className="company-name">{item.company}</h3>
//         <div className="work-designation">{item.designation}</div>
//         <div className="work-dates">
//           <span>{item.dateJoining}</span> - <span>{item.dateEnd}</span>
//         </div>
//         <div className="work-desc">{item.work}</div>
//       </div>
//     </div>
//   );
// }

function WorkCard({ item }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    if (!showModal) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
    }
  };

  return (
    <>
      <div className="work-card" onClick={toggleModal}>
        <img
          src={item.companyLogo}
          className="work-logo"
          alt={`${item.company} logo`}
        />
        <div className="work-info">
          <h3 className="company-name">{item.company}</h3>
          <div className="work-designation">{item.designation}</div>
          <div className="work-dates">
            <span>{item.dateJoining}</span> - <span>{item.dateEnd}</span>
          </div>
          <div className="work-desc">{item.work}</div>
        </div>
      </div>

      {showModal && (
        <div className="work-modal-overlay" onClick={toggleModal}>
          <div
            className="work-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <img
                src={item.companyLogo}
                className="modal-logo"
                alt={`${item.company} logo`}
              />
              <div className="modal-header-text">
                <h2 className="modal-company-name">{item.company}</h2>
                <h3 className="modal-designation">{item.designation}</h3>
                <div className="modal-dates">
                  <span>{item.dateJoining}</span> - <span>{item.dateEnd}</span>
                </div>
              </div>
              <button className="modal-close" onClick={toggleModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-description">{item.work}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkCard;
