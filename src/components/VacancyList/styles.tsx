export const vacancyListStyle = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
   
  },
  subtitle: {
    fontFamily: 'YS Text, Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 500,
    color: '#1A1B22',
    lineHeight: '32px',
    marginBottom: '12px',
  },
  link: {
    color: '#1D6BF3',
    fontFamily: 'YS Text, Arial, sans-serif',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',

  },
  card: {
    fontFamily: 'YS Text, Arial, sans-serif',
    maxWidth: '334px',
    padding: '16px',
    flexShrink: '0',
    cursor: 'pointer',
    color: '#1A1B22',
    bordeRadius: '12px',
    border: '1px solid #DDE0E4',
    background: '#FFF',
    transition: '0.3s',
    boxShadow: '2px 2px 7px 0px rgba(0, 0, 0, 0.10)',

    '&:hover': {
      border: '1px solid #1D6BF3',
    },
  },
};
