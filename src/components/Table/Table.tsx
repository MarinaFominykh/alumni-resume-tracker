import * as React from 'react';
import { Typography, Avatar, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { tableStyles } from './styles';
import ChipElement from '../elements/ChipElement/ChipElement';
import { chipStyles } from '../elements/ChipElement/styles';
import GradeElementTable from '../elements/GradeElementTable/GradeElementTable';
import { testStudentsArray } from '../../consts/testStudentsArray';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ActivityElement from '../elements/ActivityElement/ActivityElement';
import ContactElement from '../elements/ContactElement/ContactElement';


export default function CustomizedTables() {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: 1, margin: 'auto', border: 0, boxShadow: 0 }}
    >
      <Table sx={{ width: 1 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Typography variant='h4'>Студент</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h4'>Специальность</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h4'>Опыт работы</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h4'>Уровень</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h4'>Активность</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h4'>Навыки</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h4'>Контакты</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {testStudentsArray.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {row.isLike ? (
                  <FavoriteIcon sx={{ color: '#1D6BF3' }} />
                ) : (
                  <FavoriteBorderOutlinedIcon sx={{ color: '#1D6BF3' }} />
                )}
              </TableCell>
              <TableCell component='th' scope='row'>
                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <Avatar src={row.photo} sx={{ width: 36, height: 36 }} />
                  <Typography variant='body2'>{row.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>{row.specialization}</TableCell>
              <TableCell>
                {`${row.experience} ${row.experience < 5 ? 'год' : 'лет'}`}
              </TableCell>
              <TableCell>
                <GradeElementTable
                  experience={row.experience}
                ></GradeElementTable>
              </TableCell>
              <TableCell>
                <ActivityElement activity={row.activity} />
              </TableCell>
              <TableCell>
                <Stack sx={tableStyles.chipList} direction='row' spacing={1}>
                  {row.skills.slice(0, 4).map((skill, i) => (
                    <ChipElement key={i} label={skill} sx={chipStyles.chip} />
                  ))}
                </Stack>
              </TableCell>
              <TableCell>
                <ContactElement contacts={row.contacts} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
