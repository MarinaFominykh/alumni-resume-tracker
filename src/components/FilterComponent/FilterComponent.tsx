import * as React from 'react';
import { Stack, Box, Typography, Button, TextField } from '@mui/material';
import MultipleSelect from '../elements/MultipleSelect/MultipleSelect';
import { testStudent } from '../../consts/testStudent';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function FilterComponent() {
  const [level, setLevel] = React.useState('');

  const handleLevelChange = (event: SelectChangeEvent<typeof level>) => {
    setLevel(event.target.value);
  };
  const [activity, setActivity] = React.useState('');

  const handleActivityChange = (event: SelectChangeEvent<typeof activity>) => {
    setActivity(event.target.value);
  };

  return (
    <Box
      sx={{
        // Растягивать на весь экран?
        maxWidth: '1164px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        bgcolor: '#F9FAFB',
        borderRadius: '5px',
        padding: '16px',
        marginLeft: '-15px',
        marginTop: '24px'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="subtitle1" sx={{fontFamily: 'YS Text', fontWeight: 500, fontSize: '18px', lineHeight: '24px' }}>
          Фильтры
        </Typography>
        <Button variant="text" sx={{ fontWeight: 400, fontSize: '14px', lineHeight: '20px' }}>
          Сбросить фильтры
        </Button>
      </Box>

      <Stack direction={'row'} spacing={'16px'}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant="caption" fontWeight={500}>
            Город
          </Typography>
          <TextField size="small" placeholder="Город" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant="caption" fontWeight={500}>
            Опыт
          </Typography>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <TextField size="small" placeholder="От" sx={{ width: '76.5px' }} />
            <TextField size="small" placeholder="До" sx={{ width: '76.5px' }} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant="caption" fontWeight={500}>
            Навыки
          </Typography>
          <MultipleSelect skills={testStudent.skills} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant="caption" fontWeight={500}>
            Уровень
          </Typography>
          <FormControl sx={{ width: 112 }} size="small">
            <Select value={level} onChange={handleLevelChange}>
              <MenuItem value={'Junior'}>Junior</MenuItem>
              <MenuItem value={'Middle'}>Middle</MenuItem>
              <MenuItem value={'Senior'}>Senior</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant="caption" fontWeight={500}>
            Активность
          </Typography>
          <FormControl sx={{ width: 112 }} size="small">
            <Select value={activity} onChange={handleActivityChange}>
              <MenuItem value={'Низкая'}>Низкая</MenuItem>
              <MenuItem value={'Средняя'}>Средняя</MenuItem>
              <MenuItem value={'Высокая'}>Высокая</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormControlLabel control={<Checkbox />} label="Релевантный опыт" />
      </Stack>
    </Box>
  );
}

export default FilterComponent;
