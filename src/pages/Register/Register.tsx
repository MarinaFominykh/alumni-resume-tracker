// import { register } from '../../api/registerApi';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import './Register.css';
interface InputsValue {
  name: string;
  email: string;
  password: string;
}
function Register() {
  const { handleSubmit, control } = useForm<InputsValue>();

  const onSubmit: SubmitHandler<InputsValue> = (data) => {
    console.log(data);
    
    // Ждем бэк:

    // const { name, email, password } = data;
    // register(name, email, password);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
      <h2>Форма регистрации</h2>
      <Controller
        name='name'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            label='Имя'
            size='small'
            onChange={(e) => field.onChange(e)}
          />
        )}
      />
      <Controller
        name='email'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            type='email'
            label='Почта'
            size='small'
            onChange={(e) => field.onChange(e)}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            type='password'
            label='Пароль'
            size='small'
            onChange={(e) => field.onChange(e)}
          />
        )}
      />

      <Button
        type='submit'
        variant='contained'
        fullWidth={true}
        disableElevation={true}
      >
        Отправить
      </Button>
    </form>
  );
}

export default Register;
