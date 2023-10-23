import './Auth.css';
import logo from '../../../images/logo.svg';
import telegram from '../../../images/telegram.svg';
import { Link, Typography } from '@mui/material';

function Auth({ children }: object) {
  return (
    <>
      <main className="auth">
        <img src={logo} alt="Логотип проекта." className="logo" />
        {children}
      </main>
      <footer className="auth__footer">
        <Link variant="body2" underline="none" className="auth__footer-link">
          <img src={telegram} className="auth__footer-link-img" />
          <Typography variant="body2">Написать в поддержку</Typography>
        </Link>
        <Typography variant="body2">&copy; Карьерный трекер, 2023</Typography>
      </footer>
    </>
  );
}

export default Auth;
