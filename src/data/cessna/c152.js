const checklist = {
  FLIGHT_PHASES: {
    PREFLIGHT: {
      id: 'phase_preflight',
      items: {
        POH: { id: 'preflight_poh', title: 'POH / WEIGHT & BALANCE', value: 'ON BOARD / REVIEWED' },
        CONTROL_LOCK: { id: 'preflight_control_lock', title: 'CONTROL LOCK', value: 'REMOVE' },
        PARKING_BRAKE: { id: 'preflight_parking_brake', title: 'PARKING BRAKE', value: 'SET' },
        FUEL_SHUTOFF: { id: 'preflight_fuel_shutoff', title: 'FUEL SHUTOFF VALVE', value: 'ON' },
        CIRCUIT_BREAKERS: { id: 'preflight_circuit_breakers', title: 'CIRCUIT BREAKERS', value: 'CHECK IN' },
        MASTER_SWITCH: { id: 'preflight_master_switch', title: 'MASTER SWITCH', value: 'ON / CHECK LIGHTS / OFF' },
        FUEL_QTY: { id: 'preflight_fuel_qty', title: 'FUEL QUANTITY', value: 'CHECK, SAMPLE SUMPS' },
        OIL_LEVEL: { id: 'preflight_oil_level', title: 'OIL LEVEL', value: 'CHECK' },
        PITOT_COVER: { id: 'preflight_pitot_cover', title: 'PITOT COVER', value: 'REMOVE' },
        DOCUMENTS: { id: 'preflight_documents', title: 'AIRWORTHINESS / REG / MEDICAL', value: 'ON BOARD' }
      }
    },
    BEFORE_START: {
      id: 'phase_before_start',
      items: {
        SEATS_BELTS: { id: 'before_start_seats_belts', title: 'SEATS / BELTS / HARNESSES', value: 'ADJUST & SECURE' },
        AVIONICS: { id: 'before_start_avionics', title: 'AVIONICS SWITCH', value: 'OFF' },
        MIXTURE: { id: 'before_start_mixture', title: 'MIXTURE', value: 'RICH' },
        THROTTLE: { id: 'before_start_throttle', title: 'THROTTLE', value: 'OPEN 1/4 INCH' },
        CARB_HEAT: { id: 'before_start_carb_heat', title: 'CARB HEAT', value: 'COLD' },
        BEACON: { id: 'before_start_beacon', title: 'BEACON', value: 'ON' },
        BRAKES: { id: 'before_start_brakes', title: 'BRAKES', value: 'TEST / SET' },
        PRIME: { id: 'before_start_prime', title: 'PRIMER', value: 'AS REQUIRED, IN & LOCKED' }
      }
    },
    STARTING_ENGINE: {
      id: 'phase_starting_engine',
      items: {
        MASTER: { id: 'starting_engine_master', title: 'MASTER SWITCH', value: 'ON' },
        AREA_CLEAR: { id: 'starting_engine_area_clear', title: 'PROPELLER AREA', value: 'CLEAR' },
        IGNITION: { id: 'starting_engine_ignition', title: 'MIXTURE / THROTTLE / IGNITION', value: 'RICH / 1/4 INCH / START' },
        OIL_PRESSURE: { id: 'starting_engine_oil_pressure', title: 'OIL PRESSURE', value: 'CHECK (WITHIN 30 SEC)' },
        AVIONICS: { id: 'starting_engine_avionics', title: 'AVIONICS SWITCH', value: 'ON AFTER START' }
      }
    },
    TAXI: {
      id: 'phase_taxi',
      items: {
        BRAKE_CHECK: { id: 'taxi_brake_check', title: 'BRAKES', value: 'RELEASE / CHECK' },
        INSTRUMENTS: { id: 'taxi_instruments', title: 'FLIGHT INSTRUMENTS', value: 'CHECK / SET' },
        GYRO_COMPASS: { id: 'taxi_gyro_compass', title: 'HEADING INDICATOR / COMPASS', value: 'CHECK AGREEMENT' }
      }
    },
    RUNUP: {
      id: 'phase_runup',
      items: {
        PARKING_BRAKE: { id: 'runup_parking_brake', title: 'PARKING BRAKE', value: 'SET' },
        MIXTURE: { id: 'runup_mixture', title: 'MIXTURE', value: 'RICH' },
        THROTTLE: { id: 'runup_throttle', title: 'THROTTLE', value: '1700 RPM' },
        MAG_CHECK: { id: 'runup_mag_check', title: 'MAGNETOS', value: 'CHECK (MAX DROP 125 / DIFF 50)' },
        CARB_HEAT: { id: 'runup_carb_heat', title: 'CARB HEAT', value: 'CHECK THEN COLD' },
        ENGINE_INST: { id: 'runup_engine_inst', title: 'ENGINE INSTRUMENTS / AMMETER / SUCTION', value: 'CHECK' },
        THROTTLE_IDLE: { id: 'runup_throttle_idle', title: 'THROTTLE', value: 'IDLE CHECK, THEN 1000 RPM' },
        FLIGHT_CONTROLS: { id: 'runup_flight_controls', title: 'FLIGHT CONTROLS', value: 'FREE & CORRECT' },
        TRIM: { id: 'runup_trim', title: 'ELEVATOR TRIM', value: 'SET FOR TAKEOFF' },
        FUEL_SHUTOFF: { id: 'runup_fuel_shutoff', title: 'FUEL SHUTOFF VALVE', value: 'ON' },
        DOORS_WINDOWS: { id: 'runup_doors_windows', title: 'DOORS / WINDOWS', value: 'SECURE' }
      }
    },
    BEFORE_TAKEOFF: {
      id: 'phase_before_takeoff',
      items: {
        FLAPS: { id: 'before_takeoff_flaps', title: 'FLAPS', value: '0°-10° AS REQUIRED' },
        TRANSPONDER: { id: 'before_takeoff_transponder', title: 'TRANSPONDER', value: 'ALT' },
        LIGHTS: { id: 'before_takeoff_lights', title: 'LIGHTS', value: 'LANDING / STROBE AS REQUIRED' },
        DOORS_WINDOWS: { id: 'before_takeoff_doors_windows', title: 'DOORS / WINDOWS', value: 'CLOSED & LATCHED' },
        FLIGHT_INSTRUMENTS: { id: 'before_takeoff_flight_instruments', title: 'FLIGHT INSTRUMENTS', value: 'SET FOR DEPARTURE' },
        TAKEOFF_BRIEF: { id: 'before_takeoff_brief', title: 'TAKEOFF BRIEFING', value: 'COMPLETE' }
      }
    },
    TAKEOFF: {
      id: 'phase_takeoff',
      items: {
        POWER: { id: 'takeoff_power', title: 'THROTTLE', value: 'FULL OPEN' },
        ENGINE_INST: { id: 'takeoff_engine_inst', title: 'ENGINE INSTRUMENTS', value: 'CHECK GREEN' },
        ROTATE: { id: 'takeoff_rotate', title: 'ROTATE', value: '55 KIAS' },
        CLIMB_OUT: { id: 'takeoff_climb_out', title: 'INITIAL CLIMB', value: '67 KIAS' }
      }
    },
    CLIMB: {
      id: 'phase_climb',
      items: {
        POWER: { id: 'climb_power', title: 'POWER', value: 'FULL' },
        MIXTURE: { id: 'climb_mixture', title: 'MIXTURE', value: 'RICH (LEAN ABOVE 3000 FT AS REQ)' },
        AIRSPEED: { id: 'climb_airspeed', title: 'AIRSPEED', value: '70-80 KIAS' },
        FLAPS: { id: 'climb_flaps', title: 'FLAPS', value: 'UP' }
      }
    },
    CRUISE: {
      id: 'phase_cruise',
      items: {
        POWER: { id: 'cruise_power', title: 'POWER', value: 'SET (2100-2400 RPM)' },
        MIXTURE: { id: 'cruise_mixture', title: 'MIXTURE', value: 'LEAN FOR SMOOTH OPS' },
        ENGINE_INST: { id: 'cruise_engine_inst', title: 'ENGINE INSTRUMENTS', value: 'CHECK' },
        LIGHTS: { id: 'cruise_lights', title: 'LIGHTS', value: 'AS REQUIRED' }
      }
    },
    DESCENT: {
      id: 'phase_descent',
      items: {
        POWER: { id: 'descent_power', title: 'POWER', value: 'AS REQUIRED' },
        CARB_HEAT: { id: 'descent_carb_heat', title: 'CARB HEAT', value: 'ON BEFORE POWER REDUCTION' },
        MIXTURE: { id: 'descent_mixture', title: 'MIXTURE', value: 'ENRICH AS REQUIRED' },
        ALTIMETER: { id: 'descent_altimeter', title: 'ALTIMETER', value: 'SET' },
        LIGHTS: { id: 'descent_lights', title: 'LIGHTS', value: 'ON AS REQUIRED' }
      }
    },
    BEFORE_LANDING: {
      id: 'phase_before_landing',
      items: {
        SEATBELTS: { id: 'before_landing_seatbelts', title: 'SEAT BELTS / HARNESSES', value: 'SECURED' },
        FUEL_SHUTOFF: { id: 'before_landing_fuel_shutoff', title: 'FUEL SHUTOFF VALVE', value: 'ON' },
        MIXTURE: { id: 'before_landing_mixture', title: 'MIXTURE', value: 'RICH' },
        CARB_HEAT: { id: 'before_landing_carb_heat', title: 'CARB HEAT', value: 'ON' },
        LANDING_LIGHT: { id: 'before_landing_landing_light', title: 'LANDING LIGHT', value: 'ON' },
        FLAPS: { id: 'before_landing_flaps', title: 'FLAPS', value: 'AS REQUIRED (MAX 85 KIAS)' },
        APPROACH_SPEED: { id: 'before_landing_approach_speed', title: 'APPROACH SPEED', value: '55-65 KIAS' }
      }
    },
    AFTER_LANDING: {
      id: 'phase_after_landing',
      items: {
        CARB_HEAT: { id: 'after_landing_carb_heat', title: 'CARB HEAT', value: 'COLD' },
        FLAPS: { id: 'after_landing_flaps', title: 'FLAPS', value: 'UP' },
        MIXTURE: { id: 'after_landing_mixture', title: 'MIXTURE', value: 'LEAN FOR TAXI' },
        TRANSPONDER: { id: 'after_landing_transponder', title: 'TRANSPONDER', value: 'STANDBY' },
        LIGHTS: { id: 'after_landing_lights', title: 'LIGHTS', value: 'AS REQUIRED' },
        TRIM: { id: 'after_landing_trim', title: 'TRIM', value: 'RESET NEUTRAL' }
      }
    },
    SHUTDOWN: {
      id: 'phase_shutdown',
      items: {
        PARKING_BRAKE: { id: 'shutdown_parking_brake', title: 'PARKING BRAKE', value: 'SET' },
        AVIONICS: { id: 'shutdown_avionics', title: 'AVIONICS SWITCH', value: 'OFF' },
        MIXTURE: { id: 'shutdown_mixture', title: 'MIXTURE', value: 'IDLE CUT-OFF' },
        IGNITION: { id: 'shutdown_ignition', title: 'IGNITION SWITCH', value: 'OFF / KEY OUT' },
        MASTER: { id: 'shutdown_master', title: 'MASTER SWITCH', value: 'OFF' },
        CONTROL_LOCK: { id: 'shutdown_control_lock', title: 'CONTROL LOCK', value: 'INSTALL' }
      }
    },
    SECURING: {
      id: 'phase_securing',
      items: {
        TIEDOWNS: { id: 'securing_tiedowns', title: 'TIE-DOWNS / CHOCKS', value: 'INSTALL' },
        COVERS: { id: 'securing_covers', title: 'PITOT / CONTROL / ENGINE COVERS', value: 'AS REQUIRED' },
        DOCUMENTS: { id: 'securing_documents', title: 'AIRCRAFT DOCUMENTS', value: 'SECURE' }
      }
    }
  }
};

export default checklist;
