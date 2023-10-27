import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Navbar />
        
      </Grid>
      <Grid item xs={11} sx={{padding:'20px 10px 0 30px'}}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default App;
