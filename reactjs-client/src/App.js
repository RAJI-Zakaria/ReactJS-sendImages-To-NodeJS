import React from 'react';
import './App.css';
import ImageUpload from './Component/ImageUpload'; 
import ArticleList from './Component/ArticleList';




const data = [
  {
    "avatar": "https://via.placeholder.com/150",
    "name": "John",
    "lastName": "Doe",
    "postedTime": "2 hours",
    "tags": ["Technology", "Programming"],
    "title": "The Future of AI in Everyday Life",
    "description": "Exploring how AI is changing the way we live and interact with technology.",
    "thumbnail": "http://localhost:5009/api_blog/uploads/1699894603636-103.png"
  },
  {
    "avatar": "https://via.placeholder.com/150",
    "name": "Emily",
    "lastName": "Smith",
    "postedTime": "4 hours",
    "tags": ["Science", "Research"],
    "title": "Unlocking the Mysteries of Dark Matter",
    "description": "A look into the ongoing research and discoveries about dark matter in the universe.",
    "thumbnail": "http://localhost:5009/api_blog/uploads/1699894603636-103.png"
  },
  {
    "avatar": "https://via.placeholder.com/150",
    "name": "Alex",
    "lastName": "Johnson",
    "postedTime": "1 hour",
    "tags": ["Health", "Fitness"],
    "title": "The Importance of Regular Exercise",
    "description": "Understanding how consistent exercise contributes to overall health and well-being.",
    "thumbnail": "http://localhost:5009/api_blog/uploads/1699894603636-103.png"
  },
  {
    "avatar": "https://via.placeholder.com/150",
    "name": "Sophia",
    "lastName": "Brown",
    "postedTime": "6 hours",
    "tags": ["Art", "Design"],
    "title": "Exploring Innovative Design Trends",
    "description": "Analyzing the latest trends and innovations in the field of design and creativity.",
    "thumbnail": "http://localhost:5009/api_blog/uploads/1699894603636-103.png"
  },
  {
    "avatar": "https://via.placeholder.com/150",
    "name": "Michael",
    "lastName": "Garcia",
    "postedTime": "3 hours",
    "tags": ["Business", "Finance"],
    "title": "Strategies for Successful Investment",
    "description": "Insights into smart investment strategies for better financial outcomes.",
    "thumbnail": "http://localhost:5009/api_blog/uploads/1699894603636-103.png"
  },
  {
    "avatar": "https://via.placeholder.com/150",
    "name": "Olivia",
    "lastName": "Lee",
    "postedTime": "5 hours",
    "tags": ["Food", "Cooking"],
    "title": "Mastering the Art of Baking",
    "description": "Tips and tricks to become a master baker in your own kitchen.",
    "thumbnail": "http://localhost:5009/api_blog/uploads/1699894603636-103.png"
  }
]

function App() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-64 h-full bg-white p-4 hover:bg-white transition-bg transition-colors">
      <ul>
          <li className="mb-2 transition-colors">
            <div className="w-40 h-10 active flex items-center justify-between px-4 rounded cursor-pointer hover:bg-yellow-500 transition-bg">
              <span>Dashboard</span>
            </div>
          </li>
          <li className="mb-2 transition-colors">
            <div className="w-40 h-10  flex items-center justify-between px-4 rounded cursor-pointer hover:bg-yellow-500 transition-bg">
              <span>Messages</span>
            </div>
          </li>
          <li className="mb-2 transition-colors">
            <div className="w-40 h-10  flex items-center justify-between px-4 rounded cursor-pointer hover:bg-yellow-500 transition-bg">
              <span>Settings</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 bg-gray-200 p-4">
        {/* Dashboard Title and User Icon */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <img
            src="/avatar.png" // Replace with your user icon source
            alt="User Icon"
            className="w-8 h-8 rounded-full"
          />
        </div>

        {/* Upload Image Component */}
        <div className="bg-white p-4 shadow-md mb-4">
          <ImageUpload />
        </div>

        {/* Article List */}
        <div className="w-full grid gap-4">
          <ArticleList articles={data} />
        </div>

      </div>
    </div>
  );
}

export default App;






