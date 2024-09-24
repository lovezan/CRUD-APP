import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaCode,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si"; // Icons for coding platforms
import TechSkill from "./TechnicalSkills";

// import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import "./About.css"; // Import the CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1 className="name">Talib Hassan</h1>
        <p className="title">Web Frontend Developer | Software Engineer</p>
        <p className="quote">
          "Building the future with every line of code, designing experiences
          that resonate."
        </p>
      </div>

      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I’m Talib Hassan, a passionate Web Frontend Developer and Software
          Engineer with a vision to bring the future closer to today. I
          specialize in creating sleek, responsive, and innovative web
          applications using modern tools like React, Vite, and much more. I
          don’t just code; I craft digital experiences. My journey began with an
          insatiable curiosity for technology, which has now evolved into a
          full-blown obsession with design, development, and everything in
          between.
        </p>
        <p className="about-text">
          Currently pursuing a Bachelor's in Computer Science at NIT Hamirpur,
          expected in 2025, I’ve worked on various projects that have tested and
          refined my skills. From building cutting-edge websites to solving
          complex algorithmic problems, I strive to constantly push boundaries
          in the tech world.
        </p>

        <TechSkill />
        <h2 className="section-title">Technical Skills</h2>
        <ul className="skills-list">
          <li>C++, Java, Python</li>
          <li>ReactJS, NodeJS, Vite</li>
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Git, GitHub, Agile Methodologies</li>
          <li>Database Management (SQL, NoSQL)</li>
          <li>Cloudinary, File Upload Integration</li>
        </ul>

        <h2 className="section-title">Projects</h2>
        <p className="about-text">
          I have led and contributed to a number of exciting projects, from
          developing a live website for CICN 2024 to creating advanced user
          interfaces that solve real-world problems. Every project is an
          opportunity to learn, grow, and create something unforgettable.
        </p>

        <h2 className="section-title">Connect with Me</h2>
        <div className="social-icons">
          <a
            href="https://github.com/lovezan"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/talib-hassan-32b56222b/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="twitter.com/lovezan3"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://www.instagram.com/talib.hassan_/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="www.youtube.com/@Yataliblogy"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaYoutube className="icon" />
          </a>
          {/* LeetCode */}
          <a
            href="https://leetcode.com/your-username/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <SiLeetcode className="icon" />
          </a>

          {/* CodeChef */}
          <a
            href="https://www.codechef.com/users/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <SiCodechef className="icon" />
          </a>
          {/* Codeforces */}
          <a
            href="https://codeforces.com/profile/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <SiCodeforces className="icon" />
          </a>
          {/* Coding Ninjas (Generic Code Icon) */}
          <a
            href="https://www.codingninjas.com/codestudio/profile/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaCode className="icon" />
          </a>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-text">
          "The only limit to your impact is your imagination and commitment." —
          Talib Hassan
        </p>
      </footer>
    </div>
  );
};

export default About;
