import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Typography from '@mui/material/Typography/Typography';
import { Box, Grid, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import Header from '../../../components/elements/Hader/Header';
import { testStudent } from '../../../consts/testStudent';
import ButtonElement from '../../../components/elements/ButtonElement/ButtonElement';

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

interface NewVacancyInputs {
  companyName?: string;
  vacName?: string;
  salaryMin?: number;
  salaryMax?: number;
  currency?: string;
  description?: string;
  requirements?: string;
  experienceMin?: number;
  experienceMax?: number;
  skills?: string;
  departmentName?: string;
  format?: string;
  responsibilities?: string;
  conditions?: string;
  city?: string;
  level?: string;
  contract?: string;
}

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
  const [contract, setContract] = React.useState('');
  const [level, setLevel] = React.useState('');
  const [city, setCity] = React.useState('');
  const [format, setFormat] = React.useState('');
  const [currency, setCurrency] = React.useState('');
  const [skills, setSkills] = React.useState<string[]>([]);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors }
  } = useForm<NewVacancyInputs>();

  const createVacancySubmitHandler: SubmitHandler<NewVacancyInputs> = (data: NewVacancyInputs) => {
    console.log('form data is', data);
  };

  return (
    <>
      <Header title="Новая вакансия" />
      <form onSubmit={handleSubmit(createVacancySubmitHandler)} noValidate>
        <Grid container columnSpacing={'16px'} justifyContent={'center'} marginTop={'8px'}>
          <Grid item sx={{ width: '337px' }} boxSizing={'initial'}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
              <Typography variant="caption" fontWeight={500}>
                Организация
              </Typography>
              <Controller
                name="companyName"
                control={control}
                defaultValue="TipTop Systems"
                render={({ field }) => (
                  <TextField {...field} type="text" variant="outlined" size="small" fullWidth />
                )}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
              <Typography variant="caption" fontWeight={500}>
                Название
              </Typography>
              <Box display="flex">
                <Controller
                  name="vacName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} type="text" variant="outlined" size="small" fullWidth />
                  )}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
              <Typography variant="caption" fontWeight={500}>
                Зарплата
              </Typography>
              <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <Controller
                  name="salaryMin"
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
                  name="salaryMax"
                  defaultValue={0}
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} type="number" variant="outlined" size="small" />
                  )}
                />

                <Select
                  labelId="currency-label"
                  {...register('currency')}
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
              <Typography variant="caption" fontWeight={500}>
                Опыт
              </Typography>
              <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <Controller
                  name="experienceMin"
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
                  name="experienceMax"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      variant="outlined"
                      error={!!errors.experienceMax}
                      helperText={errors.experienceMax ? errors.experienceMax?.message : ''}
                      size="small"
                    />
                  )}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
              <Typography variant="caption" fontWeight={500}>
                Подразделение
              </Typography>
              <Controller
                name="departmentName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} type="text" variant="outlined" size="small" fullWidth />
                )}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
              <Typography variant="caption" fontWeight={500}>
                Город
              </Typography>

              <Select
                labelId="city-label"
                size="small"
                {...register('city')}
                onChange={(event: SelectChangeEvent<typeof level>) => {
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
              <Typography variant="caption" fontWeight={500}>
                Формат работы
              </Typography>

              <Select
                labelId="format-label"
                size="small"
                {...register('format')}
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
              <Typography variant="caption" fontWeight={500}>
                Условия
              </Typography>
              <Controller
                name="conditions"
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
              <Typography variant="caption" fontWeight={500}>
                Оформление
              </Typography>

              <Select
                labelId="contract-label"
                size="small"
                {...register('contract')}
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
        <ButtonElement
          color="secondary"
          variant="contained"
          type="submit"
          sx={{ padding: '18px 0', height: '56px' }}
        >
          Сохранить
        </ButtonElement>
      </form>
    </>
  );
}

export default NewVacancy;
