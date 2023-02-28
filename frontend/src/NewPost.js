import { Container } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./basestyles/newpost.css";

const NewPost = () => {
  const initialFormState = {
    title: "",
    body: "",
  };

  const [post, setPost] = useState(initialFormState);

  const handleSubmit = async () => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
  
    const result = await response.json();
    console.log(result);
  };

  const handleChange = () => {
    let title = document.getElementById('title').value  
    let body = document.getElementById('body').value

    setPost({
      title: title,
      body: body
    })
  }

  return (
    <Container>
      <form className="post-form">
        <TextField id="title" label="title" variant="standard" onChange={handleChange}></TextField>
        <TextField id="body" label="body" variant="standard" onChange={handleChange}></TextField>

        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </Container>
  );
};

export default NewPost;
