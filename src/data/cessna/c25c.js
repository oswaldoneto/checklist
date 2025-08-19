const checklist = {
    FLIGHT_PHASES: {
      "BEFORE_START": {
        id: "phase_before_start",
        items: {
          PARKING_BRAKE: { id: "before_start_parking_brake", title: "Parking Brake", value: "CHECK / SET" },
          CLIMATE_CONTROL_SELECTOR: { id: "before_start_climate_control_selector", title: "Climate Control Selector", value: "OFF" },
          BATTERY_SWITCH: { id: "before_start_battery_switch", title: "Battery Switch", value: "ON" },
          EXTERIOR_LIGHTS: { id: "before_start_exterior_lights", title: "Exterior Lights", value: "AS REQUIRED" },
          EMERGENCY_LIGHTS_SWITCH: { id: "before_start_emergency_lights_switch", title: "Emergency Lights Switch", value: "ARM" },
          EICAS_UPPER_MFD: { id: "before_start_eicas_upper_mfd", title: "EICAS (Upper MFD Window)", value: "CHECK" },
          AVIONICS_SWITCH: { id: "before_start_avionics_switch", title: "Avionics Switch", value: "DISPATCH" },
          WHEEL_CHOCKS: { id: "before_start_wheel_chocks", title: "Wheel Chocks", value: "REMOVE" },
          STANDBY_FLIGHT_DISPLAY_SWITCH: { id: "before_start_stby_flight_display", title: "Standby Flight Display Switch", value: "ON" },
          CABIN_DOOR: { id: "before_start_cabin_door", title: "Cabin Door", value: "CLOSED" }
        }
      },
  
      "FMS_SET_UP": {
        id: "phase_fms_set_up",
        items: {
          POSITION_INITIALISATION: { id: "fms_set_up_position_initialisation", title: "Position Initialisation", value: "SET" },
          FLIGHT_PLAN: { id: "fms_set_up_flight_plan", title: "Flight Plan", value: "SET/LOAD & EXEC" },
          DATALINK_WEATHER_REQUEST: { id: "fms_set_up_datalink_weather", title: "Datalink (Weather Request)", value: "AS DESIRED" },
          RADIO_COM1_RECALL_PRESETS: { id: "fms_set_up_radio_com1", title: "Radio (Com1, Recall & Presets)", value: "SET" },
          PERFORMANCE_INITIALISATION: { id: "fms_set_up_perf_init", title: "Performance (Initialisation)", value: "CHECK / SET" },
          PERFORMANCE_DEPARTURE: { id: "fms_set_up_perf_departure", title: "Performance (Departure)", value: "SET & SEND" },
          SID_ROUTE: { id: "fms_set_up_sid_route", title: "SID Route", value: "SET & EXEC" },
          STAR_ROUTE_IF_AVAIL: { id: "fms_set_up_star_route", title: "STAR Route (If Available)", value: "SET & EXEC" },
          PERFORMANCE_ARRIVAL_IF_AVAIL: { id: "fms_set_up_perf_arrival", title: "Performance (Arrival) (If available)", value: "SET & SEND" },
          LEGS_FLIGHT_PLAN_CONSTRAINTS: { id: "fms_set_up_legs_plan_constraints", title: "Legs (Flight Plan & Constraints)", value: "CHECK" },
          TCAS_SQUAWK_ATC1: { id: "fms_set_up_tcas_squawk", title: "TCAS Squawk Code (ATC1)", value: "SET" },
          ATC_REQUEST_IFR_CLEARANCE: { id: "fms_set_up_atc_ifr", title: "ATC: Request IFR Clearance", value: "AS REQUIRED" }
        }
      },
  
      "STARTING_ENGINES": {
        id: "phase_starting_engines",
        items: {
          ATC_REQUEST_START: { id: "starting_engines_atc_request_start", title: "ATC: Request Start", value: "AS REQUIRED" },
          EICAS_UPPER_MFD: { id: "starting_engines_eicas_upper_mfd", title: "EICAS (Upper MFD Window)", value: "CHECK" },
          THROTTLES: { id: "starting_engines_throttles", title: "Throttles", value: "IDLE" },
          ENGINE_STARTER_BUTTON: { id: "starting_engines_engine_starter_button", title: "Engine Starter Button", value: "PUSH" },
          ENGINE_RUN_STOP_BUTTON: { id: "starting_engines_engine_run_stop_button", title: "Engine Run/Stop Button", value: "RUN" },
          ITT: { id: "starting_engines_itt", title: "ITT", value: "CHECK" },
          OPPOSITE_ENGINE_START: { id: "starting_engines_opposite_engine_start", title: "Opposite Engine", value: "START" },
          EICAS_UPPER_MFD_2: { id: "starting_engines_eicas_upper_mfd_2", title: "EICAS (Upper MFD Window)", value: "CHECK" },
          EXTERNAL_POWER: { id: "starting_engines_external_power", title: "External Power", value: "DISCONNECT" },
          ELECTRICAL_SYSTEM: { id: "starting_engines_electrical_system", title: "Electrical System", value: "CHECK" }
        }
      },
  
      "BEFORE_TAXI": {
        id: "phase_before_taxi",
        items: {
          AVIONICS_SWITCH: { id: "before_taxi_avionics_switch", title: "Avionics Switch", value: "ON" },
          CLIMATE_CONTROL_SELECTOR: { id: "before_taxi_climate_control_selector", title: "Climate Control Selector", value: "NORM" },
          PASSENGER_LIGHTS_SAFETY: { id: "before_taxi_passenger_lights", title: "Passenger Lights Safety Buttons", value: "ON" },
          FLIGHT_CONTROLS: { id: "before_taxi_flight_controls", title: "Flight Controls", value: "CHECK" },
          SPEED_BRAKES: { id: "before_taxi_speed_brakes", title: "Speed Brakes", value: "CHECK" },
          FLAPS: { id: "before_taxi_flaps", title: "Flaps", value: "CHECK / SET 15 DEG" },
          HYDRAULIC_PRESSURE: { id: "before_taxi_hydraulic_pressure", title: "Hydraulic Pressure", value: "CHECK" },
          ENGINE_ONLY_ANTI_ICE: { id: "before_taxi_engine_only_anti_ice", title: "Engine Only Anti-Ice", value: "AS REQUIRED" },
          TAKEOFF_DATA_IN_FPLN: { id: "before_taxi_takeoff_data_in_fpln", title: "Takeoff Data in F-PLN", value: "CHECK" },
          TAKEOFF_PERFORMANCE_DATA: { id: "before_taxi_takeoff_performance", title: "Takeoff Performance Data", value: "CHECK" },
          AVIONICS_CHECK: { id: "before_taxi_avionics_check", title: "Avionics", value: "CHECK" },
          AUTOPILOT: { id: "before_taxi_autopilot", title: "Autopilot", value: "ENGAGE / DISENGAGE" },
          TRIMS: { id: "before_taxi_trims", title: "Trims", value: "SET" },
          ALTIMETERS: { id: "before_taxi_altimeters", title: "Altimeters", value: "SET / CROSS-CHECK" },
          PRESSURISATION: { id: "before_taxi_pressurisation", title: "Pressurisation", value: "CHECK" },
          EICAS_UPPER_MFD: { id: "before_taxi_eicas_upper_mfd", title: "EICAS (Upper MFD Window)", value: "CHECK" }
        }
      },
  
      "TAXI": {
        id: "phase_taxi",
        items: {
          ATC_REQUEST_TAXI: { id: "taxi_atc_request_taxi", title: "ATC: Request Taxi", value: "AS REQUIRED" },
          EXTERIOR_LIGHTS: { id: "taxi_exterior_lights", title: "Exterior Lights", value: "AS REQUIRED" },
          BRAKES_TEST: { id: "taxi_brakes_test", title: "Brakes", value: "TEST" },
          NOSEWHEEL_STEERING: { id: "taxi_nosewheel_steering", title: "Nosewheel Steering", value: "TEST" },
          BRAKES_APPLY_HOLD: { id: "taxi_brakes_apply_hold", title: "Brakes", value: "APPLY / HOLD" },
          PARKING_BRAKE_RELEASE: { id: "taxi_parking_brake_release", title: "Parking Brake", value: "RELEASE" },
          FLIGHT_INSTRUMENTS: { id: "taxi_flight_instruments", title: "Flight Instruments", value: "TEST" },
          SET_AUTOPILOT_ALTITUDE: { id: "taxi_set_autopilot_altitude", title: "Set Autopilot Altitude", value: "AS DESIRED" }
        }
      },
  
      "BEFORE_TAKEOFF": {
        id: "phase_before_takeoff",
        items: {
          ATC_REQUEST_TAKEOFF: { id: "before_takeoff_atc_request_takeoff", title: "ATC: Request Takeoff", value: "AS REQUIRED" },
          BATTERY_AMPS: { id: "before_takeoff_battery_amps", title: "Battery Amps", value: "20 OR LESS" },
          ICE_PROTECTION_SYSTEM: { id: "before_takeoff_ice_protection_system", title: "Ice Protection System", value: "CHECK" },
          RUDDER_BIAS_SYSTEM: { id: "before_takeoff_rudder_bias_system", title: "Rudder BIAS System", value: "CHECK" },
          FLAPS: { id: "before_takeoff_flaps", title: "Flaps", value: "CHECK" },
          SPEED_BRAKES: { id: "before_takeoff_speed_brakes", title: "Speed Brakes", value: "0%" },
          TRIMS: { id: "before_takeoff_trims", title: "Trims", value: "CHECK" },
          RADAR: { id: "before_takeoff_radar", title: "Radar", value: "AS REQUIRED" },
          GA_BUTTON: { id: "before_takeoff_ga_button", title: "GA Button", value: "PUSH" },
          TCAS: { id: "before_takeoff_tcas", title: "TCAS", value: "TA/RA" },
          PITOT_STATIC_HEAT_BUTTONS: { id: "before_takeoff_pitot_static_heat", title: "Pitot/Static Heat Buttons", value: "ON" },
          ICE_PROTECTION_SYSTEMS_AS_REQ: { id: "before_takeoff_ice_protection_as_req", title: "Ice Protection Systems", value: "AS REQUIRED" },
          EXTERIOR_LIGHTS: { id: "before_takeoff_exterior_lights", title: "Exterior Lights", value: "AS REQUIRED" },
          EICAS_UPPER_MFD: { id: "before_takeoff_eicas_upper_mfd", title: "EICAS (Upper MFD Window)", value: "CHECK" }
        }
      },
  
      "TAKEOFF": {
        id: "phase_takeoff",
        items: {
          THROTTLES: { id: "takeoff_throttles", title: "Throttles", value: "TAKEOFF (TO)" },
          N1_COMMAND_BUGS: { id: "takeoff_n1_command_bugs", title: "N1 Command Bugs", value: "GREEN CHEVRON" },
          BRAKES: { id: "takeoff_brakes", title: "Brakes", value: "RELEASE" },
          CONTROL_WHEEL: { id: "takeoff_control_wheel", title: "Control Wheel", value: "ROTATE AT VR" }
        }
      },
  
      "AFTER_TAKEOFF_CLIMB": {
        id: "phase_after_takeoff_climb",
        items: {
          LANDING_GEAR: { id: "after_to_climb_landing_gear", title: "Landing Gear", value: "UP" },
          FLAPS: { id: "after_to_climb_flaps", title: "Flaps", value: "RETRACT (0 DEG)" },
          THROTTLES: { id: "after_to_climb_throttles", title: "Throttles", value: "CLIMB (CLB)" },
          YAW_DAMPER: { id: "after_to_climb_yaw_damper", title: "Yaw Damper", value: "ON" },
          AUTOPILOT: { id: "after_to_climb_autopilot", title: "Autopilot", value: "AS DESIRED" },
          ICE_PROTECTION_SYSTEMS: { id: "after_to_climb_ice_protection", title: "Ice Protection Systems", value: "AS REQUIRED" },
          PASSENGER_LIGHTS_SAFETY: { id: "after_to_climb_passenger_lights", title: "Passenger Lights Safety Buttons", value: "AS REQUIRED" },
          PRESSURISATION: { id: "after_to_climb_pressurisation", title: "Pressurisation", value: "CHECK" },
          ALTIMETERS_STD_TRANSITION: { id: "after_to_climb_altimeters_std", title: "Altimeters (STD at Transition)", value: "SET / CROSS-CHECK" },
          EXTERIOR_LIGHTS: { id: "after_to_climb_exterior_lights", title: "Exterior Lights", value: "AS REQUIRED" }
        }
      },
  
      "CRUISE": {
        id: "phase_cruise",
        items: {
          THROTTLES: { id: "cruise_throttles", title: "Throttles", value: "AS REQUIRED" },
          ICE_PROTECTION_SYSTEMS: { id: "cruise_ice_protection", title: "Ice Protection Systems", value: "AS REQUIRED" },
          PRESSURISATION: { id: "cruise_pressurisation", title: "Pressurisation", value: "CHECK" }
        }
      },
  
      "TOD_DESCENT": {
        id: "phase_tod_descent",
        items: {
          PRESSURISATION_LDG_ELEV: { id: "tod_pressurisation_ldg_elev", title: "Pressurisation", value: "VERIFY / SET LDG ELEV" },
          AIRSPEED_VMO_VMN: { id: "tod_airspeed_vmo_vmn", title: "Airspeed Vmo & Vmn", value: "VERIFY / MONITOR" },
          STAR_ROUTE: { id: "tod_star_route", title: "STAR Route", value: "CHECK / SET & EXEC" },
          PERFORMANCE_APPROACH: { id: "tod_performance_approach", title: "Performance (Approach)", value: "CHECK / SET & SEND" },
          LEGS_PLAN_CONSTRAINTS: { id: "tod_legs_plan_constraints", title: "Legs (Flight Plan & Constraints)", value: "CHECK" },
          ALTIMETERS_QNH_BELOW_STD: { id: "tod_altimeters_qnh_below_std", title: "Altimeters (QNH Below STD)", value: "SET / CROSS-CHECK" },
          EXTERIOR_LIGHTS: { id: "tod_exterior_lights", title: "Exterior Lights", value: "AS REQUIRED" },
          ICE_PROTECTION_SYSTEMS: { id: "tod_ice_protection", title: "Ice Protection Systems", value: "AS REQUIRED" }
        }
      },
  
      "STAR": {
        id: "phase_star",
        items: {
          AIRSPEED: { id: "star_airspeed", title: "Airspeed", value: "AS REQUIRED" },
          LANDING_LOCALISER_DATA: { id: "star_landing_localiser_data", title: "Landing Localiser Data", value: "CHECK / SET" },
          AVIONICS_FLIGHT_INSTRUMENTS: { id: "star_avionics_flight_instruments", title: "Avionics / Flight Instruments", value: "CHECK" },
          MINIMUMS: { id: "star_minimums", title: "Minimums", value: "SET" },
          FUEL_TRANSFER_SELECTOR: { id: "star_fuel_transfer_selector", title: "Fuel Transfer Selector", value: "OFF" },
          EXTERIOR_LIGHTS: { id: "star_exterior_lights", title: "Exterior Lights", value: "AS REQUIRED" },
          ICE_PROTECTION_SYSTEMS: { id: "star_ice_protection", title: "Ice Protection Systems", value: "AS REQUIRED" },
          FLAPS: { id: "star_flaps", title: "Flaps", value: "15 DEG" },
          PASSENGER_LIGHTS_SAFETY: { id: "star_passenger_lights", title: "Passenger Lights Safety Button", value: "ON" },
          PRESSURISATION_DELTA_P: { id: "star_pressurisation_delta_p", title: "Pressurisation", value: "<0.5 PSI BEFORE LDG" },
          ARM_APPROACH_MODE: { id: "star_arm_approach_mode", title: "Arm Approach Mode", value: "AS DESIRED" },
          AIRSPEED_FINAL_APPROACH: { id: "star_airspeed_final_approach", title: "Airspeed (Final Approach)", value: "VAPP" }
        }
      },
  
      "FINAL_APPROACH": {
        id: "phase_final_approach",
        items: {
          LANDING_GEAR: { id: "final_approach_landing_gear", title: "Landing Gear", value: "DOWN (3 GREEN)" },
          FLAPS: { id: "final_approach_flaps", title: "Flaps", value: "35 DEG" },
          SPEED_BRAKES: { id: "final_approach_speed_brakes", title: "Speed Brakes", value: "0%" },
          AIRSPEED: { id: "final_approach_airspeed", title: "Airspeed", value: "VREF" },
          AUTOPILOT_YAW_DAMPER: { id: "final_approach_ap_yd", title: "Autopilot & Yaw Damper", value: "DISENGAGE" }
        }
      },
  
      "LANDING": {
        id: "phase_landing",
        items: {
          THROTTLES: { id: "landing_throttles", title: "Throttles", value: "IDLE" },
          GROUND_SPOILERS: { id: "landing_ground_spoilers", title: "Ground Spoilers", value: "EXTEND" },
          BRAKES_AFTER_NLG: { id: "landing_brakes_after_nlg", title: "Brakes (After NLG Touchdown)", value: "APPLY" }
        }
      },
  
      "GO_AROUND": {
        id: "phase_go_around",
        items: {
          GA_BUTTON: { id: "go_around_ga_button", title: "GA Button", value: "PUSH" },
          THROTTLES: { id: "go_around_throttles", title: "Throttles", value: "TAKEOFF" },
          PITCH_ATTITUDE: { id: "go_around_pitch_attitude", title: "Pitch Attitude", value: "7.5 DEG THEN AS REQUIRED" },
          FLAPS: { id: "go_around_flaps", title: "Flaps", value: "15 DEG / AS REQUIRED" },
          YAW_DAMPER: { id: "go_around_yaw_damper", title: "Yaw Damper", value: "ON" },
          AIRSPEED: { id: "go_around_airspeed", title: "Airspeed", value: "AS REQUIRED" },
          AUTOPILOT: { id: "go_around_autopilot", title: "Autopilot", value: "AS DESIRED" },
          LANDING_GEAR: { id: "go_around_landing_gear", title: "Landing Gear", value: "UP" }
        }
      },
  
      "AFTER_LANDING": {
        id: "phase_after_landing",
        items: {
          SPEED_BRAKES: { id: "after_landing_speed_brakes", title: "Speed Brakes", value: "0%" },
          FLAPS: { id: "after_landing_flaps", title: "Flaps", value: "0 DEG" },
          PITOT_STATIC_HEAT_BUTTONS: { id: "after_landing_pitot_static_heat", title: "Pitot/Static Heat Buttons", value: "OFF" },
          TCAS: { id: "after_landing_tcas", title: "TCAS", value: "STANDBY" },
          ICE_PROTECTION_SYSTEMS: { id: "after_landing_ice_protection", title: "Ice Protection Systems", value: "OFF / AS REQUIRED" },
          RADAR: { id: "after_landing_radar", title: "Radar", value: "STANDBY" },
          EXTERIOR_LIGHTS: { id: "after_landing_exterior_lights", title: "Exterior Lights", value: "AS REQUIRED" }
        }
      },
  
      "SHUTDOWN": {
        id: "phase_shutdown",
        items: {
          PARKING_BRAKE_CHOCKS: { id: "shutdown_parking_brake_chocks", title: "Parking Brake", value: "SET + CHOCKS" },
          THROTTLES: { id: "shutdown_throttles", title: "Throttles", value: "IDLE" },
          EMERGENCY_LIGHTS_SWITCH: { id: "shutdown_emergency_lights_switch", title: "Emergency Lights Switch", value: "OFF" },
          ENGINE_RUN_STOP_BUTTONS: { id: "shutdown_engine_run_stop_buttons", title: "Engine Run/Stop Buttons (Both)", value: "STOP" },
          STANDBY_FLIGHT_DISPLAY_SWITCH: { id: "shutdown_stby_flight_display", title: "Standby Flight Display Switch", value: "OFF" },
          EXTERIOR_LIGHTS: { id: "shutdown_exterior_lights", title: "Exterior Lights", value: "OFF" },
          AVIONICS_SWITCH: { id: "shutdown_avionics_switch", title: "Avionics Switch", value: "OFF" },
          PASSENGER_SAFETY_LIGHTS: { id: "shutdown_passenger_safety_lights", title: "Passenger Safety Lights", value: "OFF" },
          CLIMATE_CONTROL_SELECTOR: { id: "shutdown_climate_control_selector", title: "Climate Control Selector", value: "OFF" },
          BATTERY_SWITCH: { id: "shutdown_battery_switch", title: "Battery Switch", value: "OFF" },
          ICE_PROTECTION_SYSTEMS: { id: "shutdown_ice_protection_systems", title: "Ice Protection Systems (All)", value: "OFF" }
        }
      }
    }
  };
  
  export default checklist;
  