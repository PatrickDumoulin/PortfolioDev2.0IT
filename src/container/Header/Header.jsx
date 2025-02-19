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
    roles: {
      tech: "IT Technician",
      dev: "FullStack Web Developer"
    },
    bio: "I'm Patrick, an IT professional based in Québec City, specializing in technical support, system administration, and web development. With expertise in both hardware and software solutions, I combine technical troubleshooting skills with programming abilities to deliver comprehensive IT solutions. I'm also passionate about creating innovative applications and enjoy exploring creative technologies."
  },
  FR: {
    title: "LANGAGES & FRAMEWORKS",
    commits: "COMMITS GITHUB",
    projects: "PROJETS TERMINÉS",
    roles: {
      tech: "Technicien Informatique",
      dev: "Développeur Web FullStack"
    },
    bio: "Je suis Patrick, un professionnel de l'informatique basé à Québec, spécialisé en support technique, administration système et développement web. Combinant expertise en solutions matérielles et logicielles, j'allie compétences en dépannage technique et en programmation pour fournir des solutions informatiques complètes. Je suis également passionné par la création d'applications innovantes et j'aime explorer les nouvelles technologies."
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
              <p className="p-text">{translations[language].roles.tech}</p>
              <div className="role-divider"></div>
              <p className="p-text">{translations[language].roles.dev}</p>
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
