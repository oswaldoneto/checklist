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
        CONTROL_LOCKS: {
          id: 'before_starting_engine_control_locks',
          title: 'Control locks',
          value: 'stowed'
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
        PARKING_BRAKE: {
          id: 'before_starting_engine_parking_brake',
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
        FLAPS: {
          id: 'before_starting_engine_flaps',
          title: 'Flaps',
          value: 'up'
        },
        AVIONICS: {
          id: 'before_starting_engine_avionics',
          title: 'Avionics',
          value: 'off'
        },
        THROTTLES: {
          id: 'before_starting_engine_throttles',
          title: 'Throttles',
          value: 'closed'
        },
        PROPELLERS: {
          id: 'before_starting_engine_propellers',
          title: 'Propellers',
          value: 'high RPM'
        },
        MIXTURES: {
          id: 'before_starting_engine_mixtures',
          title: 'Mixtures',
          value: 'full rich'
        },
        COWL_FLAPS: {
          id: 'before_starting_engine_cowl_flaps',
          title: 'Cowl flaps',
          value: 'open'
        },
        AILERON_AND_RUDDER_TRIM: {
          id: 'before_starting_engine_aileron_and_rudder_trim',
          title: 'Aileron & rudder trim',
          value: 'centered'
        },
        LANDING_GEAR: {
          id: 'before_starting_engine_landing_gear',
          title: 'Landing gear',
          value: 'down'
        },
        ALL_SUBPANEL_SWITCHES: {
          id: 'before_starting_engine_all_subpanel_switches',
          title: 'All subpanel switches',
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
        FUEL_SELECTORS: {
          id: 'before_starting_engine_fuel_selectors',
          title: 'Fuel selectors',
          value: 'on'
        },
        CABIN_PRESS_SHUTOFF: {
          id: 'before_starting_engine_cabin_press_shutoff',
          title: 'Cabin press shutoff',
          value: 'pushed'
        },
        DOOR_SEAL_STANDBY_AIR: {
          id: 'before_starting_engine_door_seal_standby_air',
          title: 'Door seal standby air',
          value: 'off'
        },
        CABIN_PRESS_MODE: {
          id: 'before_starting_engine_cabin_press_mode',
          title: 'Cabin press mode',
          value: 'dump'
        },
        DOOR_SEAL_MODE: {
          id: 'before_starting_engine_door_seal_mode',
          title: 'Door seal mode',
          value: 'off'
        },
        BEACON_LIGHT: {
          id: 'before_starting_engine_beacon_light',
          title: 'Beacon light',
          value: 'on'
        },
        BATTERY_MASTER: {
          id: 'before_starting_engine_battery_master',
          title: 'Battery master',
          value: 'on'
        },
        BUS_VOLTS: {
          id: 'before_starting_engine_bus_volts',
          title: 'Bus volts',
          value: '23V minimum'
        },
        ANNUNCIATORS: {
          id: 'before_starting_engine_annunciators',
          title: 'Annunciators',
          value: 'test & consider'
        },
        LEFT_AND_RIGHT_ALTERNATORS: {
          id: 'before_starting_engine_left_and_right_alternators',
          title: 'Left & right alternators',
          value: 'on'
        },
        FUEL_QUANTITIES: {
          id: 'before_starting_engine_fuel_quantities',
          title: 'Fuel quantities',
          value: 'check'
        },
        CABIN_HEATER: {
          id: 'before_starting_engine_cabin_heater',
          title: 'Cabin heater',
          value: 'as desired'
        },
        LEFT_BOOST_PUMP: {
          id: 'before_starting_engine_left_boost_pump',
          title: 'Left boost pump',
          value: 'lo, audible, then off'
        },
        RIGHT_BOOST_PUMP: {
          id: 'before_starting_engine_right_boost_pump',
          title: 'Right boost pump',
          value: 'lo, audible, then off'
        }
      }
    },
    ENGINE_START_COLD: {
      id: 'phase_engine_start_cold',
      items: {
        RIGHT_MIXTURE: {
          id: 'engine_start_cold_right_mixture',
          title: 'Right mixture',
          value: 'full rich'
        },
        RIGHT_PROPELLER: {
          id: 'engine_start_cold_right_propeller',
          title: 'Right propeller',
          value: 'high RPM'
        },
        RIGHT_THROTTLE: {
          id: 'engine_start_cold_right_throttle',
          title: 'Right throttle',
          value: 'full open'
        },
        RIGHT_BOOST_PUMP: {
          id: 'engine_start_cold_right_boost_pump',
          title: 'Right boost pump',
          value: 'hi 2-3s, fuel flow above 3 GPH'
        },
        RIGHT_BOOST_PUMP_OFF: {
          id: 'engine_start_cold_right_boost_pump_off',
          title: 'Right boost pump',
          value: 'off'
        },
        RIGHT_THROTTLE_OPEN_1_2_IN: {
          id: 'engine_start_cold_right_throttle_open_1_2_in',
          title: 'Right throttle',
          value: 'open 1/2 in'
        },
        RIGHT_STARTER: {
          id: 'engine_start_cold_right_starter',
          title: 'Right starter',
          value: 'engage'
        },
        RIGHT_THROTTLE_1000_1200_RPM: {
          id: 'engine_start_cold_right_throttle_1000_1200_rpm',
          title: 'Right throttle',
          value: '1000-1200 RPM'
        },
        OIL_PRESSURE: {
          id: 'engine_start_cold_oil_pressure',
          title: 'Oil pressure',
          value: 'green'
        },
        START_AND_LOW_VOLTS_ANNUNCIATORS: {
          id: 'engine_start_cold_start_and_low_volts_annunciators',
          title: 'Start & low volts annunciators',
          value: 'extinguished'
        },
        R_ALT_ANNUNCIATOR: {
          id: 'engine_start_cold_r_alt_annunciator',
          title: 'R ALT annunciator',
          value: 'extinguished'
        },
        RIGHT_ALTERNATOR_LOAD: {
          id: 'engine_start_cold_right_alternator_load',
          title: 'Right alternator load',
          value: 'below 25A in 2 min'
        },
        BUS_VOLTS: {
          id: 'engine_start_cold_bus_volts',
          title: 'Bus volts',
          value: '28V'
        },
        ENGINE_INSTRUMENTS: {
          id: 'engine_start_cold_engine_instruments',
          title: 'Engine instruments',
          value: 'check'
        },
        LEFT_MIXTURE: {
          id: 'engine_start_cold_left_mixture',
          title: 'Left mixture',
          value: 'full rich'
        },
        LEFT_PROPELLER: {
          id: 'engine_start_cold_left_propeller',
          title: 'Left propeller',
          value: 'high RPM'
        },
        LEFT_THROTTLE: {
          id: 'engine_start_cold_left_throttle',
          title: 'Left throttle',
          value: 'full open'
        },
        LEFT_BOOST_PUMP: {
          id: 'engine_start_cold_left_boost_pump',
          title: 'Left boost pump',
          value: 'hi 2-3s, fuel flow above 3 GPH'
        },
        LEFT_BOOST_PUMP_OFF: {
          id: 'engine_start_cold_left_boost_pump_off',
          title: 'Left boost pump',
          value: 'off'
        },
        LEFT_THROTTLE_OPEN_1_2_IN: {
          id: 'engine_start_cold_left_throttle_open_1_2_in',
          title: 'Left throttle',
          value: 'open 1/2 in'
        },
        LEFT_STARTER: {
          id: 'engine_start_cold_left_starter',
          title: 'Left starter',
          value: 'engage'
        },
        LEFT_THROTTLE_1000_1200_RPM: {
          id: 'engine_start_cold_left_throttle_1000_1200_rpm',
          title: 'Left throttle',
          value: '1000-1200 RPM'
        },
        OIL_PRESSURE_GREEN: {
          id: 'engine_start_cold_oil_pressure_green',
          title: 'Oil pressure',
          value: 'green'
        },
        START_AND_LOW_VOLTS_ANNUNCIATORS_EXTINGUISHED: {
          id: 'engine_start_cold_start_and_low_volts_annunciators_extinguished',
          title: 'Start & low volts annunciators',
          value: 'extinguished'
        },
        L_ALT_ANNUNCIATOR: {
          id: 'engine_start_cold_l_alt_annunciator',
          title: 'L ALT annunciator',
          value: 'extinguished'
        },
        LEFT_ALTERNATOR_LOAD: {
          id: 'engine_start_cold_left_alternator_load',
          title: 'Left alternator load',
          value: 'below 25A in 2 min'
        },
        BUS_VOLTS_28V: {
          id: 'engine_start_cold_bus_volts_28v',
          title: 'Bus volts',
          value: '28V'
        },
        ENGINE_INSTRUMENTS_CHECK: {
          id: 'engine_start_cold_engine_instruments_check',
          title: 'Engine instruments',
          value: 'check'
        }
      }
    },
    ENGINE_START_HOT: {
      id: 'phase_engine_start_hot',
      items: {
        RIGHT_MIXTURE: {
          id: 'engine_start_hot_right_mixture',
          title: 'Right mixture',
          value: 'cut-off'
        },
        RIGHT_PROPELLER: {
          id: 'engine_start_hot_right_propeller',
          title: 'Right propeller',
          value: 'high RPM'
        },
        RIGHT_BOOST_PUMP: {
          id: 'engine_start_hot_right_boost_pump',
          title: 'Right boost pump',
          value: 'hi 10-20s, then off'
        },
        RIGHT_MIXTURE_FULL_RICH: {
          id: 'engine_start_hot_right_mixture_full_rich',
          title: 'Right mixture',
          value: 'full rich'
        },
        RIGHT_THROTTLE: {
          id: 'engine_start_hot_right_throttle',
          title: 'Right throttle',
          value: 'full open'
        },
        RIGHT_BOOST_PUMP_HI_2_3S_FUEL_FLOW_ABOVE_3_GPH: {
          id: 'engine_start_hot_right_boost_pump_hi_2_3s_fuel_flow_above_3_gph',
          title: 'Right boost pump',
          value: 'hi 2-3s, fuel flow above 3 GPH'
        },
        RIGHT_BOOST_PUMP_OFF: {
          id: 'engine_start_hot_right_boost_pump_off',
          title: 'Right boost pump',
          value: 'off'
        },
        RIGHT_THROTTLE_OPEN_1_2_IN: {
          id: 'engine_start_hot_right_throttle_open_1_2_in',
          title: 'Right throttle',
          value: 'open 1/2 in'
        },
        RIGHT_STARTER: {
          id: 'engine_start_hot_right_starter',
          title: 'Right starter',
          value: 'engage, repeat if no start'
        },
        RIGHT_THROTTLE_1000_1200_RPM: {
          id: 'engine_start_hot_right_throttle_1000_1200_rpm',
          title: 'Right throttle',
          value: '1000-1200 RPM'
        },
        OIL_PRESSURE: {
          id: 'engine_start_hot_oil_pressure',
          title: 'Oil pressure',
          value: 'green'
        },
        START_AND_LOW_VOLTS_ANNUNCIATORS: {
          id: 'engine_start_hot_start_and_low_volts_annunciators',
          title: 'Start & low volts annunciators',
          value: 'extinguished'
        },
        R_ALT_ANNUNCIATOR: {
          id: 'engine_start_hot_r_alt_annunciator',
          title: 'R ALT annunciator',
          value: 'extinguished'
        },
        RIGHT_ALTERNATOR_LOAD: {
          id: 'engine_start_hot_right_alternator_load',
          title: 'Right alternator load',
          value: 'below 25A in 2 min'
        },
        BUS_VOLTS: {
          id: 'engine_start_hot_bus_volts',
          title: 'Bus volts',
          value: '28V'
        },
        ENGINE_INSTRUMENTS: {
          id: 'engine_start_hot_engine_instruments',
          title: 'Engine instruments',
          value: 'check'
        },
        LEFT_MIXTURE: {
          id: 'engine_start_hot_left_mixture',
          title: 'Left mixture',
          value: 'cut-off'
        },
        LEFT_PROPELLER: {
          id: 'engine_start_hot_left_propeller',
          title: 'Left propeller',
          value: 'high RPM'
        },
        LEFT_BOOST_PUMP: {
          id: 'engine_start_hot_left_boost_pump',
          title: 'Left boost pump',
          value: 'hi 10-20s, then off'
        },
        LEFT_MIXTURE_FULL_RICH: {
          id: 'engine_start_hot_left_mixture_full_rich',
          title: 'Left mixture',
          value: 'full rich'
        },
        LEFT_THROTTLE: {
          id: 'engine_start_hot_left_throttle',
          title: 'Left throttle',
          value: 'full open'
        },
        LEFT_BOOST_PUMP_HI_2_3S_FUEL_FLOW_ABOVE_3_GPH: {
          id: 'engine_start_hot_left_boost_pump_hi_2_3s_fuel_flow_above_3_gph',
          title: 'Left boost pump',
          value: 'hi 2-3s, fuel flow above 3 GPH'
        },
        LEFT_BOOST_PUMP_OFF: {
          id: 'engine_start_hot_left_boost_pump_off',
          title: 'Left boost pump',
          value: 'off'
        },
        LEFT_THROTTLE_OPEN_1_2_IN: {
          id: 'engine_start_hot_left_throttle_open_1_2_in',
          title: 'Left throttle',
          value: 'open 1/2 in'
        },
        LEFT_STARTER: {
          id: 'engine_start_hot_left_starter',
          title: 'Left starter',
          value: 'engage, repeat if no start'
        },
        LEFT_THROTTLE_1000_1200_RPM: {
          id: 'engine_start_hot_left_throttle_1000_1200_rpm',
          title: 'Left throttle',
          value: '1000-1200 RPM'
        },
        OIL_PRESSURE_GREEN: {
          id: 'engine_start_hot_oil_pressure_green',
          title: 'Oil pressure',
          value: 'green'
        },
        START_AND_LOW_VOLTS_ANNUNCIATORS_EXTINGUISHED: {
          id: 'engine_start_hot_start_and_low_volts_annunciators_extinguished',
          title: 'Start & low volts annunciators',
          value: 'extinguished'
        },
        L_ALT_ANNUNCIATOR: {
          id: 'engine_start_hot_l_alt_annunciator',
          title: 'L ALT annunciator',
          value: 'extinguished'
        },
        LEFT_ALTERNATOR_LOAD: {
          id: 'engine_start_hot_left_alternator_load',
          title: 'Left alternator load',
          value: 'below 25A in 2 min'
        },
        BUS_VOLTS_28V: {
          id: 'engine_start_hot_bus_volts_28v',
          title: 'Bus volts',
          value: '28V'
        },
        ENGINE_INSTRUMENTS_CHECK: {
          id: 'engine_start_hot_engine_instruments_check',
          title: 'Engine instruments',
          value: 'check'
        }
      }
    },
    ENGINE_START_FLOODED: {
      id: 'phase_engine_start_flooded',
      items: {
        RIGHT_MIXTURE: {
          id: 'engine_start_flooded_right_mixture',
          title: 'Right mixture',
          value: 'lean'
        },
        RIGHT_PROPELLER: {
          id: 'engine_start_flooded_right_propeller',
          title: 'Right propeller',
          value: 'high RPM'
        },
        RIGHT_THROTTLE: {
          id: 'engine_start_flooded_right_throttle',
          title: 'Right throttle',
          value: 'open 1/2 in'
        },
        RIGHT_STARTER: {
          id: 'engine_start_flooded_right_starter',
          title: 'Right starter',
          value: 'engage'
        },
        RIGHT_THROTTLE_ADVANCE_UNTIL_START_THEN_IDLE: {
          id: 'engine_start_flooded_right_throttle_advance_until_start_then_idle',
          title: 'Right throttle',
          value: 'advance until start, then idle'
        },
        RIGHT_MIXTURE_FULL_RICH: {
          id: 'engine_start_flooded_right_mixture_full_rich',
          title: 'Right mixture',
          value: 'full rich'
        },
        OIL_PRESSURE: {
          id: 'engine_start_flooded_oil_pressure',
          title: 'Oil pressure',
          value: 'green'
        },
        START_AND_LOW_VOLTS_ANNUNCIATORS: {
          id: 'engine_start_flooded_start_and_low_volts_annunciators',
          title: 'Start & low volts annunciators',
          value: 'extinguished'
        },
        R_ALT_ANNUNCIATOR: {
          id: 'engine_start_flooded_r_alt_annunciator',
          title: 'R ALT annunciator',
          value: 'extinguished'
        },
        RIGHT_ALTERNATOR_LOAD: {
          id: 'engine_start_flooded_right_alternator_load',
          title: 'Right alternator load',
          value: 'below 25A in 2 min'
        },
        BUS_VOLTS: {
          id: 'engine_start_flooded_bus_volts',
          title: 'Bus volts',
          value: '28V'
        },
        ENGINE_INSTRUMENTS: {
          id: 'engine_start_flooded_engine_instruments',
          title: 'Engine instruments',
          value: 'check'
        },
        LEFT_MIXTURE: {
          id: 'engine_start_flooded_left_mixture',
          title: 'Left mixture',
          value: 'lean'
        },
        LEFT_PROPELLER: {
          id: 'engine_start_flooded_left_propeller',
          title: 'Left propeller',
          value: 'high RPM'
        },
        LEFT_THROTTLE: {
          id: 'engine_start_flooded_left_throttle',
          title: 'Left throttle',
          value: 'open 1/2 in'
        },
        LEFT_STARTER: {
          id: 'engine_start_flooded_left_starter',
          title: 'Left starter',
          value: 'engage'
        },
        LEFT_THROTTLE_ADVANCE_UNTIL_START_THEN_IDLE: {
          id: 'engine_start_flooded_left_throttle_advance_until_start_then_idle',
          title: 'Left throttle',
          value: 'advance until start, then idle'
        },
        LEFT_MIXTURE_FULL_RICH: {
          id: 'engine_start_flooded_left_mixture_full_rich',
          title: 'Left mixture',
          value: 'full rich'
        },
        OIL_PRESSURE_GREEN: {
          id: 'engine_start_flooded_oil_pressure_green',
          title: 'Oil pressure',
          value: 'green'
        },
        START_AND_LOW_VOLTS_ANNUNCIATORS_EXTINGUISHED: {
          id: 'engine_start_flooded_start_and_low_volts_annunciators_extinguished',
          title: 'Start & low volts annunciators',
          value: 'extinguished'
        },
        L_ALT_ANNUNCIATOR: {
          id: 'engine_start_flooded_l_alt_annunciator',
          title: 'L ALT annunciator',
          value: 'extinguished'
        },
        LEFT_ALTERNATOR_LOAD: {
          id: 'engine_start_flooded_left_alternator_load',
          title: 'Left alternator load',
          value: 'below 25A in 2 min'
        },
        BUS_VOLTS_28V: {
          id: 'engine_start_flooded_bus_volts_28v',
          title: 'Bus volts',
          value: '28V'
        },
        ENGINE_INSTRUMENTS_CHECK: {
          id: 'engine_start_flooded_engine_instruments_check',
          title: 'Engine instruments',
          value: 'check'
        }
      }
    },
    AFTER_STARTING: {
      id: 'phase_after_starting',
      items: {
        LIGHTS: {
          id: 'after_starting_lights',
          title: 'Lights',
          value: 'as required'
        },
        WEATHER_RADAR: {
          id: 'after_starting_weather_radar',
          title: 'Weather radar',
          value: 'off/standby'
        },
        AVIONICS: {
          id: 'after_starting_avionics',
          title: 'Avionics',
          value: 'on'
        },
        CABIN_AIR_AND_HEAT: {
          id: 'after_starting_cabin_air_and_heat',
          title: 'Cabin air & heat',
          value: 'as desired'
        },
        AIR_CONDITIONING: {
          id: 'after_starting_air_conditioning',
          title: 'Air conditioning',
          value: 'as desired'
        },
        MIXTURES: {
          id: 'after_starting_mixtures',
          title: 'Mixtures',
          value: 'lean for taxi'
        },
        PARKING_BRAKE: {
          id: 'after_starting_parking_brake',
          title: 'Parking brake',
          value: 'release'
        },
        BRAKES: {
          id: 'after_starting_brakes',
          title: 'Brakes',
          value: 'check'
        }
      }
    },
    RUNUP: {
      id: 'phase_runup',
      items: {
        PARKING_BRAKE: {
          id: 'runup_parking_brake',
          title: 'Parking brake',
          value: 'set'
        },
        ANNUNCIATORS: {
          id: 'runup_annunciators',
          title: 'Annunciators',
          value: 'test & consider'
        },
        REMOTE_COMPASS: {
          id: 'runup_remote_compass',
          title: 'Remote compass',
          value: 'slaved & aligned'
        },
        MIXTURES: {
          id: 'runup_mixtures',
          title: 'Mixtures',
          value: 'full rich'
        },
        THROTTLES: {
          id: 'runup_throttles',
          title: 'Throttles',
          value: '1700 RPM'
        },
        EXERCISE_PROPELLERS: {
          id: 'runup_exercise_propellers',
          title: 'Exercise propellers',
          value: 'to 300 RPM drop each'
        },
        CHECK_MAGNETOS: {
          id: 'runup_check_magnetos',
          title: 'Check magnetos',
          value: '150 RPM drop max each'
        },
        INSTRUMENT_AIR: {
          id: 'runup_instrument_air',
          title: 'Instrument air',
          value: 'green & no lights'
        },
        LEFT_ALTERNATOR: {
          id: 'runup_left_alternator',
          title: 'Left alternator',
          value: 'off, L ALT annun illuminated & load zero'
        },
        LEFT_ALTERNATOR_ON_ANNUN_EXTINGUISHED_AND_LOAD_ABOVE_10A: {
          id: 'runup_left_alternator_on_annun_extinguished_and_load_above_10a',
          title: 'Left alternator',
          value: 'on, annun extinguished & load above 10A'
        },
        RIGHT_ALTERNATOR: {
          id: 'runup_right_alternator',
          title: 'Right alternator',
          value: 'off, R ALT annun illuminated & load zero'
        },
        RIGHT_ALTERNATOR_ON_ANNUN_EXTINGUISHED_AND_LOAD_ABOVE_10A: {
          id: 'runup_right_alternator_on_annun_extinguished_and_load_above_10a',
          title: 'Right alternator',
          value: 'on, annun extinguished & load above 10A'
        },
        PROPELLER_HEAT: {
          id: 'runup_propeller_heat',
          title: 'Propeller heat',
          value: 'on, 20-25A & cycles, then off'
        },
        WINDSHIELD_HEAT: {
          id: 'runup_windshield_heat',
          title: 'Windshield heat',
          value: 'on, annun & ammeters increase, then off'
        },
        LEFT_AND_RIGHT_PITOT_HEAT: {
          id: 'runup_left_and_right_pitot_heat',
          title: 'Left & right pitot heat',
          value: 'on, annun & ammeters increase'
        },
        FUEL_VENT_HEAT: {
          id: 'runup_fuel_vent_heat',
          title: 'Fuel vent heat',
          value: 'on, ammeters increase'
        },
        STALL_WARNING_HEAT: {
          id: 'runup_stall_warning_heat',
          title: 'Stall warning heat',
          value: 'on, ammeters increase'
        },
        HEATING_SWITCHES: {
          id: 'runup_heating_switches',
          title: 'Heating switches',
          value: 'off'
        },
        SURFACE_DEICE: {
          id: 'runup_surface_deice',
          title: 'Surface deice',
          value: 'manual, boot pressure 15-20 psi'
        },
        SURFACE_DEICE_AUTO_BOOT_PRESS_ANNUN_CYCLES: {
          id: 'runup_surface_deice_auto_boot_press_annun_cycles',
          title: 'Surface deice',
          value: 'auto, boot press annun cycles'
        },
        SURFACE_DEICE_OFF: {
          id: 'runup_surface_deice_off',
          title: 'Surface deice',
          value: 'off'
        },
        COCKPIT_WINDOW: {
          id: 'runup_cockpit_window',
          title: 'Cockpit window',
          value: 'closed'
        },
        THROTTLES_2000_RPM: {
          id: 'runup_throttles_2000_rpm',
          title: 'Throttles',
          value: '2000 RPM'
        },
        CABIN_ALTITUDE_AND_DIFFERENTIAL: {
          id: 'runup_cabin_altitude_and_differential',
          title: 'Cabin altitude & differential',
          value: 'field elevation & zero'
        },
        CABIN_ALTITUDE_GOAL: {
          id: 'runup_cabin_altitude_goal',
          title: 'Cabin altitude goal',
          value: '1000ft below field elevation'
        },
        CABIN_PRESS_AND_DOOR_SEAL_MODE: {
          id: 'runup_cabin_press_and_door_seal_mode',
          title: 'Cabin press & door seal mode',
          value: 'press.'
        },
        CABIN_PRESS_TEST: {
          id: 'runup_cabin_press_test',
          title: 'Cabin press test',
          value: 'hold, observe cabin descent'
        },
        CABIN_ALTITUDE_GOAL_SET_FIRST_ASSIGNED_ALTITUDE: {
          id: 'runup_cabin_altitude_goal_set_first_assigned_altitude',
          title: 'Cabin altitude goal',
          value: 'set first assigned altitude'
        },
        CABIN_PRESS_MODE: {
          id: 'runup_cabin_press_mode',
          title: 'Cabin press mode',
          value: 'dump'
        },
        DOOR_SEAL_MODE: {
          id: 'runup_door_seal_mode',
          title: 'Door seal mode',
          value: 'off'
        },
        THROTTLES_1000_1200_RPM: {
          id: 'runup_throttles_1000_1200_rpm',
          title: 'Throttles',
          value: '1000-1200 RPM'
        },
        ELECTRIC_TRIM: {
          id: 'runup_electric_trim',
          title: 'Electric trim',
          value: 'exercise'
        },
        AUTOPILOT: {
          id: 'runup_autopilot',
          title: 'Autopilot',
          value: 'engage heading mode, check yoke & FD left and right'
        },
        AUTOPILOT_DISCONNECT_AP_AND_FD: {
          id: 'runup_autopilot_disconnect_ap_and_fd',
          title: 'Autopilot',
          value: 'disconnect AP & FD'
        },
        ELEVATOR_TRIM: {
          id: 'runup_elevator_trim',
          title: 'Elevator trim',
          value: 'set takeoff'
        },
        FLAPS: {
          id: 'runup_flaps',
          title: 'Flaps',
          value: 'check operation & set takeoff'
        },
        WINDOWS: {
          id: 'runup_windows',
          title: 'Windows',
          value: 'closed'
        },
        AFT_DOOR_ANNUNCIATOR: {
          id: 'runup_aft_door_annunciator',
          title: 'AFT DOOR annunciator',
          value: 'extinguished'
        },
        FLIGHT_CONTROLS: {
          id: 'runup_flight_controls',
          title: 'Flight controls',
          value: 'free & correct'
        },
        ALTIMETER: {
          id: 'runup_altimeter',
          title: 'Altimeter',
          value: 'set'
        },
        DEPARTURE_ALTITUDE: {
          id: 'runup_departure_altitude',
          title: 'Departure altitude',
          value: 'set'
        },
        TAKEOFF_HEADING: {
          id: 'runup_takeoff_heading',
          title: 'Takeoff heading',
          value: 'set'
        },
        PANEL_LIGHTS: {
          id: 'runup_panel_lights',
          title: 'Panel lights',
          value: 'dim for takeoff'
        },
        PARKING_BRAKE_RELEASE: {
          id: 'runup_parking_brake_release',
          title: 'Parking brake',
          value: 'release'
        }
      }
    },
    BEFORE_TAKEOFF: {
      id: 'phase_before_takeoff',
      items: {
        CABIN_PRESS_AND_DOOR_SEAL_MODE: {
          id: 'before_takeoff_cabin_press_and_door_seal_mode',
          title: 'Cabin press & door seal mode',
          value: 'press.'
        },
        MIXTURES: {
          id: 'before_takeoff_mixtures',
          title: 'Mixtures',
          value: 'max power'
        },
        OIL_TEMPERATURES: {
          id: 'before_takeoff_oil_temperatures',
          title: 'Oil temperatures',
          value: '24c minimum'
        },
        BOOST_PUMPS: {
          id: 'before_takeoff_boost_pumps',
          title: 'Boost pumps',
          value: 'off'
        },
        AIR_CONDITIONING: {
          id: 'before_takeoff_air_conditioning',
          title: 'Air conditioning',
          value: 'off'
        },
        LANDING_LIGHTS: {
          id: 'before_takeoff_landing_lights',
          title: 'Landing lights',
          value: 'on'
        },
        TRANSPONDER: {
          id: 'before_takeoff_transponder',
          title: 'Transponder',
          value: 'alt mode'
        },
        WEATHER_RADAR: {
          id: 'before_takeoff_weather_radar',
          title: 'Weather radar',
          value: 'on'
        }
      }
    },
    TAKEOFF: {
      id: 'phase_takeoff',
      items: {
        THROTTLES: {
          id: 'takeoff_throttles',
          title: 'Throttles',
          value: 'full open'
        },
        BRAKES: {
          id: 'takeoff_brakes',
          title: 'Brakes',
          value: 'release'
        },
        ENGINE_INSTRUMENTS: {
          id: 'takeoff_engine_instruments',
          title: 'Engine instruments',
          value: 'check'
        },
        LANDING_GEAR: {
          id: 'takeoff_landing_gear',
          title: 'Landing gear',
          value: 'up at positive rate'
        },
        FLAPS: {
          id: 'takeoff_flaps',
          title: 'Flaps',
          value: 'retract at 100kts'
        },
        AUTOPILOT: {
          id: 'takeoff_autopilot',
          title: 'Autopilot',
          value: 'engage'
        },
        CABIN_ALT_DIFF_AND_CLIMB: {
          id: 'takeoff_cabin_alt_diff_and_climb',
          title: 'Cabin alt, diff & climb',
          value: 'observe climb'
        }
      }
    },
    MAX_CONTINUOUS_POWER: {
      id: 'phase_max_continuous_power',
      items: {
        MIXTURES: {
          id: 'max_continuous_power_mixtures',
          title: 'Mixtures',
          value: 'max power'
        },
        PROPELLERS: {
          id: 'max_continuous_power_propellers',
          title: 'Propellers',
          value: '2700 RPM'
        },
        THROTTLES: {
          id: 'max_continuous_power_throttles',
          title: 'Throttles',
          value: 'full open'
        },
        COWL_FLAPS: {
          id: 'max_continuous_power_cowl_flaps',
          title: 'Cowl flaps',
          value: 'as required'
        },
        AIR_CONDITIONING: {
          id: 'max_continuous_power_air_conditioning',
          title: 'Air conditioning',
          value: 'as desired'
        },
        CABIN_HEATER: {
          id: 'max_continuous_power_cabin_heater',
          title: 'Cabin heater',
          value: 'as desired'
        },
        PROP_SYNC: {
          id: 'max_continuous_power_prop_sync',
          title: 'Prop sync',
          value: 'on'
        }
      }
    },
    ENROUTE_CLIMB: {
      id: 'phase_enroute_climb',
      items: {
        MIXTURES: {
          id: 'enroute_climb_mixtures',
          title: 'Mixtures',
          value: 'max power'
        },
        PROPELLERS: {
          id: 'enroute_climb_propellers',
          title: 'Propellers',
          value: '2500 RPM'
        },
        THROTTLES: {
          id: 'enroute_climb_throttles',
          title: 'Throttles',
          value: 'full open / 36.0 MP'
        },
        COWL_FLAPS: {
          id: 'enroute_climb_cowl_flaps',
          title: 'Cowl flaps',
          value: 'as required'
        },
        CABIN_PRESSURE: {
          id: 'enroute_climb_cabin_pressure',
          title: 'Cabin pressure',
          value: 'monitor'
        },
        AIR_CONDITIONING: {
          id: 'enroute_climb_air_conditioning',
          title: 'Air conditioning',
          value: 'as desired'
        },
        CABIN_HEATER: {
          id: 'enroute_climb_cabin_heater',
          title: 'Cabin heater',
          value: 'as desired'
        },
        ENGINE_PERFORMANCE: {
          id: 'enroute_climb_engine_performance',
          title: 'Engine performance',
          value: 'monitor'
        }
      }
    },
    CRUISE: {
      id: 'phase_cruise',
      items: {
        COWL_FLAPS: {
          id: 'cruise_cowl_flaps',
          title: 'Cowl flaps',
          value: 'close'
        },
        LANDING_LIGHTS: {
          id: 'cruise_landing_lights',
          title: 'Landing lights',
          value: 'off'
        },
        PITOT_HEAT: {
          id: 'cruise_pitot_heat',
          title: 'Pitot heat',
          value: 'on if OAT less than 4c'
        },
        WINDSHIELD_HEAT: {
          id: 'cruise_windshield_heat',
          title: 'Windshield heat',
          value: 'as required'
        },
        PROPELLER_HEAT: {
          id: 'cruise_propeller_heat',
          title: 'Propeller heat',
          value: 'as required'
        },
        SURFACE_DEICE: {
          id: 'cruise_surface_deice',
          title: 'Surface deice',
          value: 'as required'
        },
        FUEL_IMBALANCE: {
          id: 'cruise_fuel_imbalance',
          title: 'Fuel imbalance',
          value: '15 gal max'
        },
        LEAN_MIXTURE: {
          id: 'cruise_lean_mixture',
          title: 'Lean mixture',
          value: 'LOP or ROP'
        },
        PROPELLERS: {
          id: 'cruise_propellers',
          title: 'Propellers',
          value: '2500 RPM'
        },
        THROTTLES: {
          id: 'cruise_throttles',
          title: 'Throttles',
          value: 'full open / 33.0 MP'
        },
        CABIN_AIR_AND_HEAT: {
          id: 'cruise_cabin_air_and_heat',
          title: 'Cabin air & heat',
          value: 'as desired'
        },
        AIR_CONDITIONING: {
          id: 'cruise_air_conditioning',
          title: 'Air conditioning',
          value: 'as desired'
        },
        CABIN_HEATER: {
          id: 'cruise_cabin_heater',
          title: 'Cabin heater',
          value: 'as desired'
        },
        CABIN_PRESSURE: {
          id: 'cruise_cabin_pressure',
          title: 'Cabin pressure',
          value: 'monitor'
        },
        ENGINE_PERFORMANCE: {
          id: 'cruise_engine_performance',
          title: 'Engine performance',
          value: 'monitor'
        }
      }
    },
    DESCENT: {
      id: 'phase_descent',
      items: {
        CABIN_ALTITUDE_GOAL: {
          id: 'descent_cabin_altitude_goal',
          title: 'Cabin altitude goal',
          value: 'set destination altitude'
        },
        COWL_FLAPS: {
          id: 'descent_cowl_flaps',
          title: 'Cowl flaps',
          value: 'closed'
        },
        THROTTLES: {
          id: 'descent_throttles',
          title: 'Throttles',
          value: 'reduce'
        },
        MIXTURES: {
          id: 'descent_mixtures',
          title: 'Mixtures',
          value: 'enrichen'
        },
        ENGINE_PERFORMANCE: {
          id: 'descent_engine_performance',
          title: 'Engine performance',
          value: 'monitor'
        },
        CYLINDER_HEAD_TEMP: {
          id: 'descent_cylinder_head_temp',
          title: 'Cylinder head temp',
          value: '116c min'
        }
      }
    },
    APPROACH: {
      id: 'phase_approach',
      items: {
        SEATS_AND_SEATBELTS: {
          id: 'approach_seats_and_seatbelts',
          title: 'Seats & seatbelts',
          value: 'secure'
        },
        CABIN_ALT_DIFF_AND_CLIMB: {
          id: 'approach_cabin_alt_diff_and_climb',
          title: 'Cabin alt, diff & climb',
          value: 'check progress'
        },
        FUEL_SELECTORS: {
          id: 'approach_fuel_selectors',
          title: 'Fuel selectors',
          value: 'on'
        },
        FUEL_IMBALANCE: {
          id: 'approach_fuel_imbalance',
          title: 'Fuel imbalance',
          value: '15 gal max'
        },
        LANDING_LIGHTS: {
          id: 'approach_landing_lights',
          title: 'Landing lights',
          value: 'on'
        },
        PITOT_HEAT: {
          id: 'approach_pitot_heat',
          title: 'Pitot heat',
          value: 'on if OAT less than 4c'
        },
        WINDSHIELD_HEAT: {
          id: 'approach_windshield_heat',
          title: 'Windshield heat',
          value: 'off'
        },
        PROPELLER_HEAT: {
          id: 'approach_propeller_heat',
          title: 'Propeller heat',
          value: 'off'
        },
        AIR_CONDITIONING: {
          id: 'approach_air_conditioning',
          title: 'Air conditioning',
          value: 'off'
        },
        COWL_FLAPS: {
          id: 'approach_cowl_flaps',
          title: 'Cowl flaps',
          value: 'as required'
        },
        MIXTURES: {
          id: 'approach_mixtures',
          title: 'Mixtures',
          value: 'max power'
        },
        FLAPS: {
          id: 'approach_flaps',
          title: 'Flaps',
          value: 'approach'
        }
      }
    },
    LANDING: {
      id: 'phase_landing',
      items: {
        CABIN_DIFFERENTIAL: {
          id: 'landing_cabin_differential',
          title: 'Cabin differential',
          value: 'zero'
        },
        PROPELLERS: {
          id: 'landing_propellers',
          title: 'Propellers',
          value: 'high RPM'
        },
        MIXTURES: {
          id: 'landing_mixtures',
          title: 'Mixtures',
          value: 'max power'
        },
        FLAPS: {
          id: 'landing_flaps',
          title: 'Flaps',
          value: 'as required'
        },
        LANDING_GEAR: {
          id: 'landing_landing_gear',
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
        COWL_FLAPS: {
          id: 'after_landing_cowl_flaps',
          title: 'Cowl flaps',
          value: 'open'
        },
        FLAPS: {
          id: 'after_landing_flaps',
          title: 'Flaps',
          value: 'up'
        },
        CABIN_ALT_DIFF_AND_CLIMB: {
          id: 'after_landing_cabin_alt_diff_and_climb',
          title: 'Cabin alt, diff & climb',
          value: 'verify zero'
        },
        CABIN_PRESS_MODE: {
          id: 'after_landing_cabin_press_mode',
          title: 'Cabin press mode',
          value: 'dump'
        },
        DOOR_SEAL_MODE: {
          id: 'after_landing_door_seal_mode',
          title: 'Door seal mode',
          value: 'off'
        },
        WEATHER_RADAR: {
          id: 'after_landing_weather_radar',
          title: 'Weather radar',
          value: 'off/standby'
        },
        LIGHTS: {
          id: 'after_landing_lights',
          title: 'Lights',
          value: 'as required'
        },
        ICE_PROTECTION: {
          id: 'after_landing_ice_protection',
          title: 'Ice protection',
          value: 'all off'
        },
        AIR_CONDITIONING: {
          id: 'after_landing_air_conditioning',
          title: 'Air conditioning',
          value: 'as desired'
        },
        CABIN_AIR_AND_HEAT: {
          id: 'after_landing_cabin_air_and_heat',
          title: 'Cabin air & heat',
          value: 'as desired'
        }
      }
    },
    SHUTDOWN: {
      id: 'phase_shutdown',
      items: {
        PARKING_BRAKE: {
          id: 'shutdown_parking_brake',
          title: 'Parking brake',
          value: 'set'
        },
        AVIONICS: {
          id: 'shutdown_avionics',
          title: 'Avionics',
          value: 'off'
        },
        ALL_SUBPANEL_SWITCHES: {
          id: 'shutdown_all_subpanel_switches',
          title: 'All subpanel switches',
          value: 'off'
        },
        THROTTLES: {
          id: 'shutdown_throttles',
          title: 'Throttles',
          value: 'closed'
        },
        PROPELLERS: {
          id: 'shutdown_propellers',
          title: 'Propellers',
          value: 'high RPM'
        },
        MIXTURES: {
          id: 'shutdown_mixtures',
          title: 'Mixtures',
          value: 'cut-off'
        },
        MAGNETOS: {
          id: 'shutdown_magnetos',
          title: 'Magnetos',
          value: 'off'
        },
        ALTERNATORS: {
          id: 'shutdown_alternators',
          title: 'Alternators',
          value: 'off'
        },
        BATTERY_MASTER: {
          id: 'shutdown_battery_master',
          title: 'Battery master',
          value: 'off'
        },
        PARKING_BRAKE_RELEASE: {
          id: 'shutdown_parking_brake_release',
          title: 'Parking brake',
          value: 'release'
        },
        CONTROL_LOCKS: {
          id: 'shutdown_control_locks',
          title: 'Control locks',
          value: 'installed'
        }
      }
    }
  }
};

export default checklist;
