const checklist = {
  FLIGHT_PHASES: {
    BEFORE_START: {
      id: 'phase_before_start',
      items: {
        PREFLIGHT_INSPECTION: { id: 'before_start_preflight_inspection', title: 'PRE-FLIGHT INSPECTION', value: 'COMPLETE' },
        PAX_CRM_BRIEF: { id: 'before_start_pax_crm_brief', title: 'PAX/CRM BRIEF', value: 'COMPLETE' },
        SEATS_BELTS: { id: 'before_start_seats_belts', title: 'SEATS & BELTS', value: 'SECURE' },
        SWITCHES_HANDLES: { id: 'before_start_switches_handles', title: 'SWITCHES/HANDLES', value: 'OFF/CLOSED' },
        COPILOT_DISC: { id: 'before_start_copilot_disc', title: 'CO-PILOT DISC SWITCH', value: 'AS DESIRED' },
        ELT: { id: 'before_start_elt', title: 'ELT', value: 'ARMED' },
        CIRCUIT_BREAKERS: { id: 'before_start_circuit_breakers', title: 'CIRCUIT BREAKERS', value: 'IN' },
        PARKING_BRAKE: { id: 'before_start_parking_brake', title: 'PARKING BRAKE', value: 'SET' },
        FUEL_SELECTOR: { id: 'before_start_fuel_selector', title: 'FUEL SELECTOR', value: 'FULLEST TANK' },
        CABIN_DOORS: { id: 'before_start_cabin_doors', title: 'CABIN DOORS', value: 'SECURE' },
        FIRE_ON_START_PROC: { id: 'before_start_fire_on_start_proc', title: 'FIRE ON START PROCEDURE', value: 'REVIEW' }
      }
    },
    ENGINE_FIRE_ON_GROUND: {
      id: 'phase_engine_fire_on_ground',
      items: {
        MIXTURE: { id: 'engine_fire_on_ground_mixture', title: 'MIXTURE', value: 'IDLE CUT-OFF' },
        THROTTLE: { id: 'engine_fire_on_ground_throttle', title: 'THROTTLE', value: 'FULL OPEN' },
        STARTER: { id: 'engine_fire_on_ground_starter', title: 'STARTER', value: 'CONTINUE CRANKING' },
        FUEL_PUMP: { id: 'engine_fire_on_ground_fuel_pump', title: 'FUEL PUMP', value: 'OFF' },
        FIRE_CONTINUES: { id: 'engine_fire_on_ground_fire_continues', title: 'IF FIRE CONTINUES', value: 'EXECUTE BELOW' },
        FUEL_SELECTOR: { id: 'engine_fire_on_ground_fuel_selector', title: 'FUEL SELECTOR', value: 'OFF' },
        PMAGS: { id: 'engine_fire_on_ground_pmags', title: 'PMAGS', value: 'OFF' },
        BATT_ALT: { id: 'engine_fire_on_ground_batt_alt', title: 'BATT & ALT SWITCHES', value: 'OFF' },
        AIRCRAFT: { id: 'engine_fire_on_ground_aircraft', title: 'AIRCRAFT', value: 'EVACUATE' },
        EXTINGUISHER: { id: 'engine_fire_on_ground_extinguisher', title: 'FIRE EXTINGUISHER', value: 'OPERATE' }
      }
    },
    STARTING_ENGINE: {
      id: 'phase_starting_engine',
      items: {
        BACKUP_BATTERY: { id: 'starting_engine_backup_battery', title: 'BACKUP BATTERY SWITCH', value: 'ON' },
        BATTERY_SWITCH: { id: 'starting_engine_battery_switch', title: 'BATTERY SWITCH', value: 'ON' },
        STROBE_LIGHTS: { id: 'starting_engine_strobe_lights', title: 'STROBE LIGHTS', value: 'ON' },
        NAV_LIGHTS: { id: 'starting_engine_nav_lights', title: '(NIGHT) NAV LIGHTS', value: 'ON' },
        INTERIOR_LIGHTING: { id: 'starting_engine_interior_lighting', title: '(NIGHT) INTERIOR LIGHTING', value: 'SET' },
        IGNITION: { id: 'starting_engine_ignition', title: 'IGNITION 1 & 2', value: 'ON' },
        CONTROLS: { id: 'starting_engine_controls', title: 'THROTTLE/MIXTURE/PROP', value: 'FULL FWD' },
        FUEL_PUMP: { id: 'starting_engine_fuel_pump', title: 'FUEL PUMP', value: 'ON/5 SEC/OFF' },
        MIXTURE: { id: 'starting_engine_mixture', title: 'MIXTURE', value: 'IDLE CUT-OFF' },
        THROTTLE_SET: { id: 'starting_engine_throttle_set', title: 'THROTTLE', value: '1/8" (COLD) - 1/4" (HOT) SET' },
        PROP_AREA: { id: 'starting_engine_prop_area', title: 'PROPELLER AREA', value: 'CLEAR' },
        STARTER: { id: 'starting_engine_starter', title: 'STARTER', value: 'ENGAGE' },
        THROTTLE_RPM: { id: 'starting_engine_throttle_rpm', title: 'THROTTLE', value: '1000 RPM' },
        STARTER_CAUTION: { id: 'starting_engine_starter_caution', title: 'STARTER CAUTION', value: 'OUT' },
        OIL_PRESSURE: { id: 'starting_engine_oil_pressure', title: 'OIL PRESSURE', value: 'GREEN' },
        ALTERNATORS: { id: 'starting_engine_alternators', title: 'PRI & STBY ALTERNATORS', value: 'ON' }
      }
    },
    BEFORE_TAXI: {
      id: 'phase_before_taxi',
      items: {
        HEAT_DEFROST: { id: 'before_taxi_heat_defrost', title: 'HEAT/DEFROST/VENTS', value: 'AS DESIRED' },
        AVIONICS: { id: 'before_taxi_avionics', title: 'AVIONICS', value: 'SET' },
        ATIS_CLEARANCE: { id: 'before_taxi_atis_clearance', title: 'ATIS/CLEARANCE', value: 'OBTAIN' },
        ALTIMETER: { id: 'before_taxi_altimeter', title: 'ALTIMETER', value: 'SET' },
        TRANSPONDER: { id: 'before_taxi_transponder', title: 'TRANSPONDER', value: 'SET/STANDBY' },
        FLIGHT_PLAN: { id: 'before_taxi_flight_plan', title: 'FLIGHT PLAN', value: 'ADJUST AS NEEDED' },
        AMMETER: { id: 'before_taxi_ammeter', title: 'AMMETER', value: 'CHECK' },
        TRIM: { id: 'before_taxi_trim', title: 'TRIM', value: 'CENTERED' },
        INTERIOR_LIGHTS: { id: 'before_taxi_interior_lights', title: '(NIGHT) INTERIOR LIGHTS', value: 'SET' },
        TAXI_LIGHT: { id: 'before_taxi_taxi_light', title: '(NIGHT) TAXI LIGHT', value: 'ON' },
        PARKING_BRAKE: { id: 'before_taxi_parking_brake', title: 'PARKING BRAKE', value: 'OFF' },
        GROUND_CONTROL: { id: 'before_taxi_ground_control', title: 'GROUND CONTROL', value: 'CONTACT' }
      }
    },
    DURING_TAXI: {
      id: 'phase_during_taxi',
      items: {
        BRAKES: { id: 'during_taxi_brakes', title: 'BRAKES', value: 'CHECK' },
        FLIGHT_INSTRUMENTS: { id: 'during_taxi_flight_instruments', title: 'FLIGHT INSTRUMENTS', value: 'CHECK' }
      }
    },
    POWER_CHECKS: {
      id: 'phase_power_checks',
      items: {
        RUNUP_AREA: { id: 'power_checks_runup_area', title: 'RUN-UP / BLAST AREA', value: 'CLEAR' },
        BRAKES: { id: 'power_checks_brakes', title: 'BRAKES', value: 'SET/HOLD' },
        FUEL_SELECTOR: { id: 'power_checks_fuel_selector', title: 'FUEL SELECTOR', value: 'FULLEST TANK' },
        OIL_PRESSURE: { id: 'power_checks_oil_pressure', title: 'OIL PRESSURE', value: 'GREEN' },
        OIL_TEMP: { id: 'power_checks_oil_temp', title: 'OIL TEMP', value: '> 75°' },
        DOORS: { id: 'power_checks_doors', title: 'DOORS', value: 'SECURE' },
        MIXTURE_PROP: { id: 'power_checks_mixture_prop', title: 'MIXTURE / PROP', value: 'FULL FORWARD' },
        THROTTLE: { id: 'power_checks_throttle', title: 'THROTTLE', value: '2000 RPM' },
        PROP_CYCLE: { id: 'power_checks_prop_cycle', title: 'PROP', value: 'CYCLE' },
        IGNITION: { id: 'power_checks_ignition', title: 'IGNITION 1 THEN 2', value: 'TEST' },
        ENGINE_INSTRUMENTS: { id: 'power_checks_engine_instruments', title: 'ENGINE INSTRUMENTS', value: 'GREEN' },
        PRIMARY_ALTERNATOR: { id: 'power_checks_primary_alternator', title: 'PRIMARY ALTERNATOR', value: 'CHECK' },
        STANDBY_ALTERNATOR: { id: 'power_checks_standby_alternator', title: 'STANDBY ALTERNATOR', value: 'CHECK' },
        THROTTLE_IDLE: { id: 'power_checks_throttle_idle', title: 'THROTTLE', value: '1000 RPM' }
      }
    },
    AIRCRAFT_OPERATING_SPEEDS: {
      id: 'phase_aircraft_operating_speeds',
      items: {
        VS_VSO: { id: 'aircraft_operating_speeds_vs_vso', title: 'VS / VSO', value: 'XX / XX KIAS' },
        VX_ROTATE: { id: 'aircraft_operating_speeds_vx_rotate', title: 'VX ROTATE', value: '65 KIAS' },
        VX_BEST_ANGLE: { id: 'aircraft_operating_speeds_vx_best_angle', title: 'VX BEST ANGLE / MIN DESC', value: 'XX KIAS' },
        VY_BEST_RATE: { id: 'aircraft_operating_speeds_vy_best_rate', title: 'VY BEST RATE OF CLIMB', value: 'XX KIAS' },
        CRUISE_CLIMB: { id: 'aircraft_operating_speeds_cruise_climb', title: 'CRUISE CLIMB', value: '120 KIAS' },
        VA_MANEUVERING: { id: 'aircraft_operating_speeds_va_maneuvering', title: 'VA MANEUVERING / VN TURB', value: '125 KIAS' },
        VFE_MAX_FLAPS: { id: 'aircraft_operating_speeds_vfe_max_flaps', title: 'VFE MAX FLAPS EXTENDED', value: 'XX KIAS' },
        VNE_MAX_SPEED: { id: 'aircraft_operating_speeds_vne_max_speed', title: 'VNE MAX SPEED', value: '200 KTAS' }
      }
    },
    BEFORE_TAKEOFF: {
      id: 'phase_before_takeoff',
      items: {
        FLIGHT_CONTROLS: { id: 'before_takeoff_flight_controls', title: 'FLIGHT CONTROL', value: 'FULL, FREE, CORRECT' },
        TRIM: { id: 'before_takeoff_trim', title: 'TRIM', value: 'SET FOR T/O' },
        FLAPS: { id: 'before_takeoff_flaps', title: 'FLAPS', value: 'SET' },
        FLIGHT_ENGINE_INST: { id: 'before_takeoff_flight_engine_inst', title: 'FLIGHT/ENGINE INST', value: 'CHECK' },
        CLEARANCE: { id: 'before_takeoff_clearance', title: 'CLEARANCE', value: 'REVIEW' },
        AVIONICS: { id: 'before_takeoff_avionics', title: 'AVIONICS', value: 'SET' },
        TAKEOFF_BRIEF: { id: 'before_takeoff_brief', title: 'TAKEOFF BRIEF', value: 'COMPLETE' }
      }
    },
    APPROACHING_RUNWAY: {
      id: 'phase_approaching_runway',
      items: {
        DOORS: { id: 'approaching_runway_doors', title: 'DOORS', value: 'SECURE' },
        TRANSPONDER: { id: 'approaching_runway_transponder', title: 'TRANSPONDER', value: 'SET' },
        PITOT_HEAT: { id: 'approaching_runway_pitot_heat', title: 'PITOT HEAT', value: 'AS REQUIRED' },
        LIGHTS: { id: 'approaching_runway_lights', title: 'LANDING LIGHT / WIG WAG', value: 'ON' },
        TIME: { id: 'approaching_runway_time', title: 'TIME', value: 'NOTED' }
      }
    },
    TAKEOFF: {
      id: 'phase_takeoff',
      items: {
        BRAKES: { id: 'takeoff_brakes', title: 'BRAKES', value: 'HOLD' },
        THROTTLE_SET: { id: 'takeoff_throttle_set', title: 'THROTTLE', value: '2000 RPM' },
        ENGINE_INSTRUMENTS: { id: 'takeoff_engine_instruments', title: 'ENGINE INSTRUMENTS', value: 'GREEN' },
        ANNUNCIATORS: { id: 'takeoff_annunciators', title: 'ANNUNCIATORS', value: 'CLEAR' },
        BRAKES_RELEASE: { id: 'takeoff_brakes_release', title: 'BRAKES', value: 'RELEASE' },
        THROTTLE: { id: 'takeoff_throttle', title: 'THROTTLE', value: 'FULL FORWARD' },
        SPEEDS: { id: 'takeoff_speeds', title: 'VR / VX / VY', value: 'XX / XX / XX KIAS' },
        FLAPS: { id: 'takeoff_flaps', title: 'FLAPS', value: 'UP AS REQUIRED' }
      }
    },
    CLIMBOUT: {
      id: 'phase_climbout',
      items: {
        PROPELLER: { id: 'climbout_propeller', title: 'PROPELLER', value: '2400 RPM' },
        THROTTLE: { id: 'climbout_throttle', title: 'THROTTLE', value: '24"' },
        AIRSPEED: { id: 'climbout_airspeed', title: 'AIRSPEED', value: '120 KIAS' },
        TRIM: { id: 'climbout_trim', title: 'TRIM', value: 'ADJUST' },
        MIXTURE: { id: 'climbout_mixture', title: 'MIXTURE', value: 'LEAN AS DESIRED' },
        LIGHTS: { id: 'climbout_lights', title: 'LIGHTS', value: 'SET AS DESIRED' }
      }
    },
    CRUISE: {
      id: 'phase_cruise',
      items: {
        THROTTLE_PROP: { id: 'cruise_throttle_prop', title: 'THROTTLE/PROP', value: 'SET AS DESIRED' },
        TRIM: { id: 'cruise_trim', title: 'TRIM', value: 'ADJUST' },
        PRESS_TEMP_FUEL: { id: 'cruise_press_temp_fuel', title: 'PRESS/TEMP/FUEL', value: 'MONITOR' },
        FUEL_SELECTOR: { id: 'cruise_fuel_selector', title: 'FUEL SELECTOR', value: 'AS REQUIRED' },
        ESPX: { id: 'cruise_espx', title: 'ESP-X', value: 'SET AS DESIRED' },
        OXYGEN: { id: 'cruise_oxygen', title: '(OPT) OXYGEN', value: 'SET / MONITOR' }
      }
    },
    DESCENT: {
      id: 'phase_descent',
      items: {
        THROTTLE_PROP: { id: 'descent_throttle_prop', title: 'THROTTLE/PROP', value: 'SET AS DESIRED' },
        MIXTURE: { id: 'descent_mixture', title: 'MIXTURE', value: 'ADJUST W/DESCENT' },
        CHT: { id: 'descent_cht', title: 'CHT', value: 'MONITOR (XXX?)' },
        FUEL_SELECTOR: { id: 'descent_fuel_selector', title: 'FUEL SELECTOR', value: 'AS REQUIRED' }
      }
    },
    BEFORE_LANDING: {
      id: 'phase_before_landing',
      items: {
        ATIS: { id: 'before_landing_atis', title: 'ATIS', value: 'OBTAIN' },
        SEATS_BELTS: { id: 'before_landing_seats_belts', title: 'SEATS & BELTS', value: 'SECURE' },
        FUEL_SELECTOR: { id: 'before_landing_fuel_selector', title: 'FUEL SELECTOR', value: 'FULLEST TANK' },
        TRIM: { id: 'before_landing_trim', title: 'TRIM', value: 'ADJUST' },
        MIXTURE: { id: 'before_landing_mixture', title: 'MIXTURE', value: 'FULL RICH' },
        THROTTLE_PROP: { id: 'before_landing_throttle_prop', title: 'THROTTLE/PROP', value: 'SET AS DESIRED' },
        FLAPS: { id: 'before_landing_flaps', title: 'FLAPS', value: 'AS REQUIRED' },
        PARKING_BRAKE: { id: 'before_landing_parking_brake', title: 'PARKING BRAKE', value: 'OFF' },
        LIGHTS: { id: 'before_landing_lights', title: 'LANDING LIGHT / WIG WAG', value: 'ON' }
      }
    },
    FINAL_APPROACH: {
      id: 'phase_final_approach',
      items: {
        MIXTURE: { id: 'final_approach_mixture', title: 'MIXTURE (RED)', value: 'FULL RICH' },
        PROP: { id: 'final_approach_prop', title: 'PROP (BLUE)', value: 'FULL FORWARD' },
        GEAR_BRAKES: { id: 'final_approach_gear_brakes', title: 'GEAR/BRAKES (GREEN)', value: 'TOES CLEAR' }
      }
    },
    GO_AROUND: {
      id: 'phase_go_around',
      items: {
        THROTTLE_PROP: { id: 'go_around_throttle_prop', title: 'THROTTLE/PROP', value: 'FULL FORWARD' },
        FLAPS: { id: 'go_around_flaps', title: 'FLAPS', value: 'RETRACT TO 10°' },
        CLIMB_ATTITUDE: { id: 'go_around_climb_attitude', title: 'CLIMB ATTITUDE', value: 'XX KIAS' },
        TOGA: { id: 'go_around_toga', title: 'TO/GA BUTTON', value: 'PRESS' },
        POS_RATE: { id: 'go_around_pos_rate', title: 'POS RATE / CLEAR OF OBSTACLES', value: 'CONFIRM' },
        FLAPS_UP: { id: 'go_around_flaps_up', title: 'FLAPS', value: 'UP' }
      }
    },
    AFTER_LANDING: {
      id: 'phase_after_landing',
      items: {
        PITOT_HEAT: { id: 'after_landing_pitot_heat', title: 'PITOT HEAT', value: 'OFF' },
        FLAPS: { id: 'after_landing_flaps', title: 'FLAPS', value: 'UP' },
        TRANSPONDER: { id: 'after_landing_transponder', title: 'TRANSPONDER', value: 'STANDBY' },
        EXTERNAL_LIGHTS: { id: 'after_landing_external_lights', title: 'EXTERNAL LIGHTS', value: 'SET' },
        TRIM: { id: 'after_landing_trim', title: 'TRIM', value: 'CENTERED' },
        GROUND_CONTROL: { id: 'after_landing_ground_control', title: 'GROUND CONTROL', value: 'CONTACT' }
      }
    },
    ENGINE_SHUTDOWN: {
      id: 'phase_engine_shutdown',
      items: {
        BRAKES: { id: 'engine_shutdown_brakes', title: 'BRAKES', value: 'SET/HOLD' },
        THROTTLE: { id: 'engine_shutdown_throttle', title: 'THROTTLE', value: '1000 RPM' },
        MIXTURE: { id: 'engine_shutdown_mixture', title: 'MIXTURE', value: 'SLOWLY TO IDLE CUT-OFF' }
      }
    },
    AFTER_PROP_STOPS: {
      id: 'phase_after_prop_stops',
      items: {
        IGNITION: { id: 'after_prop_stops_ignition', title: 'IGNITION 1 & 2', value: 'OFF' },
        SWITCHES_HANDLES: { id: 'after_prop_stops_switches_handles', title: 'SWITCHES/HANDLES', value: 'OFF/CLOSED' },
        RHEOSTATS: { id: 'after_prop_stops_rheostats', title: 'RHEOSTATS', value: 'OFF' },
        AIR_VENTS: { id: 'after_prop_stops_air_vents', title: 'SIDE AIR VENTS', value: 'CLOSED' },
        BATTERY_ALTERNATOR: { id: 'after_prop_stops_battery_alternator', title: 'BATTERY & ALTERNATOR SWITCHES', value: 'OFF' }
      }
    }
  }
};

export default checklist;
