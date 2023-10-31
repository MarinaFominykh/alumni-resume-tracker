import { ChangeEvent } from 'react';

import {
  Stack,
  Box,
  Typography,
  Button,
  TextField,
  OutlinedInput,
} from '@mui/material';
import MultipleSelect from '../elements/MultipleSelect/MultipleSelect';
import { testStudent } from '../../consts/testStudent';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  activityValue,
  cityValue,
  levelValue,

} from '../../store/reducers/filterSlice';

function FilterComponent() {

  const dispatch = useAppDispatch();
  const { city, activity, level } = useAppSelector(
    (state) => state.filterReducer
  );
  
  const handleLevelChange = (event: SelectChangeEvent<typeof level>) => {
    dispatch(levelValue(event.target.value));
   
  };

  const handleActivityChange = (event: SelectChangeEvent<typeof activity>) => {
    dispatch(activityValue(Number(event.target.value)));
  };

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(cityValue(event.target.value));
   
  };

  return (
    <Box
      sx={{
      
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        bgcolor: '#F9FAFB',
        borderRadius: '5px',
        padding: '16px',
        marginLeft: '-15px',
        marginTop: '24px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant='subtitle1'
          sx={{
            fontFamily: 'YS Text',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '24px',
          }}
        >
          Фильтры
        </Typography>
        <Button
          variant='text'
          sx={{ fontWeight: 400, fontSize: '14px', lineHeight: '20px' }}
        >
          Сбросить фильтры
        </Button>
      </Box>

      <Stack direction={'row'} spacing={'16px'} alignItems={'flex-end'}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant='caption' fontWeight={500}>
            Город
          </Typography>
          <TextField size='small' value={city} onChange={handleCityChange} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant='caption' fontWeight={500}>
            Опыт
          </Typography>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <TextField size='small' placeholder='От' sx={{ width: '76.5px' }} />
            <TextField size='small' placeholder='До' sx={{ width: '76.5px' }} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant='caption' fontWeight={500}>
            Навыки
          </Typography>
          <MultipleSelect skills={testStudent.skills} fullwidth={false} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant='caption' fontWeight={500}>
            Уровень
          </Typography>
          <FormControl sx={{ width: 112 }} size='small'>
            <Select value={level} onChange={handleLevelChange}>
              <MenuItem value={'Junior'}>Junior</MenuItem>
              <MenuItem value={'Middle'}>Middle</MenuItem>
              <MenuItem value={'Senior'}>Senior</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant='caption' fontWeight={500}>
            Активность
          </Typography>
          <FormControl sx={{ width: 112 }} size='small'>
            <Select
              input={<OutlinedInput />}
              value={activity}
              onChange={handleActivityChange}
              displayEmpty
            >
              <MenuItem value={4}>Низкая</MenuItem>
              <MenuItem value={9}>Средняя</MenuItem>
              <MenuItem value={11}>Высокая</MenuItem>
              {/* Если фильтры везде работают, то убрать:
              <MenuItem value={'Низкая'}>Низкая</MenuItem>
              <MenuItem value={'Средняя'}>Средняя</MenuItem>
              <MenuItem value={'Высокая'}>Высокая</MenuItem> */}
            </Select>
          </FormControl>
        </Box>
        <FormControlLabel control={<Checkbox />} label='С опытом' />
      </Stack>
    </Box>
  );
}

export default FilterComponent;
