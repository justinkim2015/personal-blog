import { Box } from "@mui/system";
import MyLink from "./MyLink";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Post = ({ title, content, postId }) => {
  const black = grey[900];

  return (
    <Box sx={{ p: 2, border: "1px solid grey" }}>
      <Typography>
        <MyLink
          href={`/posts/${postId}`}
          text={`${title} - ${content}`}
          color={black}
        ></MyLink>
      </Typography>
    </Box>
  );
};

export default Post;
