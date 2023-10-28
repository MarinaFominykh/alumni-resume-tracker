import { FC, ReactNode } from 'react';
import {
  Card,
  Box,

  CardContent,
  Button,
  Typography,
  CardActions,
} from '@mui/material';

import { vacancyRowStyle } from './styles';
import ButtonElement from '../elements/ButtonElement/ButtonElement';
import { ContexMenu } from '../elements/ContexMenu/ContexMenu';

interface VacancyRowProps {
  children?: ReactNode;
}

export const VacancyRow: FC<VacancyRowProps> = ({ children }) => {
  return (
    <Card sx={vacancyRowStyle.card}>
      <CardContent sx={vacancyRowStyle.cardContent}>
        <Box sx={vacancyRowStyle.menu}>
            <ContexMenu />
        </Box>
        <Box sx={vacancyRowStyle.data}>
          <Box sx={vacancyRowStyle.description}>
            {' '}
            <Typography>Junior UX/UI Designer</Typography>
            <Typography>Департамент технологий</Typography>
            <Typography>22.10.2023</Typography>
          </Box>
          <Typography>Москва</Typography>
          <Typography>От 1 года</Typography>
          <Typography>Удаленно</Typography>
          <Box>
            <ButtonElement>
              <Typography>63 кандидата</Typography>
            </ButtonElement>
            {children}
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};
