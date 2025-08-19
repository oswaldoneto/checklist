const AIRCRAFTS = {
  A320NEO: {
    manufacturer: 'AIRBUS',
    name: 'Airbus 320 Neo',
    checklistImport: null,
    available: false
  },
  AS350: {
    manufacturer: 'AIRBUS',
    name: 'AS 350 B3e',
    checklistImport: () => import('./airbus/as350.js'),
    available: true
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
  C25C: {
    manufacturer: 'CESSNA',
    name: 'Cessna Citation CJ4',
    checklistImport: () => import('./cessna/c25c.js'),
    available: true
  },
  C700: {
    manufacturer: 'CESSNA',
    name: 'Cessna Citation Longitude',
    checklistImport: () => import('./cessna/c700.js'),
    available: true
  },
  C208: {
    manufacturer: 'CESSNA',
    name: 'Cessna 208 Caravan',
    checklistImport: () => import('./cessna/c208.js'),
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
    checklistImport: () => import('./daher/tbm930.js'),
    available: true
  },
  E110: {
    manufacturer: 'EMBRAER',
    name: 'EMB 110 Bandeirante',
    checklistImport: () => import('./embraer/e110.js'),
    available: true
  },
  E190: {
    manufacturer: 'EMBRAER',
    name: 'Ejet 190',
    checklistImport: null,
    available: false
  },
  P28B: {
    manufacturer: 'PIPER',
    name: 'PA-28-236 Dakota',
    checklistImport: () => import('./piper/p28b.js'),
    available: true
  }
};

export default AIRCRAFTS; 