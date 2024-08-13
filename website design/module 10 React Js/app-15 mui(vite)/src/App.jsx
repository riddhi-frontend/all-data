import React from "react";
import { Avatar, Button } from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { AssignmentIndOutlined } from "@mui/icons-material";
function App(){
  return(
    <>
    <Avatar >R</Avatar>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>N</Avatar>
    <Avatar sx={{bgcolor: deepOrange[500]}} variant="rounded">
      <AssignmentIndOutlined />
    </Avatar>
    <Button variant="contained">Click me</Button>
    </>
  )
}
export default App