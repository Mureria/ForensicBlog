import React, { useEffect, useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import Comment from "../components/Comment";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [post, setPost] = useState({});

  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Get the product ID from the URL parameter

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/post/${id}`
        );
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  // const handleShare = () => {
  //   window.FB.ui({
  //     method: 'share',
  //     href: window.location.href,
  //     quote: post.title,
  //     hashtag: `#${post.category.name}`,
  //   }, function(response){});
  // };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center md:text-3xl ">
        Loading...
      </div>
    );
  }

  const formatDate = (timestamp) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-GB", options);
    const day = date.getDate();
    const suffix =
      (day >= 10 && day <= 20) || (day % 10 !== 0 && day > 20)
        ? "th"
        : ["st", "nd", "rd"][(day % 10) - 1];
    return formattedDate.replace(/(?<=(\s|^))(\d+)(?=,)/, `$1$2${suffix}`);
  };

  return (
    <>
      <div className="container mx-auto flex flex-col mt-5 md:mt-10 px-4 md:px-7">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-[45px] font-bold">{post.title}</h1>
          <div className="flex gap-4 md:pt-5 items-center">
            <p className="text-sm">SHARE</p>
            <div className="flex items-center justify-center h-8 w-8 rounded-full border cursor-pointer hover:text-sky-500 hover:border-sky-500">
              <Link
                to={`https://www.facebook.com/sharer/sharer.php?u=http://localhost:5173/post/${id}`}
                rel="noopener"
                target="_blank"
              >
                {" "}
                <GrFacebookOption />
              </Link>
            </div>
            <div className="flex items-center justify-center h-8 w-8 rounded-full border cursor-pointer hover:text-sky-500 hover:border-sky-500">
              <RiTwitterXFill />
            </div>
            <div className="flex items-center justify-center h-8 w-8 rounded-full border cursor-pointer hover:text-sky-500 hover:border-sky-500">
              <MdEmail />
            </div>
          </div>
          <div className="md:flex justify-between items-start md:gap-10">
            <div className="basis-[90%]">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex gap-2 md:gap-4 pt-4">
                    <div className=" flex items-center justify-center w-9 h-9 text-white bg-sky-500 rounded-full">
                      <FaPencil />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">{post.user.username}</p>
                      <p className="text-xs text-slate-400">
                        {post.user.title}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="">
                    <p className="text-sm font-medium">{post.category.name}</p>
                    <p className="text-xs text-slate-400">
                      {formatDate(post.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-10">
                <img
                  src={post.image}
                  className="h-[300px] w-full my-4 object-cover rounded-sm"
                />
                <p>{post.content}</p>
              </div>
              <Comment />
            </div>
            <div>
              <div className="hidden md:flex flex-col bg-slate-100 h-screen mt-[88px] p-5 rounded-md">
                <h1 className="font-bold mb-2">Crime</h1>
                <div className="space-y-2">
                  <p className="text-sm hover:underline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-sm hover:underline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-sm hover:underline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-sm hover:underline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <h1 className="font-bold mb-2">Fiction</h1>
                <div className="space-y-2">
                  <p className="text-sm hover:underline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-sm hover:underline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-sm hover:underline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-sm hover:underline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
