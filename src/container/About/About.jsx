import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { useLanguage } from '../../context/LanguageContext';
import "./About.scss";

const translations = {
  EN: {
    title: ["My", "Expertise"],
    sections: {
      backend: {
        title: "Backend Development",
        description: "Expertise in building robust server-side applications with C# and ASP.NET Core. Proficient in database management with Entity Framework Core, SQL Server, and MySQL. Experience in developing RESTful APIs and Node.js applications."
      },
      frontend: {
        title: "Frontend Development",
        description: "Skilled in modern frontend frameworks and libraries, with a focus on creating responsive and interactive user interfaces. Strong foundation in TypeScript and JavaScript, with expertise in various CSS frameworks."
      },
      ai: {
        title: "AI",
        description: "Experienced in implementing AI solutions using various tools and frameworks. Proficient in working with large language models and AI-assisted development tools."
      },
      cloud: {
        title: "Cloud & DevOps",
        description: "Strong background in cloud services and DevOps practices. Experienced in implementing CI/CD pipelines and managing cloud infrastructure using various platforms and tools."
      },
      game: {
        title: "Game Development",
        description: "Passionate about game development with experience in multiple game engines and programming languages. Skilled in creating immersive gaming experiences."
      },
      mobile: {
        title: "Mobile Development",
        description: "Experienced in cross-platform mobile app development using modern frameworks and tools. Skilled in creating responsive and native-like mobile applications."
      },
      creative: {
        title: "Creative Tools",
        description: "Proficient in various creative software tools for design, video editing, and 3D modeling. Experienced in creating engaging visual content and user interfaces."
      },
      sysadmin: {
        title: "Systems & Network Administration",
        description: "Experienced in managing and maintaining Windows Server and Linux environments, with expertise in Active Directory, virtualization, and network infrastructure. Strong focus on security and system optimization."
      },
      automation: {
        title: "Automation & Scripting",
        description: "Proficient in creating automated solutions using PowerShell, Bash, and Python for streamlined IT operations. Experienced in implementing CI/CD pipelines and infrastructure as code."
      },
      support: {
        title: "IT Troubleshooting & Support",
        description: "Skilled in diagnosing and resolving complex hardware and software issues. Experienced in network diagnostics, system performance analysis, and IT service desk management."
      }
    }
  },
  FR: {
    title: ["Mon", "Expertise"],
    sections: {
      backend: {
        title: "Développement Backend",
        description: "Expert dans la création d'applications serveur robustes avec C# et ASP.NET Core. Compétent en gestion de bases de données avec Entity Framework Core, SQL Server et MySQL. Expérience dans le développement d'APIs RESTful et d'applications Node.js."
      },
      frontend: {
        title: "Développement Frontend",
        description: "Spécialisé dans les frameworks et bibliothèques frontend modernes, avec un accent sur la création d'interfaces utilisateur réactives et interactives. Solide base en TypeScript et JavaScript, avec expertise dans divers frameworks CSS."
      },
      ai: {
        title: "IA",
        description: "Expérimenté dans l'implémentation de solutions d'IA utilisant divers outils et frameworks. Compétent dans le travail avec les modèles de langage et les outils de développement assistés par l'IA."
      },
      cloud: {
        title: "Cloud & DevOps",
        description: "Solide expérience en services cloud et pratiques DevOps. Expérimenté dans l'implémentation de pipelines CI/CD et la gestion d'infrastructure cloud utilisant diverses plateformes et outils."
      },
      game: {
        title: "Développement de Jeux",
        description: "Passionné par le développement de jeux avec expérience dans plusieurs moteurs de jeu et langages de programmation. Compétent dans la création d'expériences de jeu immersives."
      },
      mobile: {
        title: "Développement Mobile",
        description: "Expérimenté dans le développement d'applications mobiles multiplateformes utilisant des frameworks et outils modernes. Compétent dans la création d'applications mobiles réactives et natives."
      },
      creative: {
        title: "Outils Créatifs",
        description: "Maîtrise de divers outils logiciels créatifs pour le design, l'édition vidéo et la modélisation 3D. Expérimenté dans la création de contenu visuel et d'interfaces utilisateur engageantes."
      },
      sysadmin: {
        title: "Administration Systèmes & Réseaux",
        description: "Expérimenté dans la gestion et maintenance des environnements Windows Server et Linux, avec expertise en Active Directory, virtualisation et infrastructure réseau. Accent particulier sur la sécurité et l'optimisation des systèmes."
      },
      automation: {
        title: "Automatisation & Scripts",
        description: "Compétent dans la création de solutions automatisées utilisant PowerShell, Bash et Python pour optimiser les opérations IT. Expérimenté dans l'implémentation de pipelines CI/CD et l'infrastructure as code."
      },
      support: {
        title: "Dépannage & Support IT",
        description: "Qualifié dans le diagnostic et la résolution de problèmes matériels et logiciels complexes. Expérimenté en diagnostic réseau, analyse de performance système et gestion de service desk IT."
      }
    }
  }
};

