import React from 'react';

const BlogPostCard = ({
  avatar,
  name,
  lastName,
  postedTime,
  tags,
  category,
  title,
  description,
  thumbnail,
  
}) => {
    // Replace the broken image with the default one
  const handleImageError = (event) => {
    event.target.src = 'http://localhost:5009/api_blog/uploads/default-thumbnail.png';
  };


  return (
    <div className="min-w-308 p-4 bg-white shadow-md rounded-lg mb-4 mr-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={avatar} alt="Author Avatar" className="w-16 h-16 rounded-full" />
          <div className="ml-3">
            <p className="font-bold">
              {name} {lastName}
            </p>
            <p className="text-xs text-gray-500">Posted {postedTime} ago</p>
          </div>
        </div>
        <button className="w-8 h-8 flex items-center justify-center rounded-md overflow-hidden bg-yellow-500" style={{ borderRadius: '8px' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-9 text-white"
          fill="white"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="-1" cy="12" r="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="25" cy="12" r="5" />
        </svg>
      </button>

      </div>

      <div className="mb-4"> 

       
          <div className="flex flex-wrap mb-2">
              <button
                className="px-2 py-1 text-xs font-normal bg-gray-200 text-gray-700 rounded-full mr-2 mb-2"
              >
                 {category.title}
              </button>
           
            { tags && tags.length > 0 &&  tags.map((tag, index) => (
              <button
                key={index}
                className="px-2 py-1 text-xs font-normal bg-gray-200 text-gray-700 rounded-full mr-2 mb-2"
              >
                {tag}
              </button>
            ))}
          </div>
   
        <h1 className="text-lg font-bold mb-2">{title}</h1>
        <p className="text-sm mb-4">{description}</p>
        <img src={thumbnail} alt="Thumbnail" onError={handleImageError} className="w-full mb-4 rounded-lg" />
      </div>
      <div className="flex justify-between">
      <button className="w-12 h-43 max-h-43 rounded-lg border bg-yellow-500 border-gray-300 flex items-center justify-center">
  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 17.1926V1.8897C0.5 1.01539 1.20875 0.306641 2.08306 0.306641H11.5814C12.4557 0.306641 13.1645 1.01539 13.1645 1.8897V17.1926L6.83224 13.4988L0.5 17.1926Z" fill="white"/>
  </svg>
</button>
<button className="w-5/6 max-h-43 bg-yellow-500 text-white rounded-lg text-sm font-semibold py-2 px-4">
  Read more
</button>

</div>


    </div>
  );
};

export default BlogPostCard;
