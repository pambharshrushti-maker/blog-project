import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BlogForm from "./components/BlogForm";
import BlogCard from "./components/BlogCard";

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Introduction to React.js",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      author: "Srushti",
      category: "React",
      date: "2026-09-01",
      description: "React.js is a popular JavaScript library used for building modern user interfaces."
    },
    {
      id: 2,
      title: "Learn JavaScript Basics",
      imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      author: "Rahul",
      category: "JavaScript",
      date: "2026-09-02",
      description: "Learn the basic concepts of JavaScript including variables, functions and events."
    },
    {
      id: 3,
      title: "HTML for Beginners",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      author: "Priya",
      category: "HTML",
      date: "2026-09-03",
      description: "HTML is the foundation of every website. Learn HTML tags and page structure."
    },
    {
      id: 4,
      title: "CSS Web Design",
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      author: "Amit",
      category: "CSS",
      date: "2026-09-04",
      description: "CSS helps developers create beautiful and responsive website designs."
    },
    {
      id: 5,
      title: "Bootstrap 5 Tutorial",
      imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      author: "Neha",
      category: "Bootstrap",
      date: "2026-09-05",
      description: "Bootstrap provides ready-made components for creating responsive websites quickly."
    },
    {
      id: 6,
      title: "Frontend Development",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      author: "Srushti",
      category: "Development",
      date: "2026-09-06",
      description: "Frontend development focuses on the visual and interactive part of websites."
    },
    {
      id: 7,
      title: "Git and GitHub Guide",
      imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
      author: "Karan",
      category: "GitHub",
      date: "2026-09-07",
      description: "Git and GitHub are essential tools for managing and sharing your source code."
    },
    {
      id: 8,
      title: "Node.js Introduction",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      author: "Riya",
      category: "Node.js",
      date: "2026-09-08",
      description: "Node.js allows JavaScript to run outside the browser and is widely used for backend development."
    },
    {
      id: 9,
      title: "MongoDB Basics",
      imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
      author: "Dev",
      category: "MongoDB",
      date: "2026-09-09",
      description: "MongoDB is a NoSQL database commonly used with modern JavaScript applications."
    },
    {
      id: 10,
      title: "MERN Stack Development",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      author: "Srushti",
      category: "MERN",
      date: "2026-09-10",
      description: "MERN stack combines MongoDB, Express, React and Node.js to build full-stack applications."
    },
    {
      id: 11,
      title: "Responsive Website Design",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      author: "Jay",
      category: "Web Design",
      date: "2026-09-11",
      description: "Responsive design makes websites work properly on mobile, tablet and desktop screens."
    },
    {
      id: 12,
      title: "React Components",
      imageUrl: "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb",
      author: "Meera",
      category: "React",
      date: "2026-09-12",
      description: "React components help developers divide a user interface into reusable parts."
    },
    {
      id: 13,
      title: "JavaScript ES6 Features",
      imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      author: "Vishal",
      category: "JavaScript",
      date: "2026-09-13",
      description: "ES6 introduced useful features such as let, const, arrow functions and template literals."
    },
    {
      id: 14,
      title: "Web Developer Roadmap",
      imageUrl: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
      author: "Srushti",
      category: "Career",
      date: "2026-09-14",
      description: "A roadmap can help beginners understand the important skills needed to become a web developer."
    },
    {
      id: 15,
      title: "Building Your First Website",
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166",
      author: "Anjali",
      category: "Web Development",
      date: "2026-09-15",
      description: "Learn how to plan and build your first website using HTML, CSS and JavaScript."
    }
  ]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="container-fluid py-4">


      <h1 className="blog-main-title">
        My Blogs
      </h1>

      <div className="row">


        <div className="col-lg-3 mb-4">
          <BlogForm addBlog={addBlog} />
        </div>

        <div className="col-lg-9">

          <h2 className="fw-bold mb-4">
            Latest Blogs
          </h2>

          <div className="row">
            {blogs.map((blog) => (
              <div
                className="col-md-6 col-xl-4 mb-4"
                key={blog.id}
              >
                <BlogCard
                  blog={blog}
                  deleteBlog={deleteBlog}
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;