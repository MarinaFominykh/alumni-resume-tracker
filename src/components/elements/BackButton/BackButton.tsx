import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';

function BackButton() {
  const navigate = useNavigate();
  return (
    <IconButton
      aria-label="back"
      sx={{ marginBottom: '24px', color: '#1D6BF3' }}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIcon />
    </IconButton>
  );
}

export default BackButton;
