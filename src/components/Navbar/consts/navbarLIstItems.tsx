import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

export const mainNavbarItems = [
  {
    id: 0,
    icon: <SearchIcon />,
    label: 'Поиск',
    route: 'search'
  },
  {
    id: 1,
    icon: <FavoriteBorderIcon />,
    label: 'Избранное',
    route: 'favourites'
  },
  {
    id: 2,
    icon: <WorkOutlineOutlinedIcon />,
    label: 'Мои вакансии',
    route: 'vacancies'
  }
];
