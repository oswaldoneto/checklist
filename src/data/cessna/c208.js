const checklist = {
    FLIGHT_PHASES: {

        "PREFLIGHT_INSPECTION": {
            id: "phase_preflight_inspection",
            items: {
                POH: {
                    id: "preflight_poh",
                    title: "Pilot's Operating Handbook",
                    value: "AVAILABLE IN THE AIRPLANE"
                },
                CONTROL_LOCKS: {
                    id: "preflight_control_locks",
                    title: "Control Locks",
                    value: "REMOVED"
                },
                PARKING_BRAKE: {
                    id: "preflight_parking_brake",
                    title: "Parking Brake",
                    value: "SET"
                },
                ALL_SWITCHES: {
                    id: "preflight_all_switches",
                    title: "All Switches",
                    value: "OFF"
                },
                STATIC_ALT_SRC: {
                    id: "preflight_static_alt_src",
                    title: "Static Pressure Alternate Source Valve",
                    value: "OFF (full in)"
                },
                INERTIAL_SEPARATOR: {
                    id: "preflight_inertial_separator",
                    title: "Inertial Separator T-Handle",
                    value: "NORMAL"
                },
                STANDBY_FLAP_SWITCH: {
                    id: "preflight_standby_flap_switch",
                    title: "Standby Flap Motor Switch (Overhead)",
                    value: "GUARDED NORM"
                },
                OXYGEN_PRESSURE: {
                    id: "preflight_oxygen_pressure",
                    title: "Oxygen Supply Pressure",
                    value: "CHECK"
                },
                FUEL_SELECTOR: {
                    id: "preflight_fuel_selector",
                    title: "Fuel Selector Valves",
                    value: "CHECK ON"
                },
                WEATHER_RADAR: {
                    id: "preflight_weather_radar",
                    title: "Weather Radar",
                    value: "OFF"
                },
                AIR_CONDITIONER: {
                    id: "preflight_air_conditioner",
                    title: "Air Conditioner",
                    value: "OFF"
                },
                BLEED_AIR_HEAT: {
                    id: "preflight_bleed_air_heat",
                    title: "Bleed Air Heat Switch",
                    value: "OFF"
                },
                EMERGENCY_POWER_LEVER: {
                    id: "preflight_emergency_power_lever",
                    title: "Emergency Power Lever",
                    value: "NORMAL"
                },
                TRIM_CONTROLS: {
                    id: "preflight_trim_controls",
                    title: "Trim Controls",
                    value: "SET"
                },
                FIREWALL_FUEL_SHUTOFF: {
                    id: "preflight_firewall_fuel_shutoff",
                    title: "Firewall Fuel Shutoff",
                    value: "ON"
                },
                CABIN_HEAT_SHUTOFF: {
                    id: "preflight_cabin_heat_shutoff",
                    title: "Cabin Heat Firewall Shutoff Control",
                    value: "CHECK IN"
                },
                BATTERY_SWITCH_ON: {
                    id: "preflight_battery_switch_on",
                    title: "Battery Switch",
                    value: "ON"
                },
                AVIONICS_PWR_2_ON: {
                    id: "preflight_avionics_pwr_2_on",
                    title: "Avionics Power Switch No. 2",
                    value: "ON, check audibly that avionics cooling fan is operating"
                },
                AVIONICS_PWR_2_OFF: {
                    id: "preflight_avionics_pwr_2_off",
                    title: "Avionics Power Switch No. 2",
                    value: "OFF"
                },
                FUEL_QTY_INDICATORS: {
                    id: "preflight_fuel_qty_indicators",
                    title: "Fuel Quantity Indicators",
                    value: "CHECK QUANTITY"
                },
                BATTERY_SWITCH_OFF: {
                    id: "preflight_battery_switch_off",
                    title: "Battery Switch",
                    value: "OFF"
                }
            }
        },

        "BEFORE_STARTING_ENGINE": {
            id: "phase_before_starting_engine",
            items: {
                PREFLIGHT_WEIGHT_BALANCE: {
                    id: "before_starting_engine_preflight_weight_balance",
                    title: "Preflight and Weight and Balance Checks",
                    value: "COMPLETE"
                },
                PASSENGER_BRIEFING: {
                    id: "before_starting_engine_passenger_briefing",
                    title: "Passenger Briefing",
                    value: "COMPLETE"
                },
                CABIN_DOORS: {
                    id: "before_starting_engine_cabin_doors",
                    title: "Cabin Doors",
                    value: "LATCHED (check aft doors)"
                },
                PARKING_BRAKE: {
                    id: "before_starting_engine_parking_brake",
                    title: "Parking Brake",
                    value: "SET"
                },
                CONTROL_LOCKS: {
                    id: "before_starting_engine_control_locks",
                    title: "Control Locks",
                    value: "REMOVED and DISENGAGED"
                },
                SEATS_BELTS_HARNESSES: {
                    id: "before_starting_engine_seats_belts_harnesses",
                    title: "Seats, Seat Belts, Shoulder Harnesses",
                    value: "ADJUST and SECURE"
                },
                SWITCHES: {
                    id: "before_starting_engine_switches",
                    title: "Switches",
                    value: "OFF"
                },
                IGNITION_SWITCH: {
                    id: "before_starting_engine_ignition_switch",
                    title: "Ignition Switch",
                    value: "NORM"
                },
                CIRCUIT_BREAKERS: {
                    id: "before_starting_engine_circuit_breakers",
                    title: "Circuit Breakers",
                    value: "CHECK IN"
                },
                FUEL_TANK_SELECTORS: {
                    id: "before_starting_engine_fuel_tank_selectors",
                    title: "Fuel Tank Selectors",
                    value: "LEFT ON, RIGHT ON"
                },
                WEATHER_RADAR: {
                    id: "before_starting_engine_weather_radar",
                    title: "Weather Radar",
                    value: "OFF"
                },
                BLEED_AIR_HEAT_SWITCH: {
                    id: "before_starting_engine_bleed_air_heat_switch",
                    title: "Bleed Air Heat Switch",
                    value: "OFF"
                },
                CABIN_HEAT_MIXING_AIR_CONTROL: {
                    id: "before_starting_engine_cabin_heat_mixing_air_control",
                    title: "Cabin Heat Mixing Air Control",
                    value: "FLT-PUSH"
                },
                EMERGENCY_POWER_LEVER: {
                    id: "before_starting_engine_emergency_power_lever",
                    title: "Emergency Power Lever",
                    value: "NORMAL"
                },
                POWER_LEVER: {
                    id: "before_starting_engine_power_lever",
                    title: "Power Lever",
                    value: "IDLE"
                },
                PROPELLER_CONTROL_LEVER: {
                    id: "before_starting_engine_propeller_control_lever",
                    title: "Propeller Control Lever",
                    value: "MAX (full forward)"
                },
                FUEL_CONDITION_LEVER: {
                    id: "before_starting_engine_fuel_condition_lever",
                    title: "Fuel Condition Lever",
                    value: "CUTOFF"
                },
                FIREWALL_FUEL_SHUTOFF: {
                    id: "before_starting_engine_firewall_fuel_shutoff",
                    title: "Firewall Fuel Shutoff",
                    value: "ON (push in)"
                },
                INERTIAL_SEPARATOR: {
                    id: "before_starting_engine_inertial_separator",
                    title: "Inertial Separator",
                    value: "BYPASS if visible moisture is present below 4°C"
                },
                BATTERY_SWITCH: {
                    id: "before_starting_engine_battery_switch",
                    title: "Battery Switch",
                    value: "ON"
                },
                WING_FLAPS: {
                    id: "before_starting_engine_wing_flaps",
                    title: "Wing Flaps",
                    value: "UP"
                },
                NO_SMOKING_SWITCH: {
                    id: "before_starting_engine_no_smoking_switch",
                    title: "No Smoking/Seat Belt Sign Switches",
                    value: "ON as required/desired"
                },
                FIRE_DETECTOR_TEST: {
                    id: "before_starting_engine_fire_detector_test",
                    title: "Fire Detector Test Switch",
                    value: "PRESS-TO-TEST"
                },
                ANNUNCIATOR_LAMP_TEST: {
                    id: "before_starting_engine_annunciator_lamp_test",
                    title: "Annunciator Panel Lamp Test Switch",
                    value: "PRESS-TO-TEST"
                },
                ANNUNCIATOR_DAY_NIGHT: {
                    id: "before_starting_engine_annunciator_day_night",
                    title: "Annunciator Panel Day/Night Switch",
                    value: "SET"
                }
            }
        },

        "STARTING_ENGINE_BATTERY": {
            id: "phase_starting_engine_battery",
            items: {
                BATTERY_SWITCH: {
                    id: "starting_engine_battery_battery_switch",
                    title: "Battery Switch",
                    value: "ON"
                },
                BEACON_NAV_LIGHTS: {
                    id: "starting_engine_battery_beacon_nav_lights",
                    title: "Beacon light and Navigation Lights",
                    value: "ON as required"
                },
                VOLT_AMMETER: {
                    id: "starting_engine_battery_volt_ammeter",
                    title: "Volt/Ammeter",
                    value: "CHECK (24 volts minimum)"
                },
                EMERGENCY_POWER_LEVER: {
                    id: "starting_engine_battery_emergency_power_lever",
                    title: "Emergency Power Lever",
                    value: "NORMAL"
                },
                PROPELLER_AREA: {
                    id: "starting_engine_battery_propeller_area",
                    title: "Propeller Area",
                    value: "CLEAR"
                },
                FUEL_BOOST_SWITCH: {
                    id: "starting_engine_battery_fuel_boost_switch",
                    title: "Fuel Boost Switch",
                    value: "ON and OBSERVE: AUX FUEL PUMP ON - ON, FUEL PRESS LOW - OFF, No fuel flow"
                },
                STARTER_SWITCH_START: {
                    id: "starting_engine_battery_starter_switch_start",
                    title: "Starter Switch",
                    value: "START and OBSERVE"
                },
                STARTER_SWITCH_IGNITION: {
                    id: "starting_engine_battery_ignition_annunciator",
                    title: "IGNITION ON Annunciator",
                    value: "CHECK ON"
                },
                STARTER_SWITCH_OIL_PRESSURE: {
                    id: "starting_engine_battery_engine_oil_pressure",
                    title: "Engine Oil Pressure",
                    value: "CHECK for indication"
                },
                STARTER_SWITCH_NG: {
                    id: "starting_engine_battery_ng_initial",
                    title: "Ng (initial)",
                    value: "STABLE (over 12% minimum)"
                },
                FUEL_CONDITION_LEVER: {
                    id: "starting_engine_battery_fuel_condition_lever",
                    title: "Fuel Condition Lever",
                    value: "LOW IDLE and OBSERVE"
                },
                FUEL_FLOW: {
                    id: "starting_engine_battery_fuel_flow",
                    title: "Fuel Flow",
                    value: "CHECK for 80 to 110 pph"
                },
                ITT: {
                    id: "starting_engine_battery_itt",
                    title: "ITT",
                    value: "MONITOR (1090°C Max, limited to 2 seconds)"
                },
                NG_MIN: {
                    id: "starting_engine_battery_ng_min",
                    title: "Ng (after start)",
                    value: "52% MINIMUM"
                },
                STARTER_SWITCH_OFF: {
                    id: "starting_engine_battery_starter_switch_off",
                    title: "Starter Switch",
                    value: "OFF"
                },
                ENGINE_INSTRUMENTS: {
                    id: "starting_engine_battery_engine_instruments",
                    title: "Engine Instruments",
                    value: "CHECK"
                },
                GENERATOR: {
                    id: "starting_engine_battery_generator",
                    title: "Generator",
                    value: "CHECK GENERATOR OFF Annunciator OFF and battery charging"
                }
            }
        },

        "TAXING": {
            id: "phase_taxiing",
            items: {
                TAXI_LIGHT: {
                    id: "taxiing_taxi_light",
                    title: "Taxi light",
                    value: "ON as required"
                },
                BRAKES: {
                    id: "taxiing_brakes",
                    title: "Brakes",
                    value: "CHECK"
                },
                FLIGHT_INSTRUMENTS: {
                    id: "taxiing_flight_instruments",
                    title: "Flight Instruments",
                    value: "CHECK"
                }
            },
        },

        "BEFORE_TAKEOFF": {
            id: "phase_before_takeoff",
            items: {
                PARKING_BRAKE: {
                    id: "before_takeoff_parking_brake",
                    title: "Parking Brake",
                    value: "SET"
                },
                SEATS_BELTS_HARNESSES: {
                    id: "before_takeoff_seats_belts_harnesses",
                    title: "Seats, Seat Belts, Shoulder Harnesses",
                    value: "CHECK SECURE"
                },
                FLIGHT_CONTROLS: {
                    id: "before_takeoff_flight_controls",
                    title: "Flight Controls",
                    value: "FREE and CORRECT"
                },
                FLIGHT_INSTRUMENTS: {
                    id: "before_takeoff_flight_instruments",
                    title: "Flight Instruments",
                    value: "CHECK and SET"
                },
                FUEL_BOOST_SWITCH: {
                    id: "before_takeoff_fuel_boost_switch",
                    title: "Fuel Boost Switch",
                    value: "RECHECK NORM"
                },
                FUEL_TANK_SELECTORS: {
                    id: "before_takeoff_fuel_tank_selectors",
                    title: "Fuel Tank Selectors",
                    value: "RECHECK BOTH ON"
                },
                FUEL_QUANTITY: {
                    id: "before_takeoff_fuel_quantity",
                    title: "Fuel Quantity",
                    value: "RECHECK"
                },
                FIREWALL_FUEL_SHUTOFF: {
                    id: "before_takeoff_firewall_fuel_shutoff",
                    title: "Firewall Fuel Shutoff",
                    value: "RECHECK FULLY ON"
                },
                TRIM_CONTROLS: {
                    id: "before_takeoff_trim_controls",
                    title: "Elevator, Aileron, Rudder Trim Controls",
                    value: "SET for takeoff"
                },
                POWER_LEVER: {
                    id: "before_takeoff_power_lever",
                    title: "Power Lever",
                    value: "CHECK"
                },
                OVERSPEED_GOVERNOR: {
                    id: "before_takeoff_overspeed_governor",
                    title: "Overspeed Governor",
                    value: "CHECK"
                },
                STANDBY_POWER_CHECK: {
                    id: "before_takeoff_standby_power_check",
                    title: "Standby Power System",
                    value: "CHECK"
                },
                AUTOPILOT: {
                    id: "before_takeoff_autopilot",
                    title: "Autopilot",
                    value: "VERIFY preflight test complete"
                },
                PROP_ANTI_ICE_PREFLIGHT: {
                    id: "before_takeoff_prop_anti_ice_preflight",
                    title: "Propeller Anti-icing System",
                    value: "PREFLIGHT CHECK (if icing expected)"
                },
                PITOT_STATIC_HEAT: {
                    id: "before_takeoff_pitot_static_heat",
                    title: "Pitot/Static Heat",
                    value: "ON if OAT < 4°C"
                },
                STALL_HEAT: {
                    id: "before_takeoff_stall_heat",
                    title: "Stall Heat, Windshield and Prop Anti-ice",
                    value: "AS REQUIRED for takeoff/climb"
                },
                AVIONICS_RADAR: {
                    id: "before_takeoff_avionics_radar",
                    title: "Avionics and Weather Radar",
                    value: "CHECK and SET"
                },
                STROBE_LANDING_LIGHTS: {
                    id: "before_takeoff_strobe_lights",
                    title: "Strobe lights and Landing lights",
                    value: "ON, as required"
                },
                ANNUNCIATORS: {
                    id: "before_takeoff_annunciators",
                    title: "Annunciators",
                    value: "EXTINGUISHED or considered"
                },
                WING_FLAPS: {
                    id: "before_takeoff_wing_flaps",
                    title: "Wing flaps",
                    value: "SET"
                },
                CABIN_HEAT_AIR_CONTROL: {
                    id: "before_takeoff_cabin_heat_air_control",
                    title: "Cabin Heat Mixing Air Control",
                    value: "FLT-PUSH"
                },
                WINDOW: {
                    id: "before_takeoff_window",
                    title: "Window",
                    value: "CLOSE"
                },
                BRAKES_RELEASE: {
                    id: "before_takeoff_brakes_release",
                    title: "Brakes",
                    value: "RELEASE"
                },
                FUEL_CONDITION_HIGH_IDLE: {
                    id: "before_takeoff_fuel_condition_high_idle",
                    title: "Fuel Condition Lever",
                    value: "HIGH IDLE"
                },
                STANDBY_PWR_ON: {
                    id: "before_takeoff_standby_pwr_on",
                    title: "Standby Power Switch",
                    value: "ON (check STBY PWR INOP OFF)"
                }
            }
        },

        "NORMAL_TAKEOFF": {
            id: "phase_normal_takeoff",
            items: {
                WING_FLAPS_SET: {
                    id: "normal_takeoff_wing_flaps_set",
                    title: "Wing Flaps",
                    value: "SET"
                },
                POWER: {
                    id: "normal_takeoff_power",
                    title: "Power",
                    value: "SET FOR TAKEOFF"
                },
                ANNUNCIATORS: {
                    id: "normal_takeoff_annunciators",
                    title: "Annunciators",
                    value: "CHECK"
                },
                ROTATE: {
                    id: "normal_takeoff_rotate",
                    title: "Rotate",
                    value: "70 – 75 KIAS"
                },
                CLIMB_SPEED: {
                    id: "normal_takeoff_climb_speed",
                    title: "Climb Speed",
                    value: "85 – 95 KIAS"
                },
                WING_FLAPS_RETRACT: {
                    id: "normal_takeoff_wing_flaps_retract",
                    title: "Wing Flaps (Retract)",
                    value: "RETRACT"
                }
            },
















        },

        "CRUISE_CLIMB": {
            id: "phase_cruise_climb",
            items: {
                ICE_PROTECTION: {
                    id: "cruise_climb_ice_protection",
                    title: "Ice Protection",
                    value: "AS REQUIRED"
                },
                LIGHTS: {
                    id: "cruise_climb_lights",
                    title: "Lights",
                    value: "AS REQUIRED"
                },
                PITOT_STATIC_HEAT: {
                    id: "cruise_climb_pitot_static_heat",
                    title: "Pitot/Static Heat",
                    value: "ON when OAT is below 4°C"
                },
                AIRSPEED: {
                    id: "cruise_climb_airspeed",
                    title: "Airspeed",
                    value: "110 – 120 KIAS"
                },
                PROPELLER: {
                    id: "cruise_climb_propeller",
                    title: "Propeller",
                    value: "1600 – 1900 RPM"
                },
                TORQUE: {
                    id: "cruise_climb_torque",
                    title: "Torque",
                    value: "SET"
                }
            },
        },

        "CRUISE": {
            id: "phase_cruise",
            items: {
                ICE_PROTECTION: {
                    id: "cruise_ice_protection",
                    title: "Ice Protection",
                    value: "AS REQUIRED"
                },
                PITOT_STATIC_HEAT: {
                    id: "cruise_pitot_static_heat",
                    title: "Pitot/Static Heat",
                    value: "ON when OAT is below 4°C"
                },
                PROPELLER: {
                    id: "cruise_propeller",
                    title: "Propeller",
                    value: "1600 to 1900 RPM"
                },
                POWER: {
                    id: "cruise_power",
                    title: "Power",
                    value: "SET per Cruise"
                }
            }
        },

        "DESCENT": {
            id: "phase_descent",
            items: {
                ICE_PROTECTION: {
                    id: "descent_ice_protection",
                    title: "Ice Protection",
                    value: "AS REQUIRED"
                },
                PITOT_STATIC_HEAT: {
                    id: "descent_pitot_static_heat",
                    title: "Pitot/Static Heat",
                    value: "ON when OAT is below 4°C"
                },
                SEAT_BELT_SIGN: {
                    id: "descent_seat_belt_sign",
                    title: "No Smoking / Seat Belt Sign Switches",
                    value: "AS REQUIRED"
                },
                ALTIMETER: {
                    id: "descent_altimeter",
                    title: "Altimeter",
                    value: "SET"
                },
                POWER: {
                    id: "descent_power",
                    title: "Power",
                    value: "AS REQUIRED"
                }
            }
        },

        "NORMAL_LANDING": {
            id: "phase_normal_landing",
            items: {
                WING_FLAPS: {
                    id: "normal_landing_wing_flaps",
                    title: "Wing Flaps",
                    value: "FULL DOWN"
                },
                AIRSPEED: {
                    id: "normal_landing_airspeed",
                    title: "Airspeed",
                    value: "75 – 85 KIAS"
                },
                POWER_LEVER: {
                    id: "normal_landing_power_lever",
                    title: "Power Lever",
                    value: "BETA range after TOUCHDOWN"
                },
                BRAKES: {
                    id: "normal_landing_brakes",
                    title: "Brakes",
                    value: "AS REQUIRED"
                }
            }
        },

        "BALKED_LANDING": {
            id: "phase_balked_landing",
            items: {
                POWER_LEVER: {
                    id: "balked_landing_power_lever",
                    title: "Power Lever",
                    value: "ADVANCE"
                },
                WING_FLAPS_INITIAL: {
                    id: "balked_landing_wing_flaps_initial",
                    title: "Wing Flaps (initial)",
                    value: "RETRACT to 20 degrees"
                },
                CLIMB_SPEED: {
                    id: "balked_landing_climb_speed",
                    title: "Climb Speed",
                    value: "80 KIAS MINIMUM"
                },
                WING_FLAPS_FINAL: {
                    id: "balked_landing_wing_flaps_final",
                    title: "Wing Flaps (final)",
                    value: "RETRACT"
                }
            }
        },

        "AFTER_LANDING": {
            id: "phase_after_landing",
            items: {
                WING_FLAPS: {
                    id: "after_landing_wing_flaps",
                    title: "Wing Flaps",
                    value: "UP"
                },
                ICE_PROTECTION: {
                    id: "after_landing_ice_protection",
                    title: "Ice Protection Equipment",
                    value: "OFF"
                },
                STANDBY_POWER_SWITCH: {
                    id: "after_landing_standby_power_switch",
                    title: "Standby Power Switch",
                    value: "OFF"
                },
                STROBE_LIGHTS: {
                    id: "after_landing_strobe_lights",
                    title: "Strobe Lights",
                    value: "OFF"
                },
                LANDING_TAXI_LIGHTS: {
                    id: "after_landing_landing_taxi_lights",
                    title: "Landing and Taxi Lights",
                    value: "AS REQUIRED"
                },
                FUEL_CONDITION_LEVER: {
                    id: "after_landing_fuel_condition_lever",
                    title: "Fuel Condition Lever",
                    value: "LOW IDLE"
                }
            }
        },

        "SHUTDOWN_AND_SECURING": {
            id: "phase_shutdown_and_securing",
            items: {
                PARKING_BRAKE: {
                    id: "shutdown_parking_brake",
                    title: "Parking Brake",
                    value: "SET"
                },
                AVIONICS_POWER: {
                    id: "shutdown_avionics_power",
                    title: "Avionics Power Switches",
                    value: "OFF"
                },
                STANDBY_POWER: {
                    id: "shutdown_standby_power",
                    title: "Standby Power Switch",
                    value: "OFF"
                },
                FUEL_BOOST_SWITCH: {
                    id: "shutdown_fuel_boost_switch",
                    title: "Fuel Boost Switch",
                    value: "OFF"
                },
                BLEED_AIR_FANS: {
                    id: "shutdown_bleed_air_fans",
                    title: "Bleed Air Heat, Ventilation Fans",
                    value: "OFF"
                },
                POWER_LEVER: {
                    id: "shutdown_power_lever",
                    title: "Power Lever",
                    value: "IDLE"
                },
                ITT: {
                    id: "shutdown_itt",
                    title: "ITT",
                    value: "STABILIZED"
                },
                PROPELLER_CONTROL: {
                    id: "shutdown_propeller_control",
                    title: "Propeller Control Lever",
                    value: "FEATHER"
                },
                FUEL_CONDITION: {
                    id: "shutdown_fuel_condition",
                    title: "Fuel Condition Lever",
                    value: "CUTOFF"
                },
                OXYGEN_SUPPLY: {
                    id: "shutdown_oxygen_supply",
                    title: "Oxygen Supply Control Lever (Overhead)",
                    value: "OFF"
                },
                LIGHTING_SWITCHES: {
                    id: "shutdown_lighting_switches",
                    title: "Lighting Switches",
                    value: "OFF"
                },
                BATTERY_SWITCH: {
                    id: "shutdown_battery_switch",
                    title: "Battery Switch",
                    value: "OFF"
                },
                FUEL_TANK_SELECTORS: {
                    id: "shutdown_fuel_tank_selectors",
                    title: "Fuel Tank Selectors",
                    value: "LEFT OFF or RIGHT OFF"
                },
                TIE_DOWNS_CHOCKS: {
                    id: "shutdown_tie_downs_chocks",
                    title: "Tie-Downs and Chocks",
                    value: "AS REQUIRED"
                },
                EXTERNAL_COVERS: {
                    id: "shutdown_external_covers",
                    title: "External Covers",
                    value: "INSTALL"
                }
            }
        }

    }
};

// Exporting the checklist
export default checklist;
