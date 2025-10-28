const checklist = {
  FLIGHT_PHASES: {
    PREFLIGHT_PREPARATION: {
      id: "phase_preflight_preparation",
      items: {
        MSFS_EFB_FUEL_PAYLOAD: {
          id: "preflight_preparation_msfs_efb_fuel_payload",
          title: "MSFS EFB - Fuel & Payload",
          value: "AS DES"
        },
        MSFS_EFB_FLIGHT_PLANNING: {
          id: "preflight_preparation_msfs_efb_flight_planning",
          title: "MSFS EFB - Flight Planning",
          value: "AS DES"
        }
      }
    },

    PREFLIGHT_EXTERIOR_INSPECTION: {
      id: "phase_preflight_exterior_inspection",
      items: {
        COVERS_CHOCKS: {
          id: "preflight_exterior_covers_chocks",
          title: "Covers, Chocks",
          value: "REMOVED"
        },
        PRE_POSITIONING: {
          id: "preflight_exterior_pre_positioning",
          title: "Pre-Positioning",
          value: "AS DES"
        }
      }
    },

    PREFLIGHT_INTERIOR_INSPECTION: {
      id: "phase_preflight_interior_inspection",
      items: {
        LEFT_SIDE: {
          id: "preflight_interior_left_side",
          title: "LEFT SIDE",
          value: "",
          isSubsection: true
        },
        ELT: {
          id: "preflight_interior_elt",
          title: "ELT",
          value: "ARMED"
        },
        CABIN_EMERGENCY_LIGHTS: {
          id: "preflight_interior_cabin_emergency_lights",
          title: "Cabin Emergency Lights",
          value: "ARMED"
        },
        CIRCUIT_BREAKERS: {
          id: "preflight_interior_circuit_breakers",
          title: "Circuit Breakers",
          value: "CHECK IN"
        },
        PAX_OXY: {
          id: "preflight_interior_pax_oxy",
          title: "PAX OXY",
          value: "AUTO"
        },

        MAIN_PANEL: {
          id: "preflight_interior_main_panel",
          title: "MAIN PANEL",
          value: "",
          isSubsection: true
        },
        FLIGHT_CONTROLS: {
          id: "preflight_interior_flight_controls",
          title: "Flight Controls",
          value: "FULL & FREE MOVEMENT"
        },
        LANDING_GEAR_LEVER: {
          id: "preflight_interior_landing_gear_lever",
          title: "Landing Gear Lever",
          value: "DOWN"
        },
        OXYGEN_MAIN_LEVER: {
          id: "preflight_interior_oxygen_main_lever",
          title: "Oxygen Main Lever",
          value: "ON (pushed in)"
        },

        PEDESTAL: {
          id: "preflight_interior_pedestal",
          title: "PEDESTAL",
          value: "",
          isSubsection: true
        },
        WINDSHIELD_HEATING: {
          id: "preflight_interior_windshield_heating",
          title: "Windshield Heating",
          value: "AUTO HI"
        },
        BLEED_SELECTOR: {
          id: "preflight_interior_bleed_selector",
          title: "Bleed Selector",
          value: "BOTH"
        },
        IPS_MODE: {
          id: "preflight_interior_ips_mode",
          title: "IPS (Ice Protection System) Mode",
          value: "AUTO"
        },
        CPCS_DUMP_SWITCH: {
          id: "preflight_interior_cpcs_dump_switch",
          title: "CPCS (Pressurization) Dump Switch",
          value: "GUARDED"
        },
        CPCS_MODE: {
          id: "preflight_interior_cpcs_mode",
          title: "CPCS (Pressurization) Mode",
          value: "AUTO"
        },
        INTERIOR_LIGHTS: {
          id: "preflight_interior_interior_lights",
          title: "Interior Lights",
          value: "OFF"
        },
        AIR_BRAKE_LEVER: {
          id: "preflight_interior_air_brake_lever",
          title: "Air Brake Lever",
          value: "IN (and right)"
        },
        FLAPS: {
          id: "preflight_interior_flaps",
          title: "Flaps",
          value: "IN AGREEMENT"
        },
        THRUST_LEVERS: {
          id: "preflight_interior_thrust_levers",
          title: "Thrust Levers",
          value: "IDLE"
        },
        EMERGENCY_COM1: {
          id: "preflight_interior_emergency_com1",
          title: "Emergency COM1",
          value: "GUARDED"
        },
        PARKING_BRAKE: {
          id: "preflight_interior_parking_brake",
          title: "Parking Brake",
          value: "SET"
        },
        FLAPS_EMERGENCY_POWER: {
          id: "preflight_interior_flaps_emergency_power",
          title: "Flaps Emergency Power",
          value: "GUARDED"
        },
        WS_EMERGENCY_POWER: {
          id: "preflight_interior_ws_emergency_power",
          title: "WS Emergency Power",
          value: "GUARDED"
        },
        SWPS_ICS_MODE: {
          id: "preflight_interior_swps_ics_mode",
          title: "SWPS ICS Mode",
          value: "AUTO"
        },
        EMERGENCY_RAM_AIR_HANDLE: {
          id: "preflight_interior_emergency_ram_air_handle",
          title: "Emergency RAM AIR Handle",
          value: "STOWED"
        },
        EMERGENCY_GEAR_EXTENSION: {
          id: "preflight_interior_emergency_gear_extension",
          title: "Emergency Gear Extension",
          value: "STOWED"
        },

        GLARE_SHIELD: {
          id: "preflight_interior_glare_shield",
          title: "GLARE SHIELD",
          value: "",
          isSubsection: true
        },
        ENGINE_ISOLATION_SWITCHES: {
          id: "preflight_interior_engine_isolation_switches",
          title: "L + R ENG Isolation Switches",
          value: "GUARDED"
        },

        OVERHEAD: {
          id: "preflight_interior_overhead",
          title: "OVERHEAD",
          value: "",
          isSubsection: true
        },
        BATTERY_1_2: {
          id: "preflight_interior_battery_1_2",
          title: "Battery 1 + 2",
          value: "OFF"
        },
        GEN_1_2: {
          id: "preflight_interior_gen_1_2",
          title: "Gen 1 + 2",
          value: "ON"
        },
        ENGINE_SELECTORS: {
          id: "preflight_interior_engine_selectors",
          title: "L + R Engine Selectors",
          value: "OFF"
        },
        OVERHEAD_INTERIOR_LIGHTS: {
          id: "preflight_interior_overhead_interior_lights",
          title: "Interior Lights",
          value: "OFF"
        },
        OVERHEAD_EXTERIOR_LIGHTS: {
          id: "preflight_interior_overhead_exterior_lights",
          title: "Exterior Lights",
          value: "OFF"
        }
      }
    },

    BEFORE_ENGINE_START: {
      id: "phase_before_engine_start",
      items: {
        BATTERY_1_2: {
          id: "before_engine_start_battery_1_2",
          title: "Battery 1 + 2",
          value: "ON"
        },
        EXTERNAL_POWER: {
          id: "before_engine_start_external_power",
          title: "External Power / GPU",
          value: "AS REQ"
        },
        NAV_LOGO_LIGHTS: {
          id: "before_engine_start_nav_logo_lights",
          title: "Nav / Logo Lights",
          value: "ON"
        },
        INTERNAL_LIGHTS: {
          id: "before_engine_start_internal_lights",
          title: "Internal Lights",
          value: "AS REQ"
        },
        PASSENGER_SIGNS: {
          id: "before_engine_start_passenger_signs",
          title: "Passenger Signs",
          value: "AS REQ"
        },
        COCKPIT_LAMP_TEST: {
          id: "before_engine_start_cockpit_lamp_test",
          title: "Cockpit Lamp Test (left side)",
          value: "PERFORM"
        },
        ESIS: {
          id: "before_engine_start_esis",
          title: "ESIS (Elec. Standby Instrument)",
          value: "CHECK"
        },
        ATC_CLEARANCE: {
          id: "before_engine_start_atc_clearance",
          title: "ATC (ATIS / IFR Clearance)",
          value: "AS REQ"
        }
      }
    },

    ENGINE_START: {
      id: "phase_engine_start",
      items: {
        CHOCKS_COVERS: {
          id: "engine_start_chocks_covers",
          title: "Chocks, Covers",
          value: "CONFIRM REMOVED"
        },
        DOORS: {
          id: "engine_start_doors",
          title: "Doors",
          value: "CLOSED"
        },
        MFD_CAS: {
          id: "engine_start_mfd_cas",
          title: "MFD - CAS",
          value: "CHECK & CONSIDER"
        },
        BEACON: {
          id: "engine_start_beacon",
          title: "Beacon",
          value: "ON"
        },
        PASSENGER_SIGNS: {
          id: "engine_start_passenger_signs",
          title: "Passenger Signs",
          value: "AS REQ"
        },
        THRUST_LEVERS: {
          id: "engine_start_thrust_levers",
          title: "Thrust Levers",
          value: "IDLE"
        },
        RIGHT_ENGINE_START: {
          id: "engine_start_right_engine_start",
          title: "Right Engine Start",
          value: "PERFORM",
          note: "Right Engine Selector -> RUN; press Start button; monitor engine indications"
        },
        LEFT_ENGINE_DELAY_OPTIONAL: {
          id: "engine_start_left_engine_delay_optional",
          title: "Left Engine Start (optional)",
          value: "Delay until after FMS setup"
        },
        LEFT_ENGINE_START: {
          id: "engine_start_left_engine_start",
          title: "Left Engine Start",
          value: "PERFORM",
          note: "Left Engine Selector -> RUN; press Start button; monitor engine indications"
        },
        GPU: {
          id: "engine_start_gpu",
          title: "GPU",
          value: "OFF & DISCONNECT"
        }
      }
    },

    FMS_SETUP: {
      id: "phase_fms_setup",
      items: {
        CPCS_DUMP_SWITCH: {
          id: "fms_setup_cpcs_dump_switch",
          title: "CPCS (Pressurization) Dump Switch",
          value: "GUARDED"
        },
        CPCS_MODE: {
          id: "fms_setup_cpcs_mode",
          title: "CPCS (Pressurization) Mode",
          value: "AUTO"
        },
        CAS: {
          id: "fms_setup_cas",
          title: "CAS",
          value: "CHECK"
        },
        WX_RADAR: {
          id: "fms_setup_wx_radar",
          title: "WX Radar",
          value: "AS REQ",
          note: "WX on MFD seems to only work in HDG UP mode"
        },

        CRUISE_DATA: {
          id: "fms_setup_cruise_data",
          title: "CRUISE DATA",
          value: "",
          isSubsection: true
        },
        ALT_SPD_PAGE: {
          id: "fms_setup_alt_spd_page",
          title: "ALT/SPD page (aircraft on ground icon)",
          value: "Enter cruise speeds & init cruise altitude",
          note: "Mandatory for TOD"
        },

        WEIGHT_BALANCE: {
          id: "fms_setup_weight_balance",
          title: "WEIGHT & BALANCE",
          value: "",
          isSubsection: true
        },
        FUEL_WEIGHT_PAGE: {
          id: "fms_setup_fuel_weight_page",
          title: "FUEL/WEIGHT page (aircraft on ground icon)",
          value: "Enter weight data → COMPUTE",
          note: "(optional) when weight data available"
        },

        TAKEOFF_DATA: {
          id: "fms_setup_takeoff_data",
          title: "TAKEOFF DATA",
          value: "",
          isSubsection: true
        },
        TAKEOFF_PAGE: {
          id: "fms_setup_takeoff_page",
          title: "TAKEOFF page (aircraft taking off icon)",
          value: "Check runway & SID"
        },
        TAKEOFF_DEFAULT: {
          id: "fms_setup_takeoff_default",
          title: "Default Data",
          value: "Shown for maximum takeoff weight"
        },
        EXPERIMENTAL_V_SPEEDS: {
          id: "fms_setup_experimental_v_speeds",
          title: "Experimental V-Speeds",
          value: "Enter V1 / VR / V2 from sim model",
          note: "Leave / enter VT (departure speed) = 170"
        },
        TRANSITION_ALTITUDE: {
          id: "fms_setup_transition_altitude",
          title: "Transition Altitude",
          value: "Check / Enter"
        },
        SEND_V_SPEEDS: {
          id: "fms_setup_send_v_speeds",
          title: "SEND",
          value: "Send V-Speeds to PFD"
        }
      }
    },

    BEFORE_TAXI: {
      id: "phase_before_taxi",
      items: {
        BOTH_ENGINES: {
          id: "before_taxi_both_engines",
          title: "Both Engines",
          value: "STARTED"
        },
        CAS: {
          id: "before_taxi_cas",
          title: "CAS",
          value: "CHECKED"
        },
        FLAPS: {
          id: "before_taxi_flaps",
          title: "Flaps",
          value: "SET FOR T.O. (8° or 15°)"
        },
        TRIM: {
          id: "before_taxi_trim",
          title: "Trim",
          value: "SET FOR T.O. (green)"
        },
        FUEL_QUANTITY: {
          id: "before_taxi_fuel_quantity",
          title: "Fuel Quantity",
          value: "CHECK"
        },
        FLIGHT_CONTROLS: {
          id: "before_taxi_flight_controls",
          title: "Flight Controls",
          value: "FULL & FREE MOVEMENT"
        },
        PFD_MFD_CAS: {
          id: "before_taxi_pfd_mfd_cas",
          title: "PFD / MFD / CAS",
          value: "CHECK",
          note: "→ for PFD settings → MCU → DU & CCD → upper MFD\n→ see lower MFD → left side Tabs → set Units & Settings"
        },
        ALTIMETER_BARO_REF: {
          id: "before_taxi_altimeter_baro_ref",
          title: "Altimeter Baro Ref",
          value: "SET LOCAL QNH"
        },
        AUTOPILOT_FD: {
          id: "before_taxi_autopilot_fd",
          title: "Autopilot/FD",
          value: "AS DES",
          note: "→ select PFD NAV source (NAV SEL button) - FMS for GPS flight plan\n→ preselect lateral mode - NAV for GPS flight plan\n→ preselect cleared or planned altitude\n→ preselect vertical mode - FLC\n→ preselect FMS or MAN speed mode (FMS recommended)"
        }
      }
    },

    TAXI: {
      id: "phase_taxi",
      items: {
        ATC_TAXI_CLEARANCE: {
          id: "taxi_atc_clearance",
          title: "ATC (Taxi Clearance)",
          value: "AS REQ"
        },
        TRANSPONDER: {
          id: "taxi_transponder",
          title: "Transponder",
          value: "SQUAWK SET & STBY",
          note: "→ set squawk at PFD XPDR Mode with RADIO selector knob\n→ set PFD XPDR Mode to STBY"
        },
        NAV_LIGHTS: {
          id: "taxi_nav_lights",
          title: "Nav Lights",
          value: "ON"
        },
        TAXI_LIGHTS: {
          id: "taxi_taxi_lights",
          title: "Taxi Lights",
          value: "ON"
        },
        PASSENGER_SIGNS: {
          id: "taxi_passenger_signs",
          title: "Passenger Signs",
          value: "AS REQ"
        },
        PARKING_BRAKE: {
          id: "taxi_parking_brake",
          title: "Parking Brake",
          value: "RELEASE"
        },
        BRAKING_STEERING: {
          id: "taxi_braking_steering",
          title: "Braking & Steering",
          value: "CHECK"
        },
        ENGINE_FLIGHT_INSTRUMENTS: {
          id: "taxi_engine_flight_instruments",
          title: "Engine & Flight Instruments",
          value: "CHECK"
        },
        TAXI_SPEED: {
          id: "taxi_speed",
          title: "Max Taxi Speed",
          value: "20-30 kts (5 kts in turns)"
        },
        RWY_CROSSING_STROBES: {
          id: "taxi_rwy_crossing_strobes",
          title: "Crossing Runway",
          value: "Strobes ON"
        }
      }
    },

    BEFORE_TAKEOFF: {
      id: "phase_before_takeoff",
      items: {
        HOLDING_SHORT: {
          id: "before_takeoff_holding_short",
          title: "HOLDING SHORT",
          value: "",
          isSubsection: true
        },
        FLAPS: {
          id: "before_takeoff_flaps",
          title: "Flaps",
          value: "SET FOR T.O. (8° or 15°)"
        },
        TRIM: {
          id: "before_takeoff_trim",
          title: "Trim",
          value: "SET FOR T.O. (green)"
        },
        FLIGHT_CONTROLS: {
          id: "before_takeoff_flight_controls",
          title: "Flight Controls",
          value: "FULL & FREE MOVEMENT"
        },
        FUEL_QUANTITY: {
          id: "before_takeoff_fuel_quantity",
          title: "Fuel Quantity",
          value: "CHECK"
        },
        WINDSHIELD_HEATING: {
          id: "before_takeoff_windshield_heating",
          title: "Windshield Heating",
          value: "AUTO HI"
        },
        BLEED_SELECTOR: {
          id: "before_takeoff_bleed_selector",
          title: "Bleed Selector",
          value: "BOTH"
        },
        IPS_MODE: {
          id: "before_takeoff_ips_mode",
          title: "IPS Mode",
          value: "AUTO"
        }
      }
    },

    BEFORE_ENTERING_RUNWAY: {
      id: "phase_before_entering_runway",
      items: {
        LANDING_LIGHTS: {
          id: "before_entering_runway_landing_lights",
          title: "Landing Lights",
          value: "ON"
        },
        STROBE_LIGHTS: {
          id: "before_entering_runway_strobe_lights",
          title: "Strobe Lights",
          value: "ON"
        },
        TRANSPONDER: {
          id: "before_entering_runway_transponder",
          title: "Transponder",
          value: "ON",
          note: "→ set PFD XPDR Mode to ALT"
        }
      }
    },

    TAKEOFF: {
      id: "phase_takeoff",
      items: {
        TAKEOFF_PROCEDURE: {
          id: "takeoff_procedure",
          title: "Line up, brake and wait for ATC clearance (if required)",
          value: ""
        },
        THRUST_LEVERS: {
          id: "takeoff_thrust_levers",
          title: "Thrust Levers",
          value: "T/O or ATR"
        },
        BRAKES: {
          id: "takeoff_brakes",
          title: "Brakes",
          value: "RELEASE"
        },
        VR_ROTATE: {
          id: "takeoff_vr_rotate",
          title: "VR",
          value: "ROTATE ~7.5° NOSE UP"
        },
        CLIMB_SPEED: {
          id: "takeoff_climb_speed",
          title: "Climb Speed",
          value: "Maintain ≥ V2 + 10"
        },
        POSITIVE_RATE: {
          id: "takeoff_positive_rate",
          title: "Positive ROC",
          value: "Gear UP ~15° NOSE UP"
        },

        FOUR_HUNDRED_AGL: {
          id: "takeoff_400_agl",
          title: "400 ft AGL",
          value: "",
          isSubsection: true
        },
        FOUR_HUNDRED_ACCELERATE: {
          id: "takeoff_400_accelerate",
          title: "Accelerate",
          value: "170 KIAS"
        },
        FOUR_HUNDRED_FLAPS: {
          id: "takeoff_400_flaps",
          title: "Flaps",
          value: "Above V2 + 25 → Flaps 0°"
        },
        FOUR_HUNDRED_YAW_DAMPER: {
          id: "takeoff_400_yaw_damper",
          title: "Yaw Damper",
          value: "ON"
        },
        FOUR_HUNDRED_AP_ATHR: {
          id: "takeoff_400_ap_athr",
          title: "AP / ATHR",
          value: "Activate as desired"
        },

        TWO_THOUSAND_FIVE_HUNDRED_AGL: {
          id: "takeoff_2500_agl",
          title: "2,500 ft AGL",
          value: "",
          isSubsection: true
        },
        TWO_THOUSAND_FIVE_HUNDRED_ACCELERATE: {
          id: "takeoff_2500_accelerate",
          title: "Accelerate",
          value: "Climb speed 200 KIAS"
        },
        TWO_THOUSAND_FIVE_HUNDRED_THRUST: {
          id: "takeoff_2500_thrust",
          title: "Thrust Levers",
          value: "MCT"
        }
      }
    },

    AFTER_TAKEOFF_CLIMB: {
      id: "phase_after_takeoff_climb",
      items: {
        THRUST_LEVERS: {
          id: "after_takeoff_thrust_levers",
          title: "Thrust Levers",
          value: "MCT"
        },
        YAW_DAMPER: {
          id: "after_takeoff_yaw_damper",
          title: "Yaw Damper",
          value: "ON"
        },
        AUTOPILOT_AUTOTHROTTLE: {
          id: "after_takeoff_autopilot_autothrottle",
          title: "Autopilot / Autothrottle",
          value: "AS DES"
        },
        FLAPS: {
          id: "after_takeoff_flaps",
          title: "Flaps",
          value: "UP"
        },
        LANDING_GEAR: {
          id: "after_takeoff_landing_gear",
          title: "Landing Gear",
          value: "UP"
        },
        TAXI_LIGHTS: {
          id: "after_takeoff_taxi_lights",
          title: "Taxi Lights",
          value: "OFF"
        },
        IPS: {
          id: "after_takeoff_ips",
          title: "IPS",
          value: "AS REQ"
        },

        TEN_THOUSAND_FT: {
          id: "after_takeoff_10000",
          title: "@ 10,000 FT",
          value: "",
          isSubsection: true
        },
        LANDING_LIGHTS: {
          id: "after_takeoff_landing_lights",
          title: "Landing / Recognition Lights",
          value: "AS REQ / OFF"
        },
        PRESSURIZATION: {
          id: "after_takeoff_pressurization",
          title: "Pressurization (lower MFD)",
          value: "MONITOR"
        },
        PASSENGER_SIGNS: {
          id: "after_takeoff_passenger_signs",
          title: "Passenger Signs",
          value: "AS REQ"
        },

        TRANSITION_ALTITUDE: {
          id: "after_takeoff_transition_altitude",
          title: "@ Transition Altitude",
          value: "",
          isSubsection: true
        },
        ALTIMETERS_BARO_REF: {
          id: "after_takeoff_altimeters_baro_ref",
          title: "Altimeters / Baro Ref",
          value: "SET STD (29.92 / 1013)"
        }
      }
    },

    CRUISE: {
      id: "phase_cruise",
      items: {
        AUTOTHROTTLE_NOTE: {
          id: "cruise_autothrottle_note",
          title: "Autothrottle",
          value: "Manual throttle recommended",
          note: "I recommend not using autothrottle in cruise, as it oscillates a lot"
        },
        THRUST_LEVERS: {
          id: "cruise_thrust_levers",
          title: "Thrust Levers",
          value: "AS DES"
        },
        AUTOPILOT_AUTOTHROTTLE: {
          id: "cruise_autopilot_autothrottle",
          title: "Autopilot / Autothrottle",
          value: "AS DES"
        },
        IPS: {
          id: "cruise_ips",
          title: "IPS",
          value: "AS REQ"
        },
        PRESSURIZATION: {
          id: "cruise_pressurization",
          title: "Pressurization (lower MFD)",
          value: "MONITOR"
        },
        PASSENGER_SIGNS: {
          id: "cruise_passenger_signs",
          title: "Passenger Signs",
          value: "AS REQ"
        },
        FUEL_QUANTITY: {
          id: "cruise_fuel_quantity",
          title: "Fuel Quantity",
          value: "CHECK"
        },
        TOP_OF_DESCENT: {
          id: "cruise_top_of_descent",
          title: "Top Of Descent",
          value: "CROSS CHECK",
          note: "→ see TOD waypoint and distance to destination on upper MFD"
        }
      }
    },

    DESCENT_PREPARATION: {
      id: "phase_descent_preparation",
      items: {
        APPROACH_LANDING_DATA: {
          id: "descent_prep_approach_landing_data",
          title: "Approach & Landing Data (runway, ILS, weather)",
          value: "CONFIRM"
        },
        MINIMUMS: {
          id: "descent_prep_minimums",
          title: "Minimums (AP Panel)",
          value: "CONFIRM & SET"
        },
        FMS_APPROACH_DATA: {
          id: "descent_prep_fms_approach_data",
          title: "FMS Approach Data (landing aircraft icon)",
          value: "SET",
          note: "→ enter experimental VREF / VGA for current sim model\n→ leave / enter VT (departure speed) = 170"
        },
        AUTOPILOT_FLIGHT_DIRECTOR: {
          id: "descent_prep_autopilot_flight_director",
          title: "Autopilot / Flight Director",
          value: "AS DES",
          note: "→ preselect altitude and arm VNAV\n→ if unsure, use altitude of last waypoint before runway"
        },
        GPS_NAV_RADIOS: {
          id: "descent_prep_gps_nav_radios",
          title: "GPS / NAV Radios",
          value: "SET"
        }
      }
    },

    DESCENT: {
      id: "phase_descent",
      items: {
        AUTOTHROTTLE_NOTE: {
          id: "descent_autothrottle_note",
          title: "Autothrottle",
          value: "Works OK for descent",
          note: "Autothrottle seems to work fine for descent"
        },
        THRUST_LEVERS: {
          id: "descent_thrust_levers",
          title: "Thrust Levers",
          value: "AS DES"
        },
        AUTOPILOT_AUTOTHROTTLE: {
          id: "descent_autopilot_autothrottle",
          title: "Autopilot / Autothrottle",
          value: "AS DES"
        },
        IPS: {
          id: "descent_ips",
          title: "IPS",
          value: "AS REQ"
        },
        PRESSURIZATION: {
          id: "descent_pressurization",
          title: "Pressurization (lower MFD)",
          value: "MONITOR"
        },
        TRANSITION_FLIGHT_LEVEL: {
          id: "descent_transition_flight_level",
          title: "@ Transition Flight Level",
          value: "",
          isSubsection: true
        },
        ALTIMETERS_BARO_REF: {
          id: "descent_altimeters_baro_ref",
          title: "Altimeters / Baro Ref",
          value: "SET LOCAL QNH"
        }
      }
    },

    LANDING_CHECK: {
      id: "phase_landing_check",
      items: {
        FLAPS: {
          id: "landing_check_flaps",
          title: "Flaps",
          value: "33°"
        },
        LANDING_GEAR: {
          id: "landing_check_landing_gear",
          title: "Landing Gear",
          value: "DOWN & 3 GREEN"
        },
        LANDING_LIGHTS: {
          id: "landing_check_landing_lights",
          title: "Landing Lights",
          value: "ON"
        },
        AIR_BRAKES: {
          id: "landing_check_air_brakes",
          title: "Air Brakes",
          value: "ARMED"
        }
      }
    },

    GO_AROUND: {
      id: "phase_go_around",
      items: {
        THRUST_LEVERS: {
          id: "go_around_thrust_levers",
          title: "Thrust Levers",
          value: "ATR or T/O"
        },
        ROTATE: {
          id: "go_around_rotate",
          title: "ROTATE",
          value: "Establish climb"
        },
        MAINTAIN_VGA: {
          id: "go_around_maintain_vga",
          title: "Climb Speed",
          value: "Maintain ≥ Vga"
        },
        FLAPS: {
          id: "go_around_flaps",
          title: "Flaps",
          value: "15°"
        },
        POSITIVE_ROC: {
          id: "go_around_positive_roc",
          title: "Positive ROC",
          value: "Gear UP"
        },
        FOUR_HUNDRED_AGL: {
          id: "go_around_400_agl",
          title: "400 ft AGL",
          value: "",
          isSubsection: true
        },
        CONTINUE_TAKEOFF: {
          id: "go_around_continue_takeoff",
          title: "Continue",
          value: "Like normal takeoff"
        }
      }
    },

    AFTER_LANDING: {
      id: "phase_after_landing",
      items: {
        AFTER_VACATING_RUNWAY: {
          id: "after_landing_after_vacating_runway",
          title: "AFTER VACATING THE RUNWAY",
          value: "",
          isSubsection: true
        },
        TAXI_LIGHTS: {
          id: "after_landing_taxi_lights",
          title: "Taxi Lights",
          value: "ON"
        },
        LANDING_LIGHTS: {
          id: "after_landing_landing_lights",
          title: "Landing Lights",
          value: "OFF"
        },
        STROBES: {
          id: "after_landing_strobes",
          title: "Strobes",
          value: "OFF"
        },
        FLAPS: {
          id: "after_landing_flaps",
          title: "Flaps",
          value: "RETRACT"
        },
        TRIMS: {
          id: "after_landing_trims",
          title: "Trims",
          value: "SET IN GREEN RANGE"
        },
        TRANSPONDER: {
          id: "after_landing_transponder",
          title: "Transponder",
          value: "STBY"
        },
        WX_RADAR: {
          id: "after_landing_wx_radar",
          title: "WX Radar",
          value: "OFF"
        }
      }
    },

    TAXI_IN: {
      id: "phase_taxi_in",
      items: {
        ATC_TAXI_CLEARANCE: {
          id: "taxi_in_atc_clearance",
          title: "ATC (Taxi Clearance)",
          value: "AS REQ"
        },
        MAX_TAXI_SPEED: {
          id: "taxi_in_max_taxi_speed",
          title: "Max Taxi Speed",
          value: "20-30 kts (5 kts in turns)"
        },
        CROSSING_RUNWAY: {
          id: "taxi_in_crossing_runway",
          title: "Crossing a Runway",
          value: "Strobes → Anti-Collision"
        }
      }
    },

    ENGINE_SHUTDOWN: {
      id: "phase_engine_shutdown",
      items: {
        PARKING_BRAKE: {
          id: "engine_shutdown_parking_brake",
          title: "Parking Brake",
          value: "SET"
        },
        THRUST_LEVERS: {
          id: "engine_shutdown_thrust_levers",
          title: "Thrust Levers",
          value: "IDLE"
        },
        IPS: {
          id: "engine_shutdown_ips",
          title: "IPS",
          value: "AUTO"
        },
        ENGINE_SELECTORS: {
          id: "engine_shutdown_engine_selectors",
          title: "L + R Engine Selectors",
          value: "OFF"
        },
        EXTERNAL_LIGHTS: {
          id: "engine_shutdown_external_lights",
          title: "External Lights",
          value: "OFF"
        },
        PASSENGER_SIGNS: {
          id: "engine_shutdown_passenger_signs",
          title: "Passenger Signs",
          value: "OFF"
        },
        OXYGEN_MAIN_LEVER: {
          id: "engine_shutdown_oxygen_main_lever",
          title: "Oxygen Main Lever",
          value: "OFF (pulled out)"
        },
        CPCS_PRESSURIZATION: {
          id: "engine_shutdown_cpcs_pressurization",
          title: "CPCS / Pressurization",
          value: "CHECK ZERO DIFF"
        },
        INTERNAL_LIGHTS: {
          id: "engine_shutdown_internal_lights",
          title: "Internal Lights",
          value: "OFF"
        },
        BATTERY_1_2: {
          id: "engine_shutdown_battery_1_2",
          title: "Battery 1 + 2",
          value: "OFF"
        }
      }
    },

    PARKING: {
      id: "phase_parking",
      items: {
        CHOCKS_COVERS: {
          id: "parking_chocks_covers",
          title: "Chocks, Covers",
          value: "AS DES"
        }
      }
    }
  }
};

export default checklist;
