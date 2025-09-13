import React from "react";
import { Typography, Timeline } from "antd";

const { Title } = Typography;

const Education = () => {
  return (
    <div id="education" style={{ padding: "60px 150px", background: "var(--color-primary)", color: "var(--color-light)" }}>
      <Title style={{ textAlign: "center", marginBottom: "40px", color: "var(--color-light)" }}>
        Educación & Certificaciones
      </Title>
      <Timeline
        mode="alternate"
        style={{ maxWidth: "800px", margin: "0 auto"}}
      >
        <Timeline.Item
          label="JUN 2025 - AGO 2025"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Especialización en Seguridad Informatica Windows Server y Linux
          </Title>
          <p style={{ color: "var(--color-light)" }}>InforCap, Talento Digital</p>
          <a href="https://app.aluracursos.com/user/mcarena-quijada/fullCertificate/812759e3a5b93c8d3db0089c32a7e835" target="_blank" style={{ color: "var(--color-accent)" }} >Insignia Digital</a>
          <a href="./files/DescargarCertificado.pdf" style={{ color: "var(--color-accent)", marginLeft: "30px" }} download>Descargar Certificación</a>
        </Timeline.Item>
        <Timeline.Item
          label="ENE 2025 - AGU 2025"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
           Data Sciencie
          </Title>
          <p style={{ color: "var(--color-light)" }}>Alura Latam, Becas Oracle</p>
          <a href="https://app.aluracursos.com/user/mcarena-quijada/fullCertificate/812759e3a5b93c8d3db0089c32a7e835" target="_blank" style={{ color: "var(--color-accent)" }} >Insignia Digital</a>
          <a href="./files/Macarena Quijada Guzmán - Programa -.pdf" style={{ color: "var(--color-accent)", marginLeft: "30px" }} download>Descargar Certificación</a>
        </Timeline.Item>
        <Timeline.Item
          label="SEP 2024"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Diseño UX: Experiencia de Usuario UX/UI con Figma 2023.
          </Title>
          <p style={{ color: "var(--color-light)" }}>Udemy</p>
          <a href="./files/udemu ux.pdf" style={{ color: "var(--color-accent)" }} download>Descargar Certificación</a>
        </Timeline.Item>
        <Timeline.Item
          label="ENE 2024 - JUL 2024"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Bootcamp de Desarrollo de Aplicaciones Web JavaScript
          </Title>
          <p style={{ color: "var(--color-light)" }}>Desafio Latam, Talento Digital</p>
          <a href="https://www.acreditta.com/credential/7cfb46f7-00e9-4044-bcde-024283b45ecb?utm_source=copy&resource_type=badge&resource=7cfb46f7-00e9-4044-bcde-024283b45ecb" target="_blank" style={{ color: "var(--color-accent)" }} >Insignia Digital</a>
          <a href="./files/aprobacion-final-td8-g72-m10-desarrollo-de-aplicaciones-full-stack-javascript-trainee-v2-0-desarrollo-de-empleabilidad-en-la-industria-digital-ele030803068140-120(2).pdf" style={{ color: "var(--color-accent)", marginLeft: "30px" }} download>Descargar Certificación</a>
        </Timeline.Item>
        <Timeline.Item
          label="MAR 2023 - AGO 2023"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            English for Developers Course
          </Title>
          <p style={{ color: "var(--color-light)" }}>E-camp - Edutecno</p>
          <a href="./files/diploma english (61).png" style={{ color: "var(--color-accent)", marginLeft: "30px" }} download>Descargar Certificación</a>
        </Timeline.Item>
        <Timeline.Item
          label="MAR 2023 - AGO 2023"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Bootcamp Desarrollador Web Front End
          </Title>
          <p style={{ color: "var(--color-light)" }}>Edutecno, Talento Digital</p>
          <a href="https://www.acreditta.com/credential/8ca7675d-19f3-4fcb-bbfe-203a2dd9e031?trk=public_profile_certification-title" target="_blank" style={{ color: "var(--color-accent)" }} >Insignia Digital</a>
          <a href="./files/DIPLOMA_BOOTCAMP_2023 MACARENA QUIJADA.pdf" style={{ color: "var(--color-accent)", marginLeft: "30px" }} download>Descargar Certificación</a>
        </Timeline.Item>
        <Timeline.Item
          label="FEB 2015 - ABR 2020"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Ingeneria de Ejecución en Computación e Informatica
          </Title>
          <p style={{ color: "var(--color-light)" }}>Instituto Profesional DR. Virginio Gomez</p>
          <a href="./files/Macarena Marlene Quijada Guzmán.pdf" style={{ color: "var(--color-accent)" }} download>Descargar Titulo Profesional</a>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Education;