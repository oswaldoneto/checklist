const checklist = {
    FLIGHT_PHASES: {
        "BEFORE_STARTING_ENGINE": {
            id: "phase_before_starting_engine",
            items: {
                PREFLIGHT_INSPECTION: {
                    id: "before_starting_engine_preflight_inspection",
                    title: "Preflight inspection",
                    value: "complete"
                },
                CONTROL_LOCKS: {
                    id: "before_starting_engine_control_locks",
                    title: "Control locks",
                    value: "stowed"
                },
                SEATS_AND_SEATBELTS: {
                    id: "before_starting_engine_seats_and_seatbelts",
                    title: "Seats & seatbelts",
                    value: "secure"
                },
                CABIN_DOORS: {
                    id: "before_starting_engine_cabin_doors",
                    title: "Cabin doors",
                    value: "latched"
                },
                PARKING_BRAKE: {
                    id: "before_starting_engine_parking_brake",
                    title: "Parking brake",
                    value: "set"
                },
                EMERGENCY_GEAR_HANDLE: {
                    id: "before_starting_engine_emergency_gear_handle",
                    title: "Emergency gear handle",
                    value: "stowed"
                },
                AVIONICS_BREAKERS: {
                    id: "before_starting_engine_avionics_breakers",
                    title: "Avionics breakers",
                    value: "all in"
                },
                FLAPS: {
                    id: "before_starting_engine_flaps",
                    title: "Flaps",
                    value: "up"
                },
                OXYGEN_PRESSURE: {
                    id: "before_starting_engine_oxygen_pressure",
                    title: "Oxygen pressure",
                    value: "1550-1850 psi"
                },
                AVIONICS: {
                    id: "before_starting_engine_avionics",
                    title: "Avionics",
                    value: "off"
                },
                THROTTLE_CLOSED: {
                    id: "before_starting_engine_throttle_closed",
                    title: "Throttle",
                    value: "closed"
                },
                PROPELLER: {
                    id: "before_starting_engine_propeller",
                    title: "Propeller",
                    value: "high RPM"
                },
                MIXTURE: {
                    id: "before_starting_engine_mixture",
                    title: "Mixture",
                    value: "full rich"
                },
                COWL_FLAPS: {
                    id: "before_starting_engine_cowl_flaps",
                    title: "Cowl flaps",
                    value: "open"
                },
                AILERON_TRIM: {
                    id: "before_starting_engine_aileron_trim",
                    title: "Aileron trim",
                    value: "centered"
                },
                ALTERNATE_AIR: {
                    id: "before_starting_engine_alternate_air",
                    title: "Alternate air",
                    value: "off"
                },
                FIREWALL_VALVE: {
                    id: "before_starting_engine_firewall_valve",
                    title: "Firewall valve",
                    value: "open (push)"
                },
                LANDING_GEAR: {
                    id: "before_starting_engine_landing_gear",
                    title: "Landing gear",
                    value: "down"
                },
                SUBPANEL_SWITCHES: {
                    id: "before_starting_engine_subpanel_switches",
                    title: "All subpanel switches",
                    value: "off"
                },
                LOADMETER: {
                    id: "before_starting_engine_loadmeter",
                    title: "Loadmeter",
                    value: "primary"
                },
                MAIN_BREAKERS: {
                    id: "before_starting_engine_main_breakers",
                    title: "Main breakers",
                    value: "all in"
                },
                ALTERNATE_STATIC_AIR: {
                    id: "before_starting_engine_alternate_static_air",
                    title: "Alternate static air",
                    value: "normal"
                },
                CO_DETECTOR: {
                    id: "before_starting_engine_co_detector",
                    title: "CO detector",
                    value: "test"
                },
                FUEL_SELECTOR: {
                    id: "before_starting_engine_fuel_selector",
                    title: "Fuel selector",
                    value: "fullest tank"
                },
                BEACON_LIGHT: {
                    id: "before_starting_engine_beacon_light",
                    title: "Beacon light",
                    value: "on"
                },
                BATTERY_MASTER: {
                    id: "before_starting_engine_battery_master",
                    title: "Battery master",
                    value: "on"
                },
                BUS_VOLTS: {
                    id: "before_starting_engine_bus_volts",
                    title: "Bus volts",
                    value: "23V minimum"
                },
                ANNUNCIATORS: {
                    id: "before_starting_engine_annunciators",
                    title: "Annunciators",
                    value: "test & consider"
                },
                PRIMARY_ALTERNATOR: {
                    id: "before_starting_engine_primary_alternator",
                    title: "Primary alternator",
                    value: "on"
                },
                STANDBY_ALTERNATOR: {
                    id: "before_starting_engine_standby_alternator",
                    title: "Standby alternator",
                    value: "on"
                },
                FUEL_QUANTITIES: {
                    id: "before_starting_engine_fuel_quantities",
                    title: "Fuel quantities",
                    value: "check"
                },
                AUX_FUEL_PUMP_LO: {
                    id: "before_starting_engine_aux_fuel_pump_lo",
                    title: "Aux fuel pump",
                    value: "Lo"
                },
                AUX_FUEL_PUMP_AUDIBLE: {
                    id: "before_starting_engine_aux_fuel_pump_audible",
                    title: "Aux fuel pump",
                    value: "audible"
                },
                AUX_FUEL_PUMP_OFF: {
                    id: "before_starting_engine_aux_fuel_pump_off",
                    title: "Aux fuel pump",
                    value: "off"
                },
                STANDBY_GYRO_PUMP_ON: {
                    id: "before_starting_engine_standby_gyro_pump_on",
                    title: "Standby gyro pump",
                    value: "on"
                },
                STBY_GYRO_P_ANNUN: {
                    id: "before_starting_engine_stby_gyro_p_annun",
                    title: "STBY GYRO P annun",
                    value: "illuminated"
                },
                INSTRUMENT_AIR: {
                    id: "before_starting_engine_instrument_air",
                    title: "Instrument air",
                    value: "green"
                },
                STANDBY_GYRO_PUMP_OFF: {
                    id: "before_starting_engine_standby_gyro_pump_off",
                    title: "Standby gyro pump",
                    value: "off"
                }
            }
        },
        "ENGINE_START_COLD": {
            id: "phase_engine_start_cold",
            items: {
                MIXTURE: {
                    id: "engine_start_cold_mixture",
                    title: "Mixture",
                    value: "full rich"
                },
                PROPELLER: {
                    id: "engine_start_cold_propeller",
                    title: "Propeller",
                    value: "high RPM"
                },
                THROTTLE_FULL_OPEN: {
                    id: "engine_start_cold_throttle_full_open",
                    title: "Throttle",
                    value: "full open"
                },
                AUX_FUEL_PUMP_HI: {
                    id: "engine_start_cold_aux_fuel_pump_hi",
                    title: "Aux fuel pump",
                    value: "Hi for 2-3s"
                },
                FUEL_FLOW: {
                    id: "engine_start_cold_fuel_flow",
                    title: "Fuel flow",
                    value: "greater than 3 GPH"
                },
                AUX_FUEL_PUMP_OFF: {
                    id: "engine_start_cold_aux_fuel_pump_off",
                    title: "Aux fuel pump",
                    value: "off"
                },
                THROTTLE_OPEN_HALF: {
                    id: "engine_start_cold_throttle_open_half",
                    title: "Throttle",
                    value: "open 1/2 in"
                },
                STARTER: {
                    id: "engine_start_cold_starter",
                    title: "Starter",
                    value: "engage"
                },
                THROTTLE_SET: {
                    id: "engine_start_cold_throttle_set",
                    title: "Throttle",
                    value: "1000-1200 RPM"
                }
            }
        },
        "ENGINE_START_HOT": {
            id: "phase_engine_start_hot",
            items: {
                MIXTURE_CUTOFF: {
                    id: "engine_start_hot_mixture_cutoff",
                    title: "Mixture",
                    value: "cut-off"
                },
                PROPELLER: {
                    id: "engine_start_hot_propeller",
                    title: "Propeller",
                    value: "high RPM"
                },
                AUX_FUEL_PUMP_LONG: {
                    id: "engine_start_hot_aux_fuel_pump_long",
                    title: "Aux fuel pump",
                    value: "Hi for 10-20s"
                },
                AUX_FUEL_PUMP_OFF_INITIAL: {
                    id: "engine_start_hot_aux_fuel_pump_off_initial",
                    title: "Aux fuel pump",
                    value: "off"
                },
                MIXTURE_FULL_RICH: {
                    id: "engine_start_hot_mixture_full_rich",
                    title: "Mixture",
                    value: "full rich"
                },
                AUX_FUEL_PUMP_SHORT: {
                    id: "engine_start_hot_aux_fuel_pump_short",
                    title: "Aux fuel pump",
                    value: "Hi for 2-3s"
                },
                FUEL_FLOW: {
                    id: "engine_start_hot_fuel_flow",
                    title: "Fuel flow",
                    value: "greater than 3 GPH"
                },
                AUX_FUEL_PUMP_FINAL_OFF: {
                    id: "engine_start_hot_aux_fuel_pump_final_off",
                    title: "Aux fuel pump",
                    value: "off"
                },
                THROTTLE_OPEN_HALF: {
                    id: "engine_start_hot_throttle_open_half",
                    title: "Throttle",
                    value: "open 1/2 in"
                },
                STARTER: {
                    id: "engine_start_hot_starter",
                    title: "Starter",
                    value: "engage"
                },
                IF_NO_START: {
                    id: "engine_start_hot_if_no_start",
                    title: "If no start…",
                    value: "repeat"
                }
            }
        },
        "ENGINE_START_FLOODED": {
            id: "phase_engine_start_flooded",
            items: {
                MIXTURE: {
                    id: "engine_start_flooded_mixture",
                    title: "Mixture",
                    value: "lean"
                },
                PROPELLER: {
                    id: "engine_start_flooded_propeller",
                    title: "Propeller",
                    value: "high RPM"
                },
                THROTTLE_OPEN_HALF: {
                    id: "engine_start_flooded_throttle_open_half",
                    title: "Throttle",
                    value: "open 1/2 in"
                },
                THROTTLE_ADVANCE: {
                    id: "engine_start_flooded_throttle_advance",
                    title: "Throttle",
                    value: "advance until start"
                },
                STARTER: {
                    id: "engine_start_flooded_starter",
                    title: "Starter",
                    value: "engage"
                },
                THROTTLE_IDLE: {
                    id: "engine_start_flooded_throttle_idle",
                    title: "Throttle",
                    value: "idle"
                },
                MIXTURE_FULL_RICH: {
                    id: "engine_start_flooded_mixture_full_rich",
                    title: "Mixture",
                    value: "full rich"
                }
            }
        },
        "AFTER_STARTING": {
            id: "phase_after_starting",
            items: {
                THROTTLE: {
                    id: "after_starting_throttle",
                    title: "Throttle",
                    value: "1000-1200 RPM"
                },
                OIL_PRESSURE: {
                    id: "after_starting_oil_pressure",
                    title: "Oil pressure",
                    value: "green"
                },
                START_ANNUNCIATOR: {
                    id: "after_starting_start_annunciator",
                    title: "Start annun",
                    value: "extinguished"
                },
                LOW_VOLTS_ANNUNCIATOR: {
                    id: "after_starting_low_volts_annunciator",
                    title: "Low volts annun",
                    value: "extinguished"
                },
                ALTERNATOR_LOAD: {
                    id: "after_starting_alternator_load",
                    title: "Alternator load",
                    value: "below 25A in 2 min"
                },
                BUS_VOLTS: {
                    id: "after_starting_bus_volts",
                    title: "Bus volts",
                    value: "28V"
                },
                ENGINE_INSTRUMENTS: {
                    id: "after_starting_engine_instruments",
                    title: "Engine instruments",
                    value: "check"
                },
                LIGHTS: {
                    id: "after_starting_lights",
                    title: "Lights",
                    value: "as required"
                },
                WEATHER_RADAR: {
                    id: "after_starting_weather_radar",
                    title: "Weather radar",
                    value: "off/standby"
                },
                AVIONICS: {
                    id: "after_starting_avionics",
                    title: "Avionics",
                    value: "on"
                },
                CABIN_AIR_HEAT: {
                    id: "after_starting_cabin_air_heat",
                    title: "Cabin air & heat",
                    value: "as desired"
                },
                AIR_CONDITIONING: {
                    id: "after_starting_air_conditioning",
                    title: "Air conditioning",
                    value: "as desired"
                },
                MIXTURE: {
                    id: "after_starting_mixture",
                    title: "Mixture",
                    value: "lean for taxi"
                },
                PARKING_BRAKE: {
                    id: "after_starting_parking_brake",
                    title: "Parking brake",
                    value: "release"
                },
                BRAKES: {
                    id: "after_starting_brakes",
                    title: "Brakes",
                    value: "check"
                }
            }
        },
        "RUNUP": {
            id: "phase_runup",
            items: {
                PARKING_BRAKE: {
                    id: "runup_parking_brake",
                    title: "Parking brake",
                    value: "set"
                },
                ANNUNCIATORS: {
                    id: "runup_annunciators",
                    title: "Annunciators",
                    value: "test & consider"
                },
                REMOTE_COMPASS: {
                    id: "runup_remote_compass",
                    title: "Remote compass",
                    value: "slaved & aligned"
                },
                MIXTURE: {
                    id: "runup_mixture",
                    title: "Mixture",
                    value: "full rich"
                },
                THROTTLE_1700: {
                    id: "runup_throttle_1700",
                    title: "Throttle",
                    value: "1700 RPM"
                },
                EXERCISE_PROPELLER: {
                    id: "runup_exercise_propeller",
                    title: "Exercise propeller",
                    value: "to 300 RPM drop"
                },
                CHECK_MAGNETOS: {
                    id: "runup_check_magnetos",
                    title: "Check magnetos",
                    value: "150 RPM drop max"
                },
                INSTRUMENT_AIR: {
                    id: "runup_instrument_air",
                    title: "Instrument air",
                    value: "green"
                },
                PRIMARY_ALTERNATOR_OFF: {
                    id: "runup_primary_alternator_off",
                    title: "Primary alternator",
                    value: "off"
                },
                LOADMETER_SECONDARY: {
                    id: "runup_loadmeter_secondary",
                    title: "Loadmeter",
                    value: "secondary"
                },
                ALTERNATOR_LOAD_INCREASE: {
                    id: "runup_alternator_load_increase",
                    title: "Alternator load",
                    value: "increase"
                },
                STBY_ALT_ANNUN: {
                    id: "runup_stby_alt_annun",
                    title: "STBY ALT annun",
                    value: "illuminated"
                },
                STANDBY_ALTERNATOR_OFF: {
                    id: "runup_standby_alternator_off",
                    title: "Standby alternator",
                    value: "off"
                },
                ALTERNATOR_LOAD_ZERO: {
                    id: "runup_alternator_load_zero",
                    title: "Alternator load",
                    value: "zero"
                },
                LOADMETER_PRIMARY: {
                    id: "runup_loadmeter_primary",
                    title: "Loadmeter",
                    value: "primary"
                },
                PRIMARY_ALTERNATOR_ON: {
                    id: "runup_primary_alternator_on",
                    title: "Primary alternator",
                    value: "on"
                },
                STANDBY_ALTERNATOR_ON: {
                    id: "runup_standby_alternator_on",
                    title: "Standby alternator",
                    value: "on"
                },
                ALTERNATOR_LOAD_ABOVE_25: {
                    id: "runup_alternator_load_above_25",
                    title: "Alternator load",
                    value: "above 25A"
                },
                PROPELLER_HEAT_ON: {
                    id: "runup_propeller_heat_on",
                    title: "Propeller heat",
                    value: "on"
                },
                PROPELLER_AMPS: {
                    id: "runup_propeller_amps",
                    title: "Propeller amps",
                    value: "20-25A"
                },
                PROPELLER_HEAT_OFF: {
                    id: "runup_propeller_heat_off",
                    title: "Propeller heat",
                    value: "off"
                },
                THROTTLE_1000: {
                    id: "runup_throttle_1000",
                    title: "Throttle",
                    value: "1000-1200 RPM"
                },
                ELECTRIC_TRIM: {
                    id: "runup_electric_trim",
                    title: "Electric trim",
                    value: "exercise"
                },
                AUTOPILOT_TEST: {
                    id: "runup_autopilot_test",
                    title: "Autopilot",
                    value: "test"
                },
                HEADING_BUG_LEFT: {
                    id: "runup_heading_bug_left",
                    title: "Heading bug",
                    value: "30 degrees left"
                },
                AUTOPILOT_MASTER: {
                    id: "runup_autopilot_master",
                    title: "Autopilot master",
                    value: "engage"
                },
                HEADING_MODE: {
                    id: "runup_heading_mode",
                    title: "Heading mode",
                    value: "engage"
                },
                YOKE_MOVEMENT_LEFT: {
                    id: "runup_yoke_movement_left",
                    title: "Yoke movement",
                    value: "observe"
                },
                FLIGHT_DIRECTOR_LEFT: {
                    id: "runup_flight_director_left",
                    title: "Flight director",
                    value: "bank left"
                },
                HEADING_BUG_RIGHT: {
                    id: "runup_heading_bug_right",
                    title: "Heading bug",
                    value: "30 degrees right"
                },
                YOKE_MOVEMENT_RIGHT: {
                    id: "runup_yoke_movement_right",
                    title: "Yoke movement",
                    value: "observe"
                },
                FLIGHT_DIRECTOR_RIGHT: {
                    id: "runup_flight_director_right",
                    title: "Flight director",
                    value: "bank right"
                },
                AUTOPILOT_DISCONNECT_AP: {
                    id: "runup_autopilot_disconnect_ap",
                    title: "Autopilot disconnect",
                    value: "press AP off"
                },
                AUTOPILOT_DISCONNECT_FD: {
                    id: "runup_autopilot_disconnect_fd",
                    title: "Autopilot disconnect",
                    value: "press FD off"
                },
                ELEVATOR_TRIM: {
                    id: "runup_elevator_trim",
                    title: "Elevator trim",
                    value: "set takeoff"
                },
                FLAPS_CHECK: {
                    id: "runup_flaps_check",
                    title: "Flaps",
                    value: "check operation"
                },
                FLAPS_SET: {
                    id: "runup_flaps_set",
                    title: "Flaps",
                    value: "set takeoff"
                },
                WINDOWS: {
                    id: "runup_windows",
                    title: "Windows",
                    value: "closed"
                },
                AFT_DOOR_ANNUN: {
                    id: "runup_aft_door_annun",
                    title: "AFT door annun",
                    value: "extinguished"
                },
                FLIGHT_CONTROLS: {
                    id: "runup_flight_controls",
                    title: "Flight controls",
                    value: "free & correct"
                },
                ALTIMETER: {
                    id: "runup_altimeter",
                    title: "Altimeter",
                    value: "set"
                },
                DEPARTURE_ALTITUDE: {
                    id: "runup_departure_altitude",
                    title: "Departure altitude",
                    value: "set"
                },
                TAKEOFF_HEADING: {
                    id: "runup_takeoff_heading",
                    title: "Takeoff heading",
                    value: "set"
                },
                PANEL_LIGHTS: {
                    id: "runup_panel_lights",
                    title: "Panel lights",
                    value: "dim for takeoff"
                },
                PARKING_BRAKE_RELEASE: {
                    id: "runup_parking_brake_release",
                    title: "Parking brake",
                    value: "release"
                }
            }
        },
        "BEFORE_TAKEOFF": {
            id: "phase_before_takeoff",
            items: {
                MIXTURE: {
                    id: "before_takeoff_mixture",
                    title: "Mixture",
                    value: "max power"
                },
                OIL_TEMPERATURE: {
                    id: "before_takeoff_oil_temperature",
                    title: "Oil temperature",
                    value: "24c minimum"
                },
                AUX_FUEL_PUMP: {
                    id: "before_takeoff_aux_fuel_pump",
                    title: "Aux fuel pump",
                    value: "off"
                },
                AIR_CONDITIONING: {
                    id: "before_takeoff_air_conditioning",
                    title: "Air conditioning",
                    value: "off"
                },
                LANDING_LIGHT: {
                    id: "before_takeoff_landing_light",
                    title: "Landing light",
                    value: "on"
                },
                TRANSPONDER: {
                    id: "before_takeoff_transponder",
                    title: "Transponder",
                    value: "Alt mode"
                },
                WEATHER_RADAR: {
                    id: "before_takeoff_weather_radar",
                    title: "Weather radar",
                    value: "on"
                }
            }
        },
        "TAKEOFF": {
            id: "phase_takeoff",
            items: {
                THROTTLE: {
                    id: "takeoff_throttle",
                    title: "Throttle",
                    value: "full open"
                },
                BRAKES: {
                    id: "takeoff_brakes",
                    title: "Brakes",
                    value: "release"
                },
                ENGINE_INSTRUMENTS: {
                    id: "takeoff_engine_instruments",
                    title: "Engine instruments",
                    value: "check"
                },
                LANDING_GEAR_UP: {
                    id: "takeoff_landing_gear_up",
                    title: "Landing gear up",
                    value: "no rwy remain"
                },
                FLAPS: {
                    id: "takeoff_flaps",
                    title: "Flaps",
                    value: "retract at 80kts"
                },
                AUTOPILOT: {
                    id: "takeoff_autopilot",
                    title: "Autopilot",
                    value: "engage"
                }
            }
        },
        "MAX_CONTINUOUS_POWER": {
            id: "phase_max_continuous_power",
            items: {
                MIXTURE: {
                    id: "max_continuous_power_mixture",
                    title: "Mixture",
                    value: "max power"
                },
                PROPELLER: {
                    id: "max_continuous_power_propeller",
                    title: "Propeller",
                    value: "2700 RPM"
                },
                THROTTLE: {
                    id: "max_continuous_power_throttle",
                    title: "Throttle",
                    value: "full open"
                },
                COWL_FLAPS: {
                    id: "max_continuous_power_cowl_flaps",
                    title: "Cowl flaps",
                    value: "as required"
                },
                AIR_CONDITIONING: {
                    id: "max_continuous_power_air_conditioning",
                    title: "Air conditioning",
                    value: "as desired"
                }
            }
        },
        "ENROUTE_CLIMB": {
            id: "phase_enroute_climb",
            items: {
                MIXTURE: {
                    id: "enroute_climb_mixture",
                    title: "Mixture",
                    value: "max power"
                },
                PROPELLER: {
                    id: "enroute_climb_propeller",
                    title: "Propeller",
                    value: "2500 RPM"
                },
                THROTTLE: {
                    id: "enroute_climb_throttle",
                    title: "Throttle",
                    value: "full open"
                },
                COWL_FLAPS: {
                    id: "enroute_climb_cowl_flaps",
                    title: "Cowl flaps",
                    value: "as required"
                },
                AIR_CONDITIONING: {
                    id: "enroute_climb_air_conditioning",
                    title: "Air conditioning",
                    value: "as desired"
                },
                OXYGEN: {
                    id: "enroute_climb_oxygen",
                    title: "Oxygen",
                    value: "as required"
                },
                ENGINE_PERFORMANCE: {
                    id: "enroute_climb_engine_performance",
                    title: "Engine performance",
                    value: "monitor"
                }
            }
        },
        "CRUISE": {
            id: "phase_cruise",
            items: {
                COWL_FLAPS: {
                    id: "cruise_cowl_flaps",
                    title: "Cowl flaps",
                    value: "close"
                },
                LANDING_LIGHT: {
                    id: "cruise_landing_light",
                    title: "Landing light",
                    value: "off"
                },
                PITOT_HEAT: {
                    id: "cruise_pitot_heat",
                    title: "Pitot heat",
                    value: "on if OAT less than 4c"
                },
                PROPELLER_HEAT: {
                    id: "cruise_propeller_heat",
                    title: "Propeller heat",
                    value: "as required"
                },
                FUEL_IMBALANCE: {
                    id: "cruise_fuel_imbalance",
                    title: "Fuel imbalance",
                    value: "15 gal max"
                },
                TIP_TANK_TRANSFER: {
                    id: "cruise_tip_tank_transfer",
                    title: "Tip tank transfer",
                    value: "as required"
                },
                LEAN_MIXTURE: {
                    id: "cruise_lean_mixture",
                    title: "Lean mixture",
                    value: "LOP or ROP"
                },
                PROPELLER: {
                    id: "cruise_propeller",
                    title: "Propeller",
                    value: "2500 RPM"
                },
                THROTTLE: {
                    id: "cruise_throttle",
                    title: "Throttle",
                    value: "full open"
                },
                CABIN_AIR_HEAT: {
                    id: "cruise_cabin_air_heat",
                    title: "Cabin air & heat",
                    value: "as desired"
                },
                AIR_CONDITIONING: {
                    id: "cruise_air_conditioning",
                    title: "Air conditioning",
                    value: "as desired"
                },
                ENGINE_PERFORMANCE: {
                    id: "cruise_engine_performance",
                    title: "Engine performance",
                    value: "monitor"
                }
            }
        },
        "DESCENT": {
            id: "phase_descent",
            items: {
                COWL_FLAPS: {
                    id: "descent_cowl_flaps",
                    title: "Cowl flaps",
                    value: "closed"
                },
                THROTTLE: {
                    id: "descent_throttle",
                    title: "Throttle",
                    value: "reduce"
                },
                MIXTURE: {
                    id: "descent_mixture",
                    title: "Mixture",
                    value: "enrichen"
                },
                ENGINE_PERFORMANCE: {
                    id: "descent_engine_performance",
                    title: "Engine performance",
                    value: "monitor"
                },
                CYLINDER_HEAD_TEMP: {
                    id: "descent_cylinder_head_temp",
                    title: "Cylinder head temp",
                    value: "116c min."
                }
            }
        },
        "APPROACH": {
            id: "phase_approach",
            items: {
                SEATS_AND_SEATBELTS: {
                    id: "approach_seats_and_seatbelts",
                    title: "Seats & seatbelts",
                    value: "secure"
                },
                FUEL_SELECTOR: {
                    id: "approach_fuel_selector",
                    title: "Fuel selector",
                    value: "fullest tank"
                },
                FUEL_IMBALANCE: {
                    id: "approach_fuel_imbalance",
                    title: "Fuel imbalance",
                    value: "15 gal max"
                },
                TIP_TANK_TRANSFER: {
                    id: "approach_tip_tank_transfer",
                    title: "Tip tank transfer",
                    value: "as required"
                },
                OXYGEN: {
                    id: "approach_oxygen",
                    title: "Oxygen",
                    value: "off"
                },
                LANDING_LIGHT: {
                    id: "approach_landing_light",
                    title: "Landing light",
                    value: "on"
                },
                PITOT_HEAT: {
                    id: "approach_pitot_heat",
                    title: "Pitot heat",
                    value: "on if OAT less than 4c"
                },
                PROPELLER_HEAT: {
                    id: "approach_propeller_heat",
                    title: "Propeller heat",
                    value: "off"
                },
                AIR_CONDITIONING: {
                    id: "approach_air_conditioning",
                    title: "Air conditioning",
                    value: "off"
                },
                COWL_FLAPS: {
                    id: "approach_cowl_flaps",
                    title: "Cowl flaps",
                    value: "as required"
                },
                MIXTURE: {
                    id: "approach_mixture",
                    title: "Mixture",
                    value: "max power"
                },
                FLAPS: {
                    id: "approach_flaps",
                    title: "Flaps",
                    value: "approach"
                }
            }
        },
        "LANDING": {
            id: "phase_landing",
            items: {
                PROPELLER: {
                    id: "landing_propeller",
                    title: "Propeller",
                    value: "high RPM"
                },
                MIXTURE: {
                    id: "landing_mixture",
                    title: "Mixture",
                    value: "max power"
                },
                FLAPS: {
                    id: "landing_flaps",
                    title: "Flaps",
                    value: "as required"
                },
                LANDING_GEAR: {
                    id: "landing_landing_gear",
                    title: "Landing gear",
                    value: "down & locked"
                },
                AUTOPILOT_DISCONNECT: {
                    id: "landing_autopilot_disconnect",
                    title: "Autopilot disconnect",
                    value: "press once"
                }
            }
        },
        "AFTER_LANDING": {
            id: "phase_after_landing",
            items: {
                COWL_FLAPS: {
                    id: "after_landing_cowl_flaps",
                    title: "Cowl flaps",
                    value: "open"
                },
                FLAPS: {
                    id: "after_landing_flaps",
                    title: "Flaps",
                    value: "up"
                },
                LIGHTS: {
                    id: "after_landing_lights",
                    title: "Lights",
                    value: "as required"
                },
                PITOT_HEAT: {
                    id: "after_landing_pitot_heat",
                    title: "Pitot heat",
                    value: "off"
                },
                AIR_CONDITIONING: {
                    id: "after_landing_air_conditioning",
                    title: "Air conditioning",
                    value: "as desired"
                },
                CABIN_AIR_HEAT: {
                    id: "after_landing_cabin_air_heat",
                    title: "Cabin air & heat",
                    value: "as desired"
                }
            }
        },
        "SHUTDOWN_AND_SECURING": {
            id: "phase_shutdown_and_securing",
            items: {
                PARKING_BRAKE: {
                    id: "shutdown_parking_brake",
                    title: "Parking brake",
                    value: "set"
                },
                AVIONICS: {
                    id: "shutdown_avionics",
                    title: "Avionics",
                    value: "off"
                },
                SUBPANEL_SWITCHES: {
                    id: "shutdown_subpanel_switches",
                    title: "All subpanel switches",
                    value: "off"
                },
                THROTTLE: {
                    id: "shutdown_throttle",
                    title: "Throttle",
                    value: "closed"
                },
                PROPELLER: {
                    id: "shutdown_propeller",
                    title: "Propeller",
                    value: "high RPM"
                },
                MIXTURE: {
                    id: "shutdown_mixture",
                    title: "Mixture",
                    value: "cut-off"
                },
                MAGNETOS: {
                    id: "shutdown_magnetos",
                    title: "Magnetos",
                    value: "off"
                },
                ALTERNATORS: {
                    id: "shutdown_alternators",
                    title: "Alternators",
                    value: "off"
                },
                BATTERY_MASTER: {
                    id: "shutdown_battery_master",
                    title: "Battery master",
                    value: "off"
                },
                PARKING_BRAKE_RELEASE: {
                    id: "shutdown_parking_brake_release",
                    title: "Parking brake",
                    value: "release"
                },
                CONTROL_LOCKS: {
                    id: "shutdown_control_locks",
                    title: "Control locks",
                    value: "installed"
                }
            }
        }
    }
};

export default checklist;
