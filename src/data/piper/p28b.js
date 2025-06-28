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
        }









    }
}

export default checklist; 
