import React from 'react';
import { Box, Typography, Link, Paper, AppBar, Toolbar, IconButton } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export default function AboutPage({ onBack }) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onBack} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 600, color: 'text.primary' }}>
            About
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '64px', mb: '72px' }}>
        <Paper elevation={3} sx={{ p: 4, maxWidth: 480, textAlign: 'center', bgcolor: 'background.paper', borderRadius: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
            About SimmerLabs Checklist
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'text.primary' }}>
            This is a free, simplified checklist for flight simulation enthusiasts. Access it from your desktop, tablet, or mobile. The checklist is not intended for real-world pilots, but for those who want a practical and immersive experience in virtual aviation.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            © SimmerLabs 2025. Version 1.0.5<br/>
            Not for real world pilots
          </Typography>
          <Link href="https://www.youtube.com/@simmerlabs" target="_blank" rel="noopener" underline="hover" sx={{ fontWeight: 500, fontSize: 16, mb: 2, display: 'block', color: 'primary.main' }}>
            Visit SimmerLabs on YouTube
          </Link>
          <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
            SimmerLabs is a channel about flight simulation for enthusiasts seeking a realistic and immersive, yet accessible, experience. The channel does not aim to replicate a real pilot's routine with technical precision, but to explore the virtual world of aviation with curiosity, planning, and respect for good simulation practices.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
} 