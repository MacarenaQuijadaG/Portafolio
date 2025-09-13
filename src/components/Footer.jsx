import React from "react";
import { Row, Col, Typography } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Title, Link } = Typography;

const Footer = () => {
  return (
    <div style={{ padding: "40px 150px", background: "var(--color-primary)", color: "var(--color-light)" }}>
      <Row gutter={[32, 32]} justify="space-between">
        {/* Columna 1: Navegación */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Navegación
          </Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link href="#about" style={{ color: "var(--color-light)" }}>
                Sobre mi
              </Link>
            </li>
            <li>
              <Link href="#skills" style={{ color: "var(--color-light)" }}>
                Skills & Tools
              </Link>
            </li>
            <li>
              <Link href="#projects" style={{ color: "var(--color-light)" }}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="#education" style={{ color: "var(--color-light)" }}>
                Educación & Certificaciones
              </Link>
            </li>
            <li>
              <Link href="#contact" style={{ color: "var(--color-light)" }}>
                Contacto
              </Link>
            </li>
          </ul>
        </Col>

        {/* Columna 2: Redes Sociales */}
        <Col xs={24} md={8}>
  <Title level={4} style={{ color: "var(--color-light)" }}>
    Sígueme
  </Title>
  <Row gutter={[16, 16]} justify="start">
    <Col>
      <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
        <TwitterOutlined style={{ fontSize: "32px", color: "var(--color-accent)" }} />
      </a>
    </Col>
    <Col>
      <a href="https://www.linkedin.com/in/macarena-quijada-guzm%C3%A1n-430263191/" target="_blank" rel="noopener noreferrer">
        <LinkedinOutlined style={{ fontSize: "32px", color: "var(--color-accent)" }} />
      </a>
    </Col>
    <Col>
      <a href="https://github.com/MacarenaQuijadaG" target="_blank" rel="noopener noreferrer">
        <GithubOutlined style={{ fontSize: "32px", color: "var(--color-accent)" }} />
      </a>
    </Col>
    <Col>
      <a href="https://discord.gg/XBNrfYyU" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="var(--color-accent)"
          viewBox="0 0 24 24"
        >
          <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.163-.393-.407-.874-.619-1.249a.077.077 0 0 0-.079-.037c-1.6.303-3.285.82-4.886 1.515a.07.07 0 0 0-.032.027C2.207 9.045 1.485 13.58 1.885 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.105c-.652-.247-1.27-.549-1.852-.892a.077.077 0 0 1-.008-.127c.124-.093.248-.19.366-.287a.074.074 0 0 1 .077-.01c3.896 1.78 8.18 1.78 12.041 0a.074.074 0 0 1 .078.01c.119.098.242.194.366.287a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.853.892.076.076 0 0 0-.04.106c.36.698.773 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.9 19.9 0 0 0 5.994-3.03.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.548-13.662a.061.061 0 0 0-.032-.028ZM9.678 15.725c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.093 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm6.644 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.954-2.418 2.157-2.418 1.209 0 2.176 1.093 2.157 2.418 0 1.334-.948 2.419-2.157 2.419Z"/>
        </svg>
      </a>
    </Col>
  </Row>
</Col>


        {/* Columna 3: Derechos reservados */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "var(--color-light)" }}>
            © 2025 Mi Portafolio
          </Title>
          <p style={{ color: "var(--color-light)", marginTop: "10px" }}>
            Todos los derechos reservados.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
