import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/abhinav-singh-bhadauriya-198566201/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Abhinav Singh Bhadauriya
              </a>
            </p>
            <h4>Agency</h4>
            <p>
              <a
                href="https://bufferworks.in"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Bufferworks.in
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/abhinavsinghbhadauriya"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinav-singh-bhadauriya-198566201/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/abhinavsingh.16/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/bufferworks.in"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Bufferworks Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Abhinav Singh Bhadauriya</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
