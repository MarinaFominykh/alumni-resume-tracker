import ButtonElement from '../../../components/elements/ButtonElement/ButtonElement';
import InputElement from '../../../components/elements/InputElement/InputElement';
import { authStyles } from '../consts/authStyles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Auth from '../Auth';
import Typography from '@mui/material/Typography/Typography';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';

interface InputsValue {
  email: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email должен соответствовать схеме email@example.com.')
    .required('Поле должно быть заполнено.')
});

function ResetPassword() {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<InputsValue>({
    resolver: yupResolver(schema)
  });
  const resetSubmitHandler: SubmitHandler<InputsValue> = (data: InputsValue) => {
    console.log('form data is', data);
    navigate('/sign-in');
  };
  const navigate = useNavigate();
  return (
    <Auth>
      <form onSubmit={handleSubmit(resetSubmitHandler)} noValidate className="auth__form">
        <Typography variant="h2">Карьерный трекер</Typography>
        <Box>
          <Typography variant="body1">Восстановление пароля</Typography>
          <Typography variant="body2">
            Введите электронный адрес, указанный при регистрации
          </Typography>
        </Box>
        <InputElement
          name="email"
          defaultValue=""
          control={control}
          type="email"
          label="Почта"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email ? errors.email?.message : ''}
        />

        <ButtonElement variant="contained" type="submit">
          Восстановить пароль
        </ButtonElement>
      </form>

      <Link
        variant="body2"
        sx={authStyles.formCaption.link}
        marginTop="24px"
        onClick={() => navigate('/sign-in')}
      >
        Вернуться на главную
      </Link>
    </Auth>
  );
}

export default ResetPassword;
