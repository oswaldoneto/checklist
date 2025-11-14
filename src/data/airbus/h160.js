const checklist = {
  FLIGHT_PHASES: {
    POWER_UP: {
      id: "phase_power_up_h160",
      items: {
        BATTERY_SWITCHES: {
          id: "power_up_battery_switches",
          title: "BAT 1, BAT 2",
          value: "ON"
        },
        GENERATORS: {
          id: "power_up_generators",
          title: "GEN 1, GEN2, EGEN",
          value: "ON"
        },
        DC_GPU: {
          id: "power_up_dc_gpu",
          title: "DC GPU (if connected)",
          value: "ON"
        },
        POWER_UP_TEST: {
          id: "power_up_test_ok",
          title: "PWR-UP TEST OK",
          value: "CHECK"
        },
        RADALT: {
          id: "power_up_radalt",
          title: "RA1, RA2",
          value: "ON"
        },
        FMS: {
          id: "power_up_fms",
          title: "FMS1, FMS2",
          value: "ON"
        },
        LAMP_TEST: {
          id: "power_up_lamp_test",
          title: "LAMP TEST",
          value: "TEST"
        },
        MESSAGE_LIST: {
          id: "power_up_message_list",
          title: "Message List",
          value: "CHECK AND ACKNOWLEDGE"
        },
        FND_PAGE: {
          id: "power_up_fnd_page",
          title: "FND page",
          value: "CHECK parameters validity"
        },
        HEADING: {
          id: "power_up_heading",
          title: "Heading",
          value: "COMPARE with Standby Compass"
        },
        ALTIMETERS_IESI: {
          id: "power_up_altimeters_iesi",
          title: "Altimeters and IESI",
          value: "SET"
        },
        DECISION_ALTITUDE: {
          id: "power_up_decision_height_altitude",
          title: "Decision Height and Decision Altitude",
          value: "AS REQUIRED"
        },
        FUEL_QUANTITY: {
          id: "power_up_fuel_quantity",
          title: "Fuel Quantity",
          value: "CHECK"
        },
        POS_ACOL_LIGHTS: {
          id: "power_up_pos_acol_lights",
          title: "POS and ACOL Lights",
          value: "AS REQUIRED"
        },
        SIGNS: {
          id: "power_up_signs",
          title: "SIGNS",
          value: "AS REQUIRED"
        },
        EMER_EXIT: {
          id: "power_up_emer_exit",
          title: "EMER EXIT",
          value: "ARMED"
        },
        COCKPIT_LIGHTING: {
          id: "power_up_cockpit_lighting",
          title: "Cockpit Lighting",
          value: "AS REQUIRED"
        },
        FLOATS: {
          id: "power_up_floats",
          title: "FLOATS (if installed)",
          value: "OFF"
        },
        WIPERS: {
          id: "power_up_wipers",
          title: "WIPERS",
          value: "AS REQUIRED"
        },
        HTAWS: {
          id: "power_up_htaws",
          title: "HTAWS",
          value: "ON"
        },
        WEATHER_RADAR: {
          id: "power_up_weather_radar",
          title: "WXR (if required)",
          value: "TEST and then STBY"
        },
        DMAP_PAGE: {
          id: "power_up_dmap_page",
          title: "DMAP",
          value: "CHECK or AS REQUIRED"
        },
        VMS_MAIN_PAGE: {
          id: "power_up_vms_main_page",
          title: "VMS MAIN page",
          value: "CHECK parameters validity"
        },
        VMS_SYST_PAGE: {
          id: "power_up_vms_syst_page",
          title: "VMS SYST page",
          value: "CHECK equipment status"
        },
        VMS_WEIGHT_DATA: {
          id: "power_up_vms_weight_data",
          title: "VMS WEIGHT data",
          value: "ENTER and VALIDATE"
        },
        ENGINE_OIL: {
          id: "power_up_engine_oil",
          title: "Engine oil levels and temperatures",
          value: "CHECK"
        },
        OEI_RATING_SELECTION: {
          id: "power_up_oei_rating_selection",
          title: "OEI Rating Selection",
          value: "CHECK"
        },
        AUX_PUMP_ON: {
          id: "power_up_aux_pump_on",
          title: "AUX PUMP",
          value: "ON"
        },
        CYCLIC_STICK: {
          id: "power_up_cyclic_stick",
          title: "Cyclic stick (longitudinal & lateral)",
          value: "FREE TRAVEL"
        },
        COLLECTIVE_PITCH: {
          id: "power_up_collective_pitch",
          title: "Collective pitch",
          value: "FREE TRAVEL"
        },
        PEDALS: {
          id: "power_up_pedals",
          title: "Pedals",
          value: "FREE TRAVEL"
        },
        CYCLIC_PEDALS_CENTER: {
          id: "power_up_cyclic_pedals_center",
          title: "Cyclic, Pedals",
          value: "CENTER"
        },
        COLLECTIVE_POSITION: {
          id: "power_up_collective_position",
          title: "Collective",
          value: "DOWN"
        },
        AUX_PUMP_OFF: {
          id: "power_up_aux_pump_off",
          title: "AUX PUMP",
          value: "OFF"
        }
      }
    },
    STARTING_ENGINE_1: {
      id: "phase_starting_engine_1_h160",
      items: {
        VMS_PAGE: {
          id: "starting_engine1_vms_page",
          title: "VMS page (MFD4)",
          value: "SELECT"
        },
        ENGINE_SELECTION: {
          id: "starting_engine1_engine_selection",
          title: "ENG1 or ENG2",
          value: "IDLE"
        },
        START_BUTTON_CHECK: {
          id: "starting_engine1_start_button_check",
          title: "START",
          value: "CHECK"
        },
        N1_TOT: {
          id: "starting_engine1_n1_tot",
          title: "N1 and TOT",
          value: "MONITOR"
        },
        ROTOR_SPINNING: {
          id: "starting_engine1_rotor_spinning",
          title: "Rotor spinning",
          value: "BEFORE N1 > 25%"
        },
        START_DISENGAGE: {
          id: "starting_engine1_start_disengage",
          title: "START",
          value: "Disengaged at ~50% N1"
        },
        N2_NR: {
          id: "starting_engine1_n2_nr",
          title: "N2 and NR",
          value: "OBSERVE acceleration"
        },
        TORQUE: {
          id: "starting_engine1_trq",
          title: "TRQ",
          value: "Increases"
        },
        HYD_PRESSURE: {
          id: "starting_engine1_hyd_pressure",
          title: "HYD Pressure",
          value: "Increases"
        },
        MGB_PRESSURE: {
          id: "starting_engine1_mgb_pressure",
          title: "MGB Pressure",
          value: "Increases"
        },
        NR_STABILIZED: {
          id: "starting_engine1_nr_stabilized",
          title: "NR",
          value: "CHECK stabilized 80%"
        },
        ECS: {
          id: "starting_engine1_ecs",
          title: "ECS (climate control)",
          value: "AS REQUIRED"
        }
      }
    },
    STARTING_ENGINE_2: {
      id: "phase_starting_engine_2_h160",
      items: {
        ENGINE_SELECTION: {
          id: "starting_engine2_engine_selection",
          title: "ENG1 or ENG2",
          value: "IDLE"
        },
        START_BUTTON_CHECK: {
          id: "starting_engine2_start_button_check",
          title: "START",
          value: "CHECK"
        },
        N1_TOT: {
          id: "starting_engine2_n1_tot",
          title: "N1 and TOT",
          value: "MONITOR"
        },
        START_DISENGAGE: {
          id: "starting_engine2_start_disengage",
          title: "START",
          value: "Disengaged at ~50% N1"
        },
        N2_NR: {
          id: "starting_engine2_n2_nr",
          title: "N2 (1 & 2) and NR",
          value: "OBSERVE synchronization"
        }
      }
    },
    AFTER_ENGINE_START: {
      id: "phase_after_engine_start_h160",
      items: {
        DC_GPU: {
          id: "after_engine_start_dc_gpu",
          title: "DC GPU (if coupled)",
          value: "PRESS (DISCONNECT)"
        },
        GPU_DOOR: {
          id: "after_engine_start_gpu_door",
          title: "GPU DOOR",
          value: "CHECK"
        },
        FLOATS: {
          id: "after_engine_start_floats",
          title: "FLOATS (if installed)",
          value: "AUTO or AS REQUIRED"
        }
      }
    },
    AFCS_PREFLIGHT_TEST: {
      id: "phase_afcs_preflight_test_h160",
      items: {
        COLLECTIVE_PITCH: {
          id: "afcs_preflight_collective_pitch",
          title: "Collective pitch",
          value: "MINIMUM"
        },
        CYCLIC_PEDALS: {
          id: "afcs_preflight_cyclic_pedals",
          title: "Cyclic stick and pedals",
          value: "HANDS OFF AND FEET OFF"
        },
        AUTOPILOT_CONTROLS: {
          id: "afcs_preflight_autopilot_controls",
          title: "A.TRIM, AP1, AP2, BKUP",
          value: "ON"
        },
        TEST_SWITCH: {
          id: "afcs_preflight_test_switch",
          title: "TEST switch",
          value: "PRE-FLT"
        },
        PFLT_TST_OK: {
          id: "afcs_preflight_pflt_tst_ok",
          title: "P-FLT TST OK on message list",
          value: "CHECK"
        },
        AFCS_SWITCH: {
          id: "afcs_preflight_afcs_switch",
          title: "AFCS",
          value: "OFF (fast cut) then ON"
        }
      }
    },
    TAXIING: {
      id: "phase_taxiing_h160",
      items: {
        ENG_SWITCHES: {
          id: "taxiing_eng_switches",
          title: "ENG1 and ENG2",
          value: "FLIGHT (guarded)"
        },
        MESSAGE_LIST: {
          id: "taxiing_message_list",
          title: "Message list",
          value: "CHECK"
        },
        MFD_FORMAT: {
          id: "taxiing_mfd_format",
          title: "Inboard Pilot MFD format",
          value: "AS REQUIRED"
        },
        LANDING_LIGHTS: {
          id: "taxiing_landing_lights",
          title: "Landing Lights",
          value: "AS REQUIRED"
        },
        NOSE_WHEEL: {
          id: "taxiing_nose_wheel",
          title: "Nose wheel",
          value: "FREE"
        },
        PARK_BRAKE: {
          id: "taxiing_park_brake",
          title: "Park Brake",
          value: "OFF"
        }
      }
    },
    TAKEOFF_GROUND_HELIPAD_CAT_A: {
      id: "phase_takeoff_ground_helipad_cat_a_h160",
      items: {
        PARK_BRAKE_ON: {
          id: "takeoff_cat_a_park_brake_on",
          title: "Park Brake",
          value: "ON"
        },
        NR_HI_ON: {
          id: "takeoff_cat_a_nr_hi_on",
          title: "NR HI",
          value: "ON"
        },
        BARO_SETTING: {
          id: "takeoff_cat_a_baro_setting",
          title: "DA, DH, Baro setting",
          value: "SET"
        },
        HOV_SUBFORMAT: {
          id: "takeoff_cat_a_hov_subformat",
          title: "HOV subformat (FND page)",
          value: "SELECT"
        },
        TO_MODE: {
          id: "takeoff_cat_a_to_mode",
          title: "T/O mode (FND page)",
          value: "SELECT"
        },
        TAKEOFF_PROFILE_CHECK: {
          id: "takeoff_cat_a_profile_check",
          title: "REARWARD TAKEOFF or VERTICAL TAKEOFF",
          value: "CHECK"
        },
        TO_TDP: {
          id: "takeoff_cat_a_to_tdp",
          title: "T/O TDP (FND page)",
          value: "SELECT"
        },
        HOVER_PERFORM: {
          id: "takeoff_cat_a_hover",
          title: "Hover (IGE) at 6ft, into the wind",
          value: "PERFORM"
        },
        AP_GTC: {
          id: "takeoff_cat_a_ap_gtc",
          title: "AP/GTC",
          value: "PRESS TWICE"
        },
        HEIGHT_HOVER: {
          id: "takeoff_cat_a_height_hover",
          title: "HEIGHT and HOVER",
          value: "CHECK"
        },
        GO_AROUND_ENGAGE: {
          id: "takeoff_cat_a_go_around_engage",
          title: "GO AROUND",
          value: "PRESS (engage procedure)"
        },
        TAKEOFF_PROFILE_CHECK_2: {
          id: "takeoff_cat_a_profile_check_2",
          title: "REARWARD TAKEOFF or VERTICAL TAKEOFF",
          value: "CHECK"
        },
        AT_TDP_GO_AROUND_CHECK: {
          id: "takeoff_cat_a_at_tdp_go_around_check",
          title: "At the TDP - GO AROUND",
          value: "CHECK"
        },
        AT_VY_NR_HI: {
          id: "takeoff_cat_a_at_vy_nr_hi",
          title: "At VY - NR HI",
          value: "OFF"
        },
        AT_VY_PARK_BRAKE: {
          id: "takeoff_cat_a_at_vy_park_brake",
          title: "At VY - Park Brake",
          value: "OFF"
        },
        AT_VY_LG: {
          id: "takeoff_cat_a_at_vy_lg",
          title: "At VY - L/G",
          value: "UP"
        }
      }
    },
    CLIMB: {
      id: "phase_climb_h160",
      items: {
        COLLECTIVE_PITCH: {
          id: "climb_collective_pitch",
          title: "Collective pitch",
          value: "MAX CONTINUOUS POWER"
        },
        RECOMMENDED_CLIMB_SPEED: {
          id: "climb_recommended_speed",
          title: "Recommended climb speed",
          value: "VY"
        },
        AFCS_UPPER_MODES: {
          id: "climb_afcs_upper_modes",
          title: "AFCS UPPER MODES",
          value: "AS REQUIRED"
        },
        BARO_SETTING: {
          id: "climb_baro_setting",
          title: "DA, DH, Baro setting",
          value: "CHECK"
        },
        LANDING_LIGHTS: {
          id: "climb_landing_lights",
          title: "Landing Lights",
          value: "OFF"
        },
        SIGNS: {
          id: "climb_signs",
          title: "SIGNS",
          value: "AS REQUIRED"
        }
      }
    },
    LEVEL_FLIGHT: {
      id: "phase_level_flight_h160",
      items: {
        AFCS_UPPER_MODES: {
          id: "level_flight_afcs_upper_modes",
          title: "AFCS UPPER MODES",
          value: "AS REQUIRED"
        },
        BARO_SETTING: {
          id: "level_flight_baro_setting",
          title: "DA, DH, Baro setting",
          value: "ADJUST"
        },
        FUEL_QUANTITY: {
          id: "level_flight_fuel_quantity",
          title: "Fuel Quantity",
          value: "CHECK"
        },
        NAV_RADIOS: {
          id: "level_flight_nav_radios",
          title: "Navigation, Radios",
          value: "AS REQUIRED"
        }
      }
    },
    DESCENT: {
      id: "phase_descent_h160",
      items: {
        SIGNS: {
          id: "descent_signs",
          title: "SIGNS",
          value: "AS REQUIRED"
        },
        AFCS_UPPER_MODES: {
          id: "descent_afcs_upper_modes",
          title: "AFCS UPPER MODES",
          value: "AS REQUIRED"
        },
        BARO_SETTING: {
          id: "descent_baro_setting",
          title: "DA, DH, Baro setting",
          value: "ADJUST"
        },
        FLI: {
          id: "descent_fli",
          title: "FLI",
          value: "CHECK above desync lines"
        },
        IAS: {
          id: "descent_ias",
          title: "IAS",
          value: "AS REQUIRED"
        }
      }
    },
    BEFORE_LANDING: {
      id: "phase_before_landing_h160",
      items: {
        LANDING_GEAR: {
          id: "before_landing_lg",
          title: "L/G",
          value: "DOWN (3 green lights)"
        },
        NOSE_WHEEL: {
          id: "before_landing_nose_wheel",
          title: "Nose wheel",
          value: "AS REQUIRED"
        },
        PARK_BRAKE: {
          id: "before_landing_park_brake",
          title: "Park Brake",
          value: "AS REQUIRED"
        },
        BARO_SETTING: {
          id: "before_landing_baro_setting",
          title: "DA, DH, Baro setting",
          value: "CHECK"
        },
        LANDING_LIGHTS: {
          id: "before_landing_landing_lights",
          title: "Landing Lights",
          value: "ON"
        }
      }
    },
    SHUTDOWN: {
      id: "phase_shutdown_h160",
      items: {
        PARK_BRAKE: {
          id: "shutdown_park_brake",
          title: "Park Brake",
          value: "ON"
        },
        COLLECTIVE_PITCH: {
          id: "shutdown_collective_pitch",
          title: "Collective pitch",
          value: "MINIMUM"
        },
        CYCLIC_PEDALS: {
          id: "shutdown_cyclic_pedals",
          title: "Cyclic stick and pedals",
          value: "CENTER"
        },
        ENGINES_IDLE: {
          id: "shutdown_engines_idle",
          title: "ENG1, ENG2",
          value: "IDLE"
        },
        FLOATS: {
          id: "shutdown_floats",
          title: "Floats (if installed)",
          value: "OFF"
        },
        RADALTS: {
          id: "shutdown_radAlts",
          title: "RA1, RA2",
          value: "OFF"
        },
        ECS: {
          id: "shutdown_ecs",
          title: "ECS",
          value: "OFF"
        },
        ENGINES_OFF: {
          id: "shutdown_engines_off",
          title: "After 30 seconds cooldown - ENG1, ENG2",
          value: "OFF"
        },
        ROTOR_BRAKE_APPLY: {
          id: "shutdown_rotor_brake_apply",
          title: "Rotor brake",
          value: "APPLY when NR < 50%"
        },
        ROTOR_BRAKE_RELEASE: {
          id: "shutdown_rotor_brake_release",
          title: "After the rotor stops - Rotor brake",
          value: "RELEASE"
        },
        FLIGHT_REPORT: {
          id: "shutdown_flight_report",
          title: "After the rotor stops - Flight Report (VMS)",
          value: "CHECK"
        },
        LIGHTING: {
          id: "shutdown_lighting",
          title: "Lighting (external, cockpit, emergency)",
          value: "OFF"
        },
        DOWNLOAD_COMPLETE: {
          id: "shutdown_download_complete",
          title: "DOWNLOAD COMPLETE",
          value: "CHECK"
        },
        BATTERIES: {
          id: "shutdown_batteries",
          title: "BAT1, BAT2",
          value: "OFF"
        },
        SWITCHES: {
          id: "shutdown_switches",
          title: "All switches",
          value: "OFF"
        }
      }
    }
  }
};

export default checklist;
