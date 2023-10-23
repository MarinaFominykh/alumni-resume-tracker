import './Auth.css';
import logo from '../../../images/logo.svg';
import telegram from '../../../images/telegram.svg';
import { Link, Typography } from '@mui/material';

function Auth({ children }: object) {
  return (
    <section className="auth">
      <div className="auth__content">
        <img src={logo} alt="Логотип проекта." className="logo" />
        <div className="auth__dec-el auth__dec-el_1"></div>
        <div className="auth__dec-el auth__dec-el_2"></div>
        <div className="auth__dec-el auth__dec-el_3"></div>
        {children}
      </div>
      <div className="auth__footer">
        <Link variant="body2" underline="none" className="auth__footer-link">
          <img src={telegram} className="auth__footer-link-img" />
          <Typography variant="body2">Написать в поддержку</Typography>
        </Link>
        <Typography variant="body2">&copy; Карьерный трекер, 2023</Typography>
      </div>
    </section>
  );
}

export default Auth;
