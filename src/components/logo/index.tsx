import { forwardRef } from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import RouterLink from '../../routes/components/router-link';
// ----------------------------------------------------------------------

import logounaj from '../../assets/logo512.png';

interface LogoProps {
  disabledLink?: boolean;
  sx?: object;
}

const Logo = forwardRef(({ disabledLink = false, sx, ...other }: LogoProps, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 40,
        height: 40,
        ...sx,
      }}
      {...other}
    >
      <img src={logounaj} alt="logo" />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      <Box component="span" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5}}>
      {logo}
      <Typography variant="h3" sx={{ ml: 1, color: 'text.primary' }}>
        Proyecto Software
        </Typography>
        </Box>
    </Link>
  );
});

export default Logo;
