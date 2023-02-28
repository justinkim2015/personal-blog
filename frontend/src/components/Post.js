import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Post = ({ title, content, postId }) => {
  return (
    <Box sx={{ p: 2, border: "1px solid grey" }}>
      <Link to={`/posts/${postId}`}>{title} - {content}</Link>
    </Box>
  );
};

export default Post;
