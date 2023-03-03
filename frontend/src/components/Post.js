import { Box } from "@mui/system";
import MyLink from "./MyLink";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Post = ({ title, content, postId, date }) => {
  const black = grey[900];

  return (
    <Box sx={{ p: 2, border: "1px solid grey", borderRadius: 3, my: 1 }}>
      <Typography variant="h5">
        <MyLink
          href={`/posts/${postId}`}
          text={`${title}`}
          color={black}
        ></MyLink>
      </Typography>

      <Typography variant="body1">{content}</Typography>

      <Typography variant="body2">{date}</Typography>
    </Box>
  );
};

export default Post;
