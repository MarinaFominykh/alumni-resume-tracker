import ButtonElement from '../../../components/elements/ButtonElement/ButtonElement';
import Typography from '@mui/material/Typography/Typography';
import { Link } from '@mui/material';
import Auth from '../Auth';
import { authStyles } from '../consts/authStyles';
import { useNavigate } from 'react-router';

function Access() {
  const natigation = useNavigate();
  return (
    <Auth>
      <div className="auth__form">
        <Typography variant="h2">Получение доступа</Typography>
        <Typography variant="body2">
          Чтобы получить доступ к трекеру напишите нам на почту
        </Typography>
        <Link sx={authStyles.accessLink} variant="body2" href={`mailto:test@example.com`}>
          tracker@yandex.ru
        </Link>

        <ButtonElement
          variant="contained"
          type="submit"
          onClick={() => {
            natigation('/sign-in');
          }}
        >
          Назад
        </ButtonElement>
      </div>
    </Auth>
  );
}

export default Access;
