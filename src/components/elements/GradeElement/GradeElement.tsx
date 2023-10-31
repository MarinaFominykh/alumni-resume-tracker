import { FC } from 'react';
import { Typography } from '@mui/material';

interface GradeElementProps {
  experience: number,
}
const GradeElement:FC<GradeElementProps> =({ experience }) => {
  return (
    <div>
      {(experience < 2) 
      ? 
        <Typography variant="body2">Junior</Typography>
      : (experience >= 2 && experience <= 3 )
      ? <Typography variant="body2">Middle</Typography>
      :  <Typography variant="body2">Senior</Typography>     
      }
    
    </div>
  );
}

export default GradeElement;
