import React from 'react';
import { Paper, Typography } from '@mui/material';

export default function ManufacturerItem({ manufacturer, onClick }) {
  const count = manufacturer.types.length;
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        textAlign: 'center',
        cursor: 'pointer',
        transition: '0.2s',
        '&:hover': { boxShadow: 6 }
      }}
      onClick={onClick}
    >
      <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>{manufacturer.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {count} aircraft {count === 1 ? 'type' : 'types'}
      </Typography>
    </Paper>
  );
} 