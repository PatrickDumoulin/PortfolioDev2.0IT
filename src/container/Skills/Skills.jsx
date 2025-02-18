import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useLanguage } from '../../context/LanguageContext';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss';

const translations = {
  EN: {
    title: ["Education &", "Experience"],
    education: {
      title: "Education",
      items: [
        {
          name: "AEC Secure Application Development",
          institution: "Cégep Limoilou",
          period: "2022-2024",
          description: "1800-hour intensive training focused on secure web and mobile application development. Learning programming best practices, security principles, and modern web development technologies."
        }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          name: "ACEF De Québec",
          role: "Full Stack Developer (Contract)",
          period: "2024",
          description: "Development of a complete web application for managing budget consultations. Technologies used: ASP.NET Core, React, SQL Server.",
        }
      ]
    }
  },
  FR: {
    title: ["Formation &", "Expérience"],
    education: {
      title: "Formation",
      items: [
        {
          name: "AEC Développement d'Applications Sécurisées",
          institution: "Cégep Limoilou",
          period: "2022-2024",
          description: "Formation intensive de 1800 heures axée sur le développement d'applications web et mobiles sécurisées. Apprentissage des meilleures pratiques de programmation, des principes de sécurité et des technologies de développement web modernes."
        }
      ]
    },
    experience: {
      title: "Expérience",
      items: [
        {
          name: "ACEF De Québec",
          role: "Développeur Full Stack (Contrat)",
          period: "2024",
          description: "Développement d'une application web complète pour la gestion des consultations budgétaires. Technologies utilisées : ASP.NET Core, React, SQL Server.",
        }
      ]
    }
  }
};

const Skills = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <h2 className="head-text">
        {translations[language].title[0]}{" "}
        <span>{translations[language].title[1]}</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__education-list">
          <h3 className="section-title">{translations[language].education.title}</h3>
          {translations[language].education.items.map((edu) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__education-item app__flex"
              key={edu.name}
            >
              <div className="app__education-content">
                <h3 className="bold-text">{edu.name}</h3>
                <p className="p-text institution">{edu.institution}</p>
                <p className="p-text period">{edu.period}</p>
                <p className="p-text description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__experience-list">
          <h3 className="section-title">{translations[language].experience.title}</h3>
          {translations[language].experience.items.map((work) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__experience-item"
              key={work.name}
            >
              <h4 className="bold-text">{work.name}</h4>
              <p className="p-text role">{work.role}</p>
              <p className="p-text period">{work.period}</p>
              <p className="p-text description">{work.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');