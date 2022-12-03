import { Box } from '@mui/material';
import React from 'react';
import RingLoader from 'react-spinners/ClipLoader';

export default function Loading() {
  return (
    <Box
      sx={{
        mt:'100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RingLoader color='#f0c000' loading size={200} />
    </Box>
  );
}
