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
}

const ContactElement: FC<ContactElementProps> = ({ contacts }) => {
    const {email, telegram} = contacts;
  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
      {telegram && <img src={tgIcon} />}

      {email && <img src={emailIcon} />}
    </Box>
  );
};

export default ContactElement;
