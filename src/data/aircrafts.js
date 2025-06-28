const AIRCRAFTS = {
  A320NEO: {
    manufacturer: 'AIRBUS',
    name: 'Airbus 320 Neo',
    checklistImport: null,
    available: false
  },
  B737MAX: {
    manufacturer: 'BOEING',
    name: 'Boeing 737 Max',
    checklistImport: () => import('./boeing/b38m.js'),
    available: true
  },
  B738: {
    manufacturer: 'BOEING',
    name: 'Boeing 737-800',
    checklistImport: null,
    available: false
  },
  B763: {
    manufacturer: 'BOEING',
    name: 'Boeing 767-300',
    checklistImport: null,
    available: false
  },
  B772: {
    manufacturer: 'BOEING',
    name: 'Boeing 777-200ER',
    checklistImport: null,
    available: false
  },
  C700: {
    manufacturer: 'CESSNA',
    name: 'Cessna Citation Longitude',
    checklistImport: () => import('./cessna/c700.js'),
    available: true
  },
  C172: {
    manufacturer: 'CESSNA',
    name: 'Cessna 172 G1000',
    checklistImport: null,
    available: false
  },
  SR22: {
    manufacturer: 'CIRRUS',
    name: 'Cirrus SR22T',
    checklistImport: null,
    available: false
  },
  TBM9: {
    manufacturer: 'DAHER',
    name: 'TBM 930',
    checklistImport: null,
    available: false
  },
  E110: {
    manufacturer: 'EMBRAER',
    name: 'EMB 110 Bandeirante',
    checklistImport: null,
    available: false
  },
  E190: {
    manufacturer: 'EMBRAER',
    name: 'Ejet 190',
    checklistImport: null,
    available: false
  },
  PA28: {
    manufacturer: 'PIPER',
    name: 'PA-28-236 Dakota',
    checklistImport: () => import('./piper/p28b.js'),
    available: true
  }
};

export default AIRCRAFTS; 