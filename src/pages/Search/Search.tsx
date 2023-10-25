import CustomizedTables from '../../components/Table/Table';
import { Grid } from '@mui/material';
import './Search.css';
function Search() {
  return (
    <Grid item sx={{width: 1}} >
      <h1>Поиск</h1>
      <CustomizedTables />

    </Grid>
  
  );
}

export default Search;
