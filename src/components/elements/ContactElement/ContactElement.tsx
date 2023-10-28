import { FC } from 'react';
import { Link } from 'react-router-dom';
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
    <Box sx={{ display: 'flex', gap: '8px' }}>
      <Link to={`https://telegram.im/${telegram}`}>
        {' '}
        <Box sx={sx}>{telegram && <img src={tgIcon} />}</Box>
      </Link>

      <Link to={`mailto:/${email}`}>
        <Box sx={sx}>
          {email && <img src={emailIcon} onClick={() => console.log(email)} />}
        </Box>
      </Link>
    </Box>
  );
};

export default ContactElement;
