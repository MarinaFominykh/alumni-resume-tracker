import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container>
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default App;
