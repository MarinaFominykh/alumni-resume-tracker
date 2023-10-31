import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { VacTable } from '../VacTable/VacTable';
import { testVacancies } from '../../consts/testVacancy';
import { VacancyRow } from '../VacancyRow/VacancyRow';
import { vacancyAPI } from '../../services/vacancyService';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
 
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
    const {data: vacancies} = vacancyAPI.useFetchAllVacancyQuery('');
   

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box padding={0}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={`Активные (${testVacancies.length})`} {...a11yProps(0)} />
          <Tab label="Неопубликованные" {...a11yProps(1)} />
          <Tab label="Архив" {...a11yProps(2)} />
        </Tabs>
      </Box>
       <CustomTabPanel value={value} index={0}>
        <VacTable>
          {vacancies?.map((vacancy) => (
            <VacancyRow key={vacancy.name} vacancy={vacancy} buttonText="63 кандидата" />
          ))}
        </VacTable>
      </CustomTabPanel>
     
      <CustomTabPanel value={value} index={1}>
        <VacTable>
          {vacancies?.map((vacancy) => (
            <VacancyRow  key={vacancy.name} vacancy={vacancy} buttonText="Опубликовать" />
          ))}
        </VacTable>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <VacTable>
          {vacancies?.map((vacancy) => (
            <VacancyRow key={vacancy.name} vacancy={vacancy} buttonText="Восстановить" />
          ))}
        </VacTable>
      </CustomTabPanel>
    </Box>
  );
}
