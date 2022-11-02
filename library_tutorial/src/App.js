import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {orange, blue} from '@mui/material/colors';


function App() {
  return (
    <Grid container spacing={2} columns={32}>
      <Grid item xs={8}>
        <Box sx={{color: orange[800], bgcolor: blue[200]}}>Testing</Box>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{color: orange[800], bgcolor: blue[200]}}>
          Testing to test
          </Box>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{color: orange[800], bgcolor: blue[200]}}>Testing again</Box>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{color: orange[800], bgcolor: blue[200]}}>Testing once more</Box>
      </Grid>
    </Grid>
  );
}

export default App;
