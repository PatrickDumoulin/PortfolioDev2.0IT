import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { useLanguage } from '../../../context/LanguageContext';
import { images } from '../../../constants';
import './Acef.scss';

const translations = {
  EN: {
    title: ["ACEF De", "Québec"],
    description: "The Cooperative Association of Family Economics of Quebec (ACEF of Quebec) project involved developing a software solution to replace their Excel-based system, implementing data manipulation and query mechanisms. The solution securely stores data in a relational database and provides comprehensive tools for client management.",
    sections: {
      features: {
        title: "Key Features",
        items: [
          "Client Account Management",
          "Intervention Management",
          "Workshop Management",
          "Attachment System",
          "Comment System",
          "Master Data Management",
          "Custom Report Generation",
          "Data Analytics Dashboard"
        ]
      },
      tech: {
        title: "Technologies Used",
        items: [
          "ASP.NET Core 6.0",
          "C#",
          "SQL Server",
          "Entity Framework Core",
          "NInject",
          "Git",
          "Jira",
          "Scrum"
        ]
      },
      skills: {
        title: "Skills Developed",
        items: [
          "Professional Client Interaction",
          "Application Design Collaboration",
          "Database Integration",
          "Team Development with Git/Scrum",
          "Testing & Deployment",
          "Client Solution Presentation"
        ]
      },
      duration: {
        title: "Project Duration",
        text: "June to October 2024 (Temporary Contract)"
      },
      buttons: {
        back: "Back"
      }
    }
  },
  FR: {
    title: ["ACEF De", "Québec"],
    description: "Le projet de l'Association Coopérative d'Économie Familiale de Québec (ACEF de Québec) consistait à développer une solution logicielle pour remplacer leur système basé sur Excel, en implémentant des mécanismes de manipulation et de requête de données. La solution stocke les données de manière sécurisée dans une base de données relationnelle et fournit des outils complets pour la gestion des clients.",
    sections: {
      features: {
        title: "Fonctionnalités Clés",
        items: [
          "Gestion des Comptes Clients",
          "Gestion des Interventions",
          "Gestion des Ateliers",
          "Système de Pièces Jointes",
          "Système de Commentaires",
          "Gestion des Données de Référence",
          "Génération de Rapports Personnalisés",
          "Tableau de Bord Analytique"
        ]
      },
      tech: {
        title: "Technologies Utilisées",
        items: [
          "ASP.NET Core 6.0",
          "C#",
          "SQL Server",
          "Entity Framework Core",
          "NInject",
          "Git",
          "Jira",
          "Scrum"
        ]
      },
      skills: {
        title: "Compétences Développées",
        items: [
          "Interaction Professionnelle avec les Clients",
          "Collaboration en Conception d'Applications",
          "Intégration de Base de Données",
          "Développement en Équipe avec Git/Scrum",
          "Tests & Déploiement",
          "Présentation de Solutions aux Clients"
        ]
      },
      duration: {
        title: "Durée du Projet",
        text: "Juin à Octobre 2024 (Contrat Temporaire)"
      },
      buttons: {
        back: "Retour"
      }
    }
  }
};

const Acef = () => {
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
                  src="https://www.youtube.com/embed/E5vh8U33VEk"
                  title="ACEF Demo"
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

export default AppWrap(Acef, 'project');
