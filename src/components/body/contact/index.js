import React from "react";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import "./contact.css";
function Contact() {
  return (
    <div className="contact">
      <label className="section-title">Contact</label>
      <Separator />
      <div className="contact-container">
        <div className="contact-left">
          <p>Let's Talk</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/resumes.pdf")}>
            <i class="fi fi-ss-inbox-in"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
