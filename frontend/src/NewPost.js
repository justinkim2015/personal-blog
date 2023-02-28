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


  const handleClick = async () => {
    setPost({
      title: "Cat",
      body: "Dog",
    })

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

  const createPost = () => {
    setPost({
      title: "Cat",
      body: "Dog",
    })
    console.log(post)
  }
  

  return (
    <Container>
      <form className="post-form">
        <TextField id="title" label="title" variant="standard"></TextField>
        <TextField id="body" label="body" variant="standard"></TextField>

        <Button onClick={createPost}>Submit</Button>
      </form>

    <div onClick={handleClick} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Send data to backend
    </div>

    </Container>
  );
};

export default NewPost;
