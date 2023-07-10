import "../style/style.css";
import React, { useState } from 'react';

const TikTalks = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [recentPosts, setRecentPosts] = useState([]);

  // Fungsi untuk menambahkan post baru
  const addPost = () => {
    const newPostObj = {
      id: Math.random().toString(),
      content: newPost,
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString(),
    };
    setPosts([newPostObj, ...posts]);
    setNewPost('');
  };

  // Fungsi untuk menambahkan komentar pada post
  const addComment = (postId, comment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, comment],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // Fungsi untuk menambahkan jumlah suka (like) pada post
  const addLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.likes + 1,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // Fungsi untuk melakukan pencarian
  const searchPosts = () => {
    const filteredPosts = posts.filter((post) =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setRecentPosts(filteredPosts);
  };

  return (
    <div className="container mx-auto p-4 flex-1/2 h-screen" >
      <h1 className="text-2xl font-bold mb-4">TikTalks</h1>

      {/* Formulir untuk posting baru */}
      <div className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-500 rounded"
          placeholder="Tulis postingan baru..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={addPost}
        >
          Post
        </button>
      </div>

      {/* Daftar postingan */}
      <div>
        {posts.map((post) => (
          <div key={post.id} className="mb-4 p-7 bg-white shadow rounded">
            <p>{post.content}</p>
            <div className="flex items-center mt-2">
              <button
                className="mr-2 text-blue-500 flex items-center"
                onClick={() => addLike(post.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {post.likes}
              </button>
              <button className="mr-2 text-blue-500">Comment</button>
            </div>
            <hr />
            <div className="mt-2">
              {post.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
              <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Tulis komentar..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addComment(post.id, e.target.value);
                    e.target.value = '';
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8 absolute top-20 right-0">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="flex items-center mb-4 justify-between">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Cari postingan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
            onClick={searchPosts}
          >
            Search
          </button>
        </div>

        <div className="mt-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="p-4 bg-white shadow rounded mb-4">
              <p>{post.content}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TikTalks;
