import { Link } from 'react-router-dom';
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
} from '@mui/material';
import ChipElement from '../elements/ChipElement/ChipElement';
import { chipStyles } from '../elements/ChipElement/styles';
import GradeElementTable from '../elements/GradeElementTable/GradeElementTable';
import { testStudentsArray } from '../../consts/testStudentsArray';
import ActivityElement from '../elements/ActivityElement/ActivityElement';
import { ChipsContainer } from '../ChipsContainer/ChipsContainer';
import { tableStyles } from './styles';
import './Table.css';
import { CandidatesContexMenu } from '../elements/ContexMenu/CandidatesContexMenu';
import { useEffect, useState } from 'react';
import LikeButton from '../elements/LikeButton/LikeButton';
// import ModalElement from '../ModalElement/ModalElement';
import { useAppSelector} from '../../hooks/redux';
// import { applicantSlice } from '../../store/reducers/applicantSlice';
import { applicantAPI } from '../../services/applicantService';
import tgIcon from '../../../images/telegram_blue.svg';
import emailIcon from '../../../images/email.svg';
import { IApplicant } from '../../models/IApplicant';

export default function CustomizedTables() {
  const [watched, setWatched] = useState(false);
  // const [isLiked, setIsLiked] = useState(false);
  // const [modalOpened, setModalOpened] = useState(false);
  const { city } = useAppSelector((state) => state.filterReducer);
  const {
    data: applicants,
    error,
    isLoading,
  } = applicantAPI.useFetchAllApplicantQuery('');
  console.log(applicants);
  // const dispatch = useAppDispatch();
  const { filteredApplicants } = useAppSelector((state) => state.filterReducer);
  const [allApplicants, setAllApplicants] = useState(applicants);
  useEffect(() => {
    setAllApplicants(applicants);
  }, [applicants]);
  useEffect(() => {
    setAllApplicants(filteredApplicants);
  }, [city]);
  // function handleLikeClick() {
  //   // переписать логику на проверку id и вынести ее в app
  //   if (isLiked) {
  //     setModalOpened(true);
  //   }
  //   if (!isLiked) {
  //     setIsLiked(true);
  //   }
  // }

  // function handleCancelClick() {
  //   setModalOpened(false);
  // }

  // function handleDeleteClick() {
  //   setIsLiked(false);
  //   setModalOpened(false);
  // }

  return (
    <>
      <Box sx={tableStyles.toolbarfilter}>
        <Box sx={tableStyles.filter}>
          <CandidatesContexMenu />
        </Box>
      </Box>
      <TableContainer component={Paper} sx={tableStyles.table}>
        <Table sx={{ width: 1 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell size='medium'>
                <Typography variant='h4'>Кандидат</Typography>
              </TableCell>
              <TableCell size='medium'>
                <Typography variant='h4'>Специальность</Typography>
              </TableCell>
              <TableCell size='small'>
                <Typography variant='h4'>Опыт работы</Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h4'>Уровень</Typography>
              </TableCell>
              <TableCell size='medium'>
                <Typography variant='h4'>Активность</Typography>
              </TableCell>
              <TableCell size='medium'>
                <Typography variant='h4'>Навыки</Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h4'>Контакты</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка</h1>}
            {allApplicants?.map((row: IApplicant) => (
              <TableRow key={row.id} sx={tableStyles.row}>
                <TableCell size='small'>
                  <LikeButton
                    // handleLikeClick={handleLikeClick}
                    // isLiked={isLiked}
                    
                  />
                </TableCell>
                <TableCell component='th' scope='row'>
                  <Link
                    className='link'
                    to={`/search/${row.id}`}
                    onClick={() => setWatched(true)}
                  >
                    <Box sx={tableStyles.nameBox}>
                      <Avatar src={row.photo} sx={{ width: 36, height: 36 }} />
                      <Typography
                        sx={tableStyles.text}
                      >{`${row.first_name} ${row.last_name}`}</Typography>
                      {watched ? (
                        <Typography variant='caption'>Просмотрено</Typography>
                      ) : (
                        ''
                      )}
                    </Box>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link className='link' to={`/search/${row.id}`}>
                    <Typography sx={tableStyles.text}>
                      {' '}
                      {row.specialization.name}
                    </Typography>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link className='link' to={`/search/${row.id}`}>
                    <Typography sx={tableStyles.text}>
                      {row.experience === 0 && 'Без опыта'}
                      {row.experience === 1 && `${row.experience} год`}
                      {row.experience > 1 &&
                        row.experience < 5 &&
                        `${row.experience} года`}
                      {row.experience >= 5 && `${row.experience} лет`}
                    </Typography>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link className='link' to={`/search/${row.id}`}>
                    <GradeElementTable
                      experience={row.experience}
                    ></GradeElementTable>
                  </Link>
                </TableCell>
                <TableCell sx={tableStyles.activityChell}>
                  <Link className='link' to={`/search/${row.id}`}>
                    <ActivityElement
                      activity={row.activity}
                      sx={{ display: 'flex', justifyContent: 'center' }}
                    />
                  </Link>
                </TableCell>
                <TableCell sx={tableStyles.skillsChell}>
                  <Link className='link' to={`/search/${row.id}`}>
                    <ChipsContainer>
                      {row.skills.slice(0, 4).map((skill, i) => (
                        <ChipElement
                          key={i}
                          label={skill}
                          sx={chipStyles.chip}
                        />
                      ))}
                    </ChipsContainer>
                  </Link>
                </TableCell>
                <TableCell>
                  {/* <ContactElement
                    sx={tableStyles.contacts}
                    contacts={row.telegram}
                  /> */}
                  <Box sx={{ display: 'flex', gap: '8px' }}>
                    <Link to={`https://telegram.im/${row.telegram}`}>
                      {' '}
                      <Box sx={tableStyles.contacts}>
                        <img src={tgIcon} />
                      </Box>
                    </Link>

                    <Link to={`mailto:/${row.email}`}>
                      <Box sx={tableStyles.contacts}>
                        <img src={emailIcon} />
                      </Box>
                    </Link>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
            {testStudentsArray.length === 0 && (
              <Box display={'flex'} justifyContent={'center'} gap={'10px'}>
                <Typography variant='h2' fontWeight={500}>
                  Пока ничего нет
                </Typography>
                <Typography variant='subtitle1'>
                  Попробуйте обновить критерии поиска
                </Typography>
              </Box>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* {modalOpened && (
        <ModalElement
          open={modalOpened}
          handleCancelClick={handleCancelClick}
          handleDeleteClick={handleDeleteClick}
        />
      )} */}
    </>
  );
}
