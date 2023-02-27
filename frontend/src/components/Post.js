import { Box } from "@mui/system";

const Post = ({ title, content }) => {
  return (
    <Box sx={{ p: 2, border: "1px solid grey" }}>
      {title} - {content}
    </Box>
  );
};

export default Post;
