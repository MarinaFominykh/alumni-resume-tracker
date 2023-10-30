import { Avatar, Box, Typography, Link, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import ChipElement from '../../components/elements/ChipElement/ChipElement';
import ActivityElement from '../../components/elements/ActivityElement/ActivityElement';
import GradeElement from '../../components/elements/GradeElement/GradeElement';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { studentStyles } from './consts/studentStyles';
import BackLink from '../../components/elements/BackLink/BackLink';
import LikeButton from '../../components/elements/LikeButton/LikeButton';
import { chipStyles } from '../../components/elements/ChipElement/styles';
import { EmailIcon, CopyIcon, TelegramIcon, PdfIcon } from '../../consts/icons';
import { applicantAPI } from '../../services/applicantService';
import { useParams } from 'react-router';

function StudentPage() {
  const { id } = useParams<{ id: string }>();
  const { data: applicant } = applicantAPI.useFetchApplicantByIdQuery(id);

  console.log(applicant);

  return (
    <Container sx={studentStyles.wrapper}>
      <BackLink />
      <Box sx={studentStyles.header}>
        <Avatar alt="Аватар выпускника" src={applicant?.photo} sx={{ width: 72, height: 72 }} />
        <Box sx={studentStyles.info}>
          <Typography
            variant="h1"
            fontWeight={'500'}
            margin={'4px 0'}
            sx={{ display: 'flex', gap: '12px' }}
          >
            {`${applicant?.first_name} ${applicant?.last_name}`}
            <LikeButton isLiked={true} />
          </Typography>

          <Typography variant="body2" sx={{ color: '#1A1B22' }}>
            {applicant?.specialization.name}
          </Typography>
          <Typography variant="body2" sx={{ color: '#1A1B22' }}>
            {`${applicant?.city}, ${applicant?.country}`}
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
              <Typography variant="body2">{applicant?.phone}</Typography>
            </Box>
            <Box sx={studentStyles.iconLink}>
              <EmailIcon />
              <Link sx={studentStyles.link} href={`mailto:${applicant?.email}`}>
                {applicant?.email}
              </Link>
            </Box>
            <Box sx={studentStyles.iconLink}>
              <TelegramIcon />
              <Link sx={studentStyles.link} href={`${applicant?.telegram}`}>
                {applicant?.telegram}
              </Link>
            </Box>
          </Box>

          <Box sx={studentStyles.stack}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Резюме
            </Typography>

            <Box sx={studentStyles.iconLink}>
              <PdfIcon />
              <Link sx={studentStyles.link} href={applicant?.resume_pdf} download>
                Скачать резюме
              </Link>
            </Box>
            <Box sx={studentStyles.iconLink}>
              <CopyIcon />
              <Link sx={studentStyles.link} href={applicant?.resume_url}>
                {applicant?.resume_domain}
              </Link>
            </Box>
          </Box>

          <Box sx={studentStyles.stack}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Портфолио
            </Typography>
            <Box sx={studentStyles.iconLink}>
              <CopyIcon />
              <Link sx={studentStyles.link} href={applicant?.portfolio_url}>
                {applicant?.portfolio_url}
              </Link>
            </Box>
          </Box>

          <Box sx={studentStyles.stack}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Уровень
            </Typography>
            <GradeElement experience={applicant?.experience} />
          </Box>

          <Box sx={studentStyles.stack}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Опыт работы
            </Typography>
            <Typography variant="body2" sx={{ color: '#1A1B22' }}>
              {applicant?.experience === 0
                ? 'Без опыта'
                : applicant?.experience === 1
                ? `${applicant?.experience} год`
                : applicant?.experience < 5
                ? `${applicant?.experience} годa`
                : `${applicant?.experience} лет`}
            </Typography>
          </Box>

          <Box sx={studentStyles.stack}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Активность
            </Typography>

            <ActivityElement activity={applicant?.activity} sx={studentStyles.activity} />
          </Box>
        </Stack>
        <Stack sx={studentStyles.about}>
          <Box sx={studentStyles.about}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              О себе
            </Typography>
            <Typography variant="body2" sx={{ color: '#1A1B22' }}>
              {applicant?.about_me}
            </Typography>
          </Box>
          <Box sx={studentStyles.about}>
            <Typography variant="subtitle1" fontWeight={'500'}>
              Активность
            </Typography>
            <Stack sx={studentStyles.chipList} flexWrap="wrap" direction="row" gap={'8px 4px'}>
              {applicant?.skills.map(chip => (
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
