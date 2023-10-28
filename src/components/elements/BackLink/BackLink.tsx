import { Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';

function BackLink() {
  const navigate = useNavigate();

  return (
    <Link aria-label="back" onClick={() => navigate(-1)} sx={{ cursor: 'pointer' }}>
      <ArrowBackIcon />
    </Link>
  );
}

export default BackLink;
