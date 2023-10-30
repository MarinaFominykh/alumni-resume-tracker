import { Card, CardContent, Typography } from '@mui/material';
import { vacancyStyles } from './styles';
// import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { vacNameValue } from '../../../store/reducers/filterForVacancSlice';
import './VacancyCard.css';

interface CardProps {
  vacancyName: string;
  place: string;
  city: string;
  experience: number;
  sx?: object;
}

function VacancyCard({ vacancyName, place, city, experience, sx }: CardProps) {
  const dispatch = useAppDispatch();
 
 return (
    <Card
      variant='outlined'
      onClick={() => {dispatch(vacNameValue(vacancyName))}}
      sx={sx}
    
    >
       
        <CardContent sx={vacancyStyles.wrapper}>
          <Typography sx={vacancyStyles.title}>{vacancyName}</Typography>
          <Typography sx={vacancyStyles.place}>{place}</Typography>
          <Typography sx={vacancyStyles.text}>{city}</Typography>
          <Typography sx={vacancyStyles.text}>{`От ${experience} ${
            experience === 1 ? 'года' : 'лет'
          }`}</Typography>
        </CardContent>

    </Card>
  );
}

export default VacancyCard;
