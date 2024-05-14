import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainBody = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRedditPosts = async () => {
      try {
        const response = await axios.get('https://www.reddit.com/r/popular.json');
        setPosts(response.data.data.children.map(child => child.data));
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRedditPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleVote = (postId, voteType) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, ups: voteType === 'up' ? post.ups + 1 : post.ups, downs: voteType === 'down' ? post.downs + 1 : post.downs }
          : post
      )
    );
  };

  const handleCommentVote = (postId, commentId, voteType) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map(comment =>
                comment.id === commentId
                  ? {
                      ...comment,
                      ups: voteType === 'up' ? comment.ups + 1 : comment.ups,
                      downs: voteType === 'down' ? comment.downs + 1 : comment.downs
                    }
                  : comment
              )
            }
          : post
      )
    );
  };

  return (
    <div className="main-body">
      {posts.map(post => (
        <div key={post.id} className="post">
          <div className="profile">
            <img src={post.thumbnail} alt="Reddit User" />
            <span>{post.author}</span>
          </div>
          <div className="post-content">{post.title}</div>
          <div className="post-info">
            <div className="vote-buttons">
              <span>{post.ups}</span>
              <button onClick={() => handleVote(post.id, 'up')}><img src="upvote.png" alt="Upvote" /></button>
              <span>{post.downs}</span>
              <button onClick={() => handleVote(post.id, 'down')}><img src="downvote.png" alt="Downvote" /></button>
            </div>
            <div className="comment-icon">
              <img src="comment.png" alt="Comment" />
            </div>
          </div>
          <div className="comment-section">
            {post.comments && post.comments.map(comment => (
              <div key={comment.id} className="comment">
                <div className="profile">
                  <img src={comment.thumbnail} alt="Reddit User" />
                  <span>{comment.author}</span>
                </div>
                <div className="comment-content">{comment.body}</div>
                <div className="vote-buttons">
                  <span>{comment.ups}</span>
                  <button onClick={() => handleCommentVote(post.id, comment.id, 'up')}><img src="upvote.png" alt="Upvote" /></button>
                  <span>{comment.downs}</span>
                  <button onClick={() => handleCommentVote(post.id, comment.id, 'down')}><img src="downvote.png" alt="Downvote" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBody;

