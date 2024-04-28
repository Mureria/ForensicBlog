import React from "react";
import { Link } from "react-router-dom";
import Blog from "../Page/Blog";

const PostCard = (props) => {

  const scrollToTop = ()=> {
    window.scrollTo(0, 0);
  }

  return (
    <>
    <Link to='/blog' onClick={scrollToTop} >
        <div className="flex flex-col gap-2 mb-10">
        <div>
            <img
            src={props.image}
            alt=""
            className=" w-full  md:w-[300px] h-[200px] object-cover"
            />
        </div>
        <div className="space-y-2">
            <p className="font-semibold text-xl">{props.title}</p>
            <p className="text-sm text-gray-500">By <span className="text-sky-400 hover:underline cursor-pointer">{props.author}</span> on {props.date}
            </p>
        </div>
        </div>
    </Link>
    </>
    
  );
};

export default PostCard;
