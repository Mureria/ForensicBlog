import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import PostCard from "../components/PostCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/post");
        setPosts(response.data);
        setDisplayedPosts(response.data.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center md:text-3xl ">
        Loading...
      </div>
    );
  }

  const handleShowMore = () => {
    setDisplayedPosts(posts);
    setShowAll(true);
  };

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
    <div className="container mx-auto flex justify-between items-start mt-5 md:mt-10 gap-20 px-4">
      <div className="flex-1">
        <div className="relative rounded-md">
          <img
            src="https://imgs.search.brave.com/UKXkyHmPNCug4qvDt4jSpQmakvFr6xhbdr5xFcKYHHY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODM4/Mjc3ODIyL3Bob3Rv/L2ZpbmdlcnByaW50/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UmY1VHNXZkNp/N1VtUlpnUXljVmVE/QjdJblloS2pEUVhB/ME52VUs4ZlIwQT0"
            alt=""
            className="w-full h-[400px] object-cover md:rounded-md"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 rounded-md">
            <div className="flex items-baseline">
              <h1 className="text-white font-semibold text-3xl md:text-5xl ml-7 mt-[270px] text-wrap">
                Binary code behind a blue digital fingerprint
              </h1>
            </div>
          </div>
        </div>
        <div className="py-5 bg-blue-500 mt-4 md:mt-10">
          <p className="font-bold text-xl px-7 text-white">Recent Posts</p>
        </div>

        <div className="my-10 grid md:grid-cols-3 gap-3">
          {displayedPosts.map((post) => (
            <div key={post._id}>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`/post/${post._id}`}
              >
                <PostCard
                  image={post.image}
                  title={post.title}
                  author={post.user.username}
                  date={formatDate(post.createdAt)}
                />
              </Link>
            </div>
          ))}
        </div>

        {!showAll && posts.length > 5 && (
          <div className="max-w-[200px] mx-auto border border-sky-500 px-4 py-3 text-center font-medium hover:bg-sky-500 hover:text-white ease-in-out duration-500 mb-20">
            <button onClick={handleShowMore} className="text-blue-500 hover:text-white">
              Show more
            </button>
          </div>
        )}
      </div>
      <div className="hidden md:block">
        <div className="font-semibold text-xl pb-2">
          <h2>Search:</h2>
        </div>
        <div className="flex border items-center">
          <input
            type="text"
            placeholder="Search"
            className=" px-4 outline-none"
          />
          <div className="border px-4 py-2 bg-blue-400 text-xl text-white">
            <IoIosSearch />
          </div>
        </div>
        <div className="mt-4 font-semibold text-xl py-2">
          <h2>Category:</h2>
        </div>
        <div className="flex border items-center py-2 text-gray-400">
          <select id="cars" className="w-full outline-none px-3">
            <option>Select Category</option>
            <option value="volvo">Crime News</option>
            <option value="saab">Cyber Forensics</option>
            <option value="mercedes">Fiction</option>
            <option value="audi">Blood Examination</option>
          </select>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
