import { Card, CardContent, Typography } from '@mui/material';
import { vacancyStyles } from './styles';
import { Link } from 'react-router-dom';
import './VacancyCard.css';
import { IVacancy } from '../../../models/IVacancy';

function VacancyCard({ name, department, city, experience_min, sx }: IVacancy) {
  return (
    <Card
      variant="outlined"
      onClick={() => console.log('clicked')}
      sx={sx}
    
    >
      <Link to="/vacancies" className="link">
        <CardContent sx={vacancyStyles.wrapper}>
          <Typography sx={vacancyStyles.title}>{name}</Typography>
          <Typography sx={vacancyStyles.place}>{department}</Typography>
          <Typography sx={vacancyStyles.text}>{city}</Typography>
          <Typography sx={vacancyStyles.text}>{`От ${experience_min} ${
            experience_min === 1 ? 'года' : 'лет'
          }`}</Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default VacancyCard;
