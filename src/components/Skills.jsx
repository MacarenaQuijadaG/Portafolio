import React from "react";
import { Typography, Row, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faVuejs,
  faReact,
  faAngular,
  faPython,
  faPhp,
  faNodeJs,
  faSass,
  faGit,
  faGithub,
  faFigma,
  faBitbucket,
  faLinux,
  faWindows
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer, faToolbox, faCode } from "@fortawesome/free-solid-svg-icons";

const { Title } = Typography;

const Skills = () => {
  const skills = [
  { icon: <FontAwesomeIcon icon={faHtml5} style={{ fontSize: "48px", color: "#e34c26" }} />, title: "HTML5" },
  { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: "48px", color: "#1572b6" }} />, title: "CSS3" },
  { icon: <FontAwesomeIcon icon={faJsSquare} style={{ fontSize: "48px", color: "#f7df1e" }} />, title: "JavaScript" },
  { icon: <FontAwesomeIcon icon={faVuejs} style={{ fontSize: "48px", color: "#41b883" }} />, title: "VueJS" },
  { icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "48px", color: "#61dafb" }} />, title: "React" },
  { icon: <FontAwesomeIcon icon={faAngular} style={{ fontSize: "48px", color: "#dd0031" }} />, title: "Angular" },
  { icon: <FontAwesomeIcon icon={faPython} style={{ fontSize: "48px", color: "#306998" }} />, title: "Python" }, 
  { icon: <FontAwesomeIcon icon={faPython} style={{ fontSize: "48px", color: "#306998" }} />, title: "Django" },
  { icon: <FontAwesomeIcon icon={faPhp} style={{ fontSize: "48px", color: "#777bb3" }} />, title: "Laravel" },
  { icon: <FontAwesomeIcon icon={faPhp} style={{ fontSize: "48px", color: "#777bb3" }} />, title: "PHP" },
  { icon: <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: "48px", color: "#68A063" }} />, title: "Node.js" },
  { icon: <FontAwesomeIcon icon={faSass} style={{ fontSize: "48px", color: "#CC6699" }} />, title: "Sass" },
  { icon: <FontAwesomeIcon icon={faVuejs} style={{ fontSize: "48px", color: "#41b883" }} />, title: "Vuetify" },
  { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: "48px", color: "#38BDF8" }} />, title: "TailwindCSS" },
  { icon: <FontAwesomeIcon icon={faJsSquare} style={{ fontSize: "48px", color: "#f0772b" }} />, title: "Handlebars" },
];


  const tools = [
    { icon: <FontAwesomeIcon icon={faGit} style={{ fontSize: "48px", color: "#F1502F" }} />, title: "Git" },
    { icon: <FontAwesomeIcon icon={faGithub} style={{ fontSize: "48px", color: "#333" }} />, title: "GitHub" },
    { icon: <FontAwesomeIcon icon={faFigma} style={{ fontSize: "48px", color: "#F24E1E" }} />, title: "Figma" },
    { icon: <FontAwesomeIcon icon={faBitbucket} style={{ fontSize: "48px", color: "#2684FF" }} />, title: "Bitbucket" },
    { icon: <FontAwesomeIcon icon={faToolbox} style={{ fontSize: "48px", color: "#4caf50" }} />, title: "Vite" },
    { icon: <FontAwesomeIcon icon={faCode} style={{ fontSize: "48px", color: "#0078d7" }} />, title: "VS Code" },
    { icon: <FontAwesomeIcon icon={faDatabase} style={{ fontSize: "48px", color: "#47A248" }} />, title: "MongoDB" },
    { icon: <FontAwesomeIcon icon={faDatabase} style={{ fontSize: "48px", color: "#4479A1" }} />, title: "MySQL" },
    { icon: <FontAwesomeIcon icon={faDatabase} style={{ fontSize: "48px", color: "#F80000" }} />, title: "Oracle" },
    { icon: <FontAwesomeIcon icon={faDatabase} style={{ fontSize: "48px", color: "#336791" }} />, title: "PostgreSQL" },
    { icon: <FontAwesomeIcon icon={faServer} style={{ fontSize: "48px", color: "#FF9900" }} />, title: "AWS" },
    { icon: <FontAwesomeIcon icon={faCode} style={{ fontSize: "48px", color: "#000000" }} />, title: "Composer" },
    { icon: <FontAwesomeIcon icon={faCode} style={{ fontSize: "48px", color: "#000000" }} />, title: "NPM" },
    { icon: <FontAwesomeIcon icon={faCode} style={{ fontSize: "48px", color: "#007A33" }} />, title: "Bash" },
  ];

  const operatingSystems = [
    { icon: <FontAwesomeIcon icon={faWindows} style={{ fontSize: "48px", color: "#00A4EF" }} />, title: "Windows Server" },
    { icon: <FontAwesomeIcon icon={faLinux} style={{ fontSize: "48px", color: "#FCC624" }} />, title: "Linux" },
  ];

  return (
    <div id="skills" style={{ padding: "60px 150px", background: "var(--color-primary)", color: "var(--color-light)" }}>
      <Title style={{ textAlign: "center", marginBottom: "40px", color: "var(--color-light)" }}>Skills & Tools</Title>

      {/* Lenguajes y Frameworks */}
      <div style={{ marginBottom: "60px" }}>
        <Title level={3} style={{ color: "var(--color-light)", textAlign: "center", marginBottom: "20px" }}>
          Lenguajes & Frameworks
        </Title>
        <Row gutter={[16,16]} justify="center" style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {skills.map((skill,index) => (
            <Card key={index} hoverable style={{
              textAlign: "center",
              background: "var(--color-light)",
              border: "1px solid var(--color-secondary)",
              borderRadius: "8px",
              color: "var(--color-primary)",
              width: "200px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              body: { padding: "20px" }
            }} onMouseEnter={e => { e.currentTarget.style.transform="scale(1.05)"; e.currentTarget.style.boxShadow="0 8px 20px rgba(0,0,0,0.2)" }} onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="none" }}>
              {skill.icon}
              <Title level={4} style={{ marginTop: "10px", color: "var(--color-primary)" }}>{skill.title}</Title>
            </Card>
          ))}
        </Row>
      </div>

      {/* Herramientas y Bases de Datos */}
      <div style={{ marginBottom: "60px" }}>
        <Title level={3} style={{ color: "var(--color-light)", textAlign: "center", marginBottom: "20px" }}>
          Herramientas & Bases de Datos
        </Title>
        <Row gutter={[16,16]} justify="center" style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {tools.map((tool,index) => (
            <Card key={index} hoverable style={{
              textAlign: "center",
              background: "var(--color-light)",
              border: "1px solid var(--color-secondary)",
              borderRadius: "8px",
              color: "var(--color-primary)",
              width: "200px",
              height: "150px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              body: { padding: "20px" }
            }} onMouseEnter={e => { e.currentTarget.style.transform="scale(1.05)"; e.currentTarget.style.boxShadow="0 8px 20px rgba(0,0,0,0.2)" }} onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="none" }}>
              {tool.icon}
              <Title level={4} style={{ marginTop: "10px", color: "var(--color-primary)" }}>{tool.title}</Title>
            </Card>
          ))}
        </Row>
      </div>

      {/* Sistemas Operativos */}
      <div>
        <Title level={3} style={{ color: "var(--color-light)", textAlign: "center", marginBottom: "20px" }}>
          Sistemas Operativos
        </Title>
        <Row gutter={[16,16]} justify="center" style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {operatingSystems.map((os,index) => (
            <Card key={index} hoverable style={{
              textAlign: "center",
              background: "var(--color-light)",
              border: "1px solid var(--color-secondary)",
              borderRadius: "8px",
              color: "var(--color-primary)",
              width: "200px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              body: { padding: "20px" }
            }} onMouseEnter={e => { e.currentTarget.style.transform="scale(1.05)"; e.currentTarget.style.boxShadow="0 8px 20px rgba(0,0,0,0.2)" }} onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="none" }}>
              {os.icon}
              <Title level={4} style={{ marginTop: "10px", color: "var(--color-primary)" }}>{os.title}</Title>
            </Card>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Skills;
