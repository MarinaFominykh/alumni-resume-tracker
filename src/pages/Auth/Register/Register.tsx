// import { register } from '../../api/registerApi';
import ButtonElement from '../../../components/elements/ButtonElement/ButtonElement';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import Typography from '@mui/material/Typography/Typography';
import { Link } from '@mui/material';
import Auth from '../Auth';

interface InputsValue {
  name: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Поле должно быть заполнено.'),
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

function Register() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<InputsValue>({
    resolver: yupResolver(schema)
  });

  const registerSubmitHandler: SubmitHandler<InputsValue> = (data: InputsValue) => {
    console.log('form data is', data);
    navigate('/sign-in');
    // Ждем бэк:

    // const { name, email, password } = data;
    // register(name, email, password);
  };

  return (
    <Auth>
      <form onSubmit={handleSubmit(registerSubmitHandler)} noValidate className="auth__form">
        <Typography variant="h2">Карьерный трекер</Typography>
        <Typography variant="body2">Зарегистрироваться</Typography>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="name"
              label="Имя"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name ? errors.name?.message : ''}
            />
          )}
        />
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

        <ButtonElement variant="contained" type="submit">
          Зарегистрироваться
        </ButtonElement>
      </form>
      <Typography variant="body2" alignSelf="center" marginTop="16px">
        Уже есть аккаунт?{' '}
        <Link variant="body2" underline="none" color="#fff" onClick={() => navigate('/sign-in')}>
          Войти
        </Link>
      </Typography>
    </Auth>
  );
}

export default Register;
