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
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();

  function stringAvatar(name: string) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
  }

  return (
    <Box>
      <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
        <Box>
          <Avatar sx={navbarStyles.avatar} {...stringAvatar('TipTop Systems')} />
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
        </Box>
        <List>
          <ListItemButton onClick={() => navigate('/sign-in')}>
            <ListItemIcon sx={navbarStyles.icons}>{<LogoutIcon />}</ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary="Выйти" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};
export default Navbar;
