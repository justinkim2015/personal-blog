import { Container } from "@mui/system"
import { TextField, Button } from "@mui/material"
import '../basestyles/newpost.css'

const NewPost = () => {
  return (
    <Container>
      <form class='post-form'>
        <TextField id='title' label='title'></TextField>
        <TextField id='body' label='body'></TextField>

        <Button>Submit</Button>
      </form>
    </Container>
  )
}

export default NewPost