import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { VacanciesIcon } from '../../../consts/icons';

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
    icon: <VacanciesIcon />,
    label: 'Мои вакансии',
    route: 'vacancies'
  }
];
