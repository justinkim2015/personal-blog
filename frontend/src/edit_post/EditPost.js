import { Container } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../basestyles/newpost.css";

const NewPost = () => {
  const initialFormState = {
    title: "",
    body: "",
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
        body: JSON.stringify(post),
      });

      navigate("/");
    } catch (error) {
      console.error("Error updating post", error);
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
    <Container>
      <form className="post-form">
        <TextField
          id="title"
          label="title"
          variant="standard"
          onChange={handleChange}
          value={post.title}
        ></TextField>
        <TextField
          id="body"
          label="body"
          variant="standard"
          onChange={handleChange}
          value={post.body}
        ></TextField>

        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </Container>
  );
};

export default NewPost;
