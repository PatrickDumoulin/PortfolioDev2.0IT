import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { useLanguage } from '../../../context/LanguageContext';
import { images } from '../../../constants';
import './SpaceGame.scss';

const translations = {
  EN: {
    title: ["Space", "Game"],
    description: "A space game developed with Unity, featuring dynamic movement mechanics, handcrafted sound design and music, original level design, and immersive gameplay elements. This project demonstrates advanced game development techniques and interactive design principles.",
    sections: {
      features: {
        title: "Key Features",
        items: [
          "Level Design",
          "SpaceShip design in blender",
          "Particle Effects & VFX",
          "Power-up System",
          "Score System",
          "Responsive Controls",
          "Sound Effects & Music design",
          "Performance Optimization"
        ]
      },
      tech: {
        title: "Technologies Used",
        items: [
          "Unity",
          "C#",
          "Visual Studio 2022",
          "Git",
          "Blender"
        ]
      },
      skills: {
        title: "Skills Developed",
        items: [
          "Game Development",
          "3D Modeling & Animation",
          "Performance Optimization",
          "UI/UX Design",
          "Version Control",
          "Project Architecture"
        ]
      },
      duration: {
        title: "Project Duration",
        text: "3 Months (Personal Project)"
      },
      buttons: {
        code: "View Code",
        back: "Back"
      }
    }
  },
  FR: {
    title: ["Space", "Game"],
    description: "Un jeu spatial développé avec Unity, comprenant des mécaniques de déplacements dynamiques, un sound design et musique fait à la main, un design original de niveaux et des éléments de gameplay immersifs. Ce projet démontre des techniques avancées de développement de jeux et des principes de design interactif.",
    sections: {
      features: {
        title: "Fonctionnalités Clés",
        items: [
          "Design des Niveaux",
          "Design du Vaisseau sous Blender",
          "Effets de Particules & VFX",
          "Système de Power-ups",
          "Système de Score",
          "Contrôles Réactifs",
          "Design Sonore & Musical",
          "Optimisation des Performances"
        ]
      },
      tech: {
        title: "Technologies Utilisées",
        items: [
          "Unity",
          "C#",
          "Visual Studio 2022",
          "Git",
          "Blender"
        ]
      },
      skills: {
        title: "Compétences Développées",
        items: [
          "Développement de Jeux",
          "Modélisation & Animation 3D",
          "Optimisation des Performances",
          "Design UI/UX",
          "Gestion de Version",
          "Architecture de Projet"
        ]
      },
      duration: {
        title: "Durée du Projet",
        text: "3 Mois (Projet Personnel)"
      },
      buttons: {
        code: "Voir le Code",
        back: "Retour"
      }
    }
  }
};

const SpaceGame = () => {
  const { language } = useLanguage();
  
  return (
    <div className="app__project">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__project-content"
      >
        <div className="app__project-header">
          <h1 className="head-text">
            {translations[language].title[0]}{" "}
            <span>{translations[language].title[1]}</span>
          </h1>
        </div>

        <div className="app__project-main">
          <div className="app__project-info">
            <p className="p-text">
              {translations[language].description}
            </p>

            <motion.div className="app__project-img">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qlJrzye2OLU"
                  title="SpaceGame Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <div className="app__project-features">
              <h3>{translations[language].sections.features.title}:</h3>
              <ul>
                {translations[language].sections.features.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="app__project-tech">
              <h3>{translations[language].sections.tech.title}:</h3>
              <div className="tech-stack">
                {translations[language].sections.tech.items.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>

            <div className="app__project-skills">
              <h3>{translations[language].sections.skills.title}:</h3>
              <ul>
                {translations[language].sections.skills.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="app__project-duration">
              <h3>{translations[language].sections.duration.title}:</h3>
              <p className="p-text">{translations[language].sections.duration.text}</p>
            </div>

            <div className="app__project-buttons">
              <a href="https://github.com/PatrickDumoulin/Space-Game" target="_blank" rel="noreferrer" className="code-button">
                {translations[language].sections.buttons.code}
              </a>
              <a href="/" className="back-button">
                {translations[language].sections.buttons.back}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(SpaceGame, 'project');
