import { Stack } from '@mui/material';
import VacancyCard from '../elements/VacancyCard/VacancyCard';

function CardList({ vacancies }: any) {
  return (
    <Stack direction={'row'} spacing={'20px'} sx={{ overflowX: 'scroll' }}>
      {vacancies.slice(0, 6).map((vacancy: any, i: number) => (
        <VacancyCard
          key={vacancy.i}
          vacancyName={vacancy.vacancy_name}
          place={vacancy.place}
          city={vacancy.city}
          experience={vacancy.experience}
        />
      ))}
    </Stack>
  );
}

export default CardList;
