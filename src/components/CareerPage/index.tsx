import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "@docusaurus/Link";
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
      className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 dark:bg-gray-800"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="p-4 border-t border-gray-200">
        {/* <div className="text-gray-500 mb-2">
          <p>
            <strong>Duration:</strong> <i>{duration}</i>
          </p>
          <p>
            <strong>Location:</strong> <i>{location}</i>
          </p>
          <p>
            <strong>Category:</strong> <i>{category}</i>
          </p>
        </div> */}
        <Link
          to={link}
          className="font-medium"
          rel="noopener noreferrer"
        >
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
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-blue-600">
        Career Opportunities for You
      </h1>
      <div className="text-center mt-4 mb-8">
        <p className="text-lg">
          We are looking for talented individuals to join our team. Check out
          the available career opportunities below and apply now.
        </p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <input
          type="search"
          placeholder="Search careers"
          value={searchTerm}
          onChange={handleSearch}
          className="w-1/2 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
        />
        <select
          value={categoryFilter}
          onChange={handleCategoryFilter}
          className="p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
        >
          <option value="All">All Categories</option>
          <option value="Engineering">Engineering</option>
          <option value="Data Science">Data Science</option>
          <option value="Management">Management</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Community">Community</option>
          <option value="Content">Content</option>
          <option value="Quality Assurance">Quality Assurance</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map((career) => (
          <CareerCard key={career.id} {...career} />
        ))}
      </div>
    </div>
  );
};

export default CareerPage;