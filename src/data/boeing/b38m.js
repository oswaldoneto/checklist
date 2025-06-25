const checklist = {
    FLIGHT_PHASES: {
        "PREFLIGHT": {
            id: "phase_preflight",
            items: {
                OXYGEN: {
                    id: "preflight_oxygen",
                    title: "Oxygen",
                    value: "Tested, 100%"
                },
                NAV_TRANSFER_DISPLAY: {
                    id: "preflight_nav_transfer_display",
                    title: "Navigation transfer and display switches",
                    value: "NORMAL, AUTO"
                },
                WINDOW_HEAT: {
                    id: "preflight_window_heat",
                    title: "Window heat",
                    value: "ON"
                },
                PRESSURIZATION_SELECTOR: {
                    id: "preflight_pressurization_selector",
                    title: "Pressurization mode selector",
                    value: "ON"
                },
                FLIGHT_INSTRUMENTS: {
                    id: "preflight_flight_instruments",
                    title: "Flight instruments",
                    value: "Heading____ Altimeter____"
                },
                PARKING_BRAKE: {
                    id: "preflight_parking_brake",
                    title: "Parking brake",
                    value: "Set"
                },
                ENGINE_START_LEVERS: {
                    id: "preflight_engine_start_levers",
                    title: "Engine start levers",
                    value: "CUTOFF"
                }
            }
        },
        "BEFORE_START": {
            id: "phase_before_start",
            items: {
                FLIGHT_DECK_DOOR: {
                    id: "before_start_flight_deck_door",
                    title: "Flight deck door",
                    value: "Closed and locked"
                },
                FUEL: {
                    id: "before_start_fuel",
                    title: "Fuel",
                    value: "____ LBS/KGS, Pumps ON"
                },
                PASSENGER_SIGNS: {
                    id: "before_start_passenger_signs",
                    title: "Passenger signs",
                    value: "____"
                },
                WINDOWS: {
                    id: "before_start_windows",
                    title: "Windows",
                    value: "Locked"
                },
                MCP: {
                    id: "before_start_mcp",
                    title: "MCP",
                    value: "V2____, HEADING____, ALTITUDE____"
                },
                TAKEOFF_SPEEDS: {
                    id: "before_start_takeoff_speeds",
                    title: "Takeoff speeds",
                    value: "V1____, VR____, V2____"
                },
                CDU_PREFLIGHT: {
                    id: "before_start_cdu_preflight",
                    title: "CDU preflight",
                    value: "Completed"
                },
                TRIMS: {
                    id: "before_start_trims",
                    title: "Rudder and aileron trim",
                    value: "Free and 0"
                },
                BRIEFING: {
                    id: "before_start_briefing",
                    title: "Taxi and takeoff briefing",
                    value: "Completed"
                },
                ANTICOLLISION_LIGHT: {
                    id: "before_start_anticollision_light",
                    title: "Anticollision light",
                    value: "ON"
                }
            }
        },
        "BEFORE_TAXI": {
            id: "phase_before_taxi",
            items: {
                GENERATORS: {
                    id: "before_taxi_generators",
                    title: "Generators",
                    value: "ON"
                },
                PROBE_HEAT: {
                    id: "before_taxi_probe_heat",
                    title: "Probe heat",
                    value: "ON"
                },
                ANTI_ICE: {
                    id: "before_taxi_anti_ice",
                    title: "Anti-ice",
                    value: "____"
                },
                ISOLATION_VALVE: {
                    id: "before_taxi_isolation_valve",
                    title: "Isolation Valve",
                    value: "AUTO"
                },
                RECALL: {
                    id: "before_taxi_recall",
                    title: "Recall",
                    value: "Checked"
                },
                AUTOBRAKE: {
                    id: "before_taxi_autobrake",
                    title: "Autobrake",
                    value: "RTO"
                },
                ENGINE_START_LEVERS: {
                    id: "before_taxi_engine_start_levers",
                    title: "Engine start levers",
                    value: "IDLE detent"
                },
                FLIGHT_CONTROLS: {
                    id: "before_taxi_flight_controls",
                    title: "Flight controls",
                    value: "Checked"
                },
                GROUND_EQUIPMENT: {
                    id: "before_taxi_ground_equipment",
                    title: "Ground equipment",
                    value: "Clear"
                }
            }
        },
        "BEFORE_TAKEOFF": {
            id: "phase_before_takeoff",
            items: {
                FLAPS: {
                    id: "before_takeoff_flaps",
                    title: "FLAPS",
                    value: "____, Green Light"
                },
                STABILIZER_TRIM: {
                    id: "before_takeoff_stabilizer_trim",
                    title: "Stabilizer trim",
                    value: "____ Units"
                }
            }
        },
        "AFTER_TAKEOFF": {
            id: "phase_after_takeoff",
            items: {
                ENGINE_BLEEDS: {
                    id: "after_takeoff_engine_bleeds",
                    title: "Engine bleeds",
                    value: "On"
                },
                PACKS: {
                    id: "after_takeoff_packs",
                    title: "Packs",
                    value: "AUTO"
                },
                LANDING_GEAR: {
                    id: "after_takeoff_landing_gear",
                    title: "Landing Gear",
                    value: "UP"
                },
                FLAPS: {
                    id: "after_takeoff_flaps",
                    title: "Flaps",
                    value: "UP, No lights"
                }
            }
        },
        "AFTER_TAKEOFF": {
            id: "phase_after_takeoff",
            items: {
                ENGINE_BLEEDS: {
                    id: "after_takeoff_engine_bleeds",
                    title: "Engine bleeds",
                    value: "On"
                },
                PACKS: {
                    id: "after_takeoff_packs",
                    title: "Packs",
                    value: "AUTO"
                },
                LANDING_GEAR: {
                    id: "after_takeoff_landing_gear",
                    title: "Landing Gear",
                    value: "UP"
                },
                FLAPS: {
                    id: "after_takeoff_flaps",
                    title: "Flaps",
                    value: "UP, No lights"
                }
            }
        },



        "LANDING": {
            id: "phase_landing",
            items: {
                ENGINE_START_SWITCHES: {
                    id: "landing_engine_start_switches",
                    title: "Engine start switches",
                    value: "CONT"
                },
                SPEEDBRAKE: {
                    id: "landing_speedbrake",
                    title: "Speedbrake",
                    value: "ARMED"
                },
                LANDING_GEAR: {
                    id: "landing_landing_gear",
                    title: "Landing Gear",
                    value: "Down"
                },
                FLAPS: {
                    id: "landing_flaps",
                    title: "Flaps",
                    value: "____, Green Light"
                }
            }
        },
        "SHUTDOWN": {
            id: "phase_shutdown",
            items: {
                FUEL_PUMPS: {
                    id: "shutdown_fuel_pumps",
                    title: "Fuel pumps",
                    value: "OFF"
                },
                PROBE_HEAT: {
                    id: "shutdown_probe_heat",
                    title: "Probe heat",
                    value: "OFF"
                },
                HYDRAULIC_PANEL: {
                    id: "shutdown_hydraulic_panel",
                    title: "Hydraulic panel",
                    value: "Set"
                },
                FLAPS: {
                    id: "shutdown_flaps",
                    title: "Flaps",
                    value: "UP"
                },
                PARKING_BRAKE: {
                    id: "shutdown_parking_brake",
                    title: "Parking brake",
                    value: "____"
                },
                ENGINE_START_LEVERS: {
                    id: "shutdown_engine_start_levers",
                    title: "Engine Start Levers",
                    value: "CUTOFF"
                }
            }
        }
    }
};

export default checklist;
