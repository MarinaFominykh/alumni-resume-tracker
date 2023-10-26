import lowActivity from '../../../../images/activity_low-activity.svg';
import middleActivity from '../../../../images/activity_middle-activity.svg';
import highActivity from '../../../../images/activity_high-activity.svg';
import { Box } from '@mui/material';

function ActivityElement({ activity }: any) {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      {activity <= 4 && <img src={lowActivity} />}
      {activity >= 5 && activity <= 9 && <img src={middleActivity} />}
      {activity >= 10 && <img src={highActivity} />}
    </Box>
  );
}

export default ActivityElement;
