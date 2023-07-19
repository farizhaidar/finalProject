import React, { useState } from 'react';
import like from '../picture/thumbs-up.svg';
import comment from '../picture/message-circle.svg';

const TikTalks = () => {
  // State untuk menyimpan daftar post yang ditampilkan di forum
  const [posts, setPosts] = useState([]);

  // State untuk menyimpan teks dari post baru yang akan ditambahkan
  const [newPost, setNewPost] = useState('');

  // State untuk menyimpan teks dari query pencarian
  const [searchQuery, setSearchQuery] = useState('');

  // State untuk menyimpan daftar post terbaru yang sesuai dengan hasil pencarian
  const [recentPosts, setRecentPosts] = useState([]);

  // Fungsi untuk menambahkan post baru ke dalam daftar 'posts'
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

  // Fungsi untuk menambahkan komentar ke dalam suatu post berdasarkan 'postId'
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

  // Fungsi untuk menambahkan jumlah 'likes' pada post berdasarkan 'postId'
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

  // Fungsi untuk melakukan pencarian berdasarkan teks 'searchQuery' pada konten post
  const searchPosts = () => {
    const filteredPosts = posts.filter((post) =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setRecentPosts(filteredPosts);
  };

  return (
    //Tampilan menu tiktalks pada web
    <div className="mx-auto p-12 bg-neutral-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-7 text-neutral-500"><span className=' text-5xl text-neutral-900'>AUTHOR</span> FORUM</h1>
      {/* Tampilan input post */}
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

        {/* Mapping untuk daftar postingan yang sudah di posting */}
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

        {/* Tampilan search post */}
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
