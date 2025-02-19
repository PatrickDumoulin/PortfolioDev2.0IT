import React, { useState } from "react";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  
  const navItems = {
    EN: ["Home", "Expertise", "Work", "Experience"],
    FR: ["Accueil", "Expertise", "Projets", "Expérience"]
  };

  const getHref = (item) => {
    // Créer un map de traduction pour les sections
    const sectionMap = {
      // EN
      'home': 'home',
      'expertise': 'about',
      'work': 'work',
      'experience': 'skills',
      // FR
      'accueil': 'home',
      'projets': 'work',
      'expérience': 'skills'
    };

    const lowercaseItem = item.toLowerCase();
    const section = sectionMap[lowercaseItem];
    
    if (location.pathname !== '/') {
      return `/#${section}`;
    }
    return `#${section}`;
  };

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {navItems[language].map((item) => (
          <li key={`link-${item}`}>
            <a href={getHref(item)}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-social">
        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'EN' ? 'EN' : 'FR'}
        </button>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            style={{ opacity: 0 }}
            whileInView={{ x: [300, 0], opacity: [0.9, 1] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navItems[language].map((item) => (
                <li key={item}>
                  <a href={getHref(item)} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
