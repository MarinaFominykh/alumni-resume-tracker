import CustomizedTables from '../../components/Table/Table';
import { Grid, Typography } from '@mui/material';
import { searchStyles } from './styles';
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import './Search.css';
function Search() {
  return (
    <Grid item sx={{width: 1}} >
      <Typography variant="h1" sx={searchStyles.title}>Поиск кандидатов</Typography>
      <FilterComponent />
      <CustomizedTables />

    </Grid>
   
  );
}

export default Search;
