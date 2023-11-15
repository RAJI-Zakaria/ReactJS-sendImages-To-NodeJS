import React from 'react';

const ArticleCard = ({ avatar, name, lastName, postedTime }) => {
  return (
    <div className="w-308 h-412 p-22 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-45 h-45 rounded-full overflow-hidden shadow-md">
            <img src={avatar} alt="Author Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="ml-4">
            <p className="font-bold">{name} {lastName}</p>
            <p className="text-sm text-gray-500">Posted {postedTime} ago</p>
          </div>
        </div>
        <button className="w-34 h-34 rounded-full border border-gray-300 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2 10a2 2 0 114 0 2 2 0 01-4 0zm6 0a2 2 0 114 0 2 2 0 01-4 0zm6 0a2 2 0 114 0 2 2 0 01-4 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
