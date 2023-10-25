import ButtonElement from '../../../components/elements/ButtonElement/ButtonElement';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import '../Auth.css';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import Typography from '@mui/material/Typography/Typography';
import { IconButton, InputAdornment, Link } from '@mui/material';
import Auth from '../Auth';
import InputElement from '../../../components/elements/InputElement/InputElement';
import { authStyles } from '../consts/authStyles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

interface LoginInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email должен соответствовать схеме email@example.com.')
    .required('Поле должно быть заполнено.'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать минимум 6 символов.')
    .max(20, 'Пароль должен содержать не более 6 символов.')
    .required('Поле должно быть заполнено.')
});

function Login() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<LoginInputs>({
    resolver: yupResolver(schema)
  });

  const loginSubmitHandler: SubmitHandler<LoginInputs> = (data: LoginInputs) => {
    console.log('form data is', data);
    navigate('/');
  };

  const EndAdornment = ({ visible, setVisible }: any) => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => setVisible(!visible)}>
          {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <Auth>
      <form onSubmit={handleSubmit(loginSubmitHandler)} noValidate className="auth__form">
        <Typography variant="h2">Карьерный трекер</Typography>
        <Typography variant="body2">Войти в аккаунт</Typography>
        <InputElement
          name="email"
          defaultValue=""
          control={control}
          type="email"
          label="Email"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email ? errors.email?.message : ''}
          adornment={''}
        />

        <InputElement
          name="password"
          defaultValue=""
          control={control}
          type={visible ? 'text' : 'password'}
          label="Пароль"
          variant="outlined"
          error={!!errors.password}
          helperText={errors.password ? errors.password?.message : ''}
          adornment={<EndAdornment visible={visible} setVisible={setVisible} />}
        />

        <Link sx={authStyles.formLink} variant="body2" onClick={() => navigate('/reset-password')}>
          Не помню пароль
        </Link>

        <ButtonElement variant="contained" type="submit">
          Войти
        </ButtonElement>
      </form>
    </Auth>
  );
}

export default Login;
