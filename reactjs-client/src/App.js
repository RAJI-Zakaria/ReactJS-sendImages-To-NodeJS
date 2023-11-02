import React from 'react';
import './App.css';
import ImageUpload from './Component/ImageUpload';

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
        <div className="bg-white p-4 shadow-md">
          <ImageUpload />
        </div>
      </div>
    </div>
  );
}

export default App;
