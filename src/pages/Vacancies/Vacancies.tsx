import { Table, Box } from '@mui/material';
import Tabs from '../../components/Tabs/Tabs';

import CompanyInfoHeader from '../../components/Headers/CompanyInfoHeader';

function Vacancies() {
  return (
    <Box sx={{ paddingLeft: '56px', margin: 0, marginTop: '24px' }}>
      <CompanyInfoHeader />
      <Tabs />
      <Table />
    </Box>
  );
}

export default Vacancies;
