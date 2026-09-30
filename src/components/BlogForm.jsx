import React, { useState } from "react";

function BlogForm({ addBlog }) {

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    imageUrl: "",
    author: "",
    category: "",
    date: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.id ||
      !formData.title ||
      !formData.imageUrl ||
      !formData.author ||
      !formData.category ||
      !formData.date ||
      !formData.description
    ) {
      alert("Please fill all fields");
      return;
    }

    addBlog({
      ...formData,
      id: Number(formData.id)
    });

    setFormData({
      id: "",
      title: "",
      imageUrl: "",
      author: "",
      category: "",
      date: "",
      description: ""
    });
  };

  return (
    <div className="card shadow-sm form-card">

      <div className="card-header bg-dark text-white py-2">
        <h5 className="mb-0">Add Blog</h5>
      </div>

      <div className="card-body p-3">

        <form onSubmit={handleSubmit}>

          <div className="mb-2">
            <label className="form-label small">ID</label>
            <input
              type="number"
              name="id"
              className="form-control form-control-sm"
              value={formData.id}
              onChange={handleChange}
              placeholder="Blog ID"
            />
          </div>

          <div className="mb-2">
            <label className="form-label small">Title</label>
            <input
              type="text"
              name="title"
              className="form-control form-control-sm"
              value={formData.title}
              onChange={handleChange}
              placeholder="Blog title"
            />
          </div>

          <div className="mb-2">
            <label className="form-label small">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              className="form-control form-control-sm"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Image URL"
            />
          </div>

          <div className="mb-2">
            <label className="form-label small">Author</label>
            <input
              type="text"
              name="author"
              className="form-control form-control-sm"
              value={formData.author}
              onChange={handleChange}
              placeholder="Author"
            />
          </div>

          <div className="mb-2">
            <label className="form-label small">Category</label>
            <select
              name="category"
              className="form-select form-select-sm"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Bootstrap">Bootstrap</option>
              <option value="MERN">MERN</option>
              <option value="Web Development">Web Development</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="form-label small">Date</label>
            <input
              type="date"
              name="date"
              className="form-control form-control-sm"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="form-label small">Description</label>
            <textarea
              name="description"
              className="form-control form-control-sm"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-sm w-100"
          >
            + Add Blog
          </button>

        </form>

      </div>
    </div>
  );
}

export default BlogForm;