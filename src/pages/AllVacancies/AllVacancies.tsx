import { Stack } from '@mui/material';
import BackIconHeader from '../../components/Headers/BackIconHeader';
import VacancyCard from '../../components/elements/VacancyCard/VacancyCard';
import { allVacanciesStyle } from './styles';
import { vacancyAPI } from '../../services/vacancyService';

function VacanciesList() {
  const { data: vacancies } = vacancyAPI.useFetchAllVacancyQuery('');

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
        {vacancies?.map(vacancy => (
          <VacancyCard
            sx={allVacanciesStyle.card}
            name={vacancy.name}
            department={vacancy.department}
            city={vacancy.city}
            experience_min={vacancy.experience_min}
          />
        ))}
      </Stack>
    </>
  );
}

export default VacanciesList;
