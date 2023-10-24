import { Button, ButtonProps } from '@mui/material';

function ButtonElement({ children, color, disabled, size, variant, sx, type }: ButtonProps) {
  return (
    <Button color={color} disabled={disabled} size={size} variant={variant} sx={sx} type={type}>
      {children}
    </Button>
  );
}

export default ButtonElement;
