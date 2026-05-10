const checklist = {
  FLIGHT_PHASES: {
    BEFORE_START: {
      id: 'phase_before_start',
      items: {
        EXTERIOR_INSPECTION: {
          id: 'before_start_exterior_inspection',
          title: 'EXTERIOR INSPECTION',
          value: 'COMPLETE'
        },
        PARKING_BRAKE: {
          id: 'before_start_parking_brake',
          title: 'PARKING BRAKE',
          value: 'SET'
        },
        CONTROL_LOCKS: {
          id: 'before_start_control_locks',
          title: 'CONTROL LOCKS',
          value: 'OFF'
        },
        FIRE_HANDLE: {
          id: 'before_start_fire_handle',
          title: 'FIRE HANDLE',
          value: 'IN'
        },
        EMERGENCY_FUEL_SWITCHES: {
          id: 'before_start_emergency_fuel_switches',
          title: 'EMERGENCY FUEL SWITCHES',
          value: 'NORMAL'
        },
        EMERGENCY_PUMPS: {
          id: 'before_start_emergency_pumps',
          title: 'EMERGENCY PUMPS',
          value: 'BOTH OFF'
        },
        FUEL_SELECTOR: {
          id: 'before_start_fuel_selector',
          title: 'FUEL SELECTOR',
          value: 'NORMAL'
        },
        FUEL_BOOST_PUMPS: {
          id: 'before_start_fuel_boost_pumps',
          title: 'FUEL BOOST PUMPS',
          value: 'BOTH OFF'
        },
        STATIC_SOURCE: {
          id: 'before_start_static_source',
          title: 'STATIC SOURCE',
          value: 'NORMAL'
        },
        VENT_FAN: {
          id: 'before_start_vent_fan',
          title: 'VENT FAN',
          value: 'OFF'
        },
        RAM_AIR: {
          id: 'before_start_ram_air',
          title: 'RAM AIR',
          value: 'CLOSED'
        },
        DE_ICING_SWITCHES: {
          id: 'before_start_de_icing_switches',
          title: 'DE-ICING SWITCHES',
          value: 'OFF'
        },
        BLEED_AIR_SWITCHES: {
          id: 'before_start_bleed_air_switches',
          title: 'BLEED-AIR SWITCHES',
          value: 'OFF'
        },
        PITOT_HEAT: {
          id: 'before_start_pitot_heat',
          title: 'PITOT HEAT',
          value: 'OFF'
        },
        GENERATOR_SWITCHES: {
          id: 'before_start_generator_switches',
          title: 'GENERATOR SWITCHES',
          value: 'BOTH OFF'
        },
        BUS_TIE_SWITCH: {
          id: 'before_start_bus_tie_switch',
          title: 'BUS TIE SWITCH',
          value: 'NORMAL'
        },
        WINDSHIELD_HEAT: {
          id: 'before_start_windshield_heat',
          title: 'WINDSHIELD HEAT',
          value: 'OFF'
        },
        LANDING_LIGHTS: {
          id: 'before_start_landing_lights',
          title: 'LANDING LIGHTS',
          value: 'OFF'
        },
        IGNITION_SWITCH: {
          id: 'before_start_ignition_switch',
          title: 'IGNITION SWITCH',
          value: 'NORMAL & GUARDED'
        },
        FLAP_HANDLE: {
          id: 'before_start_flap_handle',
          title: 'FLAP HANDLE',
          value: 'UP'
        },
        FUEL_LEVERS: {
          id: 'before_start_fuel_levers',
          title: 'FUEL LEVERS',
          value: 'OFF'
        },
        PROPELLER_LEVERS: {
          id: 'before_start_propeller_levers',
          title: 'PROPELLER LEVERS',
          value: 'FEATHERED'
        },
        POWER_LEVERS: {
          id: 'before_start_power_levers',
          title: 'POWER LEVERS',
          value: 'FLIGHT IDLE'
        },
        DC_MASTER: {
          id: 'before_start_dc_master',
          title: 'D.C. MASTER',
          value: 'ON'
        },
        BATTERY_EXT_SWITCH: {
          id: 'before_start_battery_ext_switch',
          title: 'BATTERY/EXT SWITCH',
          value: 'BATTERY OR EXT'
        },
        BUS_VOLTAGE: {
          id: 'before_start_bus_voltage',
          title: 'BUS VOLTAGE',
          value: 'CHECK (min. 18V)'
        },
        POSITION_LIGHTS: {
          id: 'before_start_position_lights',
          title: 'POSITION LIGHTS',
          value: 'ON'
        },
        EMERGENCY_LIGHTS: {
          id: 'before_start_emergency_lights',
          title: 'EMERGENCY LIGHTS',
          value: 'ARM'
        },
        CAUTION_LIGHTS: {
          id: 'before_start_caution_lights',
          title: 'CAUTION LIGHTS',
          value: 'CHECK'
        },
        FIRE_DETECTION: {
          id: 'before_start_fire_detection',
          title: 'FIRE DETECTION',
          value: 'TEST OK'
        },
        FUEL_QUANTITY: {
          id: 'before_start_fuel_quantity',
          title: 'FUEL QUANTITY',
          value: 'CHECK'
        },
        ELT: {
          id: 'before_start_elt',
          title: 'ELT',
          value: 'TEST & ARM'
        },
        BOOST_PUMP_CROSSFEED_CHECK: {
          id: 'before_start_boost_pump_crossfeed_check',
          title: 'BOOST PUMP & CROSSFEED CHECK',
          value: 'COMPLETE'
        },
        BRAKE_HYDRAULIC_PRESSURE: {
          id: 'before_start_brake_hydraulic_pressure',
          title: 'BRAKE/HYDRAULIC PRESSURE',
          value: 'CHECKED'
        },
        BOARDING: {
          id: 'before_start_boarding',
          title: 'BOARDING',
          value: 'COMPLETED'
        },
        WHEEL_CHOCKS: {
          id: 'before_start_wheel_chocks',
          title: 'WHEEL CHOCKS',
          value: 'REMOVED'
        },
        DOORS: {
          id: 'before_start_doors',
          title: 'DOORS',
          value: 'CLOSED'
        },
        SEATS_SEATBELTS: {
          id: 'before_start_seats_seatbelts',
          title: 'SEATS, PEDALS & SEATBELTS',
          value: 'ADJUST'
        },
        CABIN_SIGNS: {
          id: 'before_start_cabin_signs',
          title: 'CABIN SIGNS',
          value: 'AS REQ'
        },
        FLIGHT_DATA_RECORDER: {
          id: 'before_start_flight_data_recorder',
          title: 'FLIGHT DATA RECORDER',
          value: 'TEST & ON'
        }
      }
    },

    ENGINE_START: {
      id: 'phase_engine_start',
      items: {
        ATC_CLEARANCE: {
          id: 'engine_start_atc_clearance',
          title: 'ATC / PUSHBACK CLEARANCE',
          value: 'AS REQ'
        },
        ANTI_COLLISION_LIGHTS: {
          id: 'engine_start_anti_collision_lights',
          title: 'ANTI-COLLISION LIGHTS',
          value: 'ON'
        },
        FUEL_LEVERS: {
          id: 'engine_start_fuel_levers',
          title: 'FUEL LEVERS',
          value: 'OFF'
        },
        PROPELLER_LEVERS: {
          id: 'engine_start_propeller_levers',
          title: 'PROPELLER LEVERS',
          value: 'FEATHERED'
        },
        POWER_LEVERS: {
          id: 'engine_start_power_levers',
          title: 'POWER LEVERS',
          value: 'FLIGHT IDLE'
        },
        FUEL_BOOST_PUMPS: {
          id: 'engine_start_fuel_boost_pumps',
          title: 'FUEL BOOST PUMPS',
          value: 'BOTH ON'
        },
        START_RIGHT_ENGINE: {
          id: 'engine_start_start_right_engine',
          title: 'START RIGHT ENGINE',
          value: 'COMPLETE'
        },
        START_LEFT_ENGINE: {
          id: 'engine_start_start_left_engine',
          title: 'START LEFT ENGINE',
          value: 'COMPLETE'
        },
        GENERATORS: {
          id: 'engine_start_generators',
          title: 'GENERATORS',
          value: 'BOTH ON'
        }
      }
    },

    AFTER_ENGINE_START: {
      id: 'phase_after_engine_start',
      items: {
        ATC_CLEARANCE: {
          id: 'after_engine_start_atc_clearance',
          title: 'ATC CLEARANCE / PUSHBACK',
          value: 'AS REQ'
        },
        BATTERY_MASTER_SWITCH: {
          id: 'after_engine_start_battery_master_switch',
          title: 'BATTERY MASTER SWITCH',
          value: 'BATTERY (if was EXT)'
        },
        GENERATORS: {
          id: 'after_engine_start_generators',
          title: 'GENERATORS',
          value: 'CHECK BOTH ON'
        },
        VOLTMETERS_AMMETERS: {
          id: 'after_engine_start_voltmeters_ammeters',
          title: 'VOLTMETERS/AMMETERS',
          value: 'CHECK'
        },
        BUS_TIE: {
          id: 'after_engine_start_bus_tie',
          title: 'BUS TIE',
          value: 'NORMAL'
        },
        BLEED_AIR: {
          id: 'after_engine_start_bleed_air',
          title: 'BLEED AIR',
          value: 'AS REQ'
        },
        WARNING_LIGHTS: {
          id: 'after_engine_start_warning_lights',
          title: 'WARNING LIGHTS',
          value: 'CHECK'
        },
        RADIOS_AVIONICS_AP: {
          id: 'after_engine_start_radios_avionics_ap',
          title: 'RADIOS / AVIONICS / AP',
          value: 'SET & CHECKED'
        },
        TRANSPONDER: {
          id: 'after_engine_start_transponder',
          title: 'TRANSPONDER',
          value: 'STBY'
        },
        ALTIMETER: {
          id: 'after_engine_start_altimeter',
          title: 'ALTIMETER',
          value: 'SET LOCAL'
        },
        FLAPS: {
          id: 'after_engine_start_flaps',
          title: 'FLAPS',
          value: 'SET 10°'
        }
      }
    },

    BEFORE_TAXI: {
      id: 'phase_before_taxi',
      items: {
        PAX_SIGNS: {
          id: 'before_taxi_pax_signs',
          title: 'PAX SIGNS',
          value: 'AS REQ / ON'
        },
        FLIGHT_CONTROLS: {
          id: 'before_taxi_flight_controls',
          title: 'FLIGHT CONTROLS',
          value: 'FREE & FULL MOVEMENT'
        },
        ENGINE_INSTRUMENTS: {
          id: 'before_taxi_engine_instruments',
          title: 'ENGINE INSTRUMENTS',
          value: 'CHECK'
        },
        DE_ICE_DEFLECTOR: {
          id: 'before_taxi_de_ice_deflector',
          title: 'DE-ICE/DEFLECTOR',
          value: 'AS REQ'
        },
        ATC_CLEARANCE: {
          id: 'before_taxi_atc_clearance',
          title: 'ATC CLEARANCE',
          value: 'AS REQ'
        },
        TAXI_LIGHTS: {
          id: 'before_taxi_taxi_lights',
          title: 'TAXI LIGHTS',
          value: 'ON'
        }
      }
    },

    TAXI: {
      id: 'phase_taxi',
      items: {
        PARKING_BRAKE: {
          id: 'taxi_parking_brake',
          title: 'PARKING BRAKE',
          value: 'RELEASE'
        },
        BRAKES_STEERING: {
          id: 'taxi_brakes_steering',
          title: 'BRAKES & STEERING',
          value: 'TEST'
        },
        FLIGHT_INSTRUMENTS: {
          id: 'taxi_flight_instruments',
          title: 'FLIGHT INSTRUMENTS',
          value: 'CHECK'
        }
      }
    },

    ENGINE_RUNUP: {
      id: 'phase_engine_runup',
      items: {
        PARKING_BRAKE: {
          id: 'engine_runup_parking_brake',
          title: 'PARKING BRAKE',
          value: 'SET'
        },
        PROP_FEATHER_BETA_CHECK: {
          id: 'engine_runup_prop_feather_beta_check',
          title: 'PROP FEATHER & BETA CHECK',
          value: 'COMPLETE'
        },
        BETA_BACKUP_TEST: {
          id: 'engine_runup_beta_backup_test',
          title: 'BETA BACKUP TEST',
          value: 'COMPLETE'
        },
        POWER_LEVER_MICRO_SWITCH_TEST: {
          id: 'engine_runup_power_lever_micro_switch_test',
          title: 'POWER LEVER MICRO SWITCH TEST',
          value: 'COMPLETE'
        },
        ANTI_ICE_SYSTEM_TEST: {
          id: 'engine_runup_anti_ice_system_test',
          title: 'ANTI-ICE SYSTEM TEST',
          value: 'COMPLETE'
        }
      }
    },

    BEFORE_TAKEOFF: {
      id: 'phase_before_takeoff',
      items: {
        PARKING_BRAKE: {
          id: 'before_takeoff_parking_brake',
          title: 'PARKING BRAKE',
          value: 'SET'
        },
        PROPELLER_LEVERS: {
          id: 'before_takeoff_propeller_levers',
          title: 'PROPELLER LEVERS',
          value: 'FULL FWD'
        },
        FLIGHT_INSTRUMENTS: {
          id: 'before_takeoff_flight_instruments',
          title: 'FLIGHT INSTRUMENTS',
          value: 'CHECK'
        },
        ENGINE_INSTRUMENTS: {
          id: 'before_takeoff_engine_instruments',
          title: 'ENGINE INSTRUMENTS',
          value: 'CHECK'
        },
        FLAPS: {
          id: 'before_takeoff_flaps',
          title: 'FLAPS',
          value: 'CHECK SET 10°'
        },
        BLEED_AIR: {
          id: 'before_takeoff_bleed_air',
          title: 'BLEED AIR L & R',
          value: 'AS REQ'
        },
        DE_ICE_DEFLECTOR: {
          id: 'before_takeoff_de_ice_deflector',
          title: 'DE-ICE/DEFLECTOR',
          value: 'AS REQ'
        },
        PITOT_HEAT: {
          id: 'before_takeoff_pitot_heat',
          title: 'PITOT HEAT',
          value: 'ON'
        },
        TRIM: {
          id: 'before_takeoff_trim',
          title: 'TRIM',
          value: 'SET'
        },
        ALTIMETER: {
          id: 'before_takeoff_altimeter',
          title: 'ALTIMETER',
          value: 'CHECK LOCAL'
        },
        TRANSPONDER: {
          id: 'before_takeoff_transponder',
          title: 'TRANSPONDER',
          value: 'ON'
        },
        AUTOPILOT: {
          id: 'before_takeoff_autopilot',
          title: 'AUTOPILOT',
          value: 'SET (ALT / VS / NAV)'
        },
        FLIGHT_DATA_RECORDER: {
          id: 'before_takeoff_flight_data_recorder',
          title: 'FLIGHT DATA RECORDER',
          value: 'CHECK ON'
        },
        PAX_SIGNS: {
          id: 'before_takeoff_pax_signs',
          title: 'PAX SIGNS',
          value: 'AS REQ / ON'
        },
        FUEL_CONDITION_LEVERS: {
          id: 'before_takeoff_fuel_condition_levers',
          title: 'FUEL CONDITION LEVERS',
          value: 'ON'
        },
        LANDING_LIGHTS: {
          id: 'before_takeoff_landing_lights',
          title: 'LANDING LIGHTS',
          value: 'ON'
        },
        ANTI_COLLISION_LIGHT: {
          id: 'before_takeoff_anti_collision_light',
          title: 'ANTI-COLLISION LIGHT',
          value: 'BEACON & STROBES'
        },
        ATC_CLEARANCE: {
          id: 'before_takeoff_atc_clearance',
          title: 'ATC CLEARANCE',
          value: 'AS REQ'
        },
        AUTOFEATHER: {
          id: 'before_takeoff_autofeather',
          title: 'AUTOFEATHER',
          value: 'ON (SELECT LIGHT ON)'
        },
        WARNING_LIGHTS: {
          id: 'before_takeoff_warning_lights',
          title: 'WARNING LIGHTS',
          value: 'CHECK'
        },
        PARKING_BRAKE_RELEASE: {
          id: 'before_takeoff_parking_brake_release',
          title: 'PARKING BRAKE',
          value: 'RELEASE'
        }
      }
    },

    CLIMB: {
      id: 'phase_climb',
      items: {
        FLAPS: {
          id: 'climb_flaps',
          title: 'FLAPS',
          value: 'UP'
        },
        AUTOFEATHER: {
          id: 'climb_autofeather',
          title: 'AUTOFEATHER',
          value: 'OFF'
        },
        YAW_DAMPER: {
          id: 'climb_yaw_damper',
          title: 'YAW DAMPER',
          value: 'ON'
        },
        VENT_FAN: {
          id: 'climb_vent_fan',
          title: 'VENT FAN',
          value: 'OFF'
        },
        PAX_SIGNS: {
          id: 'climb_pax_signs',
          title: 'PAX SIGNS',
          value: 'AS REQ / OFF'
        },
        BLEED_AIR: {
          id: 'climb_bleed_air',
          title: 'BLEED AIR L & R',
          value: 'AS REQ'
        },
        DE_ICE_DEFLECTOR: {
          id: 'climb_de_ice_deflector',
          title: 'DE-ICE/DEFLECTOR',
          value: 'AS REQ'
        },
        TAXI_LIGHTS: {
          id: 'climb_taxi_lights',
          title: 'TAXI LIGHTS',
          value: 'OFF'
        },
        LANDING_LIGHTS: {
          id: 'climb_landing_lights',
          title: 'LANDING LIGHTS',
          value: 'AS REQ (below 10.000 ft)'
        }
      }
    },

    TRANSITION_ALTITUDE: {
      id: 'phase_transition_altitude',
      items: {
        ALTIMETERS: {
          id: 'transition_altitude_altimeters',
          title: 'ALTIMETERS',
          value: 'SET STANDARD'
        }
      }
    },

    CRUISE: {
      id: 'phase_cruise',
      items: {
        PAX_SIGNS: {
          id: 'cruise_pax_signs',
          title: 'PAX SIGNS',
          value: 'AS REQ / OFF'
        },
        BLEED_AIR: {
          id: 'cruise_bleed_air',
          title: 'BLEED AIR L & R',
          value: 'AS REQ'
        },
        ANTI_ICE_DEFLECTOR: {
          id: 'cruise_anti_ice_deflector',
          title: 'ANTI-ICE/DEFLECTOR',
          value: 'AS REQ'
        }
      }
    },

    DESCENT: {
      id: 'phase_descent',
      items: {
        ATC_CLEARANCE: {
          id: 'descent_atc_clearance',
          title: 'ATC CLEARANCE',
          value: 'AS REQ'
        },
        PAX_SIGNS: {
          id: 'descent_pax_signs',
          title: 'PAX SIGNS',
          value: 'AS REQ / ON'
        },
        BLEED_AIR: {
          id: 'descent_bleed_air',
          title: 'BLEED AIR L & R',
          value: 'AS REQ'
        },
        ANTI_ICE_DEFLECTOR: {
          id: 'descent_anti_ice_deflector',
          title: 'ANTI-ICE/DEFLECTOR',
          value: 'AS REQ'
        },
        LANDING_LIGHTS: {
          id: 'descent_landing_lights',
          title: 'LANDING LIGHTS',
          value: 'ON (below 10.000 ft)'
        },
        FUEL_QUANTITY: {
          id: 'descent_fuel_quantity',
          title: 'FUEL QUANTITY',
          value: 'CHECK'
        }
      }
    },

    TRANSITION_LEVEL: {
      id: 'phase_transition_level',
      items: {
        ALTIMETERS: {
          id: 'transition_level_altimeters',
          title: 'ALTIMETERS',
          value: 'SET LOCAL'
        }
      }
    },

    APPROACH: {
      id: 'phase_approach',
      items: {
        APPROACH_BRIEFING: {
          id: 'approach_approach_briefing',
          title: 'APPROACH BRIEFING & VAPP',
          value: 'CHECK'
        },
        PAX_SIGNS: {
          id: 'approach_pax_signs',
          title: 'PAX SIGNS',
          value: 'AS REQ / ON'
        },
        BLEED_AIR: {
          id: 'approach_bleed_air',
          title: 'BLEED AIR L & R',
          value: 'AS REQ'
        },
        DE_ICE_DEFLECTOR: {
          id: 'approach_de_ice_deflector',
          title: 'DE-ICE/DEFLECTOR',
          value: 'AS REQ'
        },
        LANDING_LIGHTS: {
          id: 'approach_landing_lights',
          title: 'LANDING LIGHTS',
          value: 'ON'
        },
        ALTIMETERS: {
          id: 'approach_altimeters',
          title: 'ALTIMETERS',
          value: 'CHECK LOCAL'
        },
        YAW_DAMPER: {
          id: 'approach_yaw_damper',
          title: 'YAW DAMPER',
          value: 'OFF'
        },
        PROPELLER_LEVERS: {
          id: 'approach_propeller_levers',
          title: 'PROPELLER LEVERS',
          value: 'FULL FWD (Nh 96%)'
        },
        FLAPS_10: {
          id: 'approach_flaps_10',
          title: 'FLAPS 10°',
          value: '@ 100 KIAS'
        },
        FLAPS_20: {
          id: 'approach_flaps_20',
          title: 'FLAPS 20°',
          value: '@ 95 KIAS'
        },
        FLAPS_30: {
          id: 'approach_flaps_30',
          title: 'FLAPS 30°',
          value: '@ 3 NM OUT'
        },
        FLAPS_37: {
          id: 'approach_flaps_37',
          title: 'FLAPS 37°',
          value: '@ 1 NM / 330 ft AGL'
        }
      }
    },

    GO_AROUND: {
      id: 'phase_go_around',
      items: {
        POWER_LEVERS: {
          id: 'go_around_power_levers',
          title: 'POWER LEVERS',
          value: 'MAX TAKEOFF (50 PSI)'
        },
        FLAPS: {
          id: 'go_around_flaps',
          title: 'FLAPS',
          value: '10°'
        },
        SPEED_VX: {
          id: 'go_around_speed_vx',
          title: 'SPEED 73–80 KIAS',
          value: 'CLEAR OBSTACLES'
        },
        FLAPS_UP: {
          id: 'go_around_flaps_up',
          title: 'FLAPS UP',
          value: '@ 400 ft AGL MIN'
        },
        ACCELERATE: {
          id: 'go_around_accelerate',
          title: 'ACCELERATE',
          value: 'Vx 87 KIAS → Vy 100 KIAS'
        }
      }
    },

    AFTER_LANDING: {
      id: 'phase_after_landing',
      items: {
        FLAPS: {
          id: 'after_landing_flaps',
          title: 'FLAPS',
          value: 'UP'
        },
        STROBES: {
          id: 'after_landing_strobes',
          title: 'STROBES',
          value: 'OFF'
        },
        TAXI_LIGHTS: {
          id: 'after_landing_taxi_lights',
          title: 'TAXI LIGHTS',
          value: 'ON'
        },
        BLEED_AIR: {
          id: 'after_landing_bleed_air',
          title: 'BLEED AIR',
          value: 'AS REQ / OFF'
        },
        PITOT_HEAT: {
          id: 'after_landing_pitot_heat',
          title: 'PITOT HEAT',
          value: 'OFF'
        },
        DE_ICE: {
          id: 'after_landing_de_ice',
          title: 'DE-ICE',
          value: 'OFF'
        },
        LANDING_LIGHTS: {
          id: 'after_landing_landing_lights',
          title: 'LANDING LIGHTS',
          value: 'OFF'
        },
        TRANSPONDER: {
          id: 'after_landing_transponder',
          title: 'TRANSPONDER',
          value: 'OFF'
        },
        TRIM: {
          id: 'after_landing_trim',
          title: 'TRIM',
          value: 'RESET'
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
        RADIOS_AVIONICS: {
          id: 'shutdown_radios_avionics',
          title: 'RADIOS / AVIONICS',
          value: 'OFF'
        },
        POWER_LEVERS: {
          id: 'shutdown_power_levers',
          title: 'POWER LEVERS',
          value: 'IDLE'
        },
        PROPELLER_LEVERS: {
          id: 'shutdown_propeller_levers',
          title: 'PROPELLER LEVERS',
          value: 'FEATHERED'
        },
        GENERATORS: {
          id: 'shutdown_generators',
          title: 'GENERATORS',
          value: 'OFF'
        },
        FUEL_LEVERS: {
          id: 'shutdown_fuel_levers',
          title: 'FUEL LEVERS',
          value: 'CUT-OFF'
        },
        BOOST_PUMPS: {
          id: 'shutdown_boost_pumps',
          title: 'BOOST PUMPS',
          value: 'OFF'
        },
        LIGHTS: {
          id: 'shutdown_lights',
          title: 'LIGHTS',
          value: 'OFF'
        },
        BATTERY_EXTERNAL_SWITCH: {
          id: 'shutdown_battery_external_switch',
          title: 'BATTERY/EXTERNAL SWITCH',
          value: 'OFF'
        },
        DC_MASTER_SWITCH: {
          id: 'shutdown_dc_master_switch',
          title: 'D.C. MASTER SWITCH',
          value: 'OFF'
        },
        CONTROL_LOCKS: {
          id: 'shutdown_control_locks',
          title: 'CONTROL LOCKS',
          value: 'APPLIED'
        }
      }
    }
  }
};

export default checklist;
