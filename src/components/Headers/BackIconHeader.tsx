import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import BackLink from '../elements/BackLink/BackLink';

interface HeaderTypes {
  title: string;
}

function BackIconHeader({ title }: HeaderTypes) {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '24px',
          paddingTop: '24px',
          alignItems: 'flex-start',
          paddingLeft: '76px',
          gap: '20px'
        }}
      >
        <BackLink />
        <Typography variant="h1" marginTop={'-4px'}>
          {title}
        </Typography>
        <Divider
          variant="middle"
          sx={{ width: '100%', marginLeft: '-15px', marginBottom: '4px' }}
        />
      </Box>
    </>
  );
}

export default BackIconHeader;
