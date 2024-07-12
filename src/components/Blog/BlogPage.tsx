import React from "react";
import BlogCard from "./BlogCard";
import "./BlogPage.css";
import { blogPosts } from "../../../blogData";

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      {blogPosts.map((post, index) => (
        <BlogCard
          key={index}
          image={post.image}
          title={post.title}
          description={post.description}
          link={post.link}
        />
      ))}
    </div>
  );
};

export default BlogPage;
