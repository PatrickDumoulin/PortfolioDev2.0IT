import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { useLanguage } from '../../../context/LanguageContext';
import { images } from '../../../constants';
import './ModernRecruit.scss';

const translations = {
  EN: {
    title: ["Modern", "Recruit"],
    description: "A modern recruitment platform built with ASP.NET Core, featuring advanced job matching algorithms, applicant tracking, and automated recruitment workflows. This application streamlines the hiring process with intuitive interfaces and powerful backend functionality.",
    sections: {
      features: {
        title: "Key Features",
        items: [
          "Advanced Job Matching",
          "Applicant Tracking System",
          "Resume Parsing",
          "Interview Scheduling",
          "Automated Workflows",
          "Analytics Dashboard",
          "Email Integration",
          "Multi-tenant Architecture"
        ]
      },
      tech: {
        title: "Technologies Used",
        items: [
          "ASP.NET Core",
          "C#",
          "Entity Framework",
          "SQL Server",
          "React",
          "TypeScript",
          "Azure",
          "Redis"
        ]
      },
      skills: {
        title: "Skills Developed",
        items: [
          "System Architecture",
          "Database Design",
          "API Development",
          "Cloud Services",
          "Performance Optimization",
          "Security Implementation"
        ]
      },
      duration: {
        title: "Project Duration",
        text: "4 Months (Personal Project)"
      },
      buttons: {
        code: "View Code",
        back: "Back"
      }
    }
  },
  FR: {
    title: ["Modern", "Recruit"],
    description: "Une plateforme moderne de recrutement construite avec ASP.NET Core, comprenant des algorithmes avancés de correspondance d'emplois, le suivi des candidats et des flux de travail de recrutement automatisés. Cette application simplifie le processus d'embauche avec des interfaces intuitives et des fonctionnalités backend puissantes.",
    sections: {
      features: {
        title: "Fonctionnalités Clés",
        items: [
          "Correspondance Avancée d'Emplois",
          "Système de Suivi des Candidats",
          "Analyse de CV",
          "Planification d'Entretiens",
          "Flux de Travail Automatisés",
          "Tableau de Bord Analytique",
          "Intégration Email",
          "Architecture Multi-locataire"
        ]
      },
      tech: {
        title: "Technologies Utilisées",
        items: [
          "ASP.NET Core",
          "C#",
          "Entity Framework",
          "SQL Server",
          "React",
          "TypeScript",
          "Azure",
          "Redis"
        ]
      },
      skills: {
        title: "Compétences Développées",
        items: [
          "Architecture Système",
          "Conception de Base de Données",
          "Développement d'API",
          "Services Cloud",
          "Optimisation des Performances",
          "Implémentation de la Sécurité"
        ]
      },
      duration: {
        title: "Durée du Projet",
        text: "4 Mois (Projet Personnel)"
      },
      buttons: {
        code: "Voir le Code",
        back: "Retour"
      }
    }
  }
};

const ModernRecruit = () => {
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
                  src="https://www.youtube.com/embed/8pRRcjN07Vg"
                  title="ModernRecruit Demo"
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
              <a href="https://github.com/PatrickDumoulin/ModernRecruit" target="_blank" rel="noreferrer" className="code-button">
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

export default AppWrap(ModernRecruit, 'project');
