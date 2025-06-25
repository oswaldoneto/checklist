import React from 'react';
import { Grid } from '@mui/material';
import AircraftItem from './AircraftItem';

export default function AircraftList({ aircrafts, onSelect }) {
  return (
    <Grid container spacing={3} justifyContent="center">
      {aircrafts.map(({ typeKey, aircraft }) => (
        <Grid item key={typeKey} xs={12} sm={6} md={4}>
          <AircraftItem aircraft={aircraft} typeKey={typeKey} onClick={() => onSelect(typeKey)} />
        </Grid>
      ))}
    </Grid>
  );
} 