import { Container } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../basestyles/newpost.css";

const NewPost = () => {
  const initialFormState = {
    title: "",
    content: "",
  };

  const navigate = useNavigate();
  const [post, setPost] = useState(initialFormState);

  const handleSubmit = async () => {
    try {
      console.log(JSON.stringify(post))
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      navigate("/");
    } catch (error) {
      console.error("Error creating post", error);
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
        ></TextField>

        <Button onClick={handleSubmit} variant="contained" sx={{ mt: 1 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default NewPost;
