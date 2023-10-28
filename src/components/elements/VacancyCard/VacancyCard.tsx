import { Card, CardContent, Typography } from '@mui/material';
import { vacancyStyles } from './styles';
import { Link } from 'react-router-dom'; 
import './VacancyCard.css'

interface CardProps {
  vacancyName: string;
  place: string;
  city: string;
  experience: number;
  sx?: object;
}

function VacancyCard({ vacancyName, place, city, experience, sx }: CardProps) {
  return (
    <Card
      variant='outlined'
      onClick={() => console.log('clicked')}
      sx={sx}
      // sx={vacancyStyles.card}
    >
      <Link to='/vacancies' className='link'>
         <CardContent sx={vacancyStyles.wrapper}>
        <Typography sx={vacancyStyles.title}>{vacancyName}</Typography>
        <Typography sx={vacancyStyles.place}>{place}</Typography>
        <Typography sx={vacancyStyles.text}>{city}</Typography>
        <Typography sx={vacancyStyles.text}>{`От ${experience} ${
          experience === 1 ? 'года' : 'лет'
        }`}</Typography>
      </CardContent>
      </Link>
      
    </Card>
  );
}

export default VacancyCard;
