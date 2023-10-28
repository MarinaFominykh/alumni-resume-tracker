import ButtonElement from '../../../components/elements/ButtonElement/ButtonElement';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import '../Auth.css';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import Typography from '@mui/material/Typography/Typography';
import { IconButton, InputAdornment, Link, TextField } from '@mui/material';
import Auth from '../Auth';
import { authStyles } from '../consts/authStyles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
// import { authorize } from '../../../api/authApi';

interface LoginInputs {
  email: string;
  password: string;
}

interface EndAdornmentTypes {
  visible: boolean;
  setVisible: any;
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
    // const {email, password} = data;
    // authorize(email, password)
    // .then((jwt) => {
    //     if (jwt.token) {
    //       localStorage.setItem("token", jwt.token);
    //        navigate('/vacancies');
    //     }
    //     console.log('Токен не передан или передан не в том формате');
    //   })
    //   .catch((error) => {
    //     if (error === 400) {
    //       console.log('Переданы некорректные данные');
    //     } else if (error === 401) {
    //       console.log('Ошибка авторизации');
    //     } else {
    //       console.log('Неизвестная ошибка сервера');
    //     }
    //   });
    navigate('/vacancies');
    console.log('form data is', data);
    
  };

  const EndAdornment = ({ visible, setVisible }: EndAdornmentTypes) => {
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
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              variant="outlined"
              label="Email"
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
              type={visible ? 'text' : 'password'}
              variant="outlined"
              label="Пароль"
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
              InputProps={{
                endAdornment: <EndAdornment visible={visible} setVisible={setVisible} />
              }}
            />
          )}
        />

        <Link sx={authStyles.formLink} variant="body2" onClick={() => navigate('/reset-password')}>
          Не помню пароль
        </Link>

        <ButtonElement
          color="secondary"
          variant="contained"
          type="submit"
          sx={{ padding: '18px 0', height: '56px' }}
        >
          Войти
        </ButtonElement>
      </form>
    </Auth>
  );
}

export default Login;
