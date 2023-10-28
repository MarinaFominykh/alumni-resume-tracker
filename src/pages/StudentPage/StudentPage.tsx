import { Avatar, Box, Typography, Link, Container } from '@mui/material';
import { testStudent } from '../../consts/testStudent';
import Stack from '@mui/material/Stack';
import ChipElement from '../../components/elements/ChipElement/ChipElement';
import ActivityElement from '../../components/elements/ActivityElement/ActivityElement';
import GradeElement from '../../components/elements/GradeElement/GradeElement';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { studentStyles } from './consts/studentStyles';
import LinkIcon from '../../../images/link.svg';
import TelegramIcon from '@mui/icons-material/Telegram';
import BackButton from '../../components/elements/BackButton/BackButton';
import LikeButton from '../../components/elements/LikeButton/LikeButton';
import { chipStyles } from '../../components/elements/ChipElement/styles';

function StudentPage() {
  return (
    <Container sx={studentStyles.wrapper}>
      <BackButton />
      <Box sx={studentStyles.header}>
        <Avatar alt="Аватар выпускника" src={testStudent.photo} sx={{ width: 72, height: 72 }} />
        <Box sx={studentStyles.info}>
          <Typography
            variant="h1"
            fontWeight={'500'}
            margin={'4px 0'}
            sx={{ display: 'flex', gap: '12px' }}
          >
            {`${testStudent.first_name} ${testStudent.last_name}`}
            <LikeButton isLiked={true} />
          </Typography>

          <Typography variant="body2" sx={{ color: '#1A1B22' }}>
            {testStudent.specialization}
          </Typography>
          <Typography variant="body2" sx={{ color: '#1A1B22' }}>
            {`${testStudent.city}, ${testStudent.country}`}
          </Typography>
        </Box>
      </Box>

      <Box sx={studentStyles.mainInfo}>
        <Stack sx={studentStyles.leftSide}>
          <Box sx={studentStyles.stack}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Контакты
            </Typography>
            <Box sx={studentStyles.iconLink}>
              <PhoneInTalkOutlinedIcon />
              <Typography variant="body2">{testStudent.contacts.phone}</Typography>
            </Box>
            <Box sx={studentStyles.iconLink}>
              <PhoneInTalkOutlinedIcon />
              <Link sx={studentStyles.link}>{testStudent.contacts.email}</Link>
            </Box>
            <Box sx={studentStyles.iconLink}>
              <TelegramIcon />
              <Link sx={studentStyles.link}>{testStudent.contacts.telegram}</Link>
            </Box>
          </Box>

          <Box sx={studentStyles.stack}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Резюме
            </Typography>
            <Box sx={studentStyles.iconLink}>
              <img src={LinkIcon} alt="Иконка копирования" />
              <Link sx={studentStyles.link} href={`mailto:${testStudent.resume.resume_url}`}>
                {testStudent.resume.resume_pdf}
              </Link>
            </Box>
          </Box>

          <Box sx={studentStyles.stack}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Портфолио
            </Typography>
            <Box sx={studentStyles.iconLink}>
              <img src={LinkIcon} alt="Иконка копирования" />
              <Link sx={studentStyles.link} href={`${testStudent.portfolio.portfolio_url}`}>
                {testStudent.portfolio.pageName}
              </Link>
            </Box>
          </Box>

          <Box sx={studentStyles.stack}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Уровень
            </Typography>
            <GradeElement experience={testStudent.experience} />
          </Box>

          <Box sx={studentStyles.stack}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Опыт работы
            </Typography>
            <Typography variant="body2" sx={{ color: '#1A1B22' }}>
              {testStudent.experience}
            </Typography>
          </Box>

          <Box sx={studentStyles.stack}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Активность
            </Typography>

            <ActivityElement activity={testStudent.activity} />
          </Box>
        </Stack>
        <Stack sx={studentStyles.about}>
          <Box sx={studentStyles.about}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              О себе
            </Typography>
            <Typography variant="body2" sx={{ color: '#1A1B22' }}>
              {testStudent.about_me}
            </Typography>
          </Box>
          <Box sx={studentStyles.about}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Активность
            </Typography>
            <Stack sx={studentStyles.chipList} flexWrap="wrap" direction="row" gap={'8px 4px'}>
              {testStudent.skills.map(chip => (
                <ChipElement label={chip} sx={chipStyles.chip} />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default StudentPage;
