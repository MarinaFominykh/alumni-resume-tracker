import CustomizedTables from '../../components/Table/Table';
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import Header from '../../components/Haders/Header';
import { VacancyList } from '../../components/VacancyList/VacancyList';
import Directions from '../../components/Directions/Directions';
import './Search.css';
import { Box } from '@mui/material';
function Search() {
  
  return (
    <Box sx={{ paddingLeft: '56px', margin: 0 }}>
      <Header title="Поиск кандидатов" />
      <VacancyList />
      <Directions />
      <FilterComponent />
      <CustomizedTables />
    </Box>

    // <Grid item sx={{ width: 1 }}>
    //   <Typography variant="h1" sx={searchStyles.title}>
    //     Поиск кандидатов
    //   </Typography>
    //   <FilterComponent />
    //   <CustomizedTables />
    // </Grid>
  );
}

export default Search;
