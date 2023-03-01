import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const DisplayPost = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
    await fetch('/api/posts/' + id, {
      method: 'DELETE'
    });

    navigate('/');
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};

  return (
    <Box sx={{ p: 2, border: "1px solid grey" }}>
      {post.title} - {post.body}
      <Button onClick={handleDelete}>Delete</Button>
    </Box>
  );
};

export default DisplayPost;
