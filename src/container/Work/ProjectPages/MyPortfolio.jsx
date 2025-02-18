import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { useLanguage } from '../../../context/LanguageContext';
import { images } from '../../../constants';
import './MyPortfolio.scss';

const translations = {
  EN: {
    title: ["My", "Portfolio"],
    description: "A modern, responsive portfolio website built with React and Framer Motion. This project showcases my work, skills, and experience through an interactive and visually appealing interface. The design focuses on user experience while maintaining performance and accessibility.",
    sections: {
      features: {
        title: "Key Features",
        items: [
          "Responsive Design",
          "Smooth Animations",
          "Project Showcase",
          "Skills Visualization",
          "Dynamic Content",
          "Dark Theme",
          "Performance Optimized"
        ]
      },
      tech: {
        title: "Technologies Used",
        items: [
          "React",
          "Framer Motion",
          "SCSS",
          "JavaScript",
          "React Router"
        ]
      },
      skills: {
        title: "Skills Developed",
        items: [
          "Frontend Development",
          "UI/UX Design",
          "Animation Implementation",
          "Responsive Design",
          "Performance Optimization",
          "Component Architecture"
        ]
      },
      duration: {
        title: "Project Duration",
        text: "2 Weeks (Personal Project)"
      },
      buttons: {
        code: "View Code",
        back: "Back"
      }
    }
  },
  FR: {
    title: ["Mon", "Portfolio"],
    description: "Un site portfolio moderne et réactif construit avec React et Framer Motion. Ce projet présente mon travail, mes compétences et mon expérience à travers une interface interactive et visuellement attrayante. Le design met l'accent sur l'expérience utilisateur tout en maintenant la performance et l'accessibilité.",
    sections: {
      features: {
        title: "Fonctionnalités Clés",
        items: [
          "Design Réactif",
          "Animations Fluides",
          "Présentation des Projets",
          "Visualisation des Compétences",
          "Contenu Dynamique",
          "Thème Sombre",
          "Performance Optimisée"
        ]
      },
      tech: {
        title: "Technologies Utilisées",
        items: [
          "React",
          "Framer Motion",
          "SCSS",
          "JavaScript",
          "React Router"
        ]
      },
      skills: {
        title: "Compétences Développées",
        items: [
          "Développement Frontend",
          "Design UI/UX",
          "Implémentation d'Animations",
          "Design Réactif",
          "Optimisation des Performances",
          "Architecture des Composants"
        ]
      },
      duration: {
        title: "Durée du Projet",
        text: "2 Semaines (Projet Personnel)"
      },
      buttons: {
        code: "Voir le Code",
        back: "Retour"
      }
    }
  }
};

const MyPortfolio = () => {
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
              <div className="image-container">
                <img 
                  src={images.portfolio}
                  alt="Portfolio Project"
                  className="project-thumbnail"
                />
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
              <a href="https://github.com/PatrickDumoulin/PortfolioDev2.0.git" target="_blank" rel="noreferrer" className="code-button">
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

export default AppWrap(MyPortfolio, 'project');
