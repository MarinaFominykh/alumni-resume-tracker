import { FC, ReactNode } from 'react';
import { Card, Box, CardContent, Typography } from '@mui/material';

import { vacancyRowStyle } from './styles';
import ButtonElement from '../elements/ButtonElement/ButtonElement';
import { ContexMenu } from '../elements/ContexMenu/ContexMenu';
import { IVacancy } from '../../models/IVacancy';
interface VacancyRowProps {
  children?: ReactNode;
  vacancy: IVacancy;
  buttonText?: string;
}

const getText = (experience: number) => {
  if (experience === 1) {
    return `От 1 года`;
  } else if (experience >= 2 && experience < 5) {
    return `${experience} года`;
  } else return `${experience} лет`;
};

export const VacancyRow: FC<VacancyRowProps> = ({ children, vacancy, buttonText }) => {
  return (
    <Card sx={vacancyRowStyle.card}>
      <CardContent sx={vacancyRowStyle.cardContent}>
        <Box sx={vacancyRowStyle.menu}>
          <ContexMenu />
        </Box>
        <Box sx={vacancyRowStyle.data}>
          <Box sx={vacancyRowStyle.description}>
            {' '}
            <Typography sx={vacancyRowStyle.title}>{vacancy.vacancy_name}</Typography>
            <Typography sx={vacancyRowStyle.subtitle}>{vacancy.place}</Typography>
            <Typography sx={vacancyRowStyle.date}>{vacancy.date}</Typography>
          </Box>
          <Box sx={vacancyRowStyle.centerContent}>
            <Typography>{vacancy.city}</Typography>
            <Typography>{getText(vacancy.experience)}</Typography>
            <Typography>{vacancy.format}</Typography>
          </Box>

          <Box>
            <ButtonElement sx={vacancyRowStyle.button}>
              <Typography sx={vacancyRowStyle.buttonText}>{buttonText}</Typography>
            </ButtonElement>
            {children}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
