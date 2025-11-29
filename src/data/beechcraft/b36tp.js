const checklist = {
  FLIGHT_PHASES: {
    BEFORE_STARTING_ENGINE: {
      id: 'phase_before_starting_engine',
      items: {
        PREFLIGHT_INSPECTION: {
          id: 'before_starting_engine_preflight_inspection',
          title: 'Preflight inspection',
          value: 'complete'
        },
        CONTROL_LOCKS_REMOVE: {
          id: 'before_starting_engine_control_locks_remove',
          title: 'Control locks',
          value: 'remove'
        },
        SEATS_AND_SEATBELTS: {
          id: 'before_starting_engine_seats_and_seatbelts',
          title: 'Seats & seatbelts',
          value: 'secure'
        },
        CABIN_DOORS: {
          id: 'before_starting_engine_cabin_doors',
          title: 'Cabin doors',
          value: 'latched'
        },
        PARKING_BRAKE_SET: {
          id: 'before_starting_engine_parking_brake_set',
          title: 'Parking brake',
          value: 'set'
        },
        EMERGENCY_GEAR_HANDLE: {
          id: 'before_starting_engine_emergency_gear_handle',
          title: 'Emergency gear handle',
          value: 'stowed'
        },
        AVIONICS_BREAKERS: {
          id: 'before_starting_engine_avionics_breakers',
          title: 'Avionics breakers',
          value: 'all in'
        },
        FLAPS_UP: {
          id: 'before_starting_engine_flaps_up',
          title: 'Flaps',
          value: 'up'
        },
        OXYGEN_PRESSURE: {
          id: 'before_starting_engine_oxygen_pressure',
          title: 'Oxygen pressure',
          value: '1550-1850 psi'
        },
        AVIONICS_OFF: {
          id: 'before_starting_engine_avionics_off',
          title: 'Avionics',
          value: 'off'
        },
        POWER_LEVER_IDLE: {
          id: 'before_starting_engine_power_lever_idle',
          title: 'Power lever',
          value: 'flight idle'
        },
        PROPELLER_HIGH_RPM: {
          id: 'before_starting_engine_propeller_high_rpm',
          title: 'Propeller',
          value: 'high RPM'
        },
        CONDITION_LEVER_CUTOFF: {
          id: 'before_starting_engine_condition_lever_cutoff',
          title: 'Condition lever',
          value: 'cut-off'
        },
        AILERON_TRIM: {
          id: 'before_starting_engine_aileron_trim',
          title: 'Aileron trim',
          value: 'centered'
        },
        FIREWALL_FUEL_SHUTOFF: {
          id: 'before_starting_engine_firewall_fuel_shutoff',
          title: 'Firewall fuel shutoff',
          value: 'open (push)'
        },
        ICE_DEFLECTOR_OFF: {
          id: 'before_starting_engine_ice_deflector_off',
          title: 'Ice deflector',
          value: 'off'
        },
        OIL_DOOR_OPEN: {
          id: 'before_starting_engine_oil_door_open',
          title: 'Oil door',
          value: 'open (push)'
        },
        P3_BLEED_AIR: {
          id: 'before_starting_engine_p3_bleed_air',
          title: 'P3 bleed air',
          value: 'open'
        },
        LANDING_GEAR_DOWN: {
          id: 'before_starting_engine_landing_gear_down',
          title: 'Landing gear',
          value: 'down'
        },
        SUBPANEL_SWITCHES: {
          id: 'before_starting_engine_subpanel_switches',
          title: 'All subpanel switches',
          value: 'off'
        },
        TURBINE_ENGINE_SWITCHES: {
          id: 'before_starting_engine_turbine_engine_switches',
          title: 'All turbine engine switches',
          value: 'off'
        },
        MAIN_BREAKERS: {
          id: 'before_starting_engine_main_breakers',
          title: 'Main breakers',
          value: 'all in'
        },
        ALTERNATE_STATIC_AIR: {
          id: 'before_starting_engine_alternate_static_air',
          title: 'Alternate static air',
          value: 'normal'
        },
        CO_DETECTOR: {
          id: 'before_starting_engine_co_detector',
          title: 'CO detector',
          value: 'test'
        },
        BEACON_LIGHT: {
          id: 'before_starting_engine_beacon_light',
          title: 'Beacon light',
          value: 'on'
        },
        BATTERY_MASTER_ON: {
          id: 'before_starting_engine_battery_master_on',
          title: 'Battery master',
          value: 'on'
        },
        BUS_VOLTS_MINIMUM: {
          id: 'before_starting_engine_bus_volts_minimum',
          title: 'Bus volts',
          value: '23V minimum'
        },
        ANNUNCIATORS_TEST: {
          id: 'before_starting_engine_annunciators_test',
          title: 'Annunciators',
          value: 'test & consider'
        },
        STANDBY_ALTERNATOR: {
          id: 'before_starting_engine_standby_alternator',
          title: 'Standby alternator',
          value: 'on'
        },
        FUEL_QUANTITIES: {
          id: 'before_starting_engine_fuel_quantities',
          title: 'Fuel quantities',
          value: 'check'
        },
        FUEL_PUMP_1: {
          id: 'before_starting_engine_fuel_pump_1',
          title: 'Fuel pump 1',
          value: 'on and audible'
        },
        FUEL_PUMP_2: {
          id: 'before_starting_engine_fuel_pump_2',
          title: 'Fuel pump 2',
          value: 'on and audible'
        },
        FUEL_PUMPS_OFF: {
          id: 'before_starting_engine_fuel_pumps_off',
          title: 'Fuel pumps',
          value: 'off'
        },
        IGNITION_CHECK: {
          id: 'before_starting_engine_ignition_check',
          title: 'Ignition',
          value: 'check auto then on'
        },
        STANDBY_GYRO_PUMP_ON: {
          id: 'before_starting_engine_standby_gyro_pump_on',
          title: 'Standby gyro pump',
          value: 'on'
        },
        STBY_GYRO_ANNUN: {
          id: 'before_starting_engine_stby_gyro_annun',
          title: 'STBY GYRO annun',
          value: 'illuminated'
        },
        INSTRUMENT_AIR: {
          id: 'before_starting_engine_instrument_air',
          title: 'Instrument air',
          value: 'green'
        },
        STANDBY_GYRO_PUMP_OFF: {
          id: 'before_starting_engine_standby_gyro_pump_off',
          title: 'Standby gyro pump',
          value: 'off'
        }
      }
    },
    ENGINE_START: {
      id: 'phase_engine_start',
      items: {
        OIL_DOOR_CLOSED_IF: {
          id: 'engine_start_oil_door_closed_if',
          title: 'Oil door closed if...',
          value: 'exceptionally cold'
        },
        STARTER_ON: {
          id: 'engine_start_starter_on',
          title: 'Starter',
          value: 'on'
        },
        BUS_VOLTS: {
          id: 'engine_start_bus_volts',
          title: 'Bus volts',
          value: '15V minimum'
        },
        GAS_GENERATOR: {
          id: 'engine_start_gas_generator',
          title: 'Gas generator',
          value: '15% minimum'
        },
        CONDITION_LEVER_ON: {
          id: 'engine_start_condition_lever_on',
          title: 'Condition lever',
          value: 'on'
        },
        ITT: {
          id: 'engine_start_itt',
          title: 'ITT',
          value: 'less than 1090C'
        },
        STARTER_OFF: {
          id: 'engine_start_starter_off',
          title: 'Starter',
          value: 'off at 52% Ng'
        },
        IGNITION_OFF: {
          id: 'engine_start_ignition_off',
          title: 'Ignition',
          value: 'off'
        },
        ENGINE_INSTRUMENTS: {
          id: 'engine_start_engine_instruments',
          title: 'Engine instruments',
          value: 'check'
        },
        GENERATOR_ON: {
          id: 'engine_start_generator_on',
          title: 'Generator',
          value: 'on'
        },
        GENERATOR_LOAD: {
          id: 'engine_start_generator_load',
          title: 'Generator load',
          value: 'below 60A in 2min'
        },
        BUS_VOLTS_NORMAL: {
          id: 'engine_start_bus_volts_normal',
          title: 'Bus volts',
          value: '28V'
        }
      }
    },
    AFTER_STARTING: {
      id: 'phase_after_starting',
      items: {
        ANNUNCIATORS_EXTINGUISHED: {
          id: 'after_starting_annunciators_extinguished',
          title: 'All annunciators',
          value: 'extinguished'
        },
        GENERATOR_LOAD_25A: {
          id: 'after_starting_generator_load_25a',
          title: 'Generator load',
          value: 'below 25A in 2min'
        },
        LIGHTS_AS_REQUIRED: {
          id: 'after_starting_lights_as_required',
          title: 'Lights',
          value: 'as required'
        },
        WEATHER_RADAR: {
          id: 'after_starting_weather_radar',
          title: 'Weather radar',
          value: 'off/standby'
        },
        AVIONICS_ON: {
          id: 'after_starting_avionics_on',
          title: 'Avionics',
          value: 'on'
        },
        CABIN_AIR_HEAT: {
          id: 'after_starting_cabin_air_heat',
          title: 'Cabin air & heat',
          value: 'as desired'
        },
        AIR_CONDITIONING: {
          id: 'after_starting_air_conditioning',
          title: 'Air conditioning',
          value: 'as desired'
        },
        PARKING_BRAKE_RELEASE: {
          id: 'after_starting_parking_brake_release',
          title: 'Parking brake',
          value: 'release'
        },
        BRAKES_CHECK: {
          id: 'after_starting_brakes_check',
          title: 'Brakes',
          value: 'check'
        }
      }
    },
    RUNUP: {
      id: 'phase_runup',
      items: {
        RUNUP_PARKING_BRAKE: {
          id: 'runup_parking_brake',
          title: 'Parking brake',
          value: 'set'
        },
        RUNUP_ANNUNCIATORS: {
          id: 'runup_annunciators',
          title: 'Annunciators',
          value: 'test & consider'
        },
        REMOTE_COMPASS: {
          id: 'runup_remote_compass',
          title: 'Remote compass',
          value: 'slaved & aligned'
        },
        FUEL_PUMP_1_ON: {
          id: 'runup_fuel_pump_1_on',
          title: 'Fuel pump 1',
          value: 'on'
        },
        POWER_LEVER_2000: {
          id: 'runup_power_lever_2000',
          title: 'Power lever',
          value: '2000 RPM'
        },
        PROP_GOV_TEST: {
          id: 'runup_prop_gov_test',
          title: 'Prop gov test',
          value: '1990 RPM'
        },
        EXERCISE_PROPELLER: {
          id: 'runup_exercise_propeller',
          title: 'Exercise propeller',
          value: 'to 1500 RPM'
        },
        FIRE_DETECTOR_TEST: {
          id: 'runup_fire_detector_test',
          title: 'Fire detector',
          value: 'test'
        },
        GENERATOR_RESET: {
          id: 'runup_generator_reset',
          title: 'Generator reset',
          value: 'hold'
        },
        GENERATOR_LOAD_ZERO: {
          id: 'runup_generator_load_zero',
          title: 'Generator load',
          value: 'zero'
        },
        STBY_ALT_ANNUN: {
          id: 'runup_stby_alt_annun',
          title: 'STBY ALT annun',
          value: 'illuminated'
        },
        GENERATOR_LOAD_75A: {
          id: 'runup_generator_load_75a',
          title: 'Generator load',
          value: 'below 75A'
        },
        POWER_LEVER_IDLE: {
          id: 'runup_power_lever_idle',
          title: 'Power lever',
          value: 'idle'
        },
        ICE_DEFLECTOR_ON: {
          id: 'runup_ice_deflector_on',
          title: 'Ice deflector',
          value: 'on'
        },
        OIL_DOOR_ON: {
          id: 'runup_oil_door_on',
          title: 'Oil door',
          value: 'on'
        },
        OIL_DOOR_CLOSED_ANNUN: {
          id: 'runup_oil_door_closed_annun',
          title: 'OIL DR CLOSED annun',
          value: 'illuminated'
        },
        OIL_DOOR_OPEN_UNLESS: {
          id: 'runup_oil_door_open_unless',
          title: 'Oil door open unless...',
          value: 'exceptionally cold'
        },
        INSTRUMENT_AIR_GREEN: {
          id: 'runup_instrument_air_green',
          title: 'Instrument air',
          value: 'green'
        },
        PROPELLER_HEAT_ON: {
          id: 'runup_propeller_heat_on',
          title: 'Propeller heat',
          value: 'on'
        },
        PROP_HEAT_TEST: {
          id: 'runup_prop_heat_test',
          title: 'Prop heat test',
          value: 'press & hold'
        },
        PROPELLER_AMPS: {
          id: 'runup_propeller_amps',
          title: 'Propeller amps',
          value: '20-25A'
        },
        PROPELLER_HEAT_OFF: {
          id: 'runup_propeller_heat_off',
          title: 'Propeller heat',
          value: 'off'
        },
        ELECTRIC_TRIM_EXERCISE: {
          id: 'runup_electric_trim_exercise',
          title: 'Electric trim',
          value: 'exercise'
        },
        AUTOPILOT_TEST: {
          id: 'runup_autopilot_test',
          title: 'Autopilot',
          value: 'test'
        },
        HEADING_BUG_LEFT: {
          id: 'runup_heading_bug_left',
          title: 'Heading bug',
          value: '30 degrees left'
        },
        AUTOPILOT_MASTER: {
          id: 'runup_autopilot_master',
          title: 'Autopilot master',
          value: 'engage'
        },
        HEADING_MODE: {
          id: 'runup_heading_mode',
          title: 'Heading mode',
          value: 'engage'
        },
        YOKE_MOVEMENT_LEFT: {
          id: 'runup_yoke_movement_left',
          title: 'Yoke movement',
          value: 'observe'
        },
        FLIGHT_DIRECTOR_LEFT: {
          id: 'runup_flight_director_left',
          title: 'Flight director',
          value: 'bank left'
        },
        HEADING_BUG_RIGHT: {
          id: 'runup_heading_bug_right',
          title: 'Heading bug',
          value: '30 degrees right'
        },
        YOKE_MOVEMENT_RIGHT: {
          id: 'runup_yoke_movement_right',
          title: 'Yoke movement',
          value: 'observe'
        },
        FLIGHT_DIRECTOR_RIGHT: {
          id: 'runup_flight_director_right',
          title: 'Flight director',
          value: 'bank right'
        },
        AUTOPILOT_DISCONNECT_AP: {
          id: 'runup_autopilot_disconnect_ap',
          title: 'Autopilot disconnect',
          value: 'press AP off'
        },
        AUTOPILOT_DISCONNECT_FD: {
          id: 'runup_autopilot_disconnect_fd',
          title: 'Autopilot disconnect',
          value: 'press FD off'
        },
        ELEVATOR_TRIM: {
          id: 'runup_elevator_trim',
          title: 'Elevator trim',
          value: 'set takeoff'
        },
        ICE_DEFLEC_ANNUN: {
          id: 'runup_ice_deflec_annun',
          title: 'ICE DEFLEC annun',
          value: 'illuminated'
        },
        ICE_DEFLECTOR_REQUIRED: {
          id: 'runup_ice_deflector_required',
          title: 'Ice deflector',
          value: 'as required'
        },
        FLAPS_CHECK: {
          id: 'runup_flaps_check',
          title: 'Flaps',
          value: 'check operation'
        },
        RUNUP_FLAPS_SET_TAKEOFF: {
          id: 'runup_flaps_set_takeoff',
          title: 'Flaps',
          value: 'set takeoff'
        },
        RUNUP_COCKPIT_WINDOW: {
          id: 'runup_cockpit_window',
          title: 'Cockpit window',
          value: 'closed'
        },
        RUNUP_AFT_DOOR_ANNUN: {
          id: 'runup_aft_door_annun',
          title: 'AFT DOOR annun',
          value: 'extinguished'
        },
        RUNUP_FLIGHT_CONTROLS: {
          id: 'runup_flight_controls',
          title: 'Flight controls',
          value: 'free & correct'
        },
        RUNUP_ALTIMETER_SET: {
          id: 'runup_altimeter_set',
          title: 'Altimeter',
          value: 'set'
        },
        RUNUP_DEPARTURE_ALTITUDE: {
          id: 'runup_departure_altitude',
          title: 'Departure altitude',
          value: 'set'
        },
        RUNUP_TAKEOFF_HEADING: {
          id: 'runup_takeoff_heading',
          title: 'Takeoff heading',
          value: 'set'
        },
        RUNUP_PANEL_LIGHTS: {
          id: 'runup_panel_lights',
          title: 'Panel lights',
          value: 'dim for takeoff'
        },
        RUNUP_PARKING_BRAKE_RELEASE: {
          id: 'runup_parking_brake_release',
          title: 'Parking brake',
          value: 'release'
        }
      }
    },
    BEFORE_TAKEOFF: {
      id: 'phase_before_takeoff',
      items: {
        OIL_TEMPERATURE: {
          id: 'before_takeoff_oil_temperature',
          title: 'Oil temperature',
          value: '115F minimum'
        },
        BATT_TEMP_ANNUN: {
          id: 'before_takeoff_batt_temp_annun',
          title: 'BATT TEMP annun',
          value: 'extinguished'
        },
        AIR_CONDITIONING_OFF: {
          id: 'before_takeoff_air_conditioning_off',
          title: 'Air conditioning',
          value: 'off'
        },
        LANDING_LIGHT_ON: {
          id: 'before_takeoff_landing_light_on',
          title: 'Landing light',
          value: 'on'
        },
        TRANSPONDER: {
          id: 'before_takeoff_transponder',
          title: 'Transponder',
          value: 'ALT mode'
        },
        WEATHER_RADAR_ON: {
          id: 'before_takeoff_weather_radar_on',
          title: 'Weather radar',
          value: 'on'
        }
      }
    },
    TAKEOFF: {
      id: 'phase_takeoff',
      items: {
        TAKEOFF_POWER_LEVER: {
          id: 'takeoff_power_lever',
          title: 'Power lever',
          value: '1200 FT-LBS'
        },
        BRAKES_RELEASE: {
          id: 'takeoff_brakes_release',
          title: 'Brakes',
          value: 'release'
        },
        ENGINE_INSTRUMENTS_CHECK: {
          id: 'takeoff_engine_instruments_check',
          title: 'Engine instruments',
          value: 'check'
        },
        LANDING_GEAR_UP: {
          id: 'takeoff_landing_gear_up',
          title: 'Landing gear up',
          value: 'no rwy remain'
        },
        FLAPS_RETRACT: {
          id: 'takeoff_flaps_retract',
          title: 'Flaps',
          value: 'retract at 80kts'
        },
        AUTOPILOT_ENGAGE: {
          id: 'takeoff_autopilot_engage',
          title: 'Autopilot',
          value: 'engage'
        }
      }
    },
    MAX_CONTINUOUS_POWER: {
      id: 'phase_max_continuous_power',
      items: {
        IGNITION_SETTING: {
          id: 'max_continuous_power_ignition_setting',
          title: 'Ignition',
          value: 'auto or off'
        },
        OIL_DOOR_OPEN: {
          id: 'max_continuous_power_oil_door_open',
          title: 'Oil door open unless...',
          value: 'exceptionally cold'
        },
        PROPELLER_RPM: {
          id: 'max_continuous_power_propeller_rpm',
          title: 'Propeller',
          value: '2200 RPM'
        },
        POWER_LEVER_SETTING: {
          id: 'max_continuous_power_power_lever_setting',
          title: 'Power lever',
          value: '1200 FT-LBS'
        },
        ICE_DEFLECTOR_REQUIRED: {
          id: 'max_continuous_power_ice_deflector_required',
          title: 'Ice deflector',
          value: 'as required'
        },
        FUEL_IMBALANCE: {
          id: 'max_continuous_power_fuel_imbalance',
          title: 'Fuel imbalance',
          value: '15 gal max.'
        },
        AIR_CONDITIONING_DESIRED: {
          id: 'max_continuous_power_air_conditioning_desired',
          title: 'Air conditioning',
          value: 'as desired'
        }
      }
    },
    ENROUTE_CLIMB: {
      id: 'phase_enroute_climb',
      items: {
        ENROUTE_PROP_RPM: {
          id: 'enroute_climb_prop_rpm',
          title: 'Propeller',
          value: '2200 RPM'
        },
        ENROUTE_POWER_LEVER: {
          id: 'enroute_climb_power_lever',
          title: 'Power lever',
          value: '1100 FT-LBS'
        },
        ENROUTE_IGNITION: {
          id: 'enroute_climb_ignition',
          title: 'Ignition',
          value: 'auto or off'
        },
        ENROUTE_OIL_DOOR: {
          id: 'enroute_climb_oil_door',
          title: 'Oil door',
          value: 'closed (pull)'
        },
        ENROUTE_ICE_DEFLECTOR: {
          id: 'enroute_climb_ice_deflector',
          title: 'Ice deflector',
          value: 'as required'
        },
        ENROUTE_FUEL_IMBALANCE: {
          id: 'enroute_climb_fuel_imbalance',
          title: 'Fuel imbalance',
          value: '15 gal max.'
        },
        ENROUTE_OXYGEN: {
          id: 'enroute_climb_oxygen',
          title: 'Oxygen',
          value: 'as required'
        },
        ENROUTE_AIR_CONDITIONING: {
          id: 'enroute_climb_air_conditioning',
          title: 'Air conditioning',
          value: 'as desired'
        },
        ENROUTE_CABIN_AIR_HEAT: {
          id: 'enroute_climb_cabin_air_heat',
          title: 'Cabin air & heat',
          value: 'as desired'
        },
        ENROUTE_ENGINE_PERFORMANCE: {
          id: 'enroute_climb_engine_performance',
          title: 'Engine performance',
          value: 'monitor'
        }
      }
    },
    CRUISE: {
      id: 'phase_cruise',
      items: {
        CRUISE_IGNITION: {
          id: 'cruise_ignition',
          title: 'Ignition',
          value: 'auto or off'
        },
        CRUISE_OIL_DOOR: {
          id: 'cruise_oil_door',
          title: 'Oil door',
          value: 'closed (pull)'
        },
        CRUISE_ICE_DEFLECTOR: {
          id: 'cruise_ice_deflector',
          title: 'Ice deflector',
          value: 'as required'
        },
        CRUISE_PITOT_HEAT: {
          id: 'cruise_pitot_heat',
          title: 'Pitot heat',
          value: 'on if OAT less than 4C'
        },
        CRUISE_PROP_HEAT: {
          id: 'cruise_prop_heat',
          title: 'Propeller heat',
          value: 'as required'
        },
        CRUISE_FUEL_IMBALANCE: {
          id: 'cruise_fuel_imbalance',
          title: 'Fuel imbalance',
          value: '15 gal max.'
        },
        CRUISE_PROPELLER: {
          id: 'cruise_propeller',
          title: 'Propeller',
          value: '2000 RPM'
        },
        CRUISE_POWER_LEVER: {
          id: 'cruise_power_lever',
          title: 'Power lever',
          value: '1050 FT-LBS'
        },
        CRUISE_OXYGEN: {
          id: 'cruise_oxygen',
          title: 'Oxygen',
          value: 'as required'
        },
        CRUISE_AIR_CONDITIONING: {
          id: 'cruise_air_conditioning',
          title: 'Air conditioning',
          value: 'as desired'
        },
        CRUISE_CABIN_AIR_HEAT: {
          id: 'cruise_cabin_air_heat',
          title: 'Cabin air & heat',
          value: 'as desired'
        },
        CRUISE_ENGINE_PERFORMANCE: {
          id: 'cruise_engine_performance',
          title: 'Engine performance',
          value: 'monitor'
        }
      }
    },
    DESCENT: {
      id: 'phase_descent',
      items: {
        DESCENT_IGNITION: {
          id: 'descent_ignition',
          title: 'Ignition',
          value: 'auto or off'
        },
        DESCENT_OIL_DOOR: {
          id: 'descent_oil_door',
          title: 'Oil door',
          value: 'closed (pull)'
        },
        DESCENT_ICE_DEFLECTOR: {
          id: 'descent_ice_deflector',
          title: 'Ice deflector',
          value: 'as required'
        },
        DESCENT_POWER_LEVER: {
          id: 'descent_power_lever',
          title: 'Power lever',
          value: 'reduce'
        },
        DESCENT_ENGINE_PERFORMANCE: {
          id: 'descent_engine_performance',
          title: 'Engine performance',
          value: 'monitor'
        },
        DESCENT_ICE_PROTECTION: {
          id: 'descent_ice_protection',
          title: 'Ice protection',
          value: 'as required'
        },
        DESCENT_FUEL_IMBALANCE: {
          id: 'descent_fuel_imbalance',
          title: 'Fuel imbalance',
          value: '15 gal max.'
        }
      }
    },
    APPROACH: {
      id: 'phase_approach',
      items: {
        APPROACH_SEATS: {
          id: 'approach_seats',
          title: 'Seats & seatbelts',
          value: 'secure'
        },
        FUEL_SELECTOR_FULL: {
          id: 'approach_fuel_selector_full',
          title: 'Fuel selector',
          value: 'fullest tank'
        },
        APPROACH_OXYGEN: {
          id: 'approach_oxygen',
          title: 'Oxygen',
          value: 'off'
        },
        APPROACH_LANDING_LIGHT: {
          id: 'approach_landing_light',
          title: 'Landing light',
          value: 'on'
        },
        APPROACH_PITOT_HEAT: {
          id: 'approach_pitot_heat',
          title: 'Pitot heat',
          value: 'on if OAT less than 4C'
        },
        APPROACH_PROP_HEAT: {
          id: 'approach_prop_heat',
          title: 'Propeller heat',
          value: 'off'
        },
        APPROACH_AIR_CONDITIONING: {
          id: 'approach_air_conditioning',
          title: 'Air conditioning',
          value: 'off'
        },
        APPROACH_IGNITION: {
          id: 'approach_ignition',
          title: 'Ignition',
          value: 'auto'
        },
        APPROACH_ICE_DEFLECTOR: {
          id: 'approach_ice_deflector',
          title: 'Ice deflector',
          value: 'as required'
        },
        APPROACH_FLAPS: {
          id: 'approach_flaps',
          title: 'Flaps',
          value: 'approach'
        }
      }
    },
    LANDING: {
      id: 'phase_landing',
      items: {
        LANDING_FUEL_PUMP: {
          id: 'landing_fuel_pump',
          title: 'Fuel pump 1',
          value: 'on'
        },
        LANDING_PROPELLER: {
          id: 'landing_propeller',
          title: 'Propeller',
          value: 'high RPM'
        },
        LANDING_OIL_DOOR: {
          id: 'landing_oil_door',
          title: 'Oil door open unless...',
          value: 'exceptionally cold'
        },
        LANDING_FLAPS: {
          id: 'landing_flaps',
          title: 'Flaps',
          value: 'as required'
        },
        LANDING_GEAR_DOWN: {
          id: 'landing_landing_gear_down',
          title: 'Landing gear',
          value: 'down & locked'
        },
        AUTOPILOT_DISCONNECT: {
          id: 'landing_autopilot_disconnect',
          title: 'Autopilot disconnect',
          value: 'press once'
        }
      }
    },
    AFTER_LANDING: {
      id: 'phase_after_landing',
      items: {
        AFTER_LANDING_IGNITION: {
          id: 'after_landing_ignition',
          title: 'Ignition',
          value: 'off'
        },
        AFTER_LANDING_FLAPS: {
          id: 'after_landing_flaps',
          title: 'Flaps',
          value: 'up'
        },
        AFTER_LANDING_ICE_DEFLECTOR: {
          id: 'after_landing_ice_deflector',
          title: 'Ice deflector',
          value: 'as required'
        },
        AFTER_LANDING_WEATHER_RADAR: {
          id: 'after_landing_weather_radar',
          title: 'Weather radar',
          value: 'off/standby'
        },
        AFTER_LANDING_LIGHTS: {
          id: 'after_landing_lights',
          title: 'Lights',
          value: 'as required'
        },
        AFTER_LANDING_PITOT_HEAT: {
          id: 'after_landing_pitot_heat',
          title: 'Pitot heat',
          value: 'off'
        },
        AFTER_LANDING_AIR_CONDITIONING: {
          id: 'after_landing_air_conditioning',
          title: 'Air conditioning',
          value: 'as desired'
        },
        AFTER_LANDING_CABIN_AIR_HEAT: {
          id: 'after_landing_cabin_air_heat',
          title: 'Cabin air & heat',
          value: 'as desired'
        }
      }
    },
    SHUTDOWN_AND_SECURING: {
      id: 'phase_shutdown_and_securing',
      items: {
        SHUTDOWN_PARKING_BRAKE: {
          id: 'shutdown_parking_brake',
          title: 'Parking brake',
          value: 'set'
        },
        SHUTDOWN_AVIONICS: {
          id: 'shutdown_avionics',
          title: 'Avionics',
          value: 'off'
        },
        SHUTDOWN_SUBPANEL_SWITCHES: {
          id: 'shutdown_subpanel_switches',
          title: 'All subpanel switches',
          value: 'off'
        },
        SHUTDOWN_THROTTLE: {
          id: 'shutdown_throttle',
          title: 'Throttle',
          value: 'idle'
        },
        SHUTDOWN_PROPELLER: {
          id: 'shutdown_propeller',
          title: 'Propeller',
          value: 'high RPM'
        },
        SHUTDOWN_CONDITION_LEVER: {
          id: 'shutdown_condition_lever',
          title: 'Condition lever',
          value: 'cut-off'
        },
        SHUTDOWN_GENERATOR: {
          id: 'shutdown_generator',
          title: 'Generator',
          value: 'off'
        },
        SHUTDOWN_STANDBY_ALTERNATOR: {
          id: 'shutdown_standby_alternator',
          title: 'Standby alternator',
          value: 'off'
        },
        SHUTDOWN_FUEL_PUMPS: {
          id: 'shutdown_fuel_pumps',
          title: 'Fuel pumps',
          value: 'off when Ng below 10%'
        },
        SHUTDOWN_BATTERY_MASTER: {
          id: 'shutdown_battery_master',
          title: 'Battery master',
          value: 'off'
        },
        SHUTDOWN_PARKING_BRAKE_RELEASE: {
          id: 'shutdown_parking_brake_release',
          title: 'Parking brake',
          value: 'release'
        },
        SHUTDOWN_CONTROL_LOCKS: {
          id: 'shutdown_control_locks',
          title: 'Control locks',
          value: 'install'
        }
      }
    }
  }
};

export default checklist;
