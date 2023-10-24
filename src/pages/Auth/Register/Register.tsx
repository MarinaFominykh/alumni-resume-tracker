// import { register } from '../../api/registerApi';
import ButtonElement from '../../../components/elements/ButtonElement/ButtonElement';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import Typography from '@mui/material/Typography/Typography';
import { Link } from '@mui/material';
import Auth from '../Auth';
import InputElement from '../../../components/elements/InputElement/InputElement';
import { authStyles } from '../consts/authStyles';

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

        <InputElement
          name="name"
          defaultValue=""
          control={control}
          type="name"
          label="Имя"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.email ? errors.name?.message : ''}
        />

        <InputElement
          name="email"
          defaultValue=""
          control={control}
          type="email"
          label="Email"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email ? errors.email?.message : ''}
        />

        <InputElement
          name="password"
          defaultValue=""
          control={control}
          type="password"
          label="Пароль"
          variant="outlined"
          error={!!errors.password}
          helperText={errors.password ? errors.password?.message : ''}
        />

        <ButtonElement variant="contained" type="submit">
          Зарегистрироваться
        </ButtonElement>
      </form>
      <Typography variant="body2" sx={authStyles.formCaption.fonts}>
        Уже есть аккаунт?{' '}
        <Link variant="body2" sx={authStyles.formCaption.link} onClick={() => navigate('/sign-in')}>
          Войти
        </Link>
      </Typography>
    </Auth>
  );
}

export default Register;
