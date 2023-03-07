import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MyLink from "./MyLink";
import { grey } from '@mui/material/colors';

export default function Navbar() {
  const white = grey[50];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Justin's Dev Blog
          </Typography>

          <Typography component="div">
            <MyLink href='/' text='Home' sx={{m: 1}} color={white}></MyLink>
            <MyLink href='/new' text='New' sx={{m: 1}} color={white}></MyLink>
            <MyLink href='http://www.justinjameskim.com' text='Portfolio' sx={{m: 1}} color={white}></MyLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
