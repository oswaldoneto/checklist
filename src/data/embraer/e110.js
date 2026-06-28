const checklist = {
  FLIGHT_PHASES: {
    "AIRCRAFT_PREPARATION": {
      id: "phase_aircraft_preparation",
      items: {
        PRE_FLIGHT_INSPECTION: { id: "aircraft_preparation_pre_flight_inspection", title: "PRE-FLIGHT INSPECTION", value: "COMPLETE" },
        CHOCKS_CARGO_POLE: { id: "aircraft_preparation_chocks_cargo_pole", title: "CHOCKS & CARGO POLE", value: "REMOVED" },
        CABIN_PREPARATION: { id: "aircraft_preparation_cabin_preparation", title: "CABIN PREPARATION", value: "COMPLETE" },
        MANUALS_DOCUMENTS: { id: "aircraft_preparation_manuals_documents", title: "MANUALS & DOCUMENTS", value: "ON BOARD" },
        FUEL_QUANTITY: { id: "aircraft_preparation_fuel_quantity", title: "FUEL QUANTITY", value: "CHECKED" },
        FUEL_TOTALIZER: { id: "aircraft_preparation_fuel_totalizer", title: "FUEL TOTALIZER", value: "RESET" },
        CIRCUIT_BREAKERS: { id: "aircraft_preparation_circuit_breakers", title: "CIRCUIT BREAKERS", value: "IN" },
        PARKING_BRAKE: { id: "aircraft_preparation_parking_brake", title: "PARKING BRAKE", value: "SET" },
        TRIMS: { id: "aircraft_preparation_trims", title: "TRIMS", value: "SET" },
        BATTERY: { id: "aircraft_preparation_battery", title: "BATTERY", value: "ON" }
      }
    },
    "ENGINE_START": {
      id: "phase_engine_start",
      items: {
        WINDOWS_DOORS: { id: "engine_start_windows_doors", title: "WINDOWS & DOORS", value: "LOCKED" },
        SEATBELTS_NO_SMOKING: { id: "engine_start_seatbelts_no_smoking", title: "SEATBELTS & NO SMOKING", value: "ON" },
        NAV_ANTI_COLLISION_LIGHTS: { id: "engine_start_nav_anti_collision_lights", title: "NAV & ANTI-COLLISION LIGHTS", value: "ON" },
        CONVERTER_2: { id: "engine_start_converter_2", title: "CONVERTER #2", value: "ON" },
        RADIO_MASTER_SWITCH: { id: "engine_start_radio_master_switch", title: "RADIO MASTER SWITCH", value: "OFF" },
        AUX_HYDRAULIC_PUMP: { id: "engine_start_aux_hydraulic_pump", title: "AUX HYDRAULIC PUMP", value: "ON" },
        FUEL_PUMPS: { id: "engine_start_fuel_pumps", title: "FUEL PUMPS", value: "4 ON" },
        THROTTLES: { id: "engine_start_throttles", title: "THROTTLES", value: "AS REQUIRED" }
      }
    },
    "AFTER_START": {
      id: "phase_after_start",
      items: {
        BATTERY: { id: "after_start_battery", title: "BATTERY", value: "INTERNAL" },
        GENERATORS: { id: "after_start_generators", title: "GENERATORS", value: "ON" },
        CONVERTERS: { id: "after_start_converters", title: "CONVERTERS", value: "ON" },
        RADIO_MASTER_SWITCH: { id: "after_start_radio_master_switch", title: "RADIO MASTER SWITCH", value: "ON" },
        NAV_COM_GPS: { id: "after_start_nav_com_gps", title: "NAV / COM / GPS", value: "SET" },
        RADAR: { id: "after_start_radar", title: "RADAR", value: "STBY" },
        ATC_TRANSPONDER: { id: "after_start_atc_transponder", title: "ATC TRANSPONDER", value: "SET" },
        ENGINE_INSTRUMENTS: { id: "after_start_engine_instruments", title: "ENGINE INSTRUMENTS", value: "CHECKED" },
        STANDBY_HORIZON: { id: "after_start_standby_horizon", title: "STANDBY HORIZON", value: "ON" },
        EMERGENCY_LIGHTS_SOURCE: { id: "after_start_emergency_lights_source", title: "EMERGENCY LIGHTS SOURCE", value: "ARMED" },
        FLAPS: { id: "after_start_flaps", title: "FLAPS", value: "UP or 25%" },
        AIR_CONDITIONING: { id: "after_start_air_conditioning", title: "AIR CONDITIONING", value: "OFF" },
        CROSSFEED: { id: "after_start_crossfeed", title: "CROSSFEED", value: "CHECKED" }
      }
    },
    "TAXI": {
      id: "phase_taxi",
      items: {
        NACELLE_TAXI_LIGHTS: { id: "taxi_nacelle_taxi_lights", title: "NACELLE & TAXI LIGHTS", value: "ON" },
        FLIGHT_CONTROLS: { id: "taxi_flight_controls", title: "FLIGHT CONTROLS", value: "CHECKED" },
        FLIGHT_INSTRUMENTS: { id: "taxi_flight_instruments", title: "FLIGHT INSTRUMENTS", value: "CHECKED" },
        TRIMS: { id: "taxi_trims", title: "TRIMS", value: "SET" },
        TAKE_OFF_BRIEFING: { id: "taxi_take_off_briefing", title: "TAKE-OFF BRIEFING", value: "REVIEWED" }
      }
    },
    "LINE_UP": {
      id: "phase_line_up",
      items: {
        STROBE_LANDING_LIGHTS: { id: "line_up_strobe_landing_lights", title: "STROBE & LANDING LIGHTS", value: "ON" },
        INERTIAL_SEPARATOR: { id: "line_up_inertial_separator", title: "INERTIAL SEPARATOR", value: "AS REQUIRED" },
        RADAR: { id: "line_up_radar", title: "RADAR", value: "AS REQUIRED" },
        AUTO_FEATHER: { id: "line_up_auto_feather", title: "AUTO FEATHER", value: "ARMED" },
        CONDITION_LEVERS: { id: "line_up_condition_levers", title: "CONDITION LEVERS", value: "HIGH" },
        AIR_CONDITIONING: { id: "line_up_air_conditioning", title: "AIR CONDITIONING", value: "OFF or VENT" },
        TRANSPONDER: { id: "line_up_transponder", title: "TRANSPONDER", value: "ON / ALT" }
      }
    },
    "AFTER_TAKEOFF": {
      id: "phase_after_takeoff",
      items: {
        LANDING_GEAR: { id: "after_takeoff_landing_gear", title: "LANDING GEAR", value: "UP" },
        PROPELLER_LEVER: { id: "after_takeoff_propeller_lever", title: "PROPELLER LEVER", value: "SET 91%" },
        FLAPS: { id: "after_takeoff_flaps", title: "FLAPS", value: "UP" },
        TAXI_LANDING_LIGHTS: { id: "after_takeoff_taxi_landing_lights", title: "TAXI & LANDING LIGHTS", value: "AS REQUIRED" },
        INERTIAL_SEPARATOR: { id: "after_takeoff_inertial_separator", title: "INERTIAL SEPARATOR", value: "OFF" },
        AUTO_FEATHER: { id: "after_takeoff_auto_feather", title: "AUTO FEATHER", value: "OFF" },
        AUX_HYDRAULIC_PUMP: { id: "after_takeoff_aux_hydraulic_pump", title: "AUX HYDRAULIC PUMP", value: "OFF" },
        ALTIMETERS: { id: "after_takeoff_altimeters", title: "ALTIMETERS", value: "SET" },
        ENGINE_INSTRUMENTS: { id: "after_takeoff_engine_instruments", title: "ENGINE INSTRUMENTS", value: "CHECKED" },
        AUTOPILOT_YAW_DAMPER: { id: "after_takeoff_autopilot_yaw_damper", title: "AUTOPILOT & YAW DAMPER", value: "ON" }
      }
    },
    "CRUISE": {
      id: "phase_cruise",
      items: {
        PROPELLER_LEVER: { id: "cruise_propeller_lever", title: "PROPELLER LEVER", value: "SET 83%" },
        PITOT_PX_HEAT: { id: "cruise_pitot_px_heat", title: "PITOT & Px HEAT", value: "AS REQUIRED" },
        SEATBELTS_SIGN: { id: "cruise_seatbelts_sign", title: "SEATBELTS SIGN", value: "OFF" },
        ENGINE_INSTRUMENTS: { id: "cruise_engine_instruments", title: "ENGINE INSTRUMENTS", value: "CHECKED" },
        NACELLE_LIGHT: { id: "cruise_nacelle_light", title: "NACELLE LIGHT", value: "OFF" },
        FUEL_FLOW: { id: "cruise_fuel_flow", title: "FUEL FLOW", value: "CHECKED" }
      }
    },
    "DESCENT": {
      id: "phase_descent",
      items: {
        NACELLE_LIGHT: { id: "descent_nacelle_light", title: "NACELLE LIGHT", value: "ON" },
        SEATBELTS_SIGN: { id: "descent_seatbelts_sign", title: "SEATBELTS SIGN", value: "ON" },
        GPS_VOR: { id: "descent_gps_vor", title: "GPS / VOR", value: "AS REQUIRED" },
        APPROACH_BRIEFING: { id: "descent_approach_briefing", title: "APPROACH BRIEFING", value: "COMPLETE" }
      }
    },
    "BEFORE_FINAL_APPROACH": {
      id: "phase_before_final_approach",
      items: {
        LANDING_TAXI_LIGHTS: { id: "before_final_approach_landing_taxi_lights", title: "LANDING & TAXI LIGHTS", value: "ON" },
        ALTIMETERS: { id: "before_final_approach_altimeters", title: "ALTIMETERS", value: "SET" },
        AUTO_FEATHER: { id: "before_final_approach_auto_feather", title: "AUTO FEATHER", value: "ARMED" },
        AUX_HYDRAULIC_PUMP: { id: "before_final_approach_aux_hydraulic_pump", title: "AUX HYDRAULIC PUMP", value: "ON" },
        AUTOPILOT: { id: "before_final_approach_autopilot", title: "AUTOPILOT", value: "OFF" },
        APPROACH_SETUP: { id: "before_final_approach_approach_setup", title: "APPROACH SETUP", value: "SET" }
      }
    },
    "BEFORE_LANDING": {
      id: "phase_before_landing",
      items: {
        LANDING_GEAR: { id: "before_landing_landing_gear", title: "LANDING GEAR", value: "DOWN & LOCKED" },
        FLAPS: { id: "before_landing_flaps", title: "FLAPS", value: "AS REQUIRED" },
        PROPELLER: { id: "before_landing_propeller", title: "PROPELLER", value: "SET 91%" },
        HYDRAULIC_PRESSURE_BRAKES: { id: "before_landing_hydraulic_pressure_brakes", title: "HYDRAULIC PRESSURE & BRAKES", value: "CHECKED" },
        INERTIAL_SEPARATOR: { id: "before_landing_inertial_separator", title: "INERTIAL SEPARATOR", value: "AS REQUIRED" },
        AIR_CONDITIONING: { id: "before_landing_air_conditioning", title: "AIR CONDITIONING", value: "OFF" },
        STEERING: { id: "before_landing_steering", title: "STEERING", value: "ON" }
      }
    },
    "AFTER_LANDING": {
      id: "phase_after_landing",
      items: {
        CONDITION_LEVER: { id: "after_landing_condition_lever", title: "CONDITION LEVER", value: "LOW" },
        STROBE_LANDING_LIGHTS: { id: "after_landing_strobe_landing_lights", title: "STROBE & LANDING LIGHTS", value: "OFF" },
        AUTO_FEATHER: { id: "after_landing_auto_feather", title: "AUTO FEATHER", value: "OFF" },
        RADAR: { id: "after_landing_radar", title: "RADAR", value: "OFF" },
        ILS_VOR: { id: "after_landing_ils_vor", title: "ILS / VOR", value: "REVERT TO VOR" },
        ATC_TRANSPONDER: { id: "after_landing_atc_transponder", title: "ATC TRANSPONDER", value: "STANDBY 2000" },
        FLAPS: { id: "after_landing_flaps", title: "FLAPS", value: "SET 25%" },
        TRIMS: { id: "after_landing_trims", title: "TRIMS", value: "ZEROED" }
      }
    },
    "ENGINE_SHUTDOWN": {
      id: "phase_engine_shutdown",
      items: {
        PARKING_BRAKE: { id: "engine_shutdown_parking_brake", title: "PARKING BRAKE", value: "SET" },
        PROPELLER_LEVER: { id: "engine_shutdown_propeller_lever", title: "PROPELLER LEVER", value: "FEATHER" },
        CONDITION_LEVER: { id: "engine_shutdown_condition_lever", title: "CONDITION LEVER", value: "CUTOFF" },
        INERTIAL_SEPARATOR: { id: "engine_shutdown_inertial_separator", title: "INERTIAL SEPARATOR", value: "OFF" },
        SEATBELTS_NO_SMOKING: { id: "engine_shutdown_seatbelts_no_smoking", title: "SEATBELTS & NO SMOKING", value: "OFF" },
        NAV_ANTI_COLLISION_LIGHTS: { id: "engine_shutdown_nav_anti_collision_lights", title: "NAV & ANTI-COLLISION LIGHTS", value: "OFF" },
        GENERATORS: { id: "engine_shutdown_generators", title: "GENERATORS", value: "OFF" },
        CONVERTER_1: { id: "engine_shutdown_converter_1", title: "CONVERTER #1", value: "OFF" },
        RADIO_MASTER_SWITCH: { id: "engine_shutdown_radio_master_switch", title: "RADIO MASTER SWITCH", value: "OFF" },
        STANDBY_HORIZON: { id: "engine_shutdown_standby_horizon", title: "STANDBY HORIZON", value: "OFF" },
        EMERGENCY_LIGHTS_SOURCE: { id: "engine_shutdown_emergency_lights_source", title: "EMERGENCY LIGHTS SOURCE", value: "OFF" },
        AUX_HYDRAULIC_PUMP: { id: "engine_shutdown_aux_hydraulic_pump", title: "AUX HYDRAULIC PUMP", value: "OFF" },
        FUEL_PUMPS: { id: "engine_shutdown_fuel_pumps", title: "FUEL PUMPS", value: "OFF" },
        CONVERTER_2: { id: "engine_shutdown_converter_2", title: "CONVERTER #2", value: "OFF" },
        FUEL_COUNTER: { id: "engine_shutdown_fuel_counter", title: "FUEL COUNTER", value: "CHECK & RESET" },
        CABIN_PANEL_UTILITY_LIGHTS: { id: "engine_shutdown_cabin_panel_utility_lights", title: "CABIN / PANEL / UTILITY LIGHTS", value: "OFF" },
        BATTERY: { id: "engine_shutdown_battery", title: "BATTERY", value: "OFF" }
      }
    }
  }
};

// Exportando o checklist usando ES modules
export default checklist;
