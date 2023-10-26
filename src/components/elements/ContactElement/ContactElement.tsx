import { FC } from 'react';
import tgIcon from '../../../../images/telegram_blue.svg';
import emailIcon from '../../../../images/email.svg';
import { Box } from '@mui/material';
interface ContactElementProps {
  contacts: {
    phone?: string;
    email?: string;
    telegram?: string;
  };
  sx: object;
}

const ContactElement: FC<ContactElementProps> = ({ contacts, sx }) => {
  const { email, telegram } = contacts;
  return (
    <Box sx={{display: 'flex', gap: '8px'}}>
      <Box sx={sx}>{telegram && <img src={tgIcon} />}</Box>
      <Box sx={sx}>{email && <img src={emailIcon} />}</Box>
    </Box>
  );
};

export default ContactElement;
