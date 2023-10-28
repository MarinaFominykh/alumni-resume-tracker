import { Button, ButtonProps } from '@mui/material';

function ButtonElement({
  children,
  color,
  disabled,
  size,
  variant,
  sx,
  type,
  onClick,
}: ButtonProps) {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ButtonElement;
