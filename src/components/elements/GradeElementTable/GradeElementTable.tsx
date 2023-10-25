import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { gradeElementTableStyles } from './styles';
interface GradeElementTableProps {
  experience: number;
}
const GradeElementTable: FC<GradeElementTableProps> = ({ experience }) => {
  return (
    <div>
      {experience < 2 ? (
        <Box sx={gradeElementTableStyles.junior}>
          <Typography variant='body2'>
            Junior
          </Typography>
        </Box>
      ) : experience >= 2 && experience <= 3 ? (
        <Typography variant='body2' sx={gradeElementTableStyles.middle}>
          Middle
        </Typography>
      ) : (
        <Typography variant='body2' sx={gradeElementTableStyles.senior}>
          Senior
        </Typography>
      )}
    </div>
  );
};

export default GradeElementTable;
