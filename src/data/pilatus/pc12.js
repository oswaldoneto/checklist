const checklist = {
    FLIGHT_PHASES: {

        "PREFLIGHT_PREPARATION": {
            id: "phase_preflight_preparation",
            items: {
                MSFS_EFB_FUEL_PAYLOAD: {
                    id: "preflight_prep_msfs_efb_fuel_payload",
                    title: "MSFS EFB - Fuel & Payload",
                    value: "AS DES"
                },
                MSFS_EFB_FLIGHT_PLANNING: {
                    id: "preflight_prep_msfs_efb_flight_planning",
                    title: "MSFS EFB - Flight Planning",
                    value: "AS DES"
                }
            }
        },

        "PREFLIGHT_EXTERIOR_INSPECTION": {
            id: "phase_preflight_exterior_inspection",
            items: {
                COVERS_CHOCKS: {
                    id: "preflight_ext_covers_chocks",
                    title: "Covers, Chocks",
                    value: "REMOVED"
                },
                PRE_POSITIONING: {
                    id: "preflight_ext_pre_positioning",
                    title: "Pre-Positioning",
                    value: "AS DES"
                }
            }
        },

        "PREFLIGHT_INTERIOR_INSPECTION": {
            id: "phase_preflight_interior_inspection",
            items: {
                LOWER_COCKPIT: {
                    id: "preflight_int_lower_cockpit",
                    title: "LOWER COCKPIT",
                    value: "",
                    isSubsection: true
                },
                PARKING_BRAKE: {
                    id: "preflight_int_parking_brake",
                    title: "Parking Brake",
                    value: "SET"
                },
                FLIGHT_CONTROL_LOCK: {
                    id: "preflight_int_flight_control_lock",
                    title: "Flight Control Lock",
                    value: "REMOVED"
                },
                FLIGHT_CONTROLS: {
                    id: "preflight_int_flight_controls",
                    title: "Flight Controls",
                    value: "FULL & FREE MOVEMENT"
                },
                ICE_PROTECTION: {
                    id: "preflight_int_ice_protection",
                    title: "Ice Protection",
                    value: "ALL OFF"
                },
                INERTIAL_SEPARATOR: {
                    id: "preflight_int_inertial_separator",
                    title: "Inertial Separator",
                    value: "AS REQ"
                },
                LANDING_GEAR: {
                    id: "preflight_int_landing_gear",
                    title: "Landing Gear",
                    value: "DOWN"
                },
                OXYGEN_MAIN_LEVER: {
                    id: "preflight_int_oxygen_main_lever",
                    title: "Oxygen Main Lever",
                    value: "ON"
                },
                BLEED_AIR: {
                    id: "preflight_int_bleed_air",
                    title: "Bleed Air",
                    value: "AUTO"
                },
                HEAT_COOL_FANS: {
                    id: "preflight_int_heat_cool_fans",
                    title: "Heat/Cool & Fans",
                    value: "ALL AUTO"
                },
                CPCS_PRESSURIZATION: {
                    id: "preflight_int_cpcs_pressurization",
                    title: "CPCS (Pressurization)",
                    value: "ALL AUTO"
                },
                POWER_LEVER: {
                    id: "preflight_int_power_lever",
                    title: "Power Lever",
                    value: "IDLE"
                },
                FLAP_LEVER: {
                    id: "preflight_int_flap_lever",
                    title: "Flap Lever",
                    value: "0°"
                },
                COCKPIT_CABIN_INSTRUMENT_LIGHTS: {
                    id: "preflight_int_cockpit_cabin_instrument_lights",
                    title: "Cockpit / Cabin / Instrument Lights",
                    value: "AS REQ / OFF"
                },
                OVERHEAD: {
                    id: "preflight_int_overhead",
                    title: "OVERHEAD",
                    value: "",
                    isSubsection: true
                },
                FUEL_PUMPS: {
                    id: "preflight_int_fuel_pumps",
                    title: "Fuel Pumps",
                    value: "AUTO"
                },
                ENGINE_MASTER: {
                    id: "preflight_int_engine_master",
                    title: "Engine Master",
                    value: "OFF"
                },
                IGNITION: {
                    id: "preflight_int_ignition",
                    title: "Ignition",
                    value: "AUTO"
                },
                EXTERNAL_LIGHTS: {
                    id: "preflight_int_external_lights",
                    title: "External Lights",
                    value: "ALL OFF"
                },
                PASSENGER_SIGNS: {
                    id: "preflight_int_passenger_signs",
                    title: "Passenger Signs",
                    value: "OFF"
                },
                EPS: {
                    id: "preflight_int_eps",
                    title: "EPS",
                    value: "OFF"
                },
                MASTER_POWER: {
                    id: "preflight_int_master_power",
                    title: "Master Power",
                    value: "ON & GUARDED"
                },
                BAT_1_BAT_2_STBY_BUS: {
                    id: "preflight_int_bat_1_bat_2_stby_bus",
                    title: "Bat 1 + Bat 2 + STBY BUS",
                    value: "ALL OFF"
                },
                EXT_POWER: {
                    id: "preflight_int_ext_power",
                    title: "Ext Power",
                    value: "OFF"
                },
                AV_1_BUS_AV2_BUS_CABIN_BUS: {
                    id: "preflight_int_av_1_bus_av2_bus_cabin_bus",
                    title: "AV 1 Bus + AV2 Bus + Cabin Bus",
                    value: "ON"
                },
                GEN_1_GEN_2: {
                    id: "preflight_int_gen_1_gen_2",
                    title: "Gen 1 + Gen 2",
                    value: "ON"
                }
            }
        },

        "BEFORE_ENGINE_START": {
            id: "phase_before_engine_start",
            items: {
                STBY_BUS: {
                    id: "before_engine_start_stby_bus",
                    title: "STBY Bus",
                    value: "ON",
                    note: "→ check MFD gets powered up"
                },
                EPS_TEST: {
                    id: "before_engine_start_eps_test",
                    title: "EPS",
                    value: "TEST (5 sec.), then ARMED"
                },
                BAT_1_BUS_BAT_2_BUS: {
                    id: "before_engine_start_bat_1_bus_bat_2_bus",
                    title: "Bat 1 Bus + Bat 2 Bus",
                    value: "ON",
                    note: "→ check PFD gets powered up"
                },
                EXTERNAL_POWER: {
                    id: "before_engine_start_external_power",
                    title: "External Power",
                    value: "AS REQ"
                },
                NAV_LIGHTS: {
                    id: "before_engine_start_nav_lights",
                    title: "Nav Lights",
                    value: "ON"
                },
                PASSENGER_SIGNS: {
                    id: "before_engine_start_passenger_signs",
                    title: "Passenger Signs",
                    value: "AS REQ"
                },
                MFD_LANDING_GEAR_LIGHTS: {
                    id: "before_engine_start_mfd_landing_gear_lights",
                    title: "MFD - Landing Gear Lights",
                    value: "CHECK 3 GREEN"
                },
                FUEL_QUANTITY: {
                    id: "before_engine_start_fuel_quantity",
                    title: "Fuel Quantity",
                    value: "CHECK"
                },
                FIRE_TEST: {
                    id: "before_engine_start_fire_test",
                    title: "Fire Test",
                    value: "PERFORM"
                },
                LAMP_TEST: {
                    id: "before_engine_start_lamp_test",
                    title: "Lamp Test",
                    value: "PERFORM"
                },
                OXYGEN_PRESSURE: {
                    id: "before_engine_start_oxygen_pressure",
                    title: "Oxygen Pressure (left wall)",
                    value: "CHECK"
                },
                COM_RADIOS: {
                    id: "before_engine_start_com_radios",
                    title: "Com Radios",
                    value: "AS REQ"
                },
                ATC_ATIS_IFR_CLEARANCE: {
                    id: "before_engine_start_atc_atis_ifr_clearance",
                    title: "ATC (ATIS / IFR Clearance)",
                    value: "AS REQ"
                }
            }
        },

        "ENGINE_START": {
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
                MFD_FUEL_PUMPS: {
                    id: "engine_start_mfd_fuel_pumps",
                    title: "MFD - Fuel Pumps",
                    value: "CHECK TWO GREEN"
                },
                INERTIAL_SEPARATOR: {
                    id: "engine_start_inertial_separator",
                    title: "Inertial Separator",
                    value: "AS REQ"
                },
                POWER_LEVER: {
                    id: "engine_start_power_lever",
                    title: "Power Lever",
                    value: "IDLE"
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
                ENGINE_START: {
                    id: "engine_start_engine_start",
                    title: "Engine Start",
                    value: "PERFORM"
                },
                PROPELLER_AREA: {
                    id: "engine_start_propeller_area",
                    title: "→ Propeller Area",
                    value: "check CLEAR"
                },
                ENGINE_MASTER: {
                    id: "engine_start_engine_master",
                    title: "→ Engine Master",
                    value: "RUN"
                },
                STARTER_BUTTON: {
                    id: "engine_start_starter_button",
                    title: "→ Starter Button",
                    value: "PRESS"
                },
                ENGINE_INDICATIONS: {
                    id: "engine_start_engine_indications",
                    title: "→ Engine Indications",
                    value: "MONITOR (esp. Oil Pressure)"
                },
                CONFIRM_STABLE_NG: {
                    id: "engine_start_confirm_stable_ng",
                    title: "→ confirm stable NG",
                    value: "~ 65%"
                },
                GENERATORS: {
                    id: "engine_start_generators",
                    title: "Generators",
                    value: "CHECK AMPS & VOLTS"
                },
                ICE_PROTECTION: {
                    id: "engine_start_ice_protection",
                    title: "Ice Protection",
                    value: "AS REQ"
                }
            }
        },

        "BEFORE_TAXI": {
            id: "phase_before_taxi",
            items: {
                FLAPS: {
                    id: "before_taxi_flaps",
                    title: "Flaps",
                    value: "SET FOR T.O. (15° or 30°)"
                },
                TRIM: {
                    id: "before_taxi_trim",
                    title: "Trim",
                    value: "SET FOR T.O. (green)"
                },
                ICE_PROTECTION: {
                    id: "before_taxi_ice_protection",
                    title: "Ice Protection",
                    value: "AS REQ"
                },
                INERTIAL_SEPARATOR: {
                    id: "before_taxi_inertial_separator",
                    title: "Inertial Separator",
                    value: "AS REQ"
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
                    note: "→ for PFD settings → MCU → DU & CCD → upper MFD → then see lower MFD → left side Tabs → set Units & Settings"
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
                    note: "→ select PFD NAV source (NAV SEL button) - FMS for GPS → preselect lateral mode - NAV for GPS flight plan → preselect cleared or planned altitude → preselect vertical mode - FLC → preselect FMS or MAN speed mode (FMS recommended)"
                }
            }
        },

        "TAXI": {
            id: "phase_taxi",
            items: {
                ATC_TAXI_CLEARANCE: {
                    id: "taxi_atc_taxi_clearance",
                    title: "ATC (Taxi Clearance)",
                    value: "AS REQ"
                },
                TRANSPONDER: {
                    id: "taxi_transponder",
                    title: "Transponder",
                    value: "SQUAWK SET & STBY",
                    note: "→ set squawk at PFD XPDR Mode with RADIO selector knob → set PFD XPDR Mode to STBY"
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
                RELEASE_PARKING_BRAKE: {
                    id: "taxi_release_parking_brake",
                    title: "→ release Parking Brake",
                    value: ""
                },
                CHECK_BRAKING_STEERING: {
                    id: "taxi_check_braking_steering",
                    title: "→ check braking and steering",
                    value: ""
                },
                CHECK_ENGINE_FLIGHT_INSTRUMENTS: {
                    id: "taxi_check_engine_flight_instruments",
                    title: "→ check engine & flight instruments",
                    value: ""
                },
                MAX_TAXI_SPEED: {
                    id: "taxi_max_taxi_speed",
                    title: "→ max. taxi speed",
                    value: "20-30 kts (5 kts during turns)"
                },
                CROSSING_RUNWAY_STROBES: {
                    id: "taxi_crossing_runway_strobes",
                    title: "→ when crossing a runway",
                    value: "Strobes ON"
                }
            }
        },

        "BEFORE_TAKEOFF": {
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
                    value: "SET FOR T.O. (15° or 30°)"
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
                PROBE_HEATING: {
                    id: "before_takeoff_probe_heating",
                    title: "Probe Heating",
                    value: "ON"
                },
                ICE_PROTECTION: {
                    id: "before_takeoff_ice_protection",
                    title: "Ice Protection",
                    value: "AS REQ"
                },
                INERTIAL_SEPARATOR: {
                    id: "before_takeoff_inertial_separator",
                    title: "Inertial Separator",
                    value: "AS REQ"
                },
                ACS_BLEED_AIR: {
                    id: "before_takeoff_acs_bleed_air",
                    title: "ACS Bleed Air",
                    value: "AS REQ / INHIBIT"
                },
                ATC_DEPARTURE_CLEARANCE: {
                    id: "before_takeoff_atc_departure_clearance",
                    title: "ATC (Departure Clearance)",
                    value: "AS REQ"
                },
                REPLAY_TOOL: {
                    id: "before_takeoff_replay_tool",
                    title: "Replay Tool",
                    value: "AS DES"
                }
            }
        },

        "BEFORE_ENTERING_THE_RUNWAY": {
            id: "phase_before_entering_the_runway",
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

        "TAKEOFF": {
            id: "phase_takeoff",
            items: {
                LINE_UP_BRAKE_WAIT_ATC: {
                    id: "takeoff_line_up_brake_wait_atc",
                    title: "line up, brake and wait for ATC clearance if required",
                    value: ""
                },
                POWER_LEVER_TO: {
                    id: "takeoff_power_lever_to",
                    title: "Power Lever",
                    value: "→ T/O"
                },
                RELEASE_BRAKES: {
                    id: "takeoff_release_brakes",
                    title: "release Brakes",
                    value: ""
                },
                AT_VR_ROTATE: {
                    id: "takeoff_at_vr_rotate",
                    title: "at VR",
                    value: "→ ROTATE"
                },
                MAINTAIN_V50FT: {
                    id: "takeoff_maintain_v50ft",
                    title: "maintain V50ft until obstacles cleared",
                    value: ""
                },
                AT_POSITIVE_ROC_GEAR_UP: {
                    id: "takeoff_at_positive_roc_gear_up",
                    title: "at positive ROC",
                    value: "→ GEAR UP"
                },
                ACCELERATE_TO_CLIMB_OUT_SPEED: {
                    id: "takeoff_accelerate_to_climb_out_speed",
                    title: "accelerate to climb out speed",
                    value: "(130 KIAS Vy)"
                },
                ABOVE_100_KIAS_FLAPS_0: {
                    id: "takeoff_above_100_kias_flaps_0",
                    title: "above 100 KIAS",
                    value: "→ FLAPS 0°"
                },
                YAW_DAMPER_ON: {
                    id: "takeoff_yaw_damper_on",
                    title: "Yaw Damper",
                    value: "ON"
                },
                ACTIVATE_AP_ATHR: {
                    id: "takeoff_activate_ap_athr",
                    title: "activate AP and/or ATHR",
                    value: "at own discretion"
                },
                ACCELERATE_TO_CLIMB_SPEED: {
                    id: "takeoff_accelerate_to_climb_speed",
                    title: "accelerate to climb speed",
                    value: "(140 KIAS)"
                },
                POWER_LEVER_MCP: {
                    id: "takeoff_power_lever_mcp",
                    title: "Power Lever",
                    value: "→ MCP"
                }
            }
        },

        "AFTER_TAKEOFF_CLIMB": {
            id: "phase_after_takeoff_climb",
            items: {
                POWER_LEVER: {
                    id: "after_takeoff_climb_power_lever",
                    title: "Power Lever",
                    value: "MCP"
                },
                YAW_DAMPER: {
                    id: "after_takeoff_climb_yaw_damper",
                    title: "Yaw Damper",
                    value: "ON"
                },
                AUTOPILOT_AUTOTHROTTLE: {
                    id: "after_takeoff_climb_autopilot_autothrottle",
                    title: "Autopilot / Autothrottle",
                    value: "AS DES"
                },
                FLAPS: {
                    id: "after_takeoff_climb_flaps",
                    title: "Flaps",
                    value: "UP"
                },
                LANDING_GEAR: {
                    id: "after_takeoff_climb_landing_gear",
                    title: "Landing Gear",
                    value: "UP"
                },
                TAXI_LIGHTS: {
                    id: "after_takeoff_climb_taxi_lights",
                    title: "Taxi Lights",
                    value: "OFF"
                },
                LANDING_LIGHTS_RECOGNITION_LIGHTS: {
                    id: "after_takeoff_climb_landing_lights_recognition_lights",
                    title: "Landing Lights / Recognition Lights",
                    value: "AS REQ / OFF"
                },
                ICE_PROTECTION: {
                    id: "after_takeoff_climb_ice_protection",
                    title: "Ice Protection",
                    value: "AS REQ"
                },
                INERTIAL_SEPARATOR: {
                    id: "after_takeoff_climb_inertial_separator",
                    title: "Inertial Separator",
                    value: "AS REQ"
                },
                ACS_BLEED_AIR: {
                    id: "after_takeoff_climb_acs_bleed_air",
                    title: "ACS Bleed Air",
                    value: "AUTO"
                },
                PRESSURIZATION: {
                    id: "after_takeoff_climb_pressurization",
                    title: "Pressurization (lower MFD)",
                    value: "MONITOR"
                },
                PASSENGER_SIGNS: {
                    id: "after_takeoff_climb_passenger_signs",
                    title: "Passenger Signs",
                    value: "AS REQ"
                },
                ALTIMETERS_BARO_REF: {
                    id: "after_takeoff_climb_altimeters_baro_ref",
                    title: "Altimeters / Baro Ref",
                    value: "SET STD (29.92 / 1013)"
                }
            }
        },

        "CRUISE": {
            id: "phase_cruise",
            items: {
                POWER_LEVER: {
                    id: "cruise_power_lever",
                    title: "Power Lever",
                    value: "AS DES"
                },
                AUTOPILOT_AUTOTHROTTLE: {
                    id: "cruise_autopilot_autothrottle",
                    title: "Autopilot / Autothrottle",
                    value: "AS DES"
                },
                ICE_PROTECTION: {
                    id: "cruise_ice_protection",
                    title: "Ice Protection",
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

        "DESCENT_PREPARATION": {
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
                    note: "(optional) set VREF according estimated landing weight"
                },
                AUTOPILOT_FLIGHT_DIRECTOR: {
                    id: "descent_prep_autopilot_flight_director",
                    title: "Autopilot / Flight Director",
                    value: "AS DES",
                    note: "preselect altitude and VNAV → if unsure - use altitude of last waypoint before runway"
                },
                GPS_NAV_RADIOS: {
                    id: "descent_prep_gps_nav_radios",
                    title: "GPS / NAV Radios",
                    value: "SET"
                }
            }
        },

        "DESCENT": {
            id: "phase_descent",
            items: {
                PASSENGER_SIGNS: {
                    id: "descent_passenger_signs",
                    title: "Passenger Signs",
                    value: "AS REQ"
                },
                PRESSURIZATION: {
                    id: "descent_pressurization",
                    title: "Pressurization (lower MFD)",
                    value: "MONITOR"
                },
                ALTIMETERS_BARO_REF: {
                    id: "descent_altimeters_baro_ref",
                    title: "Altimeters / Baro Ref",
                    value: "SET LOCAL QNH"
                }
            }
        },

        "LANDING_CHECK": {
            id: "phase_landing_check",
            items: {
                FLAPS: {
                    id: "landing_check_flaps",
                    title: "Flaps",
                    value: "30° or 40°"
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
                }
            }
        },

        "GO_AROUND": {
            id: "phase_go_around",
            items: {
                POWER_LEVER_TO: {
                    id: "go_around_power_lever_to",
                    title: "Power Lever",
                    value: "T/O"
                },
                PRESS_TOGA_BUTTON: {
                    id: "go_around_press_toga_button",
                    title: "press TO/GA button",
                    value: "(on power lever)"
                },
                ROTATE_ESTABLISH_CLIMB: {
                    id: "go_around_rotate_establish_climb",
                    title: "ROTATE and establish climb",
                    value: ""
                },
                MAINTAIN_MIN_90_KIAS: {
                    id: "go_around_maintain_min_90_kias",
                    title: "maintain min.",
                    value: "90 KIAS"
                },
                FLAPS_30: {
                    id: "go_around_flaps_30",
                    title: "FLAPS",
                    value: "30°"
                },
                ACCELERATE_TO_CLIMB_OUT_SPEED: {
                    id: "go_around_accelerate_to_climb_out_speed",
                    title: "accelerate to climb out speed",
                    value: "(130 KIAS Vy)"
                },
                ABOVE_100_KIAS_FLAPS_0: {
                    id: "go_around_above_100_kias_flaps_0",
                    title: "above 100 KIAS",
                    value: "→ FLAPS 0°"
                },
                YAW_DAMPER_ON: {
                    id: "go_around_yaw_damper_on",
                    title: "Yaw Damper",
                    value: "ON"
                },
                ACTIVATE_AP_ATHR: {
                    id: "go_around_activate_ap_athr",
                    title: "activate AP and/or ATHR",
                    value: "at own discretion"
                }
            }
        },

        "AFTER_LANDING": {
            id: "phase_after_landing",
            items: {
                AFTER_VACATING_THE_RUNWAY: {
                    id: "after_landing_after_vacating_the_runway",
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
                PROBE_HEATING: {
                    id: "after_landing_probe_heating",
                    title: "Probe Heating",
                    value: "AS REQ / OFF"
                },
                ICE_PROTECTION: {
                    id: "after_landing_ice_protection",
                    title: "Ice Protection",
                    value: "AS REQ / OFF"
                },
                INERTIAL_SEPARATOR: {
                    id: "after_landing_inertial_separator",
                    title: "Inertial Separator",
                    value: "AS REQ"
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
                }
            }
        },

        "TAXI_IN": {
            id: "phase_taxi_in",
            items: {
                ATC_TAXI_CLEARANCE: {
                    id: "taxi_in_atc_taxi_clearance",
                    title: "ATC (Taxi Clearance)",
                    value: "AS REQ"
                },
                MAX_TAXI_SPEED: {
                    id: "taxi_in_max_taxi_speed",
                    title: "→ max. Taxi Speed",
                    value: "20-30 kts (5 kts during Turns)"
                },
                CROSSING_RUNWAY_STROBES_ANTI_COLLISION: {
                    id: "taxi_in_crossing_runway_strobes_anti_collision",
                    title: "→ when crossing a Runway",
                    value: "→ Strobes → Anti-Collision"
                }
            }
        },

        "ENGINE_SHUTDOWN": {
            id: "phase_engine_shutdown",
            items: {
                PARKING_BRAKE: {
                    id: "engine_shutdown_parking_brake",
                    title: "Parking Brake",
                    value: "SET"
                },
                POWER_LEVER: {
                    id: "engine_shutdown_power_lever",
                    title: "Power Lever",
                    value: "IDLE"
                },
                PROBE_HEATING: {
                    id: "engine_shutdown_probe_heating",
                    title: "Probe Heating",
                    value: "OFF"
                },
                ICE_PROTECTION: {
                    id: "engine_shutdown_ice_protection",
                    title: "Ice Protection",
                    value: "OFF"
                },
                INERTIAL_SEPARATOR: {
                    id: "engine_shutdown_inertial_separator",
                    title: "Inertial Separator",
                    value: "AS REQ"
                },
                ENGINE_SWITCH: {
                    id: "engine_shutdown_engine_switch",
                    title: "Engine Switch",
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
                    value: "OFF"
                },
                CPCS_PRESSURIZATION: {
                    id: "engine_shutdown_cpcs_pressurization",
                    title: "CPCS / Pressurization",
                    value: "CHECK ZERO DIFF"
                },
                STBY_BUS: {
                    id: "engine_shutdown_stby_bus",
                    title: "STBY Bus",
                    value: "OFF"
                },
                EPS: {
                    id: "engine_shutdown_eps",
                    title: "EPS",
                    value: "OFF"
                },
                BAT_1_BUS_BAT_2_BUS: {
                    id: "engine_shutdown_bat_1_bus_bat_2_bus",
                    title: "Bat 1 Bus + Bat 2 Bus",
                    value: "OFF"
                }
            }
        },

        "PARKING": {
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

// Exporting the checklist
export default checklist;
