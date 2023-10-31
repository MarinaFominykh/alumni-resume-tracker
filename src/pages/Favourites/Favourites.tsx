import { Grid } from '@mui/material';
import Header from '../../components/Headers/Header';
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import { VacancyList } from '../../components/VacancyList/VacancyList';
import CustomizedTables from '../../components/Table/Table';

function Favourites() {
  return (
    <Grid sx={{ paddingLeft: '56px', margin: 0 }}>
      <Header title={'Избранное'} />
      <VacancyList />
      <FilterComponent />
      <CustomizedTables />
    </Grid>
  );
}

export default Favourites;
