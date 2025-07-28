const checklist = {
    FLIGHT_PHASES: {
        COCKPIT_PREPARATION: {
            id: "phase_cockpit_preparation_as350",
            items: {
                OUTSIDE_CHECK: {
                    id: "cockpit_outside_check",
                    title: "Outside check",
                    value: "COMPLETED"
                },
                HELICOPTER_DOCUMENTS: {
                    id: "cockpit_helicopter_documents",
                    title: "Helicopter documents",
                    value: "CHECKED"
                },
                SEATS_PEDALS: {
                    id: "cockpit_seats_pedals",
                    title: "Seats and pedals",
                    value: "ADJUSTED"
                },
                SEAT_BELTS: {
                    id: "cockpit_seat_belts",
                    title: "Seat belts",
                    value: "FASTENED"
                },
                ROTORBRAKE: {
                    id: "cockpit_rotorbrake",
                    title: "Rotorbrake",
                    value: "FORWARD / RELEASED"
                },
                FUEL_SHUTOFF_LEVER: {
                    id: "cockpit_fuel_shutoff_lever",
                    title: "Fuel shut-off lever",
                    value: "FORWARD AND SECURED"
                },
                TWIST_GRIP: {
                    id: "cockpit_twist_grip",
                    title: "Twist grip",
                    value: "IDLE POSITION"
                },
                HYDRAULIC_SWITCH: {
                    id: "cockpit_hydraulic_switch",
                    title: "Hydraulic switch",
                    value: "ON"
                },
                ENGINE_STARTER_SWITCH: {
                    id: "cockpit_engine_starter_switch",
                    title: "Engine starter (overhead switch)",
                    value: "OFF"
                },
                BATTERY: {
                    id: "cockpit_battery",
                    title: "Battery",
                    value: "ON"
                },
                GENERATOR: {
                    id: "cockpit_generator",
                    title: "Gen",
                    value: "OFF"
                },
                INSTRUMENT_LIGHT: {
                    id: "cockpit_instrument_light",
                    title: "Instrument light",
                    value: "AS NECESSARY"
                },
                GPS_G430: {
                    id: "cockpit_gps_g430",
                    title: "GPS (G430)",
                    value: "ON"
                },
                WARNING_LIGHTS: {
                    id: "cockpit_warning_lights",
                    title: "Warning lights (W/LT TST)",
                    value: "PRESS TO TEST"
                },
                ACCU_HYD_TEST: {
                    id: "cockpit_accu_hyd_test",
                    title: "ACCU / HYD TEST",
                    value: "PRESS FOR 2 SEC (pedals centered)"
                },
                WARNING_PANEL: {
                    id: "cockpit_warning_panel",
                    title: "Warning Panel",
                    value: "Check expected lights with EPU + BATT"
                },
                VEMD_CHECK: {
                    id: "cockpit_vemd_check",
                    title: "VEMD check",
                    value: "NO MESSAGE / 2 SCREENS, BATT > 22V"
                },
                BLEED_VALVE: {
                    id: "cockpit_bleed_valve",
                    title: "Bleed valve",
                    value: "OPENED"
                },
                CONTROL_PEDALS: {
                    id: "cockpit_control_pedals",
                    title: "Control pedals",
                    value: "FREE TRAVEL"
                },
                CYCLIC: {
                    id: "cockpit_cyclic",
                    title: "Cyclic",
                    value: "CENTER AND FRICTION"
                },
                COLLECTIVE: {
                    id: "cockpit_collective",
                    title: "Collective",
                    value: "DOWN AND LOCKED"
                },
                HEATING_SYSTEM: {
                    id: "cockpit_heating_system",
                    title: "Heating system",
                    value: "OFF"
                },
                INSTRUMENTS: {
                    id: "cockpit_instruments",
                    title: "Instruments",
                    value: "STATIC OR ZERO"
                },
                FLIGHT_TIME_CHRONO: {
                    id: "cockpit_flight_time_chrono",
                    title: "Flight time counter / Chrono",
                    value: "CHECKED"
                },
                COM_NAV_TRANSPONDER: {
                    id: "cockpit_com_nav_transponder",
                    title: "COM / NAV / Transponder",
                    value: "OFF"
                },
                SWITCHES: {
                    id: "cockpit_switches",
                    title: "Switches",
                    value: "ALL OFF"
                },
                CARGO_HOOK: {
                    id: "cockpit_cargo_hook",
                    title: "Cargo hook (electrical + manual)",
                    value: "CHECKED AND SET AS REQUIRED"
                }
            }
        },
        ENGINE_START: {
            id: "phase_engine_start_as350",
            items: {
                STARTUP_CLEARANCE: {
                    id: "engine_start_startup_clearance",
                    title: "Start-up clearance (if necessary)",
                    value: "RECEIVED"
                },
                ROTOR: {
                    id: "engine_start_rotor",
                    title: "Rotor",
                    value: "FREE"
                },
                AREA: {
                    id: "engine_start_area",
                    title: "Area",
                    value: "CLEAR"
                },
                CPW_GOV: {
                    id: "engine_start_cpw_gov",
                    title: "CPW",
                    value: "CHECK GOV LIGHT IS OFF"
                },
                FUEL_PUMP_ON: {
                    id: "engine_start_fuel_pump_on",
                    title: "Fuel pump",
                    value: "ON"
                },
                GENERATOR_OFF: {
                    id: "engine_start_generator_off",
                    title: "GENE",
                    value: "OFF"
                },
                STARTER_SELECTOR: {
                    id: "engine_start_starter_selector",
                    title: "Starter Selector",
                    value: "ON"
                },
                PARAMETERS_INITIAL: {
                    id: "engine_start_parameters_initial",
                    title: "Check parameters",
                    value: "Ng INCREASE, TOT BELOW LIMITS, OIL PRESSURE CHECKED"
                },
                VEMD_SWITCH: {
                    id: "engine_start_vemd_switch",
                    title: "VEMD Switch to FLI MODE",
                    value: "WHEN N1 > 60%"
                },
                GENERATOR_ON: {
                    id: "engine_start_generator_on",
                    title: "GENE",
                    value: "ON WHEN N1 > 67%"
                },
                WARNING_LIGHTS: {
                    id: "engine_start_warning_lights",
                    title: "Warning lights",
                    value: "ALL OUT EXC. HORN / PITOT / TWT GRIP"
                },
                PITOT: {
                    id: "engine_start_pitot",
                    title: "Pitot",
                    value: "ON"
                },
                FUEL_PUMP_OFF: {
                    id: "engine_start_fuel_pump_off",
                    title: "Fuel Pump",
                    value: "OFF"
                },
                STARTER_GUARD: {
                    id: "engine_start_starter_guard",
                    title: "Engine starter selector guard",
                    value: "CLOSED"
                },
                AVIONICS: {
                    id: "engine_start_avionics",
                    title: "Avionics",
                    value: "ON"
                },
                NECESSARY_SYSTEMS: {
                    id: "engine_start_necessary_systems",
                    title: "All necessary systems",
                    value: "ON"
                },
                AVIONIC_GYROS: {
                    id: "engine_start_avionic_gyros",
                    title: "Avionic / Gyros (Att ind./D.)",
                    value: "ON"
                },
                FM_COM_NAV_GPS: {
                    id: "engine_start_fm_com_nav_gps",
                    title: "FM / COM / NAV / Transponder / GPS",
                    value: "ON AND SET"
                },
                ALTIMETER: {
                    id: "engine_start_altimeter",
                    title: "Altimeter",
                    value: "QNH SET"
                },
                HYD_ACCUMULATOR: {
                    id: "engine_start_hyd_accumulator",
                    title: "Hyd. accumulator test",
                    value: "CHECKED"
                },
                HYD_ISOLATION: {
                    id: "engine_start_hyd_isolation",
                    title: "Hyd. isolation test",
                    value: "CHECKED"
                },
                GYROS_ATT: {
                    id: "engine_start_gyros_att",
                    title: "Gyros (Att ind./DG)",
                    value: "SET"
                },
                TWIST_GRIP: {
                    id: "engine_start_twist_grip",
                    title: "Twist grip",
                    value: "FLIGHT POSITION"
                },
                HORN: {
                    id: "engine_start_horn",
                    title: "Horn",
                    value: "ON when RRPM at 340 / CHECK SOUND"
                },
                NR: {
                    id: "engine_start_nr",
                    title: "NR",
                    value: "CHECK RPM in LOWER GREEN ARC"
                },
                FIRE_TEST: {
                    id: "engine_start_fire_test",
                    title: "Fire Test",
                    value: "GONG + ILLUMINATION"
                },
                PARAMETERS_FINAL: {
                    id: "engine_start_parameters_final",
                    title: "Parameters",
                    value: "CHECK NO WARNING, VOLTAGE AND PRESSURE"
                },
                LANDING_LIGHT: {
                    id: "engine_start_landing_light",
                    title: "Landing Light",
                    value: "ON (keep ON all flight duration)"
                }
            }
        },
        BEFORE_TAKEOFF_CHECK: {
            id: "phase_before_takeoff_check_as350",
            items: {
                DOORS: {
                    id: "before_takeoff_doors",
                    title: "Doors",
                    value: "CLOSED or SLIDING DOORS OPEN LOCKED"
                },
                CYCLIC_COLLECTIVE_FRICTIONS: {
                    id: "before_takeoff_cyclic_collective_frictions",
                    title: "Cyclic and collective frictions",
                    value: "AS REQUIRED"
                },
                LANDING_LIGHT: {
                    id: "before_takeoff_landing_light",
                    title: "Landing light",
                    value: "AS REQUIRED"
                },
                TEMPERATURES_PRESSURES: {
                    id: "before_takeoff_temperatures_pressures",
                    title: "Temperatures and pressures",
                    value: "NORMAL RANGE"
                },
                CWP: {
                    id: "before_takeoff_cwp",
                    title: "CWP",
                    value: "ALL LIGHTS OFF"
                },
                COLLECTIVE_PITCH: {
                    id: "before_takeoff_collective_pitch",
                    title: "Collective pitch",
                    value: "UNLOCK"
                }
            }
        },
        APPROACH: {
            id: "phase_approach_as350",
            items: {
                LANDING_LIGHT: {
                    id: "approach_landing_light",
                    title: "Landing light",
                    value: "AS REQUIRED"
                },
                PARAMETERS: {
                    id: "approach_parameters",
                    title: "All parameters",
                    value: "CHECK"
                }
            }
        },
        ENGINE_SHUT_DOWN: {
            id: "phase_engine_shut_down_as350",
            items: {
                CYCLIC: {
                    id: "engine_shutdown_cyclic",
                    title: "Cyclic",
                    value: "NEUTRAL"
                },
                COLLECTIVE: {
                    id: "engine_shutdown_collective",
                    title: "Collective",
                    value: "FULL DOWN AND LOCKED"
                },
                FRICTIONS: {
                    id: "engine_shutdown_frictions",
                    title: "Frictions",
                    value: "ON"
                },
                HORN: {
                    id: "engine_shutdown_horn",
                    title: "Horn",
                    value: "OFF"
                },
                LANDING_LIGHT: {
                    id: "engine_shutdown_landing_light",
                    title: "Landing light",
                    value: "OFF"
                },
                THROTTLE_IDLE: {
                    id: "engine_shutdown_throttle_idle",
                    title: "Throttle Idle position (TWT Grip)",
                    value: "FOR 30 SECONDS"
                },
                FM_COM_NAV_TRANSPONDER: {
                    id: "engine_shutdown_fm_com_nav",
                    title: "FM / COM 2 / NAV / Transponder",
                    value: "OFF (G430 / GPS must remain ON)"
                },
                PITOT_HEAT: {
                    id: "engine_shutdown_pitot_heat",
                    title: "Pitot heat",
                    value: "OFF"
                },
                AVIONIC_GYROS: {
                    id: "engine_shutdown_avionic_gyros",
                    title: "Avionic / Gyros (Att / DG)",
                    value: "OFF"
                },
                ENGINE_START_SELECTOR: {
                    id: "engine_shutdown_engine_start_selector",
                    title: "Engine starting selector (overhead switch)",
                    value: "OFF"
                },
                GENERATOR: {
                    id: "engine_shutdown_generator",
                    title: "Generator",
                    value: "OFF"
                },
                ROTOR_BRAKE: {
                    id: "engine_shutdown_rotor_brake",
                    title: "Rotor brake",
                    value: "APPLY AS REQUIRED BELOW 140 RRPM"
                },
                ROTOR: {
                    id: "engine_shutdown_rotor",
                    title: "Rotor",
                    value: "STOPPED"
                },
                INSTRUMENT_LIGHTS: {
                    id: "engine_shutdown_instrument_lights",
                    title: "Instrument lights",
                    value: "OFF"
                },
                HYD_TEST: {
                    id: "engine_shutdown_hyd_test",
                    title: "HYD TEST button",
                    value: "PRESS FOR 1–2 SEC. TO CENTER PEDALS"
                },
                VEMD_REPORT: {
                    id: "engine_shutdown_vemd_report",
                    title: "VEMD",
                    value: "REPORT DATA FOR TECHLOG"
                },
                BATTERY: {
                    id: "engine_shutdown_battery",
                    title: "Battery",
                    value: "OFF"
                }
            }
        }
    }
};

export default checklist;














