import React, { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Typography from '@mui/material/Typography/Typography';
import { Box, Grid, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { testStudent } from '../../../consts/testStudent';
import ButtonElement from '../../../components/elements/ButtonElement/ButtonElement';
import BackIconHeader from '../../../components/Headers/BackIconHeader';
import { IVacancy } from '../../../models/IVacancy';
import { vacancyAPI } from '../../../services/vacancyService';
import { useNavigate } from 'react-router';

const cities = [
  {
    value: 'Mосква'
  },
  {
    value: 'Санкт-Петербург'
  },
  {
    value: 'Казань'
  },
  {
    value: 'Нижний Новгород'
  },
  {
    value: 'Владивосток'
  },
  {
    value: 'Калининград'
  }
];

const currencies = [
  {
    value: 'RUB',
    label: '₽'
  },
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  }
];

// interface NewVacancyInputs {
//   companyName?: string;
//   vacName?: string;
//   salaryMin?: number;
//   salaryMax?: number;
//   currency?: string;
//   description?: string;
//   requirements?: string;
//   experienceMin?: number;
//   experienceMax?: number;
//   skills?: string;
//   departmentName?: string;
//   format?: string;
//   responsibilities?: string;
//   conditions?: string;
//   city?: string;
//   level?: string;
//   contract?: string;
// }

{
  /* const schema = yup.object().shape({
  companyName: yup
    .string()
    .min(2, 'Название должно содержать минимум 2 символа.')
    .max(20, 'Название должно содержать не более 20 символов.'),
  vacName: yup
    .string()
    .min(2, 'Название должно содержать минимум 2 символа.')
    .max(20, 'Название должно содержать не более 20 символов.'),
  salaryMin: yup.number(),
  salaryMax: yup.number(),
  description: yup.string(),
  requirements: yup.string(),
  experienceMin: yup.number(),
  experienceMax: yup.number(),
  departmentName: yup
    .string()
    .min(2, 'Название должно содержать минимум 2 символа.')
    .max(20, 'Название должно содержать не более 20 символов.'),
  city: yup.string()
});*/
}

function NewVacancy() {
  const navigate = useNavigate();
  const [contract, setContract] = React.useState('');
  const [level, setLevel] = React.useState('');
  const [city, setCity] = React.useState('');
  const [format, setFormat] = React.useState('');
  const [currency, setCurrency] = React.useState('');
  const [skills, setSkills] = React.useState<string[]>([]);
  const [createVacancy, { isSuccess }] = vacancyAPI.useCreateVacancyMutation();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors }
  } = useForm<IVacancy>();

  const createVacancySubmitHandler: SubmitHandler<IVacancy> = async (data: IVacancy) => {
    console.log('form data is', data);
    const {
      company_name,
      name,
      wage_min,
      wage_max,
      wage_currency,
      description,
      requirements,
      experience_min,
      experience_max,
      skills,
      department,
      employment_type,
      responsibilities,
      benefits,
      city,
      level,
      workplace
    } = data;
    await createVacancy({
      company_name,
      name,
      wage_min,
      wage_max,
      wage_currency,
      description,
      requirements,
      experience_min,
      experience_max,
      skills,
      department,
      responsibilities,
      benefits,
      city,
      level,
      employment_type,
      workplace
    } as IVacancy);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/vacancies');
      console.log('вакансия успешно добавлена');
    } else console.log('что-то пошло не так...');
  }, [createVacancySubmitHandler]);

  return (
    <>
      <form onSubmit={handleSubmit(createVacancySubmitHandler)} noValidate>
        <Grid container columnSpacing={'16px'} justifyContent={'center'} marginTop={'8px'}>
          <BackIconHeader title="Новая вакансия" />
          <Grid item sx={{ width: '337px' }} boxSizing={'initial'}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Typography variant="caption" fontWeight={500}>
                Организация
              </Typography>
              <Controller
                name="company_name"
                control={control}
                defaultValue="TipTop Systems"
                render={({ field }) => (
                  <TextField {...field} type="text" variant="outlined" size="small" fullWidth />
                )}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Название
              </Typography>
              <Box display="flex">
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} type="text" variant="outlined" size="small" fullWidth />
                  )}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Зарплата
              </Typography>
              <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <Controller
                  name="wage_min"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <TextField {...field} type="number" variant="outlined" size="small" />
                  )}
                />
                <Typography variant="caption" fontWeight={500}>
                  -
                </Typography>
                <Controller
                  name="wage_max"
                  defaultValue={0}
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} type="number" variant="outlined" size="small" />
                  )}
                />

                <Select
                  labelId="wage_currency-label"
                  {...register('wage_currency')}
                  size="small"
                  onChange={(event: SelectChangeEvent<typeof currency>) => {
                    setCurrency(event.target.value);
                  }}
                  value={currency}
                  defaultValue={'RUB'}
                >
                  {currencies.map(currency => (
                    <MenuItem key={currency.value} value={currency.value}>
                      {currency.label}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Описание
              </Typography>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={3}
                  />
                )}
              />
              <Typography variant="caption" color={'#B5B5B7'}>
                Расскажите подробнее о вакансии
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Требования
              </Typography>
              <Controller
                name="requirements"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={3}
                  />
                )}
              />
              <Typography variant="caption" color={'#B5B5B7'}>
                Опишите, что вы ждете от соискателя
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Опыт
              </Typography>
              <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <Controller
                  name="experience_min"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <TextField {...field} type="number" variant="outlined" size="small" />
                  )}
                />
                <Typography variant="caption" fontWeight={500}>
                  -
                </Typography>
                <Controller
                  name="experience_max"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      variant="outlined"
                      error={!!errors.experience_max}
                      helperText={errors.experience_max ? errors.experience_max?.message : ''}
                      size="small"
                    />
                  )}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Навыки
              </Typography>

              <Select
                labelId="skills-label"
                size="small"
                {...register('skills')}
                onChange={(event: SelectChangeEvent<typeof skills>) => {
                  const {
                    target: { value }
                  } = event;
                  setSkills(typeof value === 'string' ? value.split(',') : value);
                }}
                value={skills}
                multiple
              >
                {testStudent.skills.map(skill => (
                  <MenuItem key={skill} value={skill}>
                    {skill}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Grid>
          <Grid item sx={{ width: '337px' }} boxSizing={'initial'}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Typography variant="caption" fontWeight={500}>
                Подразделение
              </Typography>
              <Controller
                name="department"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} type="text" variant="outlined" size="small" fullWidth />
                )}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Город
              </Typography>

              <Select
                labelId="city-label"
                size="small"
                {...register('city')}
                onChange={(event: SelectChangeEvent<typeof city>) => {
                  setCity(event.target.value);
                }}
                value={city}
              >
                {cities.map(city => (
                  <MenuItem key={city.value} value={city.value}>
                    {city.value}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Формат работы
              </Typography>

              <Select
                labelId="workplace-label"
                size="small"
                {...register('workplace')}
                onChange={(event: SelectChangeEvent<typeof format>) => {
                  setFormat(event.target.value);
                }}
                value={format}
              >
                <MenuItem value={'Офис'}>Офис</MenuItem>
                <MenuItem value={'Удаленный'}>Удаленный</MenuItem>
                <MenuItem value={'Гибрид'}>Гибрид</MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Обязанности
              </Typography>
              <Controller
                name="responsibilities"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={3}
                  />
                )}
              />
              <Typography variant="caption" color={'#B5B5B7'}>
                Чем предстоит заниматься соискателю
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Условия
              </Typography>
              <Controller
                name="benefits"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={3}
                  />
                )}
              />
              <Typography variant="caption" color={'#B5B5B7'}>
                Что вы предлагаете соискателю
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Уровень
              </Typography>

              <Select
                labelId="level-label"
                {...register('level')}
                size="small"
                onChange={(event: SelectChangeEvent<typeof level>) => {
                  setLevel(event.target.value);
                }}
                value={level}
              >
                <MenuItem value={'Junior'}>Junior</MenuItem>
                <MenuItem value={'Middle'}>Middle</MenuItem>
                <MenuItem value={'Senior'}>Senior</MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '20px'
              }}
            >
              <Typography variant="caption" fontWeight={500}>
                Оформление
              </Typography>

              <Select
                labelId="contract-label"
                size="small"
                {...register('employment_type')}
                onChange={(event: SelectChangeEvent<typeof contract>) => {
                  setContract(event.target.value);
                }}
                value={contract}
              >
                <MenuItem value={'Cамозанятость'}>Cамозанятость</MenuItem>
                <MenuItem value={'ГПХ'}>ГПХ</MenuItem>
                <MenuItem value={'ТК'}>ТК</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'flex-end',
            maxWidth: '690px',
            margin: '24px auto 0'
          }}
        >
          <ButtonElement
            color="secondary"
            variant="outlined"
            type="button"
            sx={{ padding: '10px 19px', height: '40px' }}
          >
            <Typography variant="body1" fontWeight={500} color={'#1D6BF3'}>
              Опубликовать позже
            </Typography>
          </ButtonElement>
          <ButtonElement
            color="secondary"
            variant="contained"
            type="submit"
            sx={{ padding: '10px 58px', height: '40px' }}
          >
            <Typography variant="body1" fontWeight={500} color={'#fff'}>
              Сохранить
            </Typography>
          </ButtonElement>
        </Box>
      </form>
    </>
  );
}

export default NewVacancy;
