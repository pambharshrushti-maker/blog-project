import React from "react";

function BlogCard({ blog, deleteBlog }) {

  const editBlog = () => {
    alert(`Edit Blog: ${blog.title}`);
  };

  return (
    <div className="card h-100 shadow-sm blog-card">

      <img
        src={blog.imageUrl}
        className="card-img-top blog-image"
        alt={blog.title}
      />

      <div className="card-body">

        <span className="badge bg-primary mb-2">
          {blog.category}
        </span>

        <h5 className="card-title fw-bold">
          {blog.title}
        </h5>

        <p className="text-muted small mb-2">
          ID: {blog.id}
        </p>

        <p className="small mb-2">
          <strong>Author:</strong> {blog.author}
        </p>

        <p className="small text-muted">
          <strong>Date:</strong> {blog.date}
        </p>

        <p className="card-text">
          {blog.description}
        </p>

      </div>

      <div className="card-footer bg-white border-0">
        <div className="d-flex gap-2">

          <button
            className="btn btn-warning btn-sm w-50"
            onClick={editBlog}
          >
             Edit
          </button>

          <button
            className="btn btn-danger btn-sm w-50"
            onClick={() => deleteBlog(blog.id)}
          >
             Delete
          </button>

        </div>
      </div>

    </div>
  );
}

export default BlogCard;