import { Link } from "@mui/material";

const MyLink = ({href, text, sx, color}) => {

  return (
    <Link href={href} color={color} variant="inherit" underline="hover" sx={sx}>{text}</Link>
  )
}

export default MyLink