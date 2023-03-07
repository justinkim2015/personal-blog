import { Container } from "@mui/system";
import Post from "./Post";
import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setPosts(resp);
        setLoading(false);
      });
  }, []);

  const generatePosts = () => {
    return posts.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        content={post.body}
        postId={post.id}
        date={post.createdDate}
      ></Post>
    ));
  };

  return (
      <Container sx={{ my: 5 }}>
        {loading == true ? "Loading..." : generatePosts()}
      </Container>
  );
};

export default Posts;
