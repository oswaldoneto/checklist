import React from 'react';
import { Grid } from '@mui/material';
import ManufacturerItem from './ManufacturerItem';

export default function ManufacturerList({ manufacturers, onSelect }) {
  return (
    <Grid container spacing={3} justifyContent="center">
      {manufacturers.map((manufacturer) => (
        <Grid item key={manufacturer.key} xs={12} sm={6} md={4}>
          <ManufacturerItem manufacturer={manufacturer} onClick={() => onSelect(manufacturer)} />
        </Grid>
      ))}
    </Grid>
  );
} 