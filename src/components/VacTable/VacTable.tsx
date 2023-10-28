import { Stack, Box, Typography } from '@mui/material';
import { VacancyRow } from '../VacancyRow/VacancyRow';
import { testVacancies } from '../../consts/testVacancy';
import { vacTableStyle } from './styles';

export const VacTable = () => {
  return (
    <>
      <Box sx={vacTableStyle.titlebar}>
        <Typography sx={vacTableStyle.title}>Название</Typography>
        <Box sx={vacTableStyle.centerText}>
          <Typography sx={vacTableStyle.text}>Город</Typography>
          <Typography sx={vacTableStyle.text}>Опыт</Typography>
          <Typography sx={vacTableStyle.text}> Формат</Typography>
        </Box>
        <Typography sx={vacTableStyle.leftEl}></Typography>
      </Box>
      <Stack direction='column' spacing={2} sx={vacTableStyle.panel}>
        {testVacancies.map((vacancy) => (
          <VacancyRow key={vacancy.id} vacancy={vacancy} />
        ))}
      </Stack>
    </>
  );
};