const abouts = [
  {
    key: "sysadmin",
    skills: [
      "Windows Server & Linux",
      "Active Directory & GPO",
      "VMware, VirtualBox",
      "Docker, Kubernetes",
      "TCP/IP, VLAN, DHCP, DNS",
      "VPN, Wireshark",
      "Firewall, Antivirus",
      "MFA, SIEM"
    ],
    imgUrl: images.DALLE_Admin
  },
  {
    key: "automation",
    skills: [
      "PowerShell",
      "Bash",
      "Ansible",
      "Python",
      "Jenkins",
      "GitHub Actions",
      "Azure DevOps",
      "Infrastructure as Code"
    ],
    imgUrl: images.DALLE_Auto
  },
  {
    key: "support",
    skillsEN: [
      "Hardware Troubleshooting",
      "Software Diagnostics",
      "Network Diagnostics",
      "Performance Analysis",
      "Service Desk Management",
      "Wireshark",
      "Log Analysis",
      "IT Asset Management"
    ],
    skillsFR: [
      "Dépannage Hardware",
      "Diagnostic Logiciel",
      "Diagnostic Réseau",
      "Analyse de Performance",
      "Gestion Service Desk",
      "Wireshark",
      "Analyse des Logs",
      "Gestion des Actifs IT"
    ],
    imgUrl: images.DALLE_Support
  },
  {
    key: "backend",
    skills: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server, MySQL", "REST APIs", "Node.js"],
    imgUrl: images.DALLE_BackEnd
  },
  {
    key: "frontend",
    skills: ["React, Next.js", "TypeScript, JavaScript", "HTML5, CSS3, SASS", "Tailwind CSS, Bootstrap", "Angular, Vue.js", "WordPress, Elementor"],
    imgUrl: images.DALLE_FrontEnd
  },
  {
    key: "ai",
    skills: ["ML.Net", "GPT-4, Claude 3.5 Sonnet", "Cursor", "MidJourney"],
    imgUrl: images.DALLE_AI
  },
  {
    key: "cloud",
    skills: ["Azure, DevOps", "CI/CD Pipelines", "YAML, Docker", "Git, GitHub", "Vercel, Firebase, Appwrite", "Agile, Jira"],
    imgUrl: images.DALLE_Cloud
  },
  {
    key: "game",
    skills: ["Unity", "Unreal Engine", "C++"],
    imgUrl: images.DALLE_Game
  },
  {
    key: "mobile",
    skills: ["React Native", "MAUI", "Framer Motion", "NativeWind"],
    imgUrl: images.DALLE_Mobile
  },
  {
    key: "creative",
    skills: ["Premiere Pro", "Photoshop", "After Effects", "Figma", "Blender", "Ableton Live", "Office 365"],
    imgUrl: images.DALLE_Creative
  },
  
];

const About = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <h2 className="head-text">
        {translations[language].title[0]}{" "}
        <span>{translations[language].title[1]}</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.key + index}
          >
            <img src={about.imgUrl} alt={translations[language].sections[about.key].title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {translations[language].sections[about.key].title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {translations[language].sections[about.key].description}
            </p>
            <div className="skills-container">
              <ul className="skills-list">
                {about.skills ? (
                  about.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="skill-item"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="skill-dot"></span>
                      {skill}
                    </motion.li>
                  ))
                ) : (
                  (language === 'FR' ? about.skillsFR : about.skillsEN).map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="skill-item"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="skill-dot"></span>
                      {skill}
                    </motion.li>
                  ))
                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
