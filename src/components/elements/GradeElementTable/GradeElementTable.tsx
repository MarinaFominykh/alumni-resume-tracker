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
          <Typography sx={gradeElementTableStyles.text}>Junior</Typography>
        </Box>
      ) : experience >= 2 && experience <= 3 ? (
        <Box sx={gradeElementTableStyles.middle}>
          <Typography sx={gradeElementTableStyles.text}>
            Middle
          </Typography>
        </Box>
      ) : (
        <Box sx={gradeElementTableStyles.senior}>
          <Typography sx={gradeElementTableStyles.text}>
            Senior
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default GradeElementTable;
