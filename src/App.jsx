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
  Paper
} from '@mui/material';
import theme from './theme';
import ChecklistPhase from './components/ChecklistPhase';

// Lista de aeronaves disponíveis
const AIRCRAFTS = [
  {
    typeDesignator: 'C700',
    name: 'Cessna Citation Longitude',
    checklistImport: () => import('./data/c700.js'),
    image: null,
    available: true
  },
  {
    typeDesignator: 'B737MAX',
    name: 'Boeing 737 Max',
    checklistImport: null,
    image: null,
    available: false
  },
  {
    typeDesignator: 'A320NEO',
    name: 'Airbus 320 Neo',
    checklistImport: null,
    image: null,
    available: false
  },
  {
    typeDesignator: 'E190',
    name: 'Ejet 190',
    checklistImport: null,
    image: null,
    available: false
  },
  {
    typeDesignator: 'C172',
    name: 'Cessna 172 G1000',
    checklistImport: null,
    image: null,
    available: false
  },
  {
    typeDesignator: 'SR22',
    name: 'Cirrus SR22T',
    checklistImport: null,
    image: null,
    available: false
  },
  {
    typeDesignator: 'E110',
    name: 'EMB 110 Bandeirante',
    checklistImport: null,
    image: null,
    available: false
  },
  {
    typeDesignator: 'TBM9',
    name: 'TBM 930',
    checklistImport: null,
    image: null,
    available: false
  },
  {
    typeDesignator: 'B738',
    name: 'Boeing 737-800',
    checklistImport: null,
    image: null,
    available: false
  },
  {
    typeDesignator: 'B763',
    name: 'Boeing 767-300',
    checklistImport: null,
    image: null,
    available: false
  },
  {
    typeDesignator: 'B772',
    name: 'Boeing 777-200ER',
    checklistImport: null,
    image: null,
    available: false
  }
];

function App() {
  const [selectedAircraft, setSelectedAircraft] = useState(null);
  const [checklist, setChecklist] = useState(null);
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [resetKey, setResetKey] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const contentRef = useRef(null);

  // Carrega o checklist da aeronave selecionada
  const handleAircraftSelect = async (aircraft) => {
    const module = await aircraft.checklistImport();
    setChecklist(module.default);
    setSelectedAircraft(aircraft);
  };

  const handlePhaseExpand = (phaseId) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
    if (phaseId !== expandedPhase) {
      setTimeout(() => {
        const phaseElement = document.getElementById(`phase-${phaseId}`);
        if (phaseElement) {
          const headerHeight = 64; // Altura do AppBar
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

  // Tela de seleção de aeronave
  if (!selectedAircraft) {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
          <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
            <Toolbar>
              <Typography variant="h6" component="h1" sx={{ width: '100%', textAlign: 'center', fontWeight: 600, color: 'text.primary' }}>
                Selecione a Aeronave
              </Typography>
            </Toolbar>
          </AppBar>
          <Box component="main" sx={{ flexGrow: 1, mt: '64px', mb: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid container spacing={3} justifyContent="center">
              {AIRCRAFTS.map((aircraft) => (
                <Grid item key={aircraft.typeDesignator} xs={12} sm={6} md={4}>
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
                    onClick={aircraft.available ? () => handleAircraftSelect(aircraft) : undefined}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>{aircraft.typeDesignator}</Typography>
                    <Typography variant="body1" color="text.secondary">{aircraft.name}</Typography>
                    {!aircraft.available && (
                      <Box sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'warning.main', color: 'white', px: 1.5, py: 0.5, borderRadius: 1, fontSize: 12 }}>
                        Em breve
                      </Box>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

  // Tela do checklist (igual ao fluxo atual)
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
          <Toolbar>
            <Typography variant="h6" component="h1" sx={{ width: '100%', textAlign: 'center', fontWeight: 600, color: 'text.primary' }}>
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