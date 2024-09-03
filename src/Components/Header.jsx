/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "#2E3A5F",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        color: "white",
      }}
    >
      <a href="#home" style={{ color: "white", textDecoration: "none" }}>
        Home
      </a>
      <a href="#about" style={{ color: "white", textDecoration: "none" }}>
        About
      </a>
      <a href="#portfolio" style={{ color: "white", textDecoration: "none" }}>
        Portfolio
      </a>
      <a href="#footer" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </a>
    </div>
  );
};

export default Header;
