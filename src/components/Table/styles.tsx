export const tableStyles = {
  table: {
    // maxWidth: '1164px',
    width: '1',
    // border: 0,
    boxShadow: 0,
  },
  toolbarfilter: {
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    width: 1,
    height: '60px',
    background: 'black',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  filter: {
    padding: '18px',
    color: '#fff',
    cursor: 'pointer',
    fontFamily: 'YS Text, Arial, sans-serif',
      fontSize: '16px',
      fontWeight: 400,
    
      lineHeight: '20px'
  },
  textfilter: {
    color: '#fff',
  },
button: {
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
},
  row: {
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      background: '#F1F6FF',
    },
  },
  likeBox: {
    width: '36px',
    height: '36px',
    border: '1px #fff solid',
    borderRadius: '6px',
    background: '#FFF',
    boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      border: '1px #5A9BFF solid',
    },
  },
  nameBox: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  text: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#1A1B22',
    lineHeight: '20px',
  },
  skillsChell: {
    minWidth: '212px',
    maxWidth: '250px',
  },
  activityChell: {
    maxWidth: '112px',
  },
  contacts: {
    border: '1px #fff solid',
    cursor: 'pointer',
    transition: '0.3s',
    padding: '8px',
    borderRadius: '6px',
    '&:hover': {
      border: '1px #5A9BFF solid',
    },
  },
};
