import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { useLanguage } from '../../context/LanguageContext';
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const translations = {
  EN: {
    title: "LANGUAGES & FRAMEWORKS",
    commits: "GITHUB COMMITS",
    projects: "FINISHED PROJECTS",
    role: "FullStack Web Developer",
    bio: "I'm Patrick, a passionate developer based in Québec City with a deep love for creating innovative applications and games. In addition, I'm a musician and enjoy exploring creative avenues like producing music professionally."
  },
  FR: {
    title: "LANGAGES & FRAMEWORKS",
    commits: "COMMITS GITHUB",
    projects: "PROJETS TERMINÉS",
    role: "Développeur Web FullStack",
    bio: "Je suis Patrick, un développeur passionné basé à Québec, avec un profond intérêt pour la création d'applications et de jeux innovants. De plus, je suis musicien et j'aime explorer des avenues créatives comme la production musicale professionnelle."
  }
};

const stats = [
  { titleKey: "title", value: 10, suffix: "+" },
  { titleKey: "commits", value: 569, suffix: "" },
  { titleKey: "projects", value: 16, suffix: "+" },
];

const Counter = ({ value, suffix, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().substring(0, 3));
    const incrementTime = 2000 / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counter-item">
      <h2 className="counter-value">
        {count}
        {suffix}
      </h2>
      <p className="counter-title">{title}</p>
    </div>
  );
};

const Header = () => {
  const { language } = useLanguage();
  
  return (
    <div className="app__header app__flex">
      <div className="app__header-content">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <div style={{ marginLeft: 20 }}>
                <h1 className="head-text">Patrick Dumoulin</h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">{translations[language].role}</p>
            </div>

            <div className="profile-img">
              <img src={images.Maphoto} alt="profile" />
            </div>

            <motion.div
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__header-stats"
            >
              {stats.map((stat, index) => (
                <Counter
                  key={index}
                  value={stat.value}
                  suffix={stat.suffix}
                  title={translations[language][stat.titleKey]}
                />
              ))}
            </motion.div>

            <motion.div
              variant={scaleVariants}
              whileInView={{ opacity: [0, 1] }}
              className="app__header-bio"
            >
              <p>{translations[language].bio}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
