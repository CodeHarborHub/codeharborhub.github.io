import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "@docusaurus/Link";
import "./styles.css";
import careersData, { CareerCardProps } from "../../data/careersData";

const CareerCard: React.FC<CareerCardProps> = ({
  id,
  title,
  description,
  image,
  link,
  duration,
  location,
  category,
  tags,
}) => {
  return (
    <motion.div
      className="career-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="image-container">
        <img src={image} alt={title} loading="lazy" className="image" />
      </div>
      <div className="career-card-content">
        <h3>{title}</h3>
        <p className="career-description">{description}</p>
      </div>
      <div className="career-footer">
        <div className="career-details">
          <p>
            Duration: <i>{duration}</i>{" "}
          </p>
          <p>
            Location: <i>{location}</i>{" "}
          </p>
          <p>
            Category: <i>{category}</i>{" "}
          </p>
          {/* <div className="career-tags">
            Tags:
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div> */}
        </div>
        <Link rel="noopener noreferrer" to={link} className="career-link">
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

const CareerPage: React.FC = () => {
  const [filteredCareers, setFilteredCareers] = useState<CareerCardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    setFilteredCareers(careersData);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredCareers = careersData.filter((career) => {
      return (
        career.title.toLowerCase().includes(searchTerm) ||
        career.description.toLowerCase().includes(searchTerm) ||
        career.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );
    });
    setFilteredCareers(filteredCareers);
  };

  const handleCategoryFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setCategoryFilter(category);
    if (category === "All") {
      setFilteredCareers(careersData);
    } else {
      const filteredCareers = careersData.filter(
        (career) => career.category === category
      );
      setFilteredCareers(filteredCareers);
    }
  };

  return (
    <div className="career-page">
      <h1>Career Opportunities for You</h1>
      <div className="career-intro">
        <p>
          We are looking for talented individuals to join our team. Check out
          the available career opportunities below and apply now.
        </p>
      </div>
      <div className="career-filters">
        <div className="search-bar">
          <input
            placeholder="Search careers"
            value={searchTerm}
            onChange={handleSearch}
            type="search"
          />
          <select value={categoryFilter} onChange={handleCategoryFilter}>
            <option value="All">All Categories</option>
            <option value="Engineering">Engineering</option>
            <option value="Data Science">Data Science</option>
            <option value="Management">Management</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Community">Community</option>
            <option value="Content">Content</option>
            <option value="Quality Assurance">Quality Assurance</option>
            {/* Add more categories as needed */}
          </select>
        </div>
      </div>
      <div className="career-cards">
        {filteredCareers.map((career) => (
          <CareerCard key={career.id} {...career} />
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
