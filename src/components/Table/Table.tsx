import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChipElement from '../elements/ChipElement/ChipElement';
import { chipStyles } from '../elements/ChipElement/styles';
import GradeElementTable from '../elements/GradeElementTable/GradeElementTable';
import { testStudentsArray } from '../../consts/testStudentsArray';
import ActivityElement from '../elements/ActivityElement/ActivityElement';
import ContactElement from '../elements/ContactElement/ContactElement';
import { ChipsContainer } from '../ChipsContainer/ChipsContainer';
import { tableStyles } from './styles';
import './Table.css';
export default function CustomizedTables() {
  const navigate = useNavigate();

  const handleLocation = () => {
    navigate('/student');
  };
  return (
    <>
      <Box sx={tableStyles.toolbarfilter}>
        <Box sx={tableStyles.filter}>
          <Button sx={tableStyles.button}>
            <div className="filter-icon"></div>
            <Typography sx={tableStyles.textfilter}>Сортировка</Typography>
            <div className="arrow-icon"></div>
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper} sx={tableStyles.table}>
        <Table sx={{ width: 1 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell sx={{ width: '100px' }}>
                <Typography variant="h4">Студент</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">Специальность</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">Опыт работы</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">Уровень</Typography>
              </TableCell>
              <TableCell sx={{ maxWidth: '112px' }}>
                <Typography variant="h4">Активность</Typography>
              </TableCell>
              <TableCell sx={{ minWidth: '212px' }}>
                <Typography variant="h4">Навыки</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">Контакты</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testStudentsArray.map(row => (
              <TableRow key={row.id} sx={tableStyles.row} onClick={handleLocation}>
                <TableCell>
                  <Box sx={tableStyles.likeBox}>
                    {row.isLike ? (
                      <FavoriteIcon sx={{ color: '#1D6BF3' }} />
                    ) : (
                      <FavoriteBorderOutlinedIcon sx={{ color: '#1D6BF3' }} />
                    )}
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Box sx={tableStyles.nameBox}>
                    <Avatar src={row.photo} sx={{ width: 36, height: 36 }} />
                    <Typography sx={tableStyles.text}>{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography sx={tableStyles.text}> {row.specialization}</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={tableStyles.text}>
                    {row.experience === 0 && 'Без опыта'}
                    {row.experience === 1 && `${row.experience} год`}
                    {row.experience > 1 && row.experience < 5 && `${row.experience} года`}
                    {row.experience >= 5 && `${row.experience} лет`}
                  </Typography>
                </TableCell>
                <TableCell>
                  <GradeElementTable experience={row.experience}></GradeElementTable>
                </TableCell>
                <TableCell sx={tableStyles.activityChell}>
                  <ActivityElement
                    activity={row.activity}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  />
                </TableCell>
                <TableCell sx={tableStyles.skillsChell}>
                  <ChipsContainer>
                    {row.skills.slice(0, 4).map((skill, i) => (
                      <ChipElement key={i} label={skill} sx={chipStyles.chip} />
                    ))}
                  </ChipsContainer>
                </TableCell>
                <TableCell>
                  <ContactElement sx={tableStyles.contacts} contacts={row.contacts} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
