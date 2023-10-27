import { Grid } from '@mui/material';
import Header from '../../components/elements/Hader/Header';
import FilterComponent from '../../components/FilterComponent/FilterComponent';

function Favourites() {
  return (
    <Grid sx={{paddingLeft: '56px', margin: 0}} container>
      <Header title={'Избранное'} />
      <FilterComponent />
    </Grid>
  );
}

export default Favourites;
