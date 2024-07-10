import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  link: string; // Add link property
}


const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <Link to={link} className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-description">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
