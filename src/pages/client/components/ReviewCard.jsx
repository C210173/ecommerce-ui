import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewCard = () => {
  return (
    <div>
      <div className="mt-2">
        <div className="flex items-center ">
          <img
            className="rounded-full object-cover h-[2rem] w-[2rem] mr-2"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <p className="text-gray-900 font-medium text-sm">USERNAME</p>
        </div>
        <div className="flex items-center px-10">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className="text-xl">
              {index + 1 <= 4 ? (
                <AiFillStar className="text-yellow-400" />
              ) : (
                <AiOutlineStar className="text-gray-300" />
              )}
            </span>
          ))}
          <p className="ml-3 text-base font-semibold text-gray-800">
            review title
          </p>
        </div>
        <div className="px-10">
          <p>
            I just want to start of by saying I have had many different types of
            headphones over years between apple ear buds u get when you get a
            ipod touch to cheap ear buds from 5 dollar and bellow to upgrading
            to cat ear gaming headphones and samsung ear buds later on. But
            never have I had such crisp quality from headphones like this were I
            got emotional and I'm being brutally honest as someone who has
            sensory issues. This really is a game changer in hearing music in
            whole new depth and clarity that I never heard before as someone
            who's singer and song writer.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
