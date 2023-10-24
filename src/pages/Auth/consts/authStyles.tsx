export const authStyles = {
  wrapper: {
    width: '100%',
    position: 'relative',
    flex: '1 0 0',
    backgroundColor: '#1a1b22',
    overflow: 'hidden'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 56px)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  firstElement: {
    display: 'block',
    position: 'absolute',
    zIndex: '2',
    width: '697px',
    height: '623px',
    left: '-380px',
    top: '79.98px',
    background: 'url(../../../images/vector1.svg) no-repeat center / contain'
  },
  secondElement: {
    display: 'block',
    position: 'absolute',
    zIndex: '2',
    width: '950px',
    height: '950px',
    right: '-211px',
    top: '-280px',
    background: 'url(../../../images/vector2.svg) no-repeat center / contain'
  },
  thirdElement: {
    display: 'block',
    position: 'absolute',
    zIndex: '2',
    width: '807px',
    height: '873px',
    right: '-200px',
    bottom: '-207px',
    background: 'url(../../../images/vector3.svg) no-repeat center / contain'
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    '&:hover': {
      cursor: 'pointer',
      color: '#1D6BF3'
    }
  },
  footer: {
    padding: '0 32px 32px 32px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  formLink: {
    textDecoration: 'none',
    color: '#1D6BF3',
    alignSelf: 'flex-start',
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '16px',
    '&:hover': {
      cursor: 'pointer',
      color: '#5A9BFF'
    }
  },
  formCaption: {
    fonts: {
      alignSelf: 'center',
      marginTop: '16px'
    },
    link: {
      textDecoration: 'none',
      color: '#fff',
      '&:hover': {
        cursor: 'pointer',
        color: '#5A9BFF'
      }
    }
  }
};
