import { Grid } from '@mui/material';
import Header from '../../components/elements/Hader/Header';
import FilterComponent from '../../components/FilterComponent/FilterComponent';

function Favourites() {
  return (
    <Grid container>
      <Header title={'Избранное'} />
      <FilterComponent />
    </Grid>
  );
}

export default Favourites;
