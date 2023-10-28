import { Stack } from '@mui/material';
import BackIconHeader from '../../components/Haders/BackIconHeader';
import VacancyCard from '../../components/elements/VacancyCard/VacancyCard';
import { testVacancies } from '../../consts/testVacancy';

function VacanciesList() {
  return (
    <>
      <BackIconHeader title="Подобрать избранное по вакансии" />
      <Stack
        direction="row"
        spacing={'20px'}
        useFlexGap
        flexWrap="wrap"
        maxWidth={'1048px'}
        margin={'0 auto'}
      >
        {testVacancies.map(vacancy => (
          <VacancyCard
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
