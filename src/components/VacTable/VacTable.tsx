import { Stack, Box, Typography } from '@mui/material';

// import { testVacancies } from '../../consts/testVacancy';
import { vacTableStyle } from './styles';

import { ReactNode } from 'react';

interface VacTableProps {
  children?: ReactNode;
}
export const VacTable = ({ children }: VacTableProps) => {

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
        {children}
        {/* {isLoading && <h1>Идет загрузка...</h1>}
        {isError && <h1>Ошибка при загрузк</h1>}
        {vacancies?.map((vacancy) => (
          <VacancyRow key={vacancy.id} vacancy={vacancy} />
        ))} */}
      </Stack>
    </>
  );
};
