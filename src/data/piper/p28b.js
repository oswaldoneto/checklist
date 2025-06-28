const checklist = {
    FLIGHT_PHASES: {
        "PREFLIGHT_COCKPIT": {
            id: "phase_preflight_cockpit",
            items: {
                CONTROL_WHEEL: {
                    id: "preflight_cockpit_control_wheel",
                    title: "Control wheel",
                    value: "release restraints"
                },
                PARKING_BRAKE: {
                    id: "preflight_cockpit_parking_brake",
                    title: "Parking brake",
                    value: "set"
                },
                ALL_SWITCHES: {
                    id: "preflight_cockpit_all_switches",
                    title: "All switches",
                    value: "OFF"
                },
                ALL_AVIONICS: {
                    id: "preflight_cockpit_all_avionics",
                    title: "All avionics",
                    value: "OFF"
                },
                MIXTURE: {
                    id: "preflight_cockpit_mixture",
                    title: "Mixture",
                    value: "idle cut-off"
                },
                MASTER_SWITCH_ON: {
                    id: "preflight_cockpit_master_switch_on",
                    title: "Master switch",
                    value: "ON"
                },
                FUEL_GAUGES: {
                    id: "preflight_cockpit_fuel_gauges",
                    title: "Fuel gauges",
                    value: "check quantity"
                },
                ANNUNCIATOR_PANEL: {
                    id: "preflight_cockpit_annunciator_panel",
                    title: "Annunciator panel",
                    value: "check"
                },
                MASTER_SWITCH_OFF: {
                    id: "preflight_cockpit_master_switch_off",
                    title: "Master switch",
                    value: "OFF"
                },
                PRIMARY_FLIGHT_CONTROLS: {
                    id: "preflight_cockpit_primary_flight_controls",
                    title: "Primary flight controls",
                    value: "proper operation"
                },
                FLAPS: {
                    id: "preflight_cockpit_flaps",
                    title: "Flaps",
                    value: "proper operation"
                },
                TRIM: {
                    id: "preflight_cockpit_trim",
                    title: "Trim",
                    value: "neutral"
                },
                PITOT_STATIC_SYSTEMS: {
                    id: "preflight_cockpit_pitot_static_systems",
                    title: "Pitot and static systems",
                    value: "drain"
                },
                WINDOWS: {
                    id: "preflight_cockpit_windows",
                    title: "Windows",
                    value: "check clean"
                }
            }
        },
        "BEFORE_STARTING_ENGINE": {
            id: "phase_before_starting_engine",
            items: {
                PARKING_BRAKE: {
                    id: "before_starting_engine_parking_brake",
                    title: "Parking brake",
                    value: "set"
                },
                PROPELLER: {
                    id: "before_starting_engine_propeller",
                    title: "Propeller",
                    value: "full INCREASE rpm"
                },
                FUEL_SELECTOR: {
                    id: "before_starting_engine_fuel_selector",
                    title: "Fuel selector",
                    value: "desired tank"
                },
                CARBURETOR_HEAT: {
                    id: "before_starting_engine_carburetor_heat",
                    title: "Carburetor heat",
                    value: "OFF"
                },
                RADIOS: {
                    id: "before_starting_engine_radios",
                    title: "Radios",
                    value: "OFF"
                }
            }
        },
        "STARTING_ENGINE_COLD": {
            id: "phase_starting_engine_cold",
            items: {
                MASTER_SWITCH: {
                    id: "starting_engine_cold_master_switch",
                    title: "Master switch",
                    value: "ON"
                },
                ELECTRIC_FUEL_PUMP: {
                    id: "starting_engine_cold_electric_fuel_pump",
                    title: "Electric fuel pump",
                    value: "ON"
                },
                MIXTURE: {
                    id: "starting_engine_cold_mixture",
                    title: "Mixture",
                    value: "full RICH"
                },
                THROTTLE_SET: {
                    id: "starting_engine_cold_throttle_set",
                    title: "Throttle (initial)",
                    value: "1/4 open"
                },
                STARTER: {
                    id: "starting_engine_cold_starter",
                    title: "Starter",
                    value: "engage"
                },
                THROTTLE_ADJUST: {
                    id: "starting_engine_cold_throttle_adjust",
                    title: "Throttle (after start)",
                    value: "adjust"
                },
                OIL_PRESSURE: {
                    id: "starting_engine_cold_oil_pressure",
                    title: "Oil pressure",
                    value: "check"
                }
            }
        },
        "STARTING_ENGINE_HOT": {
            id: "phase_starting_engine_hot",
            items: {
                THROTTLE_SET: {
                    id: "starting_engine_hot_throttle_set",
                    title: "Throttle (initial)",
                    value: "1/2\" open"
                },
                MASTER_SWITCH: {
                    id: "starting_engine_hot_master_switch",
                    title: "Master switch",
                    value: "ON"
                },
                ELECTRIC_FUEL_PUMP: {
                    id: "starting_engine_hot_electric_fuel_pump",
                    title: "Electric fuel pump",
                    value: "ON"
                },
                MIXTURE: {
                    id: "starting_engine_hot_mixture",
                    title: "Mixture",
                    value: "full RICH"
                },
                STARTER: {
                    id: "starting_engine_hot_starter",
                    title: "Starter",
                    value: "engage"
                },
                THROTTLE_ADJUST: {
                    id: "starting_engine_hot_throttle_adjust",
                    title: "Throttle (after start)",
                    value: "adjust"
                },
                OIL_PRESSURE: {
                    id: "starting_engine_hot_oil_pressure",
                    title: "Oil pressure",
                    value: "check"
                }
            }
        },
        "STARTING_ENGINE_FLOODED": {
            id: "phase_starting_engine_flooded",
            items: {
                THROTTLE_INITIAL: {
                    id: "starting_engine_flooded_throttle_initial",
                    title: "Throttle (initial)",
                    value: "open full"
                },
                MASTER_SWITCH: {
                    id: "starting_engine_flooded_master_switch",
                    title: "Master switch",
                    value: "ON"
                },
                ELECTRIC_FUEL_PUMP: {
                    id: "starting_engine_flooded_electric_fuel_pump",
                    title: "Electric fuel pump",
                    value: "OFF"
                },
                MIXTURE_IDLE_CUTOFF: {
                    id: "starting_engine_flooded_mixture_idle_cutoff",
                    title: "Mixture (before start)",
                    value: "idle cut-off"
                },
                STARTER: {
                    id: "starting_engine_flooded_starter",
                    title: "Starter",
                    value: "engage"
                },
                MIXTURE_ADVANCE: {
                    id: "starting_engine_flooded_mixture_advance",
                    title: "Mixture (during start)",
                    value: "advance"
                },
                THROTTLE_RETARD: {
                    id: "starting_engine_flooded_throttle_retard",
                    title: "Throttle (after start)",
                    value: "retard"
                },
                OIL_PRESSURE: {
                    id: "starting_engine_flooded_oil_pressure",
                    title: "Oil pressure",
                    value: "check"
                }
            }
        },
        "START_EXTERNAL_POWER": {
            id: "phase_start_external_power",
            items: {
                MASTER_SWITCH_OFF: {
                    id: "start_external_power_master_switch_off",
                    title: "Master switch",
                    value: "OFF"
                },
                ELECTRICAL_EQUIPMENT: {
                    id: "start_external_power_electrical_equipment",
                    title: "All electrical equipment",
                    value: "OFF"
                },
                TERMINALS: {
                    id: "start_external_power_terminals",
                    title: "Terminals",
                    value: "connect"
                },
                EXTERNAL_POWER_PLUG_INSERT: {
                    id: "start_external_power_plug_insert",
                    title: "External power plug",
                    value: "insert in fuselage"
                }
            },
            "WARM_UP": {
                id: "phase_warm_up",
                items: {
                    THROTTLE: {
                        id: "warm_up_throttle",
                        title: "Throttle",
                        value: "1000 to 1200 RPM"
                    }
                }
            },
            "TAXIING": {
                id: "phase_taxiing",
                items: {
                    CHOCKS: {
                        id: "taxiing_chocks",
                        title: "Chocks",
                        value: "removed"
                    },
                    TAXI_AREA: {
                        id: "taxiing_taxi_area",
                        title: "Taxi area",
                        value: "clear"
                    },
                    PARKING_BRAKE: {
                        id: "taxiing_parking_brake",
                        title: "Parking brake",
                        value: "release"
                    },
                    THROTTLE: {
                        id: "taxiing_throttle",
                        title: "Throttle",
                        value: "apply slowly"
                    },
                    PROP: {
                        id: "taxiing_prop",
                        title: "Prop",
                        value: "high RPM"
                    },
                    BRAKES: {
                        id: "taxiing_brakes",
                        title: "Brakes",
                        value: "check"
                    },
                    STEERING: {
                        id: "taxiing_steering",
                        title: "Steering",
                        value: "check"
                    }
                }
            },
            "GROUND_CHECK": {
                id: "phase_ground_check",
                items: {
                    PARKING_BRAKE: {
                        id: "ground_check_parking_brake",
                        title: "Parking brake",
                        value: "set"
                    },
                    PROPELLER_INCREASE: {
                        id: "ground_check_propeller_increase",
                        title: "Propeller",
                        value: "full INCREASE"
                    },
                    THROTTLE_SET: {
                        id: "ground_check_throttle_set",
                        title: "Throttle",
                        value: "2000 RPM"
                    },
                    MAGNETOS: {
                        id: "ground_check_magnetos",
                        title: "Magnetos",
                        value: "max. drop 175 RPM - max. diff. 50 RPM"
                    },
                    VACUUM: {
                        id: "ground_check_vacuum",
                        title: "Vacuum",
                        value: "5.0\" Hg ± .1"
                    },
                    OIL_TEMP: {
                        id: "ground_check_oil_temp",
                        title: "Oil temp",
                        value: "check"
                    },
                    OIL_PRESSURE: {
                        id: "ground_check_oil_pressure",
                        title: "Oil pressure",
                        value: "check"
                    },
                    ANNUNCIATOR_PANEL: {
                        id: "ground_check_annunciator_panel",
                        title: "Annunciator panel",
                        value: "press-to-test"
                    },
                    AIR_CONDITIONER: {
                        id: "ground_check_air_conditioner",
                        title: "Air conditioner",
                        value: "check"
                    },
                    CARBURETOR_HEAT: {
                        id: "ground_check_carburetor_heat",
                        title: "Carburetor heat",
                        value: "check"
                    },
                    PROPELLER_EXERCISE: {
                        id: "ground_check_propeller_exercise",
                        title: "Propeller",
                        value: "exercise - then full INCREASE"
                    },
                    ELECTRIC_FUEL_PUMP: {
                        id: "ground_check_electric_fuel_pump",
                        title: "Electric fuel pump",
                        value: "OFF"
                    },
                    FUEL_PRESSURE: {
                        id: "ground_check_fuel_pressure",
                        title: "Fuel pressure",
                        value: "check"
                    },
                    THROTTLE_RETARD: {
                        id: "ground_check_throttle_retard",
                        title: "Throttle",
                        value: "retard"
                    }
                }
            },
            "BEFORE_TAKEOFF": {
                id: "phase_before_takeoff",
                items: {
                    MASTER_SWITCH: {
                        id: "before_takeoff_master_switch",
                        title: "Master switch",
                        value: "ON"
                    },
                    FLIGHT_INSTRUMENTS: {
                        id: "before_takeoff_flight_instruments",
                        title: "Flight instruments",
                        value: "check"
                    },
                    FUEL_SELECTOR: {
                        id: "before_takeoff_fuel_selector",
                        title: "Fuel selector",
                        value: "proper tank"
                    },
                    ELECTRIC_FUEL_PUMP: {
                        id: "before_takeoff_electric_fuel_pump",
                        title: "Electric fuel pump",
                        value: "ON"
                    },
                    ENGINE_GAUGES: {
                        id: "before_takeoff_engine_gauges",
                        title: "Engine gauges",
                        value: "check"
                    },
                    CARBURETOR_HEAT: {
                        id: "before_takeoff_carburetor_heat",
                        title: "Carburetor heat",
                        value: "OFF"
                    },
                    SEAT_BACKS: {
                        id: "before_takeoff_seat_backs",
                        title: "Seat backs",
                        value: "erect"
                    },
                    PRIMER: {
                        id: "before_takeoff_primer",
                        title: "Primer",
                        value: "locked"
                    },
                    MIXTURE: {
                        id: "before_takeoff_mixture",
                        title: "Mixture",
                        value: "set"
                    },
                    PROP: {
                        id: "before_takeoff_prop",
                        title: "Prop",
                        value: "set"
                    },
                    BELTS_HARNESS: {
                        id: "before_takeoff_belts_harness",
                        title: "Belts/harness",
                        value: "fastened, adjusted"
                    },
                    EMPTY_SEATS: {
                        id: "before_takeoff_empty_seats",
                        title: "Empty seats",
                        value: "seat belts snugly fastened"
                    },
                    FLAPS: {
                        id: "before_takeoff_flaps",
                        title: "Flaps",
                        value: "set"
                    },
                    TRIM_TABS: {
                        id: "before_takeoff_trim_tabs",
                        title: "Trim tabs",
                        value: "set"
                    },
                    CONTROLS: {
                        id: "before_takeoff_controls",
                        title: "Controls",
                        value: "free"
                    },
                    DOORS: {
                        id: "before_takeoff_doors",
                        title: "Doors",
                        value: "latched"
                    },
                    AIR_CONDITIONER: {
                        id: "before_takeoff_air_conditioner",
                        title: "Air conditioner",
                        value: "OFF"
                    },
                    PARKING_BRAKE: {
                        id: "before_takeoff_parking_brake",
                        title: "Parking brake",
                        value: "release"
                    }
                }
            },
            "TAKEOFF_NORMAL": {
                id: "phase_takeoff_normal",
                items: {
                    FLAPS: {
                        id: "takeoff_normal_flaps",
                        title: "Flaps",
                        value: "set"
                    },
                    TAB: {
                        id: "takeoff_normal_tab",
                        title: "Tab",
                        value: "set"
                    },
                    ACCELERATION: {
                        id: "takeoff_normal_acceleration",
                        title: "Accelerate",
                        value: "to 60 to 65 KIAS"
                    },
                    CONTROL_WHEEL: {
                        id: "takeoff_normal_control_wheel",
                        title: "Control wheel",
                        value: "back pressure to rotate to climb attitude"
                    }
                }
            },
            "CLIMB": {
                id: "phase_climb",
                items: {
                    BEST_RATE: {
                        id: "climb_best_rate",
                        title: "Best rate (3000 lb) (flaps up)",
                        value: "85 KIAS"
                    },
                    BEST_ANGLE: {
                        id: "climb_best_angle",
                        title: "Best angle (3000 lb) (flaps up)",
                        value: "73 KIAS"
                    },
                    EN_ROUTE: {
                        id: "climb_en_route",
                        title: "En route",
                        value: "100 KIAS"
                    },
                    ELECTRIC_FUEL_PUMP: {
                        id: "climb_electric_fuel_pump",
                        title: "Electric fuel pump",
                        value: "OFF at desired altitude"
                    }
                }
            },
            "CRUISING": {
                id: "phase_cruising",
                items: {
                    NORMAL_MAX_POWER: {
                        id: "cruising_normal_max_power",
                        title: "Normal max power",
                        value: "75%"
                    },
                    POWER: {
                        id: "cruising_power",
                        title: "Power",
                        value: "set per power table"
                    },
                    MIXTURE: {
                        id: "cruising_mixture",
                        title: "Mixture",
                        value: "adjust"
                    }
                }
            },
            "DESCENT_NORMAL": {
                id: "phase_descent_normal",
                items: {
                    THROTTLE: {
                        id: "descent_normal_throttle",
                        title: "Throttle",
                        value: "as required for 1000 FPM descent"
                    },
                    PROPELLER: {
                        id: "descent_normal_propeller",
                        title: "Propeller",
                        value: "2400 RPM"
                    },
                    AIRSPEED: {
                        id: "descent_normal_airspeed",
                        title: "Airspeed",
                        value: "137 KIAS"
                    },
                    MIXTURE: {
                        id: "descent_normal_mixture",
                        title: "Mixture",
                        value: "rich"
                    },
                    CARBURETOR_HEAT: {
                        id: "descent_normal_carburetor_heat",
                        title: "Carburetor heat",
                        value: "on if required"
                    }
                }
            },
            "DESCENT_POWER_OFF": {
                id: "phase_descent_power_off",
                items: {
                    CARBURETOR_HEAT: {
                        id: "descent_power_off_carburetor_heat",
                        title: "Carburetor heat",
                        value: "on if required"
                    },
                    THROTTLE: {
                        id: "descent_power_off_throttle",
                        title: "Throttle",
                        value: "closed"
                    },
                    AIRSPEED: {
                        id: "descent_power_off_airspeed",
                        title: "Airspeed",
                        value: "as required"
                    },
                    MIXTURE: {
                        id: "descent_power_off_mixture",
                        title: "Mixture",
                        value: "as required"
                    },
                    POWER: {
                        id: "descent_power_off_power",
                        title: "Power",
                        value: "verify with throttle every 30 seconds"
                    }
                }
            },
            "APPROACH_AND_LANDING": {
                id: "phase_approach_and_landing",
                items: {
                    FUEL_SELECTOR: {
                        id: "approach_fuel_selector",
                        title: "Fuel selector",
                        value: "proper tank"
                    },
                    SEAT_BACKS: {
                        id: "approach_seat_backs",
                        title: "Seat backs",
                        value: "erect"
                    },
                    BELTS_HARNESS: {
                        id: "approach_belts_harness",
                        title: "Belts/harness",
                        value: "fasten/adjust"
                    },
                    ELECTRIC_FUEL_PUMP: {
                        id: "approach_electric_fuel_pump",
                        title: "Electric fuel pump",
                        value: "ON"
                    },
                    AIR_CONDITIONER: {
                        id: "approach_air_conditioner",
                        title: "Air conditioner",
                        value: "OFF"
                    },
                    MIXTURE: {
                        id: "approach_mixture",
                        title: "Mixture",
                        value: "set"
                    },
                    PROPELLER: {
                        id: "approach_propeller",
                        title: "Propeller",
                        value: "set"
                    },
                    FLAPS: {
                        id: "approach_flaps",
                        title: "Flaps",
                        value: "down - 102 KIAS max."
                    },
                    TRIM: {
                        id: "approach_trim",
                        title: "Trim",
                        value: "to 72 KIAS"
                    }
                }
            },
            "STOPPING_ENGINE": {
                id: "phase_stopping_engine",
                items: {
                    FLAPS: {
                        id: "stopping_engine_flaps",
                        title: "Flaps",
                        value: "retract"
                    },
                    ELECTRIC_FUEL_PUMP: {
                        id: "stopping_engine_electric_fuel_pump",
                        title: "Electric fuel pump",
                        value: "OFF"
                    },
                    AIR_CONDITIONER: {
                        id: "stopping_engine_air_conditioner",
                        title: "Air conditioner",
                        value: "OFF"
                    },
                    RADIOS: {
                        id: "stopping_engine_radios",
                        title: "Radios",
                        value: "OFF"
                    },
                    PROPELLER: {
                        id: "stopping_engine_propeller",
                        title: "Propeller",
                        value: "full INCREASE"
                    },
                    THROTTLE: {
                        id: "stopping_engine_throttle",
                        title: "Throttle",
                        value: "full aft"
                    },
                    MIXTURE: {
                        id: "stopping_engine_mixture",
                        title: "Mixture",
                        value: "idle cut-off"
                    },
                    MAGNETOS: {
                        id: "stopping_engine_magnetos",
                        title: "Magnetos",
                        value: "OFF"
                    },
                    MASTER_SWITCH: {
                        id: "stopping_engine_master_switch",
                        title: "Master switch",
                        value: "OFF"
                    }
                }
            },
            "PARKING": {
                id: "phase_parking",
                items: {
                    PARKING_BRAKE: {
                        id: "parking_parking_brake",
                        title: "Parking brake",
                        value: "set"
                    },
                    CONTROL_WHEEL: {
                        id: "parking_control_wheel",
                        title: "Control wheel",
                        value: "secured with belts"
                    },
                    FLAPS: {
                        id: "parking_flaps",
                        title: "Flaps",
                        value: "full up"
                    },
                    WHEEL_CHOCKS: {
                        id: "parking_wheel_chocks",
                        title: "Wheel chocks",
                        value: "in place"
                    },
                    TIE_DOWNS: {
                        id: "parking_tie_downs",
                        title: "Tie downs",
                        value: "secure"
                    }
                }
            }
        }
    }
}

export default checklist; 
