import { Card, CardContent, Typography } from '@mui/material';

interface CardProps {
  vacancyName: string;
  place: string;
  city: string;
  experience: number;
}

function VacancyCard({ vacancyName, place, city, experience }: CardProps) {
  return (
    <Card
      variant="outlined"
      onClick={() => console.log('clicked')}
      sx={{ width: 334, flexShrink: '0' }}
    >
      <CardContent>
        <Typography variant="subtitle1">{vacancyName}</Typography>
        <Typography variant="caption">{place}</Typography>
        <Typography variant="body1">{city}</Typography>
        <Typography variant="body1">{`От ${experience} ${
          experience === 1 ? 'года' : 'лет'
        }`}</Typography>
      </CardContent>
    </Card>
  );
}

export default VacancyCard;
