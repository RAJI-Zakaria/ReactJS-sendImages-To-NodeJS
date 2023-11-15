import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article'; // Assuming the previously created Article component

const ArticleList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5009/api_blog/articles/details');
        setPosts(response.data.articles); // Assuming the data is an array of posts
        setLoading(false);
      } catch (error) {
        // Handle any potential error scenarios here
        setError(error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Display a loading message or spinner
  }

  if (error) {
    return <p>Error (while loading articles from api): {error.message}</p>; // Display an error message
  }

  return (
    <div className="h-full overflow-x-auto flex flex-nowrap">
      {posts.map((article, index) => (
        <div key={index} className="flex-none w-64 sm:w-72 md:w-80 lg:w-96 px-4 mb-4">
          <Article
            avatar='http://localhost:5009/api_blog/uploads/default-avatar.png' //{article.author.avatar}
            name={article.author.FIRST_NAME}
            lastName={article.author.LAST_NAME}
            postedTime={article.postedTime}
            tags={article.article_tags}
            category={article.category}
            title={article.title}
            description={article.description}
            thumbnail={'http://localhost:5009/api_blog/uploads/' + article.thumbnail}
          />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
