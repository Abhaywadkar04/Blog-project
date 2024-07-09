import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeBtn = ({ likeCount, handleLikes, isLiked }) => {
    return (
        <div className="flex">
            <button className=" text-red-500 text-xl md:text-2xl" onClick={() => handleLikes()}>
                {isLiked ? <AiFillHeart className="animate-bounce-short" /> : <AiOutlineHeart />}
            </button>
            {likeCount}
        </div>
    )
}

export default LikeBtn;