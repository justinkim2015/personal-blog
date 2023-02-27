import { Container } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import "./basestyles/newpost.css";

const NewPost = () => {
  const initialFormState = {
    title: "",
    body: "",
  };

  const [post, setPost] = useState(initialFormState);

  return (
    <Container>
      <form class="post-form">
        <TextField id="title" label="title" variant="standard"></TextField>
        <TextField id="body" label="body" variant="standard"></TextField>

        <Button>Submit</Button>
      </form>
    </Container>
  );
};

export default NewPost;
