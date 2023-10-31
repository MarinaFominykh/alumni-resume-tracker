import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Button } from '@mui/material';
import { MouseEventHandler } from 'react';

interface LikeProps {
  isLiked?: boolean;
  handleLikeClick?: MouseEventHandler;
}

function LikeButton({ isLiked, handleLikeClick }: LikeProps) {
  return (
    <Button
      onClick={handleLikeClick}
      size="small"
      sx={{
        border: '1px #fff solid',
        borderRadius: '6px',
        background: '#FFF',
        boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
          border: '1px #5A9BFF solid'
        }
      }}
    >
      {isLiked ? (
        <FavoriteIcon sx={{ color: '#1D6BF3' }} />
      ) : (
        <FavoriteBorderOutlinedIcon sx={{ color: '#1D6BF3' }} />
      )}
    </Button>
  );
}

export default LikeButton;
