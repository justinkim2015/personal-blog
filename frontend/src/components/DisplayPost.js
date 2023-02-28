import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DisplayPost = () => {
  const {id} = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts/" + id)
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setPost(resp);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ p: 2, border: "1px solid grey" }}>
      {post.title} - {post.body}
    </Box>
  );
};

export default DisplayPost;
