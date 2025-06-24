import React, { useState, useRef } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Toolbar,
  Typography,
  Grid,
  Paper,
  IconButton
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import theme from './theme';
import ChecklistPhase from './components/ChecklistPhase';
import MANUFACTURERS from './data/manufacturers.js';
import AIRCRAFTS from './data/aircrafts.js';

function App() {
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [selectedAircraft, setSelectedAircraft] = useState(null);
  const [checklist, setChecklist] = useState(null);
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [resetKey, setResetKey] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const contentRef = useRef(null);

  const handleAircraftSelect = async (aircraftKey) => {
    const aircraft = AIRCRAFTS[aircraftKey];
    if (!aircraft.available) return;
    const module = await aircraft.checklistImport();
    setChecklist(module.default);
    setSelectedAircraft({ ...aircraft, typeDesignator: aircraftKey });
  };

  const handlePhaseExpand = (phaseId) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
    if (phaseId !== expandedPhase) {
      setTimeout(() => {
        const phaseElement = document.getElementById(`phase-${phaseId}`);
        if (phaseElement) {
          const headerHeight = 64;
          const elementPosition = phaseElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  const handleReset = () => {
    setOpenDialog(true);
  };

  const confirmReset = () => {
    setResetKey(prev => prev + 1);
    setExpandedPhase(null);
    setOpenDialog(false);
  };

  const handleCheck = () => {
    if (!checklist) return;
    const phases = Object.values(checklist.FLIGHT_PHASES);
    for (const phase of phases) {
      const items = Object.values(phase.items);
      for (const item of items) {
        const itemElement = document.querySelector(`[data-item-id="${item.id}"]`);
        const checkbox = itemElement?.querySelector('input[type="checkbox"]');
        if (checkbox && !checkbox.checked) {
          setExpandedPhase(phase.id);
          setTimeout(() => {
            const element = document.querySelector(`[data-item-id="${item.id}"]`);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              element.classList.add('highlight-animation');
              setTimeout(() => {
                element.classList.remove('highlight-animation');
              }, 2000);
              const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
              });
              element.dispatchEvent(clickEvent);
            }
          }, 300);
          return;
        }
      }
    }
  };

  // Tela de seleção de fabricante
  if (!selectedManufacturer) {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
          <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
            <Toolbar>
              <Typography variant="h6" component="h1" sx={{ width: '100%', textAlign: 'center', fontWeight: 600, color: 'text.primary' }}>
                Selecione o Fabricante
              </Typography>
            </Toolbar>
          </AppBar>
          <Box component="main" sx={{ flexGrow: 1, mt: '64px', mb: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid container spacing={3} justifyContent="center">
              {MANUFACTURERS.sort((a, b) => a.name.localeCompare(b.name)).map((manufacturer) => (
                <Grid item key={manufacturer.key} xs={12} sm={6} md={4}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: '0.2s',
                      '&:hover': { boxShadow: 6 }
                    }}
                    onClick={() => setSelectedManufacturer(manufacturer)}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>{manufacturer.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {manufacturer.types.length} tipo(s) de aeronave
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

  // Tela de seleção de tipo de aeronave
  if (!selectedAircraft) {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
          <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setSelectedManufacturer(null)}
                sx={{ mr: 2 }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" component="h1" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 600, color: 'text.primary' }}>
                {selectedManufacturer.name}
              </Typography>
            </Toolbar>
          </AppBar>
          <Box component="main" sx={{ flexGrow: 1, mt: '64px', mb: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid container spacing={3} justifyContent="center">
              {selectedManufacturer.types.map((typeKey) => {
                const aircraft = AIRCRAFTS[typeKey];
                return (
                  <Grid item key={typeKey} xs={12} sm={6} md={4}>
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
                      onClick={aircraft.available ? () => handleAircraftSelect(typeKey) : undefined}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>{typeKey}</Typography>
                      <Typography variant="body1" color="text.secondary">{aircraft.name}</Typography>
                      {!aircraft.available && (
                        <Box sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'warning.main', color: 'white', px: 1.5, py: 0.5, borderRadius: 1, fontSize: 12 }}>
                          Em breve
                        </Box>
                      )}
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

  // Tela do checklist
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                setSelectedAircraft(null);
                setChecklist(null);
              }}
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 600, color: 'text.primary' }}>
              {selectedAircraft.typeDesignator} Checklist
            </Typography>
          </Toolbar>
        </AppBar>
        <Box ref={contentRef} component="main" sx={{ flexGrow: 1, mt: '64px', mb: '72px', overflowY: 'auto', bgcolor: 'background.default' }}>
          <Box key={resetKey}>
            {Object.entries(checklist.FLIGHT_PHASES).map(([phase, phaseData]) => (
              <ChecklistPhase
                key={phaseData.id}
                id={`phase-${phaseData.id}`}
                title={phase.replace(/_/g, ' ')}
                items={phaseData.items}
                isExpanded={expandedPhase === phaseData.id}
                onToggle={() => handlePhaseExpand(phaseData.id)}
              />
            ))}
          </Box>
        </Box>
        <Box component="footer" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider', p: 2, zIndex: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100%', mx: 'auto' }}>
            <Button variant="contained" color="inherit" onClick={handleReset} sx={{ bgcolor: 'rgba(0, 0, 0, 0.2)', '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.3)' } }}>
              Reset
            </Button>
            <Button variant="contained" color="success" onClick={handleCheck}>
              Check
            </Button>
          </Box>
        </Box>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Confirm Reset</DialogTitle>
          <DialogContent>
            <DialogContentText>Tem certeza que deseja reiniciar o checklist?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
            <Button onClick={confirmReset} color="error">Resetar</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}

export default App; 