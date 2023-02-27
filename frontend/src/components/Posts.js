import { Container } from "@mui/system";
import Post from "./Post";
import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('/api/posts')
  //   .then((resp) => {
  //     return resp.json()
  //   })
  //   .then((resp) => {
  //     setPosts(resp)
  //     setLoading(false)
  //   })
  // }, [])

  const generatePosts = () => {};
  return (
    <Container>
      <Post title="Title" content="Content"></Post>
    </Container>
  );
};

export default Posts;
