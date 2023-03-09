import { Link } from "@mui/material";

const MyLink = ({href, text, sx, color, click}) => {

  return (
    <Link href={href} color={color} onClick={click} variant="inherit" underline="hover" sx={sx}>{text}</Link>
  )
}

export default MyLink