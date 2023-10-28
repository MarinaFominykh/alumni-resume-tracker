import { Stack } from '@mui/material';
import BackIconHeader from '../../components/Haders/BackIconHeader';
import VacancyCard from '../../components/elements/VacancyCard/VacancyCard';
import { testVacancies } from '../../consts/testVacancy';
import { allVacanciesStyle } from './styles';

function VacanciesList() {
  return (
    <>
      <BackIconHeader title="Подобрать избранное по вакансии" />
      <Stack
        direction="row"
        spacing={'20px'}
        useFlexGap
        flexWrap="wrap"
        maxWidth={'1164px'}
        margin={'0 auto'}
        
      >
        {testVacancies.map(vacancy => (
          <VacancyCard
          sx={allVacanciesStyle.card}
            vacancyName={vacancy.vacancy_name}
            place={vacancy.place}
            city={vacancy.city}
            experience={vacancy.experience}
          />
        ))}
      </Stack>
    </>
  );
}

export default VacanciesList;
