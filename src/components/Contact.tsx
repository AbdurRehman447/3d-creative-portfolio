import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:abdur.prod@gmail.com" data-cursor="disable">
                abdur.prod@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/AbdurRehman447"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mani-baig/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100091908776684"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <a
              href="https://drive.google.com/file/d/1HxwW-SR9U53m4TYBEPtSmYttctvfxzbb/view"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-resume"
            >
              <TbDownload /> Download Resume
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Built by <span>Abdur Rehman</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Abdur Rehman. All Rights Reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
