import { Box } from '@mui/material';
import CardList from '../../components/CardList/CardList';
import { testVacancies } from '../../consts/testVacancy';

function Favourites() {
  return (
    <Box>
      <CardList vacancies={testVacancies} />
    </Box>
  );
}

export default Favourites;
