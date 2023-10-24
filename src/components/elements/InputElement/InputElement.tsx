import { Controller } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

interface LoginInputs {
  name: string;
  email: string;
  password: string;
  text: string;
}

interface InputProps {
  name: keyof LoginInputs;
  defaultValue: string;
  type: string;
  label: string;
  variant: TextFieldProps['variant'];
  error: boolean;
  helperText: React.ReactNode;
  control: any;
}

function InputElement({
  name,
  defaultValue,
  control,
  label,
  variant,
  error,
  helperText
}: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          type={defaultValue}
          label={label}
          variant={variant}
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
}

export default InputElement;
