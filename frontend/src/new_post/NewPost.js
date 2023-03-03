import { Container } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../basestyles/newpost.css";

const NewPost = () => {
  const initialFormState = {
    title: "",
    body: "",
  };

  const navigate = useNavigate();
  const [post, setPost] = useState(initialFormState);

  const handleSubmit = async () => {
    try {
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
    let body = document.getElementById("body").value;

    setPost({
      title: title,
      body: body,
    });
  };

  return (
    <Container sx={{mt: 4}}>
      <form className="post-form">
        <TextField
          id="title"
          label="Title goes here"
          onChange={handleChange}
          sx={{my: 1}}
        ></TextField>
        <TextField
          id="body"
          label="What's going on today?"
          onChange={handleChange}
          multiline
          rows={6}
        ></TextField>

        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </Container>
  );
};

export default NewPost;
