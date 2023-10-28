import { Grid, Typography, Button, Avatar, Divider, Box } from '@mui/material';
import { PlusIcon } from '../../consts/icons';
import { useNavigate } from 'react-router';

function CompanyInfoHeader() {
  const navigate = useNavigate();
  function stringAvatar(name: string) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
  }
  return (
    <>
      <Grid container justifyContent={'space-between'}>
        <Grid item xs={9} alignSelf={'center'} alignItems={'center'}>
          <Typography variant="h1" marginBottom={'20px'}>
            Мои вакансии
          </Typography>
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
        <Box display={'flex'} alignItems={'center'} gap={'16px'}>
          <Avatar
            sx={{ bgColor: 'grey', width: '72px', height: '72px ' }}
            {...stringAvatar('TipTop Systems')}
          />
          <Box
            gap={'8px'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '190px',
              gap: '8px',
              overflow: 'hidden'
            }}
          >
            <Typography variant="subtitle1">TipTop Systems</Typography>
            <Typography
              variant="body2"
              sx={{
                display: '-webkit-box',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                height: '40px'
              }}
            >
              Информационные технологии, системная интеграция, интернет
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Divider variant="middle" sx={{ width: '100%', margin: '24px 0 24px -15px' }} />
    </>
  );
}

export default CompanyInfoHeader;
