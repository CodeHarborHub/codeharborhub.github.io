import React from "react";
import BlogCard from "./BlogCard";
import "./BlogPage.css";
import  blogs  from "../../database/blogs";

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      {blogs.map((post, index) => (
        <BlogCard
          key={index}
          id={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
          link={`/blog/${post.link}`}
        />
      ))}
    </div>
  );
};

export default BlogPage;
