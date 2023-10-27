export const navbarStyles = {
  drawer: {
    width: 200,
    flexShrink: 0,
   

    '& .MuiDrawer-paper': {
      width: 200,
      boxSizing: 'border-box',
      backgroundColor: '#1A1B22;',
      color: '#B5B5B7',
      border: 'none',
      padding: '32px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    '& .Mui-selected': {
      color: 'white'
    }
  },
  avatar: {
    backgroundColor: '#DDE0E4',
    width: 48,
    height: 48,
    marginLeft: '20px',
    marginBottom: '13px',
    color: '#B5B5B7',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '40px',
     
  },
  icons: {
    color: '#B5B5B7',
    minWidth: '24px',
    height: '24px'
  },
  text: {
    '& span': {
      marginLeft: '12px',
      fontWeight: '400',
      fontSize: '18px',
      color: '#B5B5B7'
    }
  }
};
