import React, { useState } from "react";
import "./Roadmap.css";
import Link from "@docusaurus/Link";

interface TechCategory {
  id: number;
  title: string;
  technologies: { id: number; name: string; link: string }[];
}

const techCategories: TechCategory[] = [
  {
    id: 1,
    title: "Frontend",
    technologies: [
      { id: 1, name: "HTML", link: "/roadmap/html/" },
      { id: 2, name: "CSS", link: "#" },
      { id: 3, name: "JavaScript", link: "#" },
      { id: 4, name: "React", link: "https://roadmap.sh/react" },
      { id: 5, name: "Angular", link: "#" },
      { id: 6, name: "Vue.js", link: "#" },
      { id: 7, name: "Svelte", link: "#" },
      { id: 8, name: "TypeScript", link: "#" },
      { id: 9, name: "Bootstrap", link: "#" },
      { id: 10, name: "Tailwind CSS", link: "#" },
      { id: 11, name: "jQuery", link: "#" },
      { id: 12, name: "Ember.js", link: "#" },
      { id: 13, name: "Backbone.js", link: "#" },
      { id: 14, name: "Webpack", link: "#" },
      { id: 15, name: "Parcel", link: "#" },
      { id: 16, name: "Gatsby", link: "#" },
      { id: 17, name: "Next.js", link: "#" },
    ],
  },
  {
    id: 2,
    title: "Backend",
    technologies: [
      { id: 18, name: "Node.js", link: "#" },
      { id: 19, name: "Express.js", link: "#" },
      { id: 20, name: "Django", link: "#" },
      { id: 21, name: "Ruby on Rails", link: "#" },
      { id: 22, name: "Spring Boot", link: "#" },
      { id: 23, name: "Flask", link: "#" },
      { id: 24, name: "Laravel", link: "#" },
      { id: 25, name: "ASP.NET Core", link: "#" },
      { id: 26, name: "Koa.js", link: "#" },
      { id: 27, name: "Gin", link: "#" },
      { id: 28, name: "Phoenix", link: "#" },
      { id: 29, name: "FastAPI", link: "#" },
      { id: 30, name: "Hapi.js", link: "#" },
      { id: 31, name: "NestJS", link: "#" },
    ],
  },
  {
    id: 3,
    title: "Mobile Development",
    technologies: [
      { id: 32, name: "React Native", link: "#" },
      { id: 33, name: "Flutter", link: "#" },
      { id: 34, name: "Swift", link: "#" },
      { id: 35, name: "Kotlin", link: "#" },
      { id: 36, name: "Java", link: "#" },
      { id: 37, name: "Ionic", link: "#" },
      { id: 38, name: "Xamarin", link: "#" },
      { id: 39, name: "Cordova", link: "#" },
      { id: 40, name: "Objective-C", link: "#" },
      { id: 41, name: "PhoneGap", link: "#" },
    ],
  },
  {
    id: 4,
    title: "DevOps",
    technologies: [
      { id: 42, name: "Docker", link: "#" },
      { id: 43, name: "Kubernetes", link: "#" },
      { id: 44, name: "Jenkins", link: "#" },
      { id: 45, name: "Travis CI", link: "#" },
      { id: 46, name: "CircleCI", link: "#" },
      { id: 47, name: "GitLab CI/CD", link: "#" },
      { id: 48, name: "Terraform", link: "#" },
      { id: 49, name: "Ansible", link: "#" },
      { id: 50, name: "Puppet", link: "#" },
      { id: 51, name: "Chef", link: "#" },
      { id: 52, name: "Vagrant", link: "#" },
      { id: 53, name: "SaltStack", link: "#" },
      { id: 54, name: "Bamboo", link: "#" },
    ],
  },
  {
    id: 5,
    title: "Database",
    technologies: [
      { id: 55, name: "MySQL", link: "#" },
      { id: 56, name: "PostgreSQL", link: "#" },
      { id: 57, name: "MongoDB", link: "#" },
      { id: 58, name: "SQLite", link: "#" },
      { id: 59, name: "Redis", link: "#" },
      { id: 60, name: "MariaDB", link: "#" },
      { id: 61, name: "Oracle Database", link: "#" },
      { id: 62, name: "Microsoft SQL Server", link: "#" },
      { id: 63, name: "Firebase Realtime Database", link: "#" },
      { id: 64, name: "Elasticsearch", link: "#" },
      { id: 65, name: "Cassandra", link: "#" },
      { id: 66, name: "DynamoDB", link: "#" },
      { id: 67, name: "Neo4j", link: "#" },
      { id: 68, name: "CouchDB", link: "#" },
    ],
  },
  {
    id: 6,
    title: "Cloud Platforms",
    technologies: [
      { id: 69, name: "Amazon Web Services (AWS)", link: "#" },
      { id: 70, name: "Microsoft Azure", link: "#" },
      { id: 71, name: "Google Cloud Platform (GCP)", link: "#" },
      { id: 72, name: "IBM Cloud", link: "#" },
      { id: 73, name: "Oracle Cloud", link: "#" },
      { id: 74, name: "DigitalOcean", link: "#" },
      { id: 75, name: "Heroku", link: "#" },
      { id: 76, name: "Firebase", link: "#" },
      { id: 77, name: "Netlify", link: "#" },
      { id: 78, name: "Vercel", link: "#" },
      { id: 79, name: "Linode", link: "#" },
      { id: 80, name: "Vultr", link: "#" },
    ],
  },
  {
    id: 7,
    title: "Version Control",
    technologies: [
      { id: 81, name: "Git", link: "#" },
      { id: 82, name: "GitHub", link: "#" },
      { id: 83, name: "GitLab", link: "#" },
      { id: 84, name: "Bitbucket", link: "#" },
      { id: 85, name: "SVN", link: "#" },
      { id: 86, name: "Mercurial", link: "#" },
      { id: 87, name: "Perforce", link: "#" },
    ],
  },
  {
    id: 8,
    title: "Testing",
    technologies: [
      { id: 88, name: "Jest", link: "#" },
      { id: 89, name: "Mocha", link: "#" },
      { id: 90, name: "Chai", link: "#" },
      { id: 91, name: "Jasmine", link: "#" },
      { id: 92, name: "Cypress", link: "#" },
      { id: 93, name: "Puppeteer", link: "#" },
      { id: 94, name: "Selenium", link: "#" },
      { id: 95, name: "JUnit", link: "#" },
      { id: 96, name: "pytest", link: "#" },
      { id: 97, name: "TestNG", link: "#" },
      { id: 98, name: "Robot Framework", link: "#" },
      { id: 99, name: "Cucumber", link: "#" },
      { id: 100, name: "Karma", link: "#" },
    ],
  },
  {
    id: 9,
    title: "Data Science & Machine Learning",
    technologies: [
      { id: 101, name: "TensorFlow", link: "#" },
      { id: 102, name: "PyTorch", link: "#" },
      { id: 103, name: "Keras", link: "#" },
      { id: 104, name: "Scikit-learn", link: "#" },
      { id: 105, name: "Pandas", link: "#" },
      { id: 106, name: "NumPy", link: "#" },
      { id: 107, name: "Matplotlib", link: "#" },
      { id: 108, name: "Seaborn", link: "#" },
      { id: 109, name: "Apache Spark", link: "#" },
      { id: 110, name: "Dask", link: "#" },
      { id: 111, name: "NLTK", link: "#" },
      { id: 112, name: "spaCy", link: "#" },
      { id: 113, name: "H2O.ai", link: "#" },
      { id: 114, name: "Theano", link: "#" },
    ],
  },
  {
    id: 10,
    title: "Cybersecurity",
    technologies: [
      { id: 115, name: "Nmap", link: "#" },
      { id: 116, name: "Wireshark", link: "#" },
      { id: 117, name: "Metasploit", link: "#" },
      { id: 118, name: "Burp Suite", link: "#" },
      { id: 119, name: "OWASP ZAP", link: "#" },
      { id: 120, name: "Kali Linux", link: "#" },
      { id: 121, name: "Snort", link: "#" },
      { id: 122, name: "Suricata", link: "#" },
      { id: 123, name: "Nessus", link: "#" },
      { id: 124, name: "OpenVAS", link: "#" },
      { id: 125, name: "Acunetix", link: "#" },
      { id: 126, name: "Nikto", link: "#" },
    ],
  },
  {
    id: 11,
    title: "Web Servers",
    technologies: [
      { id: 127, name: "Apache HTTP Server", link: "#" },
      { id: 128, name: "Nginx", link: "#" },
      { id: 129, name: "LiteSpeed", link: "#" },
      { id: 130, name: "Caddy", link: "#" },
      { id: 131, name: "Tomcat", link: "#" },
      { id: 132, name: "Microsoft IIS", link: "#" },
      { id: 133, name: "Jetty", link: "#" },
      { id: 134, name: "WildFly", link: "#" },
    ],
  },
  {
    id: 12,
    title: "Containerization",
    technologies: [
      { id: 135, name: "Docker", link: "#" },
      { id: 136, name: "Kubernetes", link: "#" },
      { id: 137, name: "OpenShift", link: "#" },
      { id: 138, name: "Rancher", link: "#" },
      { id: 139, name: "Mesos", link: "#" },
      { id: 140, name: "LXC", link: "#" },
      { id: 141, name: "CRI-O", link: "#" },
      { id: 142, name: "Podman", link: "#" },
    ],
  },
  {
    id: 13,
    title: "Big Data",
    technologies: [
      { id: 143, name: "Hadoop", link: "#" },
      { id: 144, name: "Apache Spark", link: "#" },
      { id: 145, name: "Apache Flink", link: "#" },
      { id: 146, name: "Apache Storm", link: "#" },
      { id: 147, name: "Apache Kafka", link: "#" },
      { id: 148, name: "Apache Hive", link: "#" },
      { id: 149, name: "Apache HBase", link: "#" },
      { id: 150, name: "Apache NiFi", link: "#" },
      { id: 151, name: "Presto", link: "#" },
      { id: 152, name: "Druid", link: "#" },
    ],
  },
  {
    id: 14,
    title: "Internet of Things (IoT)",
    technologies: [
      { id: 153, name: "Arduino", link: "#" },
      { id: 154, name: "Raspberry Pi", link: "#" },
      { id: 155, name: "ESP8266", link: "#" },
      { id: 156, name: "ESP32", link: "#" },
      { id: 157, name: "MQTT", link: "#" },
      { id: 158, name: "Zigbee", link: "#" },
      { id: 159, name: "LoRaWAN", link: "#" },
      { id: 160, name: "Particle", link: "#" },
      { id: 161, name: "ThingSpeak", link: "#" },
    ],
  },
  {
    id: 15,
    title: "Blockchain",
    technologies: [
      { id: 162, name: "Ethereum", link: "#" },
      { id: 163, name: "Hyperledger Fabric", link: "#" },
      { id: 164, name: "Solidity", link: "#" },
      { id: 165, name: "Truffle", link: "#" },
      { id: 166, name: "Ganache", link: "#" },
      { id: 167, name: "Corda", link: "#" },
      { id: 168, name: "Quorum", link: "#" },
      { id: 169, name: "Polkadot", link: "#" },
      { id: 170, name: "Chainlink", link: "#" },
    ],
  },
];
const Roadmap: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [collapsedCategories, setCollapsedCategories] = useState<number[]>([]);

  const toggleCollapse = (id: number) => {
    setCollapsedCategories((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

 const filteredCategories = techCategories
    .map((category) => ({
      ...category,
      technologies: category.technologies.filter((tech) =>
        tech.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.technologies.length > 0);

  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">Technology Roadmap</h1>
      <div className="roadmap-controls">
        <input
          type="text"
          placeholder="Search technologies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="roadmap-search"
        />
      </div>
      {filteredCategories.map((category) => (
        <div key={category.id} className="roadmap-category">
          <h2
            className="roadmap-category-title"
            onClick={() => toggleCollapse(category.id)}
          >
            {category.title}
          </h2>
          {!collapsedCategories.includes(category.id) && (
            <ul className="roadmap-cards">
              {category.technologies.map((tech) => (
                <li key={tech.id} className="roadmap-card">
                  <Link to={tech.link}>
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
