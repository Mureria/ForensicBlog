import axios from "axios";
import React, { useState } from "react";

const Admin = () => {
  const [postData, setPostData] = useState({
    title: "",
    user: "",
    category: "",
    image: null,
    content: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      setPostData({ ...postData, [e.target.name]: e.target.files[0] });
    } else {
      setPostData({ ...postData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch user and category ObjectId
      const userResponse = await axios.get(
        `http://localhost:5000/api/user/${postData.user}`
      );
      const categoryResponse = await axios.get(
        `http://localhost:5000/api/category/${postData.category}`
      );
      
      const userObjectId = userResponse.data._id;
      const categoryObjectId = categoryResponse.data._id;

      // Post image to upload endpoint
      const formData = new FormData();
      formData.append("image", postData.image);
      const imageResponse = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Post data with ObjectId
      const response = await axios.post(
        "http://localhost:5000/api/post",
        {
          user: userObjectId,
          content: postData.content,
          title: postData.title,
          image: imageResponse.data.image,
          category: categoryObjectId,
        }
      );

      console.log(response.data);
      // Clear form data after successful submission
      setPostData({
        title: "",
        user: "",
        category: "",
        image: null,
        content: "",
      });
    } catch (error) {
      console.error("Error submitting post:", error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto flex justify-between items-start px-4">
      <div className="mt-3 md:max-w-[700px] md:mx-auto w-full md:mt-10">
        <h1 className="text-xl md:text-3xl font-bold tracking-tighter pb-3">
          Create Post
        </h1>
        <form
          className="space-y-5"
          action="/upload"
          method="POST"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="flex flex-col bg-slate-100 md:max-w-[700px] md:mx-auto md:flex-row md:justify-between md:items-baseline space-y-10 px-4 pt-4 pb-10 rounded-md">
            <div className="flex flex-col gap-1 space-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-medium tracking-tight">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={postData.title}
                  onChange={handleInputChange}
                  className="py-2 px-2 rounded-sm outline-none bg-inherit border-b border-sky-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-medium tracking-tight">
                  Blog
                </label>
                <input
                  type="text"
                  name="content"
                  placeholder="Write Blog"
                  value={postData.content}
                  onChange={handleInputChange}
                  className=" bg-inherit border-b border-sky-400 py-3 px-2 rounded-sm outline-none md:w-[400px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-medium tracking-tight">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleInputChange}
                  className="border-b border-sky-400 py-4"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-medium tracking-tight">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={postData.category}
                  onChange={handleInputChange}
                  className="py-2 px-2 rounded-sm outline-none bg-inherit border-b border-sky-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-medium tracking-tight">
                  Author
                </label>
                <input
                  type="text"
                  name="user"
                  placeholder="Author"
                  value={postData.user}
                  onChange={handleInputChange}
                  className="py-2 px-2 rounded-sm outline-none bg-inherit border-b border-sky-400"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 text-white font-semibold bg-sky-500 text-center py-2 rounded-md md:max-w-[100px] md:mx-auto">
            <button type="submit">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
