import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { useLanguage } from '../../../context/LanguageContext';
import { images } from '../../../constants';
import './AnimalSpecies.scss';

const translations = {
  EN: {
    title: ["Animal Species", "Classifier"],
    description: "An advanced machine learning application built with ML.NET and React, capable of classifying animal species from images. This project demonstrates the integration of AI/ML capabilities with modern web technologies for practical applications.",
    sections: {
      features: {
        title: "Key Features",
        items: [
          "Image Classification",
          "Real-time Processing",
          "Species Database",
          "Interactive UI",
          "ML Model Integration",
          "Data Visualization",
          "API Integration"
        ]
      },
      tech: {
        title: "Technologies Used",
        items: [
          "ML.NET",
          "C#",
          "ASP.NET Core",
          "React"
        ]
      },
      skills: {
        title: "Skills Developed",
        items: [
          "Machine Learning",
          "Data Processing",
          "API Development",
          "Frontend Development",
          "Model Training",
          "System Integration"
        ]
      },
      duration: {
        title: "Project Duration",
        text: "2 Months (Personal Project)"
      },
      buttons: {
        code: "View Code",
        back: "Back"
      }
    }
  },
  FR: {
    title: ["Classificateur", "d'Espèces"],
    description: "Une application avancée d'apprentissage automatique construite avec ML.NET et React, capable de classifier les espèces animales à partir d'images. Ce projet démontre l'intégration des capacités d'IA/ML avec les technologies web modernes pour des applications pratiques.",
    sections: {
      features: {
        title: "Fonctionnalités Clés",
        items: [
          "Classification d'Images",
          "Traitement en Temps Réel",
          "Base de Données d'Espèces",
          "Interface Interactive",
          "Intégration de Modèle ML",
          "Visualisation des Données",
          "Intégration API"
        ]
      },
      tech: {
        title: "Technologies Utilisées",
        items: [
          "ML.NET",
          "C#",
          "ASP.NET Core",
          "React"
        ]
      },
      skills: {
        title: "Compétences Développées",
        items: [
          "Apprentissage Automatique",
          "Traitement des Données",
          "Développement d'API",
          "Développement Frontend",
          "Entraînement de Modèles",
          "Intégration Système"
        ]
      },
      duration: {
        title: "Durée du Projet",
        text: "2 Mois (Projet Personnel)"
      },
      buttons: {
        code: "Voir le Code",
        back: "Retour"
      }
    }
  }
};

const AnimalSpecies = () => {
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
                  src="https://www.youtube.com/embed/J0W-rCyOOgY"
                  title="Animal Species Classifier Demo"
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
              <a href="https://github.com/PatrickDumoulin/Animal-Species-Classifier.git" target="_blank" rel="noreferrer" className="code-button">
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

export default AppWrap(AnimalSpecies, 'project');
