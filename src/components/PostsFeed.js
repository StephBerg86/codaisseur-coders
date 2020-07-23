import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { fetchNext5Posts } from "../store/feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";
import { Link } from "react-router-dom";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h3>
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
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
        )}
      </p>
    </div>
  );
}
