import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 230,
      margin: '0'
    }
  }
};

interface SelectTypes {
  skills: any;
}

function MultipleSelect({ skills }: SelectTypes) {
  const [skill, setSkill] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof skill>) => {
    const {
      target: { value }
    } = event;
    setSkill(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <>
      <FormControl sx={{ width: 230 }}>
        <Select
          id="demo-multiple-chip"
          multiple
          value={skill}
          onChange={handleChange}
          placeholder="Навыки"
          size="small"
          input={<OutlinedInput placeholder="Навыки" />}
          MenuProps={MenuProps}
        >
          {skills.map(skill => (
            <MenuItem key={skill} value={skill}>
              {skill}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default MultipleSelect;
