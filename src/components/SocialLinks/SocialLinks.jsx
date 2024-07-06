import React from "react";
import styles from "./styles.module.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter size={30} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <FaYoutube size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;
