import { Container } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../basestyles/newpost.css";

const NewPost = () => {
  const initialFormState = {
    title: "",
    content: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(initialFormState);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((resp) => {return resp.json();})
      .then((resp) => {
        setPost(resp)
      });
  }, []);

  const handleSubmit = async () => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        content: JSON.stringify(post),
      });

      navigate("/");
    } catch (error) {
      console.error("Error updating post", error);
    }
  };

  const handleChange = () => {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    setPost({
      title: title,
      content: content,
    });
  };

  return (
    <Container sx={{ mt: 4, width: 3 / 4 }}>
      <form className="post-form">
        <TextField
          required
          id="title"
          label="Title goes here"
          variant="filled"
          onChange={handleChange}
          value={post.title}
          sx={{ my: 1 }}
        ></TextField>
        <TextField
          required
          id="content"
          label="What's going on today?"
          variant="filled"
          onChange={handleChange}
          multiline
          rows={6}
          value={post.content}
        ></TextField>

        <Button onClick={handleSubmit} variant="contained" sx={{ mt: 1 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default NewPost;
