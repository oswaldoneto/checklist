import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Paper } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export default function PixDonatePage({ onBack }) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onBack} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 600, color: 'text.primary' }}>
            Donate via PIX
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '64px', mb: '72px' }}>
        <Paper elevation={3} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <iframe
            src="https://widget.livepix.gg/embed/322155a1-e2e9-4670-9e12-daa3429dd8b7"
            title="PIX Donation QR Code"
            width="320"
            height="480"
            style={{ border: 0, borderRadius: 8 }}
            allowFullScreen
          />
        </Paper>
      </Box>
    </Box>
  );
} 