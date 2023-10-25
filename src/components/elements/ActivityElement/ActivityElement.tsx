import lowActivity from '../../../../images/activity_low-activity.svg';
import middleActivity from '../../../../images/activity_middle-activity.svg';
import highActivity from '../../../../images/activity_high-activity.svg';

function ActivityElement({ activity }: any) {
  return (
    <div>
      {activity <= 4 && <img src={lowActivity} />}
      {activity >= 5 && activity <= 9 && <img src={middleActivity} />}
      {activity >= 10 && <img src={highActivity} />}
    </div>
  );
}

export default ActivityElement;
