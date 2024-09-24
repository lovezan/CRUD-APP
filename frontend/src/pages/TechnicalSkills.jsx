import React from "react";
import "./TechnicalSkills.css";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiGit,
  SiGithub,
  SiExpress,
  SiMongodb,
  SiFlutter,
  SiFirebase,
  SiOwasp,
  SiOpensourceinitiative,
} from "react-icons/si";

const TechnicalSkills = () => {
  const programmingLanguages = [
    {
      icon: <SiC className="icon" />,
      name: "C",
      link: "https://en.cppreference.com/w/c",
    },
    {
      icon: <SiCplusplus className="icon" />,
      name: "C++",
      link: "https://isocpp.org/doc/tutorials",
    },
    {
      icon: <FaPython className="icon" />,
      name: "Python",
      link: "https://docs.python.org/3/tutorial/",
    },
  ];

  const webDevelopment = [
    {
      icon: <FaHtml5 className="icon" />,
      name: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <FaCss3Alt className="icon" />,
      name: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <FaJsSquare className="icon" />,
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: <FaNodeJs className="icon" />,
      name: "Node.js",
      link: "https://nodejs.org/en/docs/",
    },
    {
      icon: <FaReact className="icon" />,
      name: "React.js",
      link: "https://reactjs.org/docs/getting-started.html",
    },
    {
      icon: <SiExpress className="icon" />,
      name: "Express.js",
      link: "https://expressjs.com/",
    },
    {
      icon: <SiFlutter className="icon" />,
      name: "Flutter",
      link: "https://flutter.dev/docs",
    },
    {
      icon: <SiFirebase className="icon" />,
      name: "Firebase",
      link: "https://firebase.google.com/docs",
    },
  ];

  const databaseAndHosting = [
    {
      icon: <FaDatabase className="icon" />,
      name: "DBMS (Database Management Systems)",
      link: "https://www.geeksforgeeks.org/dbms/",
    },
    {
      icon: <SiMongodb className="icon" />,
      name: "MongoDB",
      link: "https://www.mongodb.com/docs/",
    },
    {
      icon: <SiGit className="icon" />,
      name: "Git",
      link: "https://git-scm.com/doc",
    },
    {
      icon: <SiGithub className="icon" />,
      name: "GitHub",
      link: "https://github.com/",
    },
    {
      icon: <FaNetworkWired className="icon" />,
      name: "Computer Networks",
      link: "https://www.geeksforgeeks.org/computer-network-tutorials/",
    },
    {
      icon: <SiOpensourceinitiative className="icon" />,
      name: "OOP (Object-Oriented Programming)",
      link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
    },
    {
      icon: <SiOwasp className="icon" />,
      name: "Operating Systems",
      link: "https://www.geeksforgeeks.org/operating-systems/",
    },
    {
      icon: <a className="icon">Hosting</a>,
      name: "Hosting Services",
      link: "#",
      subSkills: [
        { name: "Hostinger", link: "https://www.hostinger.com/" },
        { name: "Netlify", link: "https://www.netlify.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
        { name: "DirectAdmin", link: "https://www.directadmin.com/" },
      ],
    },
  ];

  return (
    <div className="technical-skills">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-category">
        <h3>Programming Languages</h3>
        <div className="skills-cards">
          {programmingLanguages.map((skill, index) => (
            <div className="skill-card" key={index}>
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                {skill.icon}
                <p>{skill.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Web Development</h3>
        <div className="skills-cards">
          {webDevelopment.map((skill, index) => (
            <div className="skill-card" key={index}>
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                {skill.icon}
                <p>{skill.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Database & Hosting Technologies</h3>
        <div className="skills-cards">
          {databaseAndHosting.map((skill, index) => (
            <div className="skill-card" key={index}>
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                {skill.icon}
                <p>{skill.name}</p>
              </a>
              {skill.subSkills && (
                <ul className="sub-skills">
                  {skill.subSkills.map((subSkill, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subSkill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {subSkill.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
