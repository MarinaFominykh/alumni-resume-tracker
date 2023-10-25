import { Typography } from '@mui/material';

function GradeElement({ experience }: any) {
  return (
    <div>
      {(experience === 'Без опыта' || experience <= 1) && (
        <Typography variant="body2">Junior</Typography>
      )}
      {experience >= 2 && experience <= 3 && <Typography variant="body2">Middle</Typography>}
      {experience >= 3 && <Typography variant="body2">Senior</Typography>}
    </div>
  );
}

export default GradeElement;
