import React from "react";
import image from "../images/uni.jpg";

const educationData = [
  {
    id: 1,
    institution: "Prubanchal University",
    degree: "Post Graduate Diploma in Computer Application",
    year: "Running",
  },
  {
    id: 2,
    institution: "Tribhuvan University",
    degree: "Bachelore in Business Studies",
    year: "2016-2019",
  },
  {
    id: 3,
    institution: "HSEB",
    degree: "Higher Secondary Education",
    year: "no data",
  },
  {
    id: 4,
    institution: "SLC",
    degree: "School Leaving Certificate",
    year: "no data",
  },
];

const imageAltText = "desktop with books and laptop";
const Education = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            alt={imageAltText}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
          />
        </div>
        <div className="container">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{ border: "1px solid black", background: "lightgray", padding: "0.5rem" }}
                >
                  Institution
                </th>
                <th
                  style={{ border: "1px solid black", background: "lightgray", padding: "0.5rem" }}
                >
                  Degree
                </th>
                <th
                  style={{ border: "1px solid black", background: "lightgray", padding: "0.5rem" }}
                >
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              {educationData.map((education) => (
                <tr key={education.id} style={{ border: "1px solid black", background: "white" }}>
                  <td style={{ border: "1px solid black", padding: "0.5rem" }}>
                    <a href={education.url} target="_blank" rel="noopener noreferrer">
                      {education.institution}
                    </a>
                  </td>
                  <td style={{ border: "1px solid black", padding: "0.5rem" }}>
                    {education.degree}
                  </td>
                  <td style={{ border: "1px solid black", padding: "0.5rem" }}>{education.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Education;
