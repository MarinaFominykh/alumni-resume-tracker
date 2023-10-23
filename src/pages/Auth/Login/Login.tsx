import ButtonElement from '../../../components/elements/ButtonElement/ButtonElement';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import '../Auth.css';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import Typography from '@mui/material/Typography/Typography';
import { Link } from '@mui/material';
import Auth from '../Auth';

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

  return (
    <Auth>
      <form onSubmit={handleSubmit(loginSubmitHandler)} noValidate className="auth__form">
        <Typography variant="h2">Карьерный трекер</Typography>
        <Typography variant="body2">Войти в аккаунт</Typography>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ''}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Пароль"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
            />
          )}
        />
        <Link
          variant="body2"
          underline="none"
          color="#1D6BF3"
          alignSelf="flex-start"
          fontSize="13px"
          fontWeight="500"
          lineHeight="16px"
        >
          Не помню пароль
        </Link>

        <ButtonElement variant="contained" type="submit">
          Войти
        </ButtonElement>
      </form>
      <Typography variant="body2" alignSelf="center" marginTop="16px">
        Новый пользователь?{' '}
        <Link variant="body2" underline="none" color="#fff" onClick={() => navigate('/sign-up')}>
          Зарегистрироваться
        </Link>
      </Typography>
    </Auth>
  );
}

export default Login;
