import { Button, Grid, Table, Typography, createSvgIcon, Box } from '@mui/material';
import CompanyIcon from '../../components/elements/CompanyIcon/CompanyIcon';
import { COMPANY_DATA } from './data/const';
import Tabs from '../../components/Tabs/Tabs';
import { useNavigate } from 'react-router';

function Vacancies() {
  const navigate = useNavigate();
  const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus'
  );
  return (
    <Box sx={{paddingLeft: '56px', margin: 0}}><Typography variant="h1">Мои вакансии</Typography>
      <Grid container>
        <Grid item xs={9} alignSelf={'center'}>
          <Button
            variant="contained"
            startIcon={<PlusIcon />}
            sx={{
              boxSizing: 'border-box',
              height: '44px',
              padding: '10px 20px'
            }}
            onClick={() => {
              navigate('/vacancies/new');
            }}
          >
            <Typography
              variant="button"
              sx={{
                display: 'block',
                whiteSpace: 'nowrap'
              }}
            >
              Новая Вакансия
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <CompanyIcon {...COMPANY_DATA}></CompanyIcon>
        </Grid>
      </Grid>
      <Tabs />
      <Table /></Box>
      
   
  );
}

export default Vacancies;
