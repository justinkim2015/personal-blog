import { Container } from "@mui/system"

const NewPost = () => {
  return (
    <Container>
      <form>
        <label id='title'>Title</label>
        <input type='text' id='title'></input>

        <label id='body'>Body</label>
        <input type='textarea' id='body'></input>

        <button>Submit</button>
      </form>
    </Container>
  )
}

export default NewPost