const checklist = {
  FLIGHT_PHASES: {
    PREFLIGHT: {
      id: 'phase_preflight',
      items: {
        LANDING_GEAR_HANDLE: {
          id: 'preflight_landing_gear_handle',
          title: 'LANDING GEAR HANDLE',
          value: 'DOWN'
        },
        CIRCUIT_BREAKERS: {
          id: 'preflight_circuit_breakers',
          title: 'CIRCUIT BREAKERS',
          value: 'IN'
        },
        BATT_SWITCH_OFF: {
          id: 'preflight_batt_switch_off',
          title: 'BATT SWITCH',
          value: 'OFF'
        },
        EXT_PWR_SWITCH: {
          id: 'preflight_ext_pwr_switch',
          title: 'EXT PWR SWITCH',
          value: 'OFF'
        },
        N_ESNTL_BUS_SWITCH_AUTO: {
          id: 'preflight_n_esntl_bus_switch_auto',
          title: 'N ESNTL BUS SWITCH',
          value: 'AUTO'
        },
        STBY_BUS_SWITCH_ON: {
          id: 'preflight_stby_bus_switch_on',
          title: 'STBY BUS SWITCH (IF APPLICABLE)',
          value: 'ON'
        },
        EXTERNAL_LIGHTS_ELECT_SYS: {
          id: 'preflight_external_lights_elect_sys',
          title: 'EXTERNAL LIGHTS/ELECT SYS',
          value: 'AS REQUIRED'
        },
        STBY_BUS_SWITCH_OFF: {
          id: 'preflight_stby_bus_switch_off',
          title: 'STBY BUS SWITCH',
          value: 'OFF'
        },
        BATT_SWITCH_ON: {
          id: 'preflight_batt_switch_on',
          title: 'BATT SWITCH',
          value: 'ON'
        },
        BATT_VOLTS: {
          id: 'preflight_batt_volts',
          title: 'BATT VOLTS',
          value: '>24V'
        },
        N_ESNTL_BUS_SWITCH_OVRD: {
          id: 'preflight_n_esntl_bus_switch_ovrd',
          title: 'N ESNTL BUS SWITCH',
          value: 'OVRD'
        },
        EXTERNAL_LIGHTS_ON_CHECK_OFF: {
          id: 'preflight_external_lights_on_check_off',
          title: 'EXTERNAL LIGHTS',
          value: 'ON/CHECK/OFF'
        },
        N_ESNTL_BUS_SWITCH_AUTO_RESET: {
          id: 'preflight_n_esntl_bus_switch_auto_reset',
          title: 'N ESNTL BUS SWITCH',
          value: 'AUTO'
        },
        FIRE_SWITCH: {
          id: 'preflight_fire_switch',
          title: 'FIRE SWITCH',
          value: 'TEST'
        },
        LAMP_SWITCH: {
          id: 'preflight_lamp_switch',
          title: 'LAMP SWITCH',
          value: 'TEST'
        },
        BOOST_PUMPS: {
          id: 'preflight_boost_pumps',
          title: 'BOOST PUMPS',
          value: 'ON THEN AUTO'
        },
        IGNITION: {
          id: 'preflight_ignition',
          title: 'IGNITION',
          value: 'ON THEN AUTO'
        },
        EIS_SYSTEM: {
          id: 'preflight_eis_system',
          title: 'EIS SYSTEM',
          value: 'TEST'
        },
        FUEL_QUANTITY: {
          id: 'preflight_fuel_quantity',
          title: 'FUEL QUANTITY',
          value: 'RESET'
        },
        OXYGEN_PRESSURE_GAUGE: {
          id: 'preflight_oxygen_pressure_gauge',
          title: 'OXYGEN PRESSURE GAUGE',
          value: 'CHECK'
        },
        PASSENGER_OXYGEN: {
          id: 'preflight_passenger_oxygen',
          title: 'PASSENGER OXYGEN',
          value: 'AUTO'
        },
        BATT_SWITCH_OFF_FINAL: {
          id: 'preflight_batt_switch_off_final',
          title: 'BATT SWITCH',
          value: 'OFF'
        },
        EFIS_CMPST_SWITCHES: {
          id: 'preflight_efis_cmpst_switches',
          title: 'EFIS CMPST SWITCHES',
          value: 'NORM'
        },
        AHRS_1_2: {
          id: 'preflight_ahrs_1_2',
          title: 'AHRS 1 & 2',
          value: 'SLAVED'
        },
        EPS: {
          id: 'preflight_eps',
          title: 'EPS',
          value: 'TEST'
        },
        CABIN_PRESS_SWITCH: {
          id: 'preflight_cabin_press_switch',
          title: 'CABIN PRESS SWITCH',
          value: 'AUTO/GUARDED'
        },
        TRIM_INTERRUPT_SWITCH: {
          id: 'preflight_trim_interrupt_switch',
          title: 'TRIM INTERRUPT SWITCH',
          value: 'NORM/GUARDED'
        },
        FLAP_INTERRUPT_SWITCH: {
          id: 'preflight_flap_interrupt_switch',
          title: 'FLAP INTERRUPT SWITCH',
          value: 'NORM/GUARDED'
        },
        OXYGEN_SUPPLY_HANDLE: {
          id: 'preflight_oxygen_supply_handle',
          title: 'OXYGEN SUPPLY HANDLE',
          value: 'ON'
        },
        OXYGEN_MASKS: {
          id: 'preflight_oxygen_masks',
          title: 'OXYGEN MASKS',
          value: 'TEST'
        },
        COCKPIT_CABIN_LIGHT_SWITCHES: {
          id: 'preflight_cockpit_cabin_light_switches',
          title: 'COCKPIT/CABIN LIGHT SWITCHES',
          value: 'AS REQUIRED'
        },
        LAVATORY: {
          id: 'preflight_lavatory',
          title: 'LAVATORY (IF APPLICABLE)',
          value: 'CHECK'
        },
        AIRCRAFT_EXTERIOR_PREFLIGHT: {
          id: 'preflight_aircraft_exterior_preflight',
          title: 'AIRCRAFT EXTERIOR PREFLIGHT',
          value: 'COMPLETE'
        }
      }
    },

    BEFORE_START: {
      id: 'phase_before_start',
      items: {
        CONTROL_WHEEL_LOCK: {
          id: 'before_start_control_wheel_lock',
          title: 'CONTROL WHEEL LOCK',
          value: 'REMOVE'
        },
        PARKING_BRAKE: {
          id: 'before_start_parking_brake',
          title: 'PARKING BRAKE',
          value: 'SET'
        },
        WHEEL_CHOCKS: {
          id: 'before_start_wheel_chocks',
          title: 'WHEEL CHOCKS',
          value: 'REMOVE'
        },
        FUEL_CAPS: {
          id: 'before_start_fuel_caps',
          title: 'FUEL CAPS',
          value: 'SECURE'
        },
        CREW_SEATS_SEATBELTS: {
          id: 'before_start_crew_seats_seatbelts',
          title: 'CREW SEATS & SEATBELTS',
          value: 'ADJUSTED & SECURE'
        },
        OVERHEAD_ELECTRICAL_SWITCHES: {
          id: 'before_start_overhead_electrical_switches',
          title: 'OVERHEAD ELECTRICAL SWITCHES',
          value: 'OFF'
        },
        STBY_BUS_IF_APPLICABLE: {
          id: 'before_start_stby_bus_if_applicable',
          title: 'STBY BUS (IF APPLICABLE)',
          value: 'ON'
        },
        DE_ICING_SWITCHES: {
          id: 'before_start_de_icing_switches',
          title: 'DE-ICING SWITCHES',
          value: 'INERT SEP OPEN'
        },
        COOLING_HEATING: {
          id: 'before_start_cooling_heating',
          title: 'COOLING & HEATING',
          value: 'OFF'
        },
        SEATBELT_NO_SMOKING_SIGNS: {
          id: 'before_start_seatbelt_no_smoking_signs',
          title: 'SEATBELT/NO-SMOKING SIGNS',
          value: 'AS REQUIRED'
        },
        CIRCUIT_BREAKERS: {
          id: 'before_start_circuit_breakers',
          title: 'CIRCUIT BREAKERS',
          value: 'IN'
        },
        EPS_SWITCH: {
          id: 'before_start_eps_switch',
          title: 'EPS SWITCH',
          value: 'TEST/ARMED'
        },
        ECS_SWITCH: {
          id: 'before_start_ecs_switch',
          title: 'ECS SWITCH',
          value: 'OFF'
        },
        FRICTION_LOCK: {
          id: 'before_start_friction_lock',
          title: 'FRICTION LOCK',
          value: 'CHECKED'
        },
        MOR_PCL_COND_LEVER: {
          id: 'before_start_mor_pcl_cond_lever',
          title: 'MOR/PCL/COND LEVER',
          value: 'BACK'
        },
        BATT_SWITCH: {
          id: 'before_start_batt_switch',
          title: 'BATT SWITCH',
          value: 'ON'
        },
        NAV_LIGHTS: {
          id: 'before_start_nav_lights',
          title: 'NAV LIGHTS',
          value: 'ON'
        },
        EXTERNAL_POWER: {
          id: 'before_start_external_power',
          title: 'EXTERNAL POWER',
          value: 'AS REQUIRED'
        },
        FUEL_QUANTITY_TOTALIZER: {
          id: 'before_start_fuel_quantity_totalizer',
          title: 'FUEL QUANTITY & TOTALIZER',
          value: 'CHECKED & RESET'
        },
        LANDING_GEAR_POSITION_LIGHTS: {
          id: 'before_start_landing_gear_position_lights',
          title: 'LANDING GEAR POSITION LIGHTS',
          value: '3 GREEN'
        },
        CAWS: {
          id: 'before_start_caws',
          title: 'CAWS',
          value: 'APPROPRIATE'
        }
      }
    },

    ENGINE_START: {
      id: 'phase_engine_start',
      items: {
        BEACON_LIGHT: {
          id: 'engine_start_beacon_light',
          title: 'BEACON LIGHT',
          value: 'ON'
        },
        PROP_AREA: {
          id: 'engine_start_prop_area',
          title: 'PROP AREA',
          value: 'CLEAR'
        },
        STARTER_SWITCH: {
          id: 'engine_start_starter_switch',
          title: 'STARTER SWITCH',
          value: 'ENGAGED'
        }
      }
    },

    AFTER_START: {
      id: 'phase_after_start',
      items: {
        ENGINE_INSTRUMENTS: {
          id: 'after_start_engine_instruments',
          title: 'ENGINE INSTRUMENTS',
          value: 'CHECKED'
        },
        GENERATORS: {
          id: 'after_start_generators',
          title: 'GENERATORS',
          value: 'ON'
        },
        EXTERNAL_POWER: {
          id: 'after_start_external_power',
          title: 'EXTERNAL POWER',
          value: 'OFF'
        },
        AVIONICS: {
          id: 'after_start_avionics',
          title: 'AVIONICS',
          value: 'ON'
        },
        STBY_BUS: {
          id: 'after_start_stby_bus',
          title: 'STBY BUS',
          value: 'OFF'
        },
        COOLING_HEATING: {
          id: 'after_start_cooling_heating',
          title: 'COOLING & HEATING',
          value: 'AS REQUIRED'
        },
        EPS_LIGHT: {
          id: 'after_start_eps_light',
          title: 'EPS LIGHT',
          value: 'OUT'
        },
        ECS_SWITCH: {
          id: 'after_start_ecs_switch',
          title: 'ECS SWITCH',
          value: 'AUTO'
        },
        FLAPS: {
          id: 'after_start_flaps',
          title: 'FLAPS',
          value: '15 DEG'
        }
      }
    },

    BEFORE_TAXI: {
      id: 'phase_before_taxi',
      items: {
        INVERTER: {
          id: 'before_taxi_inverter',
          title: 'INVERTER',
          value: 'SWITCHED'
        },
        PUSHER_TEST: {
          id: 'before_taxi_pusher_test',
          title: 'PUSHER TEST',
          value: 'COMPLETE'
        },
        PNF_PUSHER_TEST: {
          id: 'before_taxi_pnf_pusher_test',
          title: 'PNF* PUSHER TEST',
          value: 'COMPLETE'
        },
        AVIONICS: {
          id: 'before_taxi_avionics',
          title: 'AVIONICS',
          value: 'SET'
        },
        AUTOPILOT_TRIM_TEST: {
          id: 'before_taxi_autopilot_trim_test',
          title: 'AUTOPILOT/TRIM TEST',
          value: 'COMPLETE'
        },
        CABIN_PRESSURE_CONTROLLER: {
          id: 'before_taxi_cabin_pressure_controller',
          title: 'CABIN PRESSURE CONTROLLER',
          value: 'SET'
        },
        TRANSPONDER_FLIGHT_ID: {
          id: 'before_taxi_transponder_flight_id',
          title: 'TRANSPONDER/FLIGHT ID',
          value: 'SET'
        },
        ALTITUDE_PRE_SELECT: {
          id: 'before_taxi_altitude_pre_select',
          title: 'ALTITUDE PRE-SELECT',
          value: 'SET'
        },
        AHRS_1_2: {
          id: 'before_taxi_ahrs_1_2',
          title: 'AHRS 1 & 2',
          value: 'CHECKED'
        },
        FUEL_QUANTITY_TOTALIZER: {
          id: 'before_taxi_fuel_quantity_totalizer',
          title: 'FUEL QUANTITY & TOTALIZER',
          value: 'CHECKED & RESET'
        },
        CAWS: {
          id: 'before_taxi_caws',
          title: 'CAWS',
          value: 'APPROPRIATE'
        }
      }
    },

    TAXI: {
      id: 'phase_taxi',
      items: {
        FLIGHT_CONTROLS: {
          id: 'taxi_flight_controls',
          title: 'FLIGHT CONTROLS',
          value: 'FREE & CORRECT'
        },
        FLIGHT_INSTRUMENTS: {
          id: 'taxi_flight_instruments',
          title: 'FLIGHT INSTRUMENTS',
          value: 'CHECK & SET'
        },
        FLIGHT_DIRECTOR: {
          id: 'taxi_flight_director',
          title: 'FLIGHT DIRECTOR',
          value: 'GO AROUND'
        },
        ALTITUDE_PRE_SELECT: {
          id: 'taxi_altitude_pre_select',
          title: 'ALTITUDE PRE-SELECT',
          value: 'SET & ARMED'
        },
        HEADING_BUG: {
          id: 'taxi_heading_bug',
          title: 'HEADING BUG',
          value: 'SET & ARMED'
        },
        ELECTRIC_TRIM: {
          id: 'taxi_electric_trim',
          title: 'ELECTRIC TRIM',
          value: 'SET FOR T/O'
        },
        EGPWS: {
          id: 'taxi_egpws',
          title: 'EGPWS',
          value: 'TEST'
        },
        CREW_BRIEFING: {
          id: 'taxi_crew_briefing',
          title: 'CREW BRIEFING',
          value: 'COMPLETE'
        }
      }
    },

    FINAL_ITEMS: {
      id: 'phase_final_items',
      items: {
        FLAPS: {
          id: 'final_items_flaps',
          title: 'FLAPS',
          value: '15 DEG OR 30 DEG'
        },
        LIGHTS: {
          id: 'final_items_lights',
          title: 'LIGHTS',
          value: 'AS REQUIRED'
        },
        ICE_PROTECTION: {
          id: 'final_items_ice_protection',
          title: 'ICE PROTECTION',
          value: 'AS REQUIRED'
        },
        CONDITION_LEVER: {
          id: 'final_items_condition_lever',
          title: 'CONDITION LEVER',
          value: 'FLIGHT IDLE'
        },
        CAWS: {
          id: 'final_items_caws',
          title: 'CAWS',
          value: 'APPROPRIATE'
        }
      }
    },

    AFTER_TAKEOFF: {
      id: 'phase_after_takeoff',
      items: {
        LANDING_GEAR: {
          id: 'after_takeoff_landing_gear',
          title: 'LANDING GEAR',
          value: 'UP'
        },
        YAW_DAMPER: {
          id: 'after_takeoff_yaw_damper',
          title: 'YAW DAMPER',
          value: 'ON'
        },
        LANDING_TAXI_LIGHTS: {
          id: 'after_takeoff_landing_taxi_lights',
          title: 'LANDING & TAXI LIGHTS',
          value: 'OFF'
        },
        FLAPS: {
          id: 'after_takeoff_flaps',
          title: 'FLAPS',
          value: '0 DEG'
        },
        ICE_PROTECTION: {
          id: 'after_takeoff_ice_protection',
          title: 'ICE PROTECTION',
          value: 'AS REQUIRED'
        },
        CLIMB_POWER: {
          id: 'after_takeoff_climb_power',
          title: 'CLIMB POWER',
          value: 'SET'
        },
        PRESSURIZATION: {
          id: 'after_takeoff_pressurization',
          title: 'PRESSURIZATION',
          value: 'PRESSURIZING'
        },
        ENGINE_INSTRUMENTS: {
          id: 'after_takeoff_engine_instruments',
          title: 'ENGINE INSTRUMENTS',
          value: 'CHECKED'
        }
      }
    },

    TRANSITION_ALTITUDE: {
      id: 'phase_transition_altitude',
      items: {
        ALTIMETERS: {
          id: 'transition_altitude_altimeters',
          title: 'ALTIMETERS',
          value: 'STANDARD'
        }
      }
    },

    CRUISE: {
      id: 'phase_cruise',
      items: {
        CRUISE_POWER: {
          id: 'cruise_cruise_power',
          title: 'CRUISE POWER',
          value: 'SET'
        },
        FUEL: {
          id: 'cruise_fuel',
          title: 'FUEL',
          value: 'SUFFICIENT & BALANCED'
        },
        ENGINE_INSTRUMENTS: {
          id: 'cruise_engine_instruments',
          title: 'ENGINE INSTRUMENTS',
          value: 'CHECKED'
        },
        CABIN_PRESSURE: {
          id: 'cruise_cabin_pressure',
          title: 'CABIN PRESSURE',
          value: 'STABLE & IN THE GREEN'
        },
        CABIN_TEMPERATURE: {
          id: 'cruise_cabin_temperature',
          title: 'CABIN TEMPERATURE',
          value: 'APPROPRIATE'
        }
      }
    },

    DESCENT: {
      id: 'phase_descent',
      items: {
        CABIN_PRESSURIZATION_RATE: {
          id: 'descent_cabin_pressurization_rate',
          title: 'CABIN PRESSURIZATION & RATE',
          value: 'SET'
        }
      }
    },

    TRANSITION_LEVEL: {
      id: 'phase_transition_level',
      items: {
        ALTIMETERS: {
          id: 'transition_level_altimeters',
          title: 'ALTIMETERS',
          value: 'SET'
        }
      }
    },

    APPROACH: {
      id: 'phase_approach',
      items: {
        RECOG_LIGHTS: {
          id: 'approach_recog_lights',
          title: 'RECOG LIGHTS',
          value: 'ON'
        },
        RADIOS_NAVAIDS: {
          id: 'approach_radios_navaids',
          title: 'RADIOS & NAVAIDS',
          value: 'SET & IDENTIFIED'
        },
        ALTIMETERS: {
          id: 'approach_altimeters',
          title: 'ALTIMETERS',
          value: 'SET'
        },
        PRESSURIZATION: {
          id: 'approach_pressurization',
          title: 'PRESSURIZATION',
          value: 'SET'
        },
        INERTIAL_SEPARATOR: {
          id: 'approach_inertial_separator',
          title: 'INERTIAL SEPARATOR',
          value: 'OPEN'
        },
        CREW_APPROACH_BRIEFING: {
          id: 'approach_crew_approach_briefing',
          title: 'CREW/APPROACH BRIEFING',
          value: 'COMPLETE'
        }
      }
    },

    BEFORE_LANDING: {
      id: 'phase_before_landing',
      items: {
        LANDING_GEAR: {
          id: 'before_landing_landing_gear',
          title: 'LANDING GEAR',
          value: '3 GREEN'
        },
        FOOT_BRAKES: {
          id: 'before_landing_foot_brakes',
          title: 'FOOT BRAKES',
          value: 'TESTED'
        },
        LANDING_TAXI_LIGHTS: {
          id: 'before_landing_landing_taxi_lights',
          title: 'LANDING & TAXI LIGHTS',
          value: 'ON'
        },
        FLAPS: {
          id: 'before_landing_flaps',
          title: 'FLAPS',
          value: 'AS REQUIRED'
        },
        AUTOPILOT_YAW_DAMPER: {
          id: 'before_landing_autopilot_yaw_damper',
          title: 'AUTOPILOT & YAW DAMPER',
          value: 'OFF'
        },
        CABIN_PRESSURIZATION: {
          id: 'before_landing_cabin_pressurization',
          title: 'CABIN PRESSURIZATION',
          value: '0 DIFF PRESSURE'
        }
      }
    },

    AFTER_LANDING: {
      id: 'phase_after_landing',
      items: {
        CONDITION_LEVER: {
          id: 'after_landing_condition_lever',
          title: 'CONDITION LEVER',
          value: 'GROUND IDLE'
        },
        FLAPS: {
          id: 'after_landing_flaps',
          title: 'FLAPS',
          value: '0 DEG'
        },
        EXTERIOR_LIGHTS: {
          id: 'after_landing_exterior_lights',
          title: 'EXTERIOR LIGHTS',
          value: 'AS REQUIRED'
        },
        ICE_PROTECTION: {
          id: 'after_landing_ice_protection',
          title: 'ICE PROTECTION',
          value: 'OFF'
        },
        RADAR: {
          id: 'after_landing_radar',
          title: 'RADAR',
          value: 'STANDBY'
        },
        TRIM: {
          id: 'after_landing_trim',
          title: 'TRIM',
          value: 'SET FOR T/O'
        }
      }
    },

    SHUTDOWN: {
      id: 'phase_shutdown',
      items: {
        PARKING_BRAKE: {
          id: 'shutdown_parking_brake',
          title: 'PARKING BRAKE',
          value: 'SET'
        },
        ECS: {
          id: 'shutdown_ecs',
          title: 'ECS',
          value: 'OFF'
        },
        TAXI_LIGHT: {
          id: 'shutdown_taxi_light',
          title: 'TAXI LIGHT',
          value: 'OFF'
        },
        TRANSPONDER: {
          id: 'shutdown_transponder',
          title: 'TRANSPONDER',
          value: 'VFR'
        },
        COOLING_HEATING: {
          id: 'shutdown_cooling_heating',
          title: 'COOLING & HEATING',
          value: 'OFF'
        },
        AVIONICS: {
          id: 'shutdown_avionics',
          title: 'AVIONICS',
          value: 'OFF'
        },
        GENERATORS: {
          id: 'shutdown_generators',
          title: 'GENERATORS',
          value: 'OFF'
        },
        ITT: {
          id: 'shutdown_itt',
          title: 'ITT',
          value: 'STABLE'
        },
        CONDITION_LEVER: {
          id: 'shutdown_condition_lever',
          title: 'CONDITION LEVER',
          value: 'CUTOFF'
        },
        BEACON: {
          id: 'shutdown_beacon',
          title: 'BEACON',
          value: 'OFF'
        },
        EPS_SWITCH: {
          id: 'shutdown_eps_switch',
          title: 'EPS SWITCH',
          value: 'OFF'
        },
        CONTROL_WHEEL_LOCK: {
          id: 'shutdown_control_wheel_lock',
          title: 'CONTROL WHEEL LOCK',
          value: 'INSTALLED'
        },
        BATTERY_SWITCH: {
          id: 'shutdown_battery_switch',
          title: 'BATTERY SWITCH',
          value: 'OFF (NG <10%)'
        },
        OXYGEN: {
          id: 'shutdown_oxygen',
          title: '+ OXYGEN',
          value: 'OFF'
        },
        PARKING_BRAKE_OFF: {
          id: 'shutdown_parking_brake_off',
          title: '+ PARKING BRAKE',
          value: 'OFF'
        }
      }
    },

    ANTI_ICE_CHECK: {
      id: 'phase_anti_ice_check',
      items: {
        PROP_HEAT: {
          id: 'anti_ice_check_prop_heat',
          title: 'PROP HEAT',
          value: 'ON'
        },
        INERT_SEP: {
          id: 'anti_ice_check_inert_sep',
          title: 'INERT SEP',
          value: 'OPEN'
        },
        PUSHER_ICE_CAWS: {
          id: 'anti_ice_check_pusher_ice_caws',
          title: 'PUSHER ICE CAWS',
          value: 'ILLUMINATED'
        },
        BOOTS_SWITCH: {
          id: 'anti_ice_check_boots_switch',
          title: 'BOOTS SWITCH',
          value: 'SET 1 MIN'
        },
        DE_ICE_BOOTS_CAWS: {
          id: 'anti_ice_check_de_ice_boots_caws',
          title: 'DE-ICE BOOTS CAWS',
          value: 'ILLUMINATED 1 MIN'
        },
        ICE_PROTECTION: {
          id: 'anti_ice_check_ice_protection',
          title: 'ICE PROTECTION',
          value: 'RESET AS REQUIRED'
        }
      }
    }
  }
};

export default checklist;
