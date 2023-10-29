import { Grid, Typography, Box } from '@mui/material';
import ButtonElement from '../../components/elements/ButtonElement/ButtonElement';
import { useNavigate } from 'react-router';

function Error404() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={'25vh'}
      spacing={'24px'}
    >
      <Typography
        sx={{
          color: '#5A9BFF',
          fontFamily: 'YS Display',
          fontSize: '300px',
          fontWeight: 500,
          lineHeight: '250px'
        }}
      >
        404
      </Typography>
      <Box
        display={'flex'}
        maxWidth={'590px'}
        flexDirection={'column'}
        gap={'12px'}
        alignItems={'center'}
      >
        <Typography variant="h1">Страница не найдена</Typography>
        <Typography variant="h3" sx={{ textAlign: 'center', color: '#797981' }}>
          К сожалению, запрашиваемая вами страница не найдена. Попробуйте другой адрес или вернитесь
          на главную страницу.
        </Typography>
        <ButtonElement
          variant="contained"
          sx={{ padding: '10px 20px' }}
          onClick={() => navigate(-1)}
        >
          Назад
        </ButtonElement>
      </Box>
    </Grid>
  );
}

export default Error404;
