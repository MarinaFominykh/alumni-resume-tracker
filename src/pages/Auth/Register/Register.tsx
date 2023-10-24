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
  text: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Поле должно быть заполнено.'),
  text: yup.string()
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
    <Auth
      sx={
        ((authStyles.wrapper.backgroundColor = '#fff'),
        (authStyles.firstElement.display = 'none'),
        (authStyles.secondElement.display = 'none'),
        (authStyles.thirdElement.display = 'none'))
      }
    >
      <form onSubmit={handleSubmit(registerSubmitHandler)} noValidate className="auth__form">
        <Typography variant="h2">Добро пожаловать в Трекер</Typography>
        <Typography variant="body2">Расскажите немного о вашей компании</Typography>

        <InputElement
          name="name"
          defaultValue=""
          control={control}
          type="text"
          label="Название компании"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name ? errors.name?.message : ''}
        />

        <InputElement
          name="text"
          defaultValue=""
          control={control}
          type="email"
          label="Описание компании(необязательно)"
          variant="outlined"
          error={!!errors.text}
          helperText={errors.text ? errors.text?.message : ''}
        />

        <ButtonElement variant="contained" type="submit">
          Далее
        </ButtonElement>
        <Link sx={authStyles.formCaption.link} variant="body2" onClick={() => navigate('/sign-in')}>
          Назад
        </Link>
      </form>
    </Auth>
  );
}

export default Register;
