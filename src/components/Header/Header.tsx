import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-container d-flex ${scrolled ? 'scrolled' : ''}`}>
      <nav className="header-nav">
        <ul className="header-list d-flex">
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;