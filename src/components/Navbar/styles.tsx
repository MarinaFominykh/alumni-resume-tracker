export const navbarStyles = {
  drawer: {
    width: 237,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 237,
      boxSizing: 'border-box',
      backgroundColor: '#D9D9D9;',
      color: '#000000',
      border: 'none'
    },
    '& .Mui-selected': {
      color: 'red'
    }
  },
  icons: {
    color: '#1A1B22'
  },
  text: {
    '& span': {
      marginLeft: '-10px',
      fontWeight: '500',
      fontSize: '20px'
    }
  }
};
