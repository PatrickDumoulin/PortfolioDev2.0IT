import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../../wrapper';
import { useLanguage } from '../../../context/LanguageContext';
import { images } from '../../../constants';
import './Bulky.scss';

const translations = {
  EN: {
    title: ["Bulky", "Book"],
    description: "A comprehensive book management system built with ASP.NET Core, featuring robust CRUD operations, user authentication, and role-based access control. This application demonstrates modern web development practices and secure data handling.",
    sections: {
      features: {
        title: "Key Features",
        items: [
          "User Authentication & Authorization",
          "Role-based Access Control",
          "Book Management System",
          "Shopping Cart Implementation",
          "Order Processing System",
          "Admin Dashboard",
          "Email Notifications",
          "Secure Payment Integration"
        ]
      },
      tech: {
        title: "Technologies Used",
        items: [
          "ASP.NET Core",
          "C#",
          "Entity Framework",
          "SQL Server",
          "Bootstrap",
          "JavaScript",
          "Azure"
        ]
      },
      skills: {
        title: "Skills Developed",
        items: [
          "Full Stack Development",
          "Database Design",
          "Authentication Systems",
          "Payment Integration",
          "Cloud Deployment",
          "Security Best Practices"
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
    title: ["Bulky", "Book"],
    description: "Un système complet de gestion de livres construit avec ASP.NET Core, comprenant des opérations CRUD robustes, l'authentification des utilisateurs et le contrôle d'accès basé sur les rôles. Cette application démontre les pratiques modernes de développement web et la gestion sécurisée des données.",
    sections: {
      features: {
        title: "Fonctionnalités Clés",
        items: [
          "Authentification & Autorisation",
          "Contrôle d'Accès par Rôles",
          "Système de Gestion de Livres",
          "Implémentation du Panier",
          "Système de Traitement des Commandes",
          "Tableau de Bord Admin",
          "Notifications par Email",
          "Intégration Sécurisée des Paiements"
        ]
      },
      tech: {
        title: "Technologies Utilisées",
        items: [
          "ASP.NET Core",
          "C#",
          "Entity Framework",
          "SQL Server",
          "Bootstrap",
          "JavaScript",
          "Azure"
        ]
      },
      skills: {
        title: "Compétences Développées",
        items: [
          "Développement Full Stack",
          "Conception de Base de Données",
          "Systèmes d'Authentification",
          "Intégration des Paiements",
          "Déploiement Cloud",
          "Meilleures Pratiques de Sécurité"
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

const Bulky = () => {
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
                  src="https://www.youtube.com/embed/4RZuedj6grU"
                  title="BulkyBook Demo"
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
              <a href="https://github.com/PatrickDumoulin/Bulky" target="_blank" rel="noreferrer" className="code-button">
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

export default AppWrap(Bulky, 'project');
