/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/me.jpg";

const imageAltText = "";

const Home = ({ name, title }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div
        style={{
          position: "absolute",
          top: "10rem",
          left: "5rem",
          width: "17rem",
          color: "#FFFFFF",
          borderRadius: "8px", // Adjust the value as needed for roundness
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
        }}
      >
        <h1 style={{ fontSize: "9rem", fontWeight: "bolder", marginBottom: "20px" }}>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <a href="#about" onClick={handleScroll}>
          <img
            src={arrowSvg}
            style={{ height: "3rem", width: "3rem" }}
            alt={imageAltText}
            className="arrow-down"
          />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
