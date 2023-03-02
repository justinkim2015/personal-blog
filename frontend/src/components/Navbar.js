import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MyLink from "./MyLink";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Justin's Dev Blog
          </Typography>

          <MyLink href='/' text='Home'></MyLink>
          <MyLink href='/new' text='New'></MyLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
