import React from 'react';
import './Footer.css';

import LogoLinkedin from "../../assets/Linkedin.svg"
import LogoGitHub from "../../assets/GitHub.svg"

const Footer: React.FC = () => {
  return (
    <footer className="footer-container" id="contact">
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/pedro-rodrigues-4b1267217/" target="_blank">
          <img src={LogoLinkedin} alt="Icon Linkedin" />
        </a>
        
        <a href="https://github.com/prPedr" target="_blank">
          <img src={LogoGitHub} alt="Icon GitGub" />
        </a>
      </div>
      
      <p className="footer-copyright">
        Copyright ©{new Date().getFullYear()} Todos os direitos reservados 
      </p>
    </footer>
  );
};

export default Footer;