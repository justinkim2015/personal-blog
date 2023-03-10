import { TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

const Login = () => {
  const initialFormState = {
    username: "",
    password: "",
  };

  const [login, setLogin] = useState(initialFormState);

  const handleSubmit = async () => {
    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      navigate("/");
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  const handleChange = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    setLogin({
      username: username,
      password: password,
    });
  };


  return (
    <Container sx={{ mt: 4, width: 3 / 4 }}>
      <form>
        <TextField
          required
          id="username"
          label="Username"
          variant="filled"
          sx={{ my: 1 }}
        ></TextField>
        <TextField
          required
          id="password"
          type="password"
          label="Password"
          variant="filled"
          sx={{ my: 1 }}
        ></TextField>

        <Button variant="contained" sx={{ mt: 1 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Login;
