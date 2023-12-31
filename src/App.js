import { Box, Stack, ThemeProvider, createTheme  } from "@mui/material";
 import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Add from "./components/Add";
import { useState } from "react";
function App() {
  const [mode , setMode]= useState('light')

  const darktheme =createTheme({
    palette:{
      mode: mode
    }
  })
 
  return (
    <ThemeProvider theme={darktheme}>
   <Box bgcolor={'background.default'} color={'text.primary'}>   
    <Navbar/>
    <Stack direction={"row"} spacing={2} justifyContent={'space-between'}  >

  
   <Sidebar  setMode={setMode} mode={mode} /> 
   <Feed/>
   <Rightbar/>
    </Stack>
    <Add/>

    
 
</Box></ThemeProvider>
  );
}

export default App;
