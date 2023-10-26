import { Box, InputAdornment, TextField, Typography, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
          marginBottom: '24px',
          alignItems: 'center'
        }}
      >
        <Typography variant="h1">{title}</Typography>
        <TextField
          id="input-with-icon-textfield"
          placeholder="Поиск"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          variant="outlined"
          size="small"
        />
      </Box>
      <Divider variant="middle" sx={{ width: '100%', marginLeft: '-15px' }} />
    </>
  );
}

export default Header;
