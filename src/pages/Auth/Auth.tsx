import './Auth.css';
import logo from '../../../images/logo.svg';
import telegram from '../../../images/telegram.svg';
import { Link, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import { authStyles } from './consts/authStyles';

interface Props {
  children: React.ReactNode;
}

function Auth({ children }: Props) {
  return (
    <Box sx={authStyles.wrapper}>
      <Box sx={authStyles.content}>
        <img src={logo} alt="Логотип проекта." className="logo" />
        <Box sx={authStyles.firstElement}></Box>
        <Box sx={authStyles.secondElement}></Box>
        <Box sx={authStyles.thirdElement}></Box>
        {children}
      </Box>
      <Box sx={authStyles.footer}>
        <Link variant="body2" sx={authStyles.link}>
          <img src={telegram} className="auth__footer-link-img" />
          <Typography variant="body2">Написать в поддержку</Typography>
        </Link>
        <Typography variant="body2">&copy; Карьерный трекер, 2023</Typography>
      </Box>
    </Box>
  );
}

export default Auth;
