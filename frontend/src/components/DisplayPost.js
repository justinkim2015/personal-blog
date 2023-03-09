import { Box } from "@mui/system";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import PrettyDate from "./PrettyDate";
import MyLink from "./MyLink";
import { red } from "@mui/material/colors";

const DisplayPost = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const del = red[900];

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

  const handleDelete = async () => {
    try {
      await fetch("/api/posts/" + id, {
        method: "DELETE",
      });

      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <Box sx={{ p: 2, m: 2, border: "1px solid grey", borderRadius: 2 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {post.title}
      </Typography>
      <Typography sx={{ mb: 3 }}>{post.content}</Typography>

      <Typography variant="body2">
        <PrettyDate date={post.createdAt}></PrettyDate> -
        <MyLink href={`/edit/${id}`} text=" Edit"></MyLink> -
        <MyLink
          href={"#"}
          click={handleDelete}
          text=" Delete"
          color={del}
        ></MyLink>
      </Typography>
    </Box>
  );
};

export default DisplayPost;
