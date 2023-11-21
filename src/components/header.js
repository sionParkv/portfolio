import React from 'react';
import '../assets/Header.scss';
import { Box, Link } from '@mui/material';

const Header = () => {
  return (
    <header>
      <Box>
        <Link href="https://github.com/sionParkv">프로젝트</Link>
      </Box>
    </header>
  );
};

export default Header;