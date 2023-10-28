import { Box, Typography, Divider } from '@mui/material';

interface HeaderTypes {
  title: string;
}

function Header({ title }: HeaderTypes) {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '24px',
          paddingTop: '24px',
          alignItems: 'center'
        }}
      >
        <Typography variant="h1">{title}</Typography>
      </Box>
      <Divider variant="middle" sx={{ width: '100%', marginLeft: '-15px', marginBottom: '24px' }} />
    </>
  );
}

export default Header;
