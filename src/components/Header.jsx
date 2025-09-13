import React from "react";
import { Layout, Menu } from "antd";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--color-primary)", 
      }}
    >
      {/* Logotipo */}
      <div style={{ color: "var(--color-light)", fontWeight: "bold", fontSize: "20px" }}>
        Macarena Quijada Guzmán
      </div>

      {/* Menú de navegación */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          flex: 1,
          justifyContent: "center",
          background: "var(--color-primary)", 
        }}
      >
        <Menu.Item key="1">
          <a href="#about" style={{ color: "var(--color-light)" }}>
            Sobre mi
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#skills" style={{ color: "var(--color-light)" }}>
            Skills & Tools
          </a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#projects" style={{ color: "var(--color-light)" }}>
            Proyectos
          </a>
        </Menu.Item>
        <Menu.Item key="5">
          <a href="#education" style={{ color: "var(--color-light)" }}>
            Educación & Certificaciones
          </a>
        </Menu.Item>
        <Menu.Item key="4">
          <a href="#contact" style={{ color: "var(--color-light)" }}>
            Contacto
          </a>
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;