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
    const data = {
      title: "alan",
      body: "aturing"
  };
  
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    const result = await response.json();
    console.log(result);
  };
  

  return (
    <Container>
      <form class="post-form">
        <TextField id="title" label="title" variant="standard"></TextField>
        <TextField id="body" label="body" variant="standard"></TextField>

        <Button>Submit</Button>
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
