import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { useLanguage } from '../../context/LanguageContext';
import "./Work.scss";
import { images } from "../../constants";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const translations = {
  EN: {
    title: ["My", "Projects"],
    filters: {
      all: "All",
      client: "Client Projects",
      personal: "Personal Projects"
    },
    projects: {
      acef: {
        title: "ACEF De Québec",
        description: "Budget management application",
        category: "Client Projects",
      },
      spacegame: {
        title: "SpaceGame",
        description: "A space game developed with Unity",
        category: "Personal Projects",
      },
      bulkybook: {
        title: "BulkyBook",
        description: "Book management application",
        category: "Personal Projects",
      },
      modernrecruit: {
        title: "ModernRecruit",
        description: "Modern recruitment platform",
        category: "Personal Projects",
      },
      animalspecies: {
        title: "Animal Species",
        description: "Predictive analysis application",
        category: "Personal Projects",
      },
      portfolio: {
        title: "My Portfolio",
        description: "My personal portfolio",
        category: "Personal Projects",
      }
    }
  },
  FR: {
    title: ["Mes", "Projets"],
    filters: {
      all: "Tous",
      client: "Projets Clients",
      personal: "Projets Personnels"
    },
    projects: {
      acef: {
        title: "ACEF De Québec",
        description: "Application de gestion budgétaire",
        category: "Projets Clients",
      },
      spacegame: {
        title: "SpaceGame",
        description: "Un jeu spatial développé avec Unity",
        category: "Projets Personnels",
      },
      bulkybook: {
        title: "BulkyBook",
        description: "Application de gestion de livres",
        category: "Projets Personnels",
      },
      modernrecruit: {
        title: "ModernRecruit",
        description: "Plateforme de recrutement moderne",
        category: "Projets Personnels",
      },
      animalspecies: {
        title: "Animal Species",
        description: "Application d'analyse prédictive",
        category: "Projets Personnels",
      },
      portfolio: {
        title: "Mon Portfolio",
        description: "Mon portfolio personnel",
        category: "Projets Personnels",
      }
    }
  }
};

const projects = [
  {
    key: "acef",
    imgUrl: images.acef,
    projectLink: "/acef",
    codeLink: "https://github.com/yourusername/acef",
    tech: "ASP.NET"
  },
  {
    key: "spacegame",
    imgUrl: images.spacegame,
    projectLink: "/spacegame",
    codeLink: "https://github.com/yourusername/spacegame",
    tech: "Unity"
  },
  {
    key: "bulkybook",
    imgUrl: images.bulkybook,
    projectLink: "/bulkybook",
    codeLink: "https://github.com/yourusername/bulkybook",
    tech: "ASP.NET"
  },
  {
    key: "modernrecruit",
    imgUrl: images.modernRecruit,
    projectLink: "/modernrecruit",
    codeLink: "https://github.com/yourusername/modernrecruit",
    tech: "ASP.NET"
  },
  {
    key: "animalspecies",
    imgUrl: images.AnimalSpecies,
    projectLink: "/asc",
    codeLink: "https://github.com/yourusername/asc",
    tech: "ML.NET + React"
  },
  {
    key: "portfolio",
    imgUrl: images.portfolio,
    projectLink: "/portfolio",
    codeLink: "https://github.com/yourusername/portfolio",
    tech: "React"
  }
];

const Work = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(translations[language].filters.all);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const navigate = useNavigate();

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      
      if (item === translations[language].filters.all) {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter((project) => 
          translations[language].projects[project.key].category === item
        ));
      }
    }, 500);
  };

  const handleProjectClick = (projectLink) => {
    if (projectLink) {
      navigate(projectLink);
    }
  };

  return (
    <>
      <h2 className="head-text">
        {translations[language].title[0]}{" "}
        <span>{translations[language].title[1]}</span>
      </h2>

      <div className="app__work-filter">
        {Object.values(translations[language].filters).map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__work-portfolio"
      >
        {filteredProjects.map((project, index) => (
          <div 
            className="app__work-item app__flex" 
            key={index}
            onClick={() => handleProjectClick(project.projectLink)}
            style={{ cursor: 'pointer' }}
          >
            <div className="app__work-img app__flex">
              <img src={project.imgUrl} alt={translations[language].projects[project.key].title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{translations[language].projects[project.key].title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {translations[language].projects[project.key].description}
              </p>
              <p className="tech-text">{project.tech}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{translations[language].projects[project.key].category}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
