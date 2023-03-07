import { Box } from "@mui/system";
import MyLink from "./MyLink";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import PrettyDate from "./PrettyDate";
import Line from "./Line";

const Post = ({ title, content, postId, date }) => {
  const black = grey[900];
  const lightGray = grey[600];

  return (
    <div>
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" color={lightGray}>
          <PrettyDate date={date} ></PrettyDate>
        </Typography>

        <Typography variant="h5">
          <MyLink
            href={`/posts/${postId}`}
            text={`${title}`}
            color={black}
          ></MyLink>
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </Box>
      <Line></Line>
    </div>
  );
};

export default Post;
