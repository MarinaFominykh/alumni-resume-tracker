import { Stack, Box, Typography } from '@mui/material';

// import { testVacancies } from '../../consts/testVacancy';
import { vacTableStyle } from './styles';

import { ReactNode } from 'react';
import { vacancyAPI } from '../../services/vacancyService';
import { VacancyRow } from '../VacancyRow/VacancyRow';

interface VacTableProps {
  children?: ReactNode;
}
export const VacTable = ({ children }: VacTableProps) => {
  const { data: vacancies } = vacancyAPI.useFetchAllVacancyQuery('');
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
      <Stack direction="column" spacing={2} sx={vacTableStyle.panel}>
        {children}
        {vacancies?.map(vacancy => (
          <VacancyRow key={vacancy.id} vacancy={vacancy} />
        ))}
      </Stack>
    </>
  );
};
