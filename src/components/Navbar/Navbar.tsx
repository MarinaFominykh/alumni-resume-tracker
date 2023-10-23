import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router';
import { mainNavbarItems } from './consts/navbarLIstItems';
import { navbarStyles } from './styles';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      {' '}
      <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
        <Toolbar />
        <List>
          {mainNavbarItems.map(item => (
            <ListItem key={item.id} disablePadding onClick={() => navigate(item.route)}>
              <ListItemButton>
                <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
                <ListItemText sx={navbarStyles.text} primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
export default Navbar;
