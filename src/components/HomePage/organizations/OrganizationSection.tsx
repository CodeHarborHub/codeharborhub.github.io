import React from "react";
import "./OrganizationSection.css";

interface Organization {
  logo: string;
  name: string;
  description: string;
  link: string;
}

const organizations: Organization[] = [
  {
    logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    name: "HTML 5",
    description: "The latest version of the markup language for web pages, introducing enhanced semantics, multimedia support, and improved accessibility.",
    link: "https://github.com/HTML-Mastery",
  },
  {
    logo: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    name: "CSS 3",
    description: "The latest version of CSS that brings exciting enhancements like animations, gradients, and transitions, empowering modern web design.",
    link: "https://github.com/CSS3-Mastery",
  },
  {
    logo: "https://img.icons8.com/?size=100&id=gYCTehfTlYk5&format=png&color=000000",
    name: "JavaScript",
    description: "Versatile, high-level scripting language. Powers dynamic web interactions with HTML/CSS. Supports both front-end and back-end.",
    link: "https://github.com/JavaScript-Mastery",
  },
  {
    logo: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    name: "React",
    description: "A powerful JavaScript library for building user interfaces. It enables efficient rendering and modular component-based development.",
    link: "https://github.com/React-js-Mastery",
  },
  {
    logo: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    name: "Node",
    description:
      "A powerful JavaScript runtime built on Chrome's V8 engine, enabling scalable and efficient server side and networking applications.",
    link: "https://github.com/Node-Js-Mastery",
  },
  
  {
    logo: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
    name: "MongoDB",
    description:
      "A flexible and scalable NoSQL database that stores data in JSON like documents, offering high performance and easy scalability",
    link: "",
  },
];

const OrganizationSection: React.FC = () => {
  return (
    <section id="organization">
      <h2>Our GitHub Organizations</h2>
      <div className="organization-container">
        {organizations.map((org, index) => (
          <div className="organization-card" key={index}>
            <a href={org.link} target={org.link?"_blank":"_parent"} rel="noopener noreferrer">
              <img src={org.logo} alt={org.name} />
            </a>
            <h3>{org.name}</h3>
            <p>{org.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizationSection;
