import { TextField, Button } from "@mui/material";
import { Container } from "@mui/system";

const Login = () => {
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
