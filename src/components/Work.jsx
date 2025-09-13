import React from "react";
import { Card, Row, Col, Typography, Tag, Button } from "antd";

const { Title } = Typography;

const projects = [
  {
    title: "Sistema de Automatización",
    description:
      "Un sistema que permite a estudiantes crear informes de tesis detallados y a docentes revisar y proporcionar observaciones.",
      image: "./images/satfa.png",
    tags: ["Python", "Django", "CSS", "Css","Html","PostgreSQL"],
    github: "https://github.com/MacarenaQuijadaG/AutomatizacionTesis.git",
    preview: "https://github.com",
  },
  {
    title: "Mercado Web",
    description:
      "Una aplicación web para compartir opiniones sobre videojuegos.",
    image: "./images/mercado.png",
    tags: ["JavaScript", "Handlebars", "Node.js", "Express.js"],
    github: "https://github.com/MacarenaQuijadaG/Mercado-web.git",
    preview: "https://github.com",
  },
  {
    title: "Seguridad Informatica",
    description: "Portafolio de Configuración de Sistemas de Seguridad.",
    image: "./images/seguridad.jpg",
    tags: ["Windows Server", "Linux", "Rocky 9", "Ubuntu"],
    github: "https://github.com/MacarenaQuijadaG/Seguridad-Informatica.git",
    preview: "https://github.com",
  },
   {
    title: "Data Science",
    description:
      "Portafolio Curso de Data Science.",
      image: "./images/data.jpg",
    tags: ["Python", "Google Colab", "MySql"],
    github: "https://github.com/MacarenaQuijadaG/Data-Science.git",
    preview: "https://github.com",
  },
  {
    title: "Proyecto Cocina",
    description:
      "Permite a los usuarios buscar recetas basadas en un ingrediente específico para obtener y mostrar recetas de manera sencilla y eficiente.",
    image: "./images/cocnia facil.png",
    tags: ["JavaScript", "Vue", "Html", "Api Rest"],
    github: "https://github.com/MacarenaQuijadaG/Proyecto-Cocina.git",
    preview: "https://github.com",
  },
  {
    title: "Viajes de Chile",
    description: "Diseño de una pagina de viajes que contiene secciones donde el usuario puede navegar entre destinos.",
    image: "./images/viajes.png",
    tags: ["JavaScript", "Html", "Css", "GitHub Pages"],
    github: "https://github.com/MacarenaQuijadaG/Viajes-de-Chile.git",
    preview: "https://macarenaquijadag.github.io/Viajes-de-Chile/",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      style={{ padding: "60px 150px", background: "var(--color-primary)" }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "var(--color-light)",
        }}
      >
        Mis Proyectos
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={
                <img
                  alt={project.title}
                  src={project.image}
                  style={{
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              }
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                background: "var(--color-secondary)",
                color: "var(--color-light)",
                minWidth: "300px", // Ancho mínimo
                minHeight: "420px", // Altura mínima
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Title
                  level={4}
                  style={{ marginBottom: "10px", color: "var(--color-light)" }}
                >
                  {project.title}
                </Title>
                <p
                  style={{
                    marginBottom: "10px",
                    color: "var(--color-light)",
                    fontSize: "14px",
                  }}
                >
                  {project.description}
                </p>
                <div style={{ marginBottom: "15px" }}>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag
                      key={tagIndex}
                      color="var(--color-accent)"
                      style={{
                        marginBottom: "5px",
                        border: "1px solid var(--color-accent)",
                        backgroundColor: "transparent",
                        color: "var(--color-accent)",
                      }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
              <Button
                type="primary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "var(--color-accent)",
                  borderColor: "var(--color-accent)",
                  fontWeight: "bold",
                  color: "var(--color-light)",
                }}
              >
                Ver en GitHub
              </Button>
              <Button
                type="link"
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "var(--color-accent)",
                  borderColor: "var(--color-accent)",
                  fontWeight: "bold",
                  color: "var(--color-light)",
                  marginLeft: "20px",
                }}
              >
                Ver Preview
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
