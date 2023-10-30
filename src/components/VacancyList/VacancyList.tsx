import { Link } from 'react-router-dom';
import { FC } from 'react';
import VacancyCard from '../elements/VacancyCard/VacancyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography, Box } from '@mui/material';
import { vacancyListStyle } from './styles';
import 'swiper/css';
import './VacancyList.css';
import { vacancyAPI } from '../../services/vacancyService';

// interface IVacancy {
//   id: string;
//   vacancy_name: string;
//   place: string;
//   specialization: string;
//   city: string;
//   experience: number;
//   date: string;
// }
// interface IVacancies {
//   vacancies: IVacancy[];
// }
export const VacancyList: FC = () => {
  const { data: vacancies } = vacancyAPI.useFetchAllVacancyQuery('');

  return (
    <>
      <Box sx={vacancyListStyle.wrapper}>
        <Typography sx={vacancyListStyle.subtitle}>Подобрать по вакансиям компании</Typography>
        <Typography sx={vacancyListStyle.link}>
          <Link to="/all-vacancies" className="link link__vacancies">
            Все вакансии
          </Link>
        </Typography>
      </Box>
      <Box>
        <Swiper
          spaceBetween={1}
          slidesPerView={'auto'}
          speed={1000}
          className="slider"
          breakpoints={{
            960: {
              slidesPerView: 5
            },
            0: {
              slidesPerView: 4
            }
          }}
        >
          {vacancies?.slice(0, 6).map(vacancy => (
            <SwiperSlide key={vacancy?.id}>
              <VacancyCard
                sx={vacancyListStyle.card}
                name={vacancy?.name}
                department={vacancy?.department}
                city={vacancy?.city}
                experience_min={vacancy?.experience_min}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};
