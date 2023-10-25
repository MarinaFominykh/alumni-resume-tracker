import { Controller } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

interface LoginInputs {
  name: string;
  email: string;
  password: string;
  text: string;
}

interface InputPropsTypes {
  name: keyof LoginInputs;
  defaultValue: string;
  type: string;
  label: string;
  variant: TextFieldProps['variant'];
  error: boolean;
  helperText: React.ReactNode;
  control: any;
  adornment: React.ReactNode;
}

function InputElement({
  name,
  defaultValue,
  control,
  label,
  variant,
  error,
  helperText,
  adornment,
  type
}: InputPropsTypes) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          variant={variant}
          error={error}
          helperText={helperText}
          InputProps={{ endAdornment: adornment }}
        />
      )}
    />
  );
}

export default InputElement;
