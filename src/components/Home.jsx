import React from "react";
import { Typography, Row, Col, Button } from "antd";
import { LinkedinOutlined } from "@ant-design/icons"; 

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div
      id="about"
      style={{
        background: "var(--color-primary)",
        padding: "200px 150px",
        color: "var(--color-light)",
        minHeight: "100vh",
      }}
    >
      <Row justify="center" align="middle" gutter={[32, 32]}>
        {/* Columna de texto */}
        <Col xs={24} md={12}>
          <Title
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "var(--color-light)",
            }}
          >
            Hola, soy Macarena Quijada
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              marginTop: "20px",
              lineHeight: "1.8",
              color: "var(--color-light)",
            }}
          >
            Soy Ingeniera en Informática con pasión por la tecnología y el desarrollo de software. Me especializo en desarrollo Front-End y Full Stack, con experiencia en JavaScript, React, Vue.js y Node.js. También tengo conocimientos sólidos en seguridad informática, administración de servidores Linux (Rocky Linux, CentOS) y Windows Server. Me caracterizo por mi capacidad para resolver problemas, mi compromiso y mi interés en seguir aprendiendo nuevas tecnologías.
          </Paragraph>
          <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
            <Button
              type="primary"
              size="large"
              style={{
                padding: "15px 30px",
                fontSize: "18px",
                backgroundColor: "var(--color-accent)",
                borderColor: "var(--color-accent)",
                fontWeight: "bold",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              href="./files/CV MACARENA QUIJADA.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Descarga mi CV
            </Button>
            <Button
              type="default"
              size="large"
              style={{
                padding: "15px 30px",
                fontSize: "18px",
                backgroundColor: "var(--color-light)",
                borderColor: "var(--color-light)",
                color: "var(--color-primary)",
                fontWeight: "bold",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              href="https://www.linkedin.com/in/macarena-quijada-guzm%C3%A1n-430263191/" 
              rel="noopener noreferrer"
            >
              <LinkedinOutlined style={{ fontSize: "20px" }} />
              LinkedIn
            </Button>
          </div>
        </Col>

        {/* Columna de imagen */}
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <img
            src="./images/IMG-20201130-WA0000.jpg"
            alt="Foto de Perfil"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "50%",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;