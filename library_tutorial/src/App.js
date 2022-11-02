import './App.css';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container rowSpacing={2} columnSpacing={{xs:1, sm: 2, md: 3}}>
      <Grid item xs={8}>
        <Paper>xs=8</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>xs=8</Paper>
      </Grid>
    </Grid>
  );
}

export default App;
