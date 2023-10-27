export const vacancyStyles = {
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
  link: {
    textDecoration: 'none',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
  },
  place: {
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '16px',
  },
  text: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
  },
};
