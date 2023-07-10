import React, { useState } from 'react';
import like from '../picture/thumbs-up.svg';
import comment from '../picture/message-circle.svg';

const TikTalks = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [recentPosts, setRecentPosts] = useState([]);

  const addPost = () => {
    const newPostObj = {
      content: newPost,
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString(),
    };
    setPosts([newPostObj, ...posts]);
    setNewPost('');
  };

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

  const searchPosts = () => {
    const filteredPosts = posts.filter((post) =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setRecentPosts(filteredPosts);
  };

  return (
<<<<<<< HEAD
    <div className="mx-auto p-12 bg-neutral-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-7 text-neutral-500"><span className=' text-5xl text-neutral-900'>AUTHOR</span> FORUM</h1>
=======
    <div className="container mx-auto p-4 flex-1/2 h-screen" >
      <h1 className="text-2xl font-bold mb-4">TikTalks</h1>
>>>>>>> 01bd4e2edba74675352bc7c147ca198d6b91fade

      <div className="flex flex-wrap ">
        <div className="w-full md:w-2/3 pr-4 mb-6 mt-9">
          <div className="mb-4">
            <textarea
              className="w-full p-2 border border-gray-200 rounded bg-neutral-100 "
              placeholder="Write a new post"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded mt-2 hover:bg-sky-700 transition-colors duration-300"
              onClick={addPost}
            >
              Post
            </button>
          </div>

          {posts.map((post) => (
            <div key={post.id} className="mt-14 mb-7 p-4 hover:bg-gray-300 transition-colors duration-300">
              <p>{post.content}</p>
              <div className="flex items-center mt-3">
                <button className="mr-3 mt-6" onClick={() => addLike(post.id)}>
                  <img src={like} className="cursor-pointer" alt="like" /> ({post.likes})
                </button>
                <button className="mr-2 text-slate-800">
                  <img src={comment} className="cursor-pointer" alt="comment" />
                </button>
              </div>
              <hr className="border-black mt-5 mb-3 mx-15" />
              <div className="mt-2">
                {post.comments.map((comment, index) => (
                  <p key={index}>{comment}</p>
                ))}
                <input
                  className="w-full mt-4 p-2 border border-gray-300 rounded"
                  placeholder="Write a comment"
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

        <div className="w-full md:w-1/3 pl-11">
          <div className="mt-0 mb-8 mr-1">
            <h2 className="text-xl font-bold mb-4"></h2>
            <div>
              <input
                className="w-full p-2 border border-gray-200 rounded hover:bg-sky-100 transition-colors duration-300"
                placeholder="Search posts"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded mt-2 hover:bg-sky-700 transition-colors duration-300"
                onClick={searchPosts}
              >
                Search
              </button>
            </div>
            <div className="mt-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="mb-4 p-4 border rounded">
                  <p>{post.content}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTalks;
