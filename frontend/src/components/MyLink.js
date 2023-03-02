import { Link } from "@mui/material";
import { grey } from '@mui/material/colors';

const MyLink = ({href, text}) => {
  const white = grey[50];

  return (
    <Link href={href} color={white} variant="inherit" underline="hover">{text}</Link>
  )
}

export default MyLink