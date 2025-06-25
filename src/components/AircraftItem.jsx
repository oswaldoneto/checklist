import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

export default function AircraftItem({ aircraft, typeKey, onClick }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        textAlign: 'center',
        cursor: aircraft.available ? 'pointer' : 'not-allowed',
        opacity: aircraft.available ? 1 : 0.5,
        transition: '0.2s',
        position: 'relative',
        '&:hover': aircraft.available ? { boxShadow: 6 } : {},
      }}
      onClick={aircraft.available ? onClick : undefined}
    >
      <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>{typeKey}</Typography>
      <Typography variant="body1" color="text.secondary">{aircraft.name}</Typography>
      {!aircraft.available && (
        <Box sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'warning.main', color: 'white', px: 1.5, py: 0.5, borderRadius: 1, fontSize: 12 }}>
          Em breve
        </Box>
      )}
    </Paper>
  );
} 