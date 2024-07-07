import React from "react";
import "./style.css";

interface Organization {
  id: number;
  logo: string;
  name: string;
  description: string;
  link: string;
}
const Orgs: Organization[] = [
  {
    id: 1,
    logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    name: "HTML 5",
    description:
      "Join Our HTML organization to learn and build beautiful websites using the latest version of HTML, the language for creating web pages.",
    link: "https://github.com/HTML-Mastery",
  },
  {
    id: 2,
    logo: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    name: "CSS 3",
    description:
      "Join Our CSS organization to learn and build beautiful websites using the latest version of CSS, the language for styling web pages.",
    link: "https://github.com/CSS3-Mastery",
  },
  {
    id: 3,
    logo: "https://img.icons8.com/?size=100&id=gYCTehfTlYk5&format=png&color=000000",
    name: "JavaScript",
    description:
      "Join Our JavaScript organization to learn and build interactive websites using the most popular programming language for the web.",
    link: "https://github.com/JavaScript-Mastery",
  },
  {
    id: 4,
    logo: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    name: "React",
    description:
      "Join Our React organization to learn and build modern web applications using the most popular JavaScript library for building user interfaces.",
    link: "https://github.com/React-js-Mastery",
  },
  {
    id: 5,
    logo: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    name: "Node",
    description:
      "Join Our Node organization to learn and build scalable network applications using the most popular JavaScript runtime environment.",
    link: "https://github.com/Node-Js-Mastery",
  },

  {
    id: 6,
    logo: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
    name: "MongoDB",
    description:
      "Join Our MongoDB organization to learn and build scalable network applications using the most popular NoSQL database program.",
    link: "#",
  },
];
const Organizations: React.FC = () => {
  return (
    <section id="organization">
      <div className="organization-container">
        {Orgs.map((org) => (
          <div className="organization-card" key={org.id}>
            <a
              href={org.link}
              target={org.link ? "_blank" : "_parent"}
              rel="noopener noreferrer"
            >
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

export default Organizations;