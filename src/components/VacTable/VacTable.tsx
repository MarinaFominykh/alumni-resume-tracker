import { Stack, Box, Typography } from '@mui/material';
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
      <Stack direction="column" spacing={2} sx={vacTableStyle.panel}>
        {children}
      </Stack>
    </>
  );
};
