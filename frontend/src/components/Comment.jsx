import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/post/${id}/comments`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    const fetchCommentCount = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/post/${id}/comments/count`
        );
        setCommentCount(response.data.count);
      } catch (error) {
        console.error("Error fetching comment count:", error);
      }
    };

    fetchComments();
    fetchCommentCount();
  }, [id]);

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
    <div className="border-t-2">
      <div className="font-bold text-base mt-5 md:mt-10 pb-5 ">
        <p>{commentCount} Comments</p>
      </div>
      <div className="flex gap-3">
        <div className="flex justify-center items-center font-bold w-8 h-8 rounded-full bg-sky-500">
          C
        </div>
        <div className="flex-1">
          <div>
            <input
              type="text"
              placeholder="Add a comment"
              className="outline-none border-b w-full focus:border-sky-500 "
            />
            <div className="flex justify-between py-3 items-center">
              <div>
                <MdOutlineEmojiEmotions />
              </div>
              <div className="flex gap-3">
                <button className="border hover:border-sky-500 rounded-full text-sm px-3 py-1">
                  Cancel
                </button>
                <button className="border text-white bg-sky-500 rounded-full text-sm px-3 py-1 ">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
  <li key={comment._id}>
    <div className="flex gap-2 md:gap-3 mt-4">
      <div className="flex justify-center items-center font-bold w-8 h-8 rounded-full bg-sky-500">
        {comment.userId && comment.userId.profilePicture && (
          <img
            src={comment.userId.profilePicture}
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
        )}
      </div>
      <div className="text-sm">
        {comment.userId && comment.userId.username && (
          <p className="font-semibold">@{comment.userId.username}</p>
        )}
        <p className="text-xs text-slate-400">
          {formatDate(comment.createdAt)}
        </p>
        <p className="my-2">{comment.content}</p>
      </div>
    </div>
  </li>
))}

        </ul>
      ) : (
        <p className="text-center">No comments yet</p>
      )}
    </div>
  );
};

export default Comment;
