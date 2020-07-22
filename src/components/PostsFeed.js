import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });

  async function fetchNext5Posts() {
    setData({ ...data, loading: true });
    // fetch next set of posts (use offset+limit),
    const res = await axios.get(
      `${API_URL}/posts?offset=${data.posts.length}&limit=5`
    );
    // define the variable `morePosts`
    const morePosts = res.data.rows;

    setData({
      loading: false,
      posts: [...data.posts, ...morePosts],
    });
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {data.posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              <span>
                {post.tags.map((tag) => {
                  return <button key={tag.id}>{tag.tag}</button>;
                })}
              </span>
            </p>
          </div>
        );
      })}
      {/* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */}
      <p>
        {data.loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={fetchNext5Posts}>Load more</button>
        )}
      </p>
    </div>
  );
}
