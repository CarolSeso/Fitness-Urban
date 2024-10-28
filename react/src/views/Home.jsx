import React, { useState, useEffect } from "react";
import Postare from "../components/Posts.jsx";
import axiosClient from "../axios-client";

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await axiosClient.get('/posts');
        setPosts(Array.isArray(response.data) ? response.data : []);
        setError(null);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts. Please try again later.");
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="flex-col flex-grow mb-40">
        <div className="p-6 mt-40">
          <h1 className="px-5 text-5xl font-semibold text-white">
            Fii la curent cu toate evenimante organizate de Fitness Urban
          </h1>
          <br /><br /><br /><br />
          <br />
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id}>
                <Postare
                  title={post.title}
                  content={post.content}
                  imageURL={post.image_url}
                  link={post.link}
                />
                <br /><br /><br /><br /><br />
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
