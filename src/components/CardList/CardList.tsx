import { Stack } from '@mui/material';
import VacancyCard from '../elements/VacancyCard/VacancyCard';

interface VacancyTypes {
  id: string;
  vacancy_name: string;
  place: string;
  city: string;
  experience: number;
}

interface CardListTypes {
  vacancies: [];
}

function CardList({ vacancies }: CardListTypes) {
  return (
    <Stack direction={'row'} spacing={'20px'} sx={{ overflowX: 'scroll' }}>
      {vacancies.slice(0, 6).map((vacancy: VacancyTypes) => (
        <VacancyCard
          key={vacancy.id}
          name={vacancy.vacancy_name}
          department={vacancy.place}
          city={vacancy.city}
          experience_min={vacancy.experience}
        />
      ))}
    </Stack>
  );
}

export default CardList;
