const checklist = {
  FLIGHT_PHASES: {
    ELECTRIC_POWER_UP: {
      id: 'phase_electric_power_up',
      items: {
        BATTERY_SWITCH: { id: 'electric_power_up_battery_switch', title: 'BATTERY SWITCH', value: 'ON' },
        PRIMARY_PUMP_SWITCHES: { id: 'electric_power_up_primary_pump_switches', title: 'C1 + C2 PRIMARY PUMP SWITCHES', value: 'OFF' },
        DEMAND_PUMP_SWITCHES: { id: 'electric_power_up_demand_pump_switches', title: 'DEMAND PUMP SWITCHES', value: 'OFF' },
        WIPER: { id: 'electric_power_up_wiper', title: 'WIPER', value: 'OFF' },
        LANDING_GEAR: { id: 'electric_power_up_landing_gear', title: 'LANDING GEAR', value: 'DOWN' },
        ALTERNATE_FLAPS: { id: 'electric_power_up_alternate_flaps', title: 'ALTERNATE FLAPS', value: 'OFF' },
        BUS_TIE_SWITCHES: { id: 'electric_power_up_bus_tie_switches', title: 'BUS TIE SWITCHES', value: 'AUTO' },
        EXTERNAL_POWER_SWITCHES: { id: 'electric_power_up_external_power_switches', title: 'EXTERNAL POWER SWITCHES', value: 'ON' },
        APU_GENERATOR: { id: 'electric_power_up_apu_generator', title: 'APU GENERATOR', value: 'ON' }
      }
    },
    PRELIMINARY_PREFLIGHT_PROCEDURE: {
      id: 'phase_preliminary_preflight_procedure',
      items: {
        TECHNICAL_LOG: { id: 'preliminary_preflight_procedure_technical_log', title: 'TECHNICAL LOG', value: 'REVIEW' },
        SECONDARY_ENGINE_INDICATIONS: { id: 'preliminary_preflight_procedure_secondary_engine_indications', title: 'SECONDARY ENGINE INDICATIONS', value: 'DISPLAY' },
        STATUS_PAGE: { id: 'preliminary_preflight_procedure_status_page', title: 'STATUS PAGE', value: 'DISPLAY' },
        PARKING_BRAKE: { id: 'preliminary_preflight_procedure_parking_brake', title: 'PARKING BRAKE', value: 'SET' },
        ADIRU: { id: 'preliminary_preflight_procedure_adiru', title: 'ADIRU', value: 'ON' },
        EMERGENCY_LIGHTS_SWITCH: { id: 'preliminary_preflight_procedure_emergency_lights_switch', title: 'EMERGENCY LIGHTS SWITCH', value: 'ARMED' },
        EFB: { id: 'preliminary_preflight_procedure_efb', title: 'EFB', value: 'ON' },
        ATIS: { id: 'preliminary_preflight_procedure_atis', title: 'ATIS', value: 'RECEIVED' },
        AIRCRAFT_DOCUMENTS: { id: 'preliminary_preflight_procedure_aircraft_documents', title: 'AIRCRAFT DOCUMENTS', value: 'CHECK' },
        FLIGHT_DECK_ACCESS_SYSTEM_SWITCH: { id: 'preliminary_preflight_procedure_flight_deck_access_system_switch', title: 'FLIGHT DECK ACCESS SYSTEM SWITCH', value: 'GUARD' },
        EMERGENCY_EQUIPMENT: { id: 'preliminary_preflight_procedure_emergency_equipment', title: 'EMERGENCY EQUIPMENT', value: 'CHECK' },
        OVERHEAD_MAINTENANCE_PANEL: { id: 'preliminary_preflight_procedure_overhead_maintenance_panel', title: 'OVERHEAD MAINTENANCE PANEL', value: 'GUARDS CLOSED' },
        CARGO_TEMPERATURE: { id: 'preliminary_preflight_procedure_cargo_temperature', title: 'CARGO TEMPERATURE', value: 'AS NEEDED' },
        CIRCUIT_BREAKERS: { id: 'preliminary_preflight_procedure_circuit_breakers', title: 'CIRCUIT BREAKERS', value: 'CHECK' }
      }
    },
    FMC_INITIAL_DATA: {
      id: 'phase_fmc_initial_data',
      items: {
        IDENT_PAGE: { id: 'fmc_initial_data_ident_page', title: 'IDENT PAGE', value: 'SET' },
        POS_INIT_PAGE: { id: 'fmc_initial_data_pos_init_page', title: 'POS INIT PAGE', value: 'SET' },
        RTE_PAGE: { id: 'fmc_initial_data_rte_page', title: 'RTE PAGE', value: 'SET' },
        DEPARTURE_PAGE: { id: 'fmc_initial_data_departure_page', title: 'DEPARTURE PAGE', value: 'SET' },
        ARRIVAL_PAGE: { id: 'fmc_initial_data_arrival_page', title: 'ARRIVAL PAGE', value: 'SET' },
        LEGS_PAGE: { id: 'fmc_initial_data_legs_page', title: 'LEGS PAGE', value: 'SET' },
        PROGRESS_PAGE: { id: 'fmc_initial_data_progress_page', title: 'PROGRESS PAGE', value: 'SET' },
        RTE_2_PAGE: { id: 'fmc_initial_data_rte_2_page', title: 'RTE 2 PAGE', value: 'SET' },
        NAV_RADIO_PAGE: { id: 'fmc_initial_data_nav_radio_page', title: 'NAV RADIO PAGE', value: 'SET' },
        PERF_INIT_PAGE: { id: 'fmc_initial_data_perf_init_page', title: 'PERF INIT PAGE', value: 'SET' }
      }
    },
    PREFLIGHT: {
      id: 'phase_preflight',
      items: {
        PARKING_BRAKE: { id: 'preflight_parking_brake', title: 'PARKING BRAKE', value: 'SET' },
        BATTERY_SWITCH: { id: 'preflight_battery_switch', title: 'BATTERY SWITCH', value: 'ON' },
        PRIM_FLIGHT_COMPUTERS: { id: 'preflight_prim_flight_computers', title: 'PRIM FLIGHT COMPUTERS', value: 'AUTO, GRD CLOSED' },
        THRUST_ASYMM_COMPENSATION: { id: 'preflight_thrust_asymm_compensation', title: 'THRUST ASYMM COMPENSATION', value: 'AUTO' },
        APU_GEN_SWITCH: { id: 'preflight_apu_gen_switch', title: 'APU GEN SWITCH', value: 'ON' },
        IFE_PASS_SEATS: { id: 'preflight_ife_pass_seats', title: 'IFE/PASS SEATS', value: 'ON' },
        CABIN_UTILITY: { id: 'preflight_cabin_utility', title: 'CABIN/UTILITY', value: 'ON' },
        BUS_TIE_SWITCHES: { id: 'preflight_bus_tie_switches', title: 'L + R BUS TIE SWITCHES', value: 'AUTO' },
        GENERATOR_CONTROL_SWITCHES: { id: 'preflight_generator_control_switches', title: 'L + R GENERATOR CONTROL SWITCHES', value: 'ON' },
        BACKUP_GENERATOR_SWITCHES: { id: 'preflight_backup_generator_switches', title: 'BACKUP GENERATOR SWITCHES', value: 'ON' },
        APU_SELECTOR: { id: 'preflight_apu_selector', title: 'APU SELECTOR', value: 'START > ON' },
        NAV_LIGHTS: { id: 'preflight_nav_lights', title: 'NAV LIGHTS', value: 'ON' },
        EXTERIOR_LIGHTS: { id: 'preflight_exterior_lights', title: 'EXTERIOR LIGHTS', value: 'AS REQUIRED' },
        COCKPIT_LIGHTS: { id: 'preflight_cockpit_lights', title: 'COCKPIT LIGHTS', value: 'AS REQUIRED' },
        EMERG_EXIT_LIGHTS: { id: 'preflight_emerg_exit_lights', title: 'EMERG EXIT LIGHTS', value: 'ARMED, GRD CLOSED' },
        PACK_CONTROL_SWITCHES: { id: 'preflight_pack_control_switches', title: 'L + R PACK CONTROL SWITCHES', value: 'AUTO' },
        ADIRU: { id: 'preflight_adiru', title: 'ADIRU', value: 'ON' },
        FMC: { id: 'preflight_fmc', title: 'FMC', value: 'INIT POSITION' }
      }
    },
    COCKPIT_PREPARATION: {
      id: 'phase_cockpit_preparation',
      items: {
        WINDOW_HEAT: { id: 'cockpit_preparation_window_heat', title: 'WINDOW HEAT', value: 'ON' },
        PRIMARY_ENG_HYDR_PUMPS: { id: 'cockpit_preparation_primary_eng_hydr_pumps', title: 'PRIMARY L + R ENG HYDR PUMPS', value: 'ON' },
        PRIMARY_ELEC_HYDR_PUMPS: { id: 'cockpit_preparation_primary_elec_hydr_pumps', title: 'PRIMARY C1 + C2 ELEC HYDR PUMPS', value: 'OFF' },
        DEMAND_HYDR_PUMP_SELECTORS: { id: 'cockpit_preparation_demand_hydr_pump_selectors', title: 'L-C1-C2-R DEMAND HYDR PUMP SELECTORS', value: 'OFF' },
        NO_SMOKING_SIGNS: { id: 'cockpit_preparation_no_smoking_signs', title: 'NO SMOKING SIGNS', value: 'AUTO/ON' },
        SEAT_BELTS_SIGNS: { id: 'cockpit_preparation_seat_belts_signs', title: 'SEAT BELTS SIGNS', value: 'AUTO/ON' },
        EEC_MODE_SWITCHES: { id: 'cockpit_preparation_eec_mode_switches', title: 'EEC MODE SWITCHES', value: 'NORM' },
        ENGINE_START_SELECTORS: { id: 'cockpit_preparation_engine_start_selectors', title: 'ENGINE START SELECTORS', value: 'NORM' },
        AUTOSTART_SWITCH: { id: 'cockpit_preparation_autostart_switch', title: 'AUTOSTART SWITCH', value: 'ON' },
        LEFT_FWD_FUEL_PUMP: { id: 'cockpit_preparation_left_fwd_fuel_pump', title: 'LEFT FWD FUEL PUMP', value: 'ON (PRESS-LIGHT OFF)' },
        ANTI_ICE: { id: 'cockpit_preparation_anti_ice', title: 'ANTI-ICE', value: 'AS REQUIRED' },
        EQUIP_COOLING: { id: 'cockpit_preparation_equip_cooling', title: 'EQUIP COOLING', value: 'AUTO' },
        GASPER_SWITCH: { id: 'cockpit_preparation_gasper_switch', title: 'GASPER SWITCH', value: 'ON' },
        RECIRC_FANS: { id: 'cockpit_preparation_recirc_fans', title: 'RECIRC FANS', value: 'ON' },
        FLIGHT_DECK_TEMP_CONTROLS: { id: 'cockpit_preparation_flight_deck_temp_controls', title: 'FTL DECK TEMP CONTROLS', value: 'AS REQUIRED' },
        PACK_CONTROL_SWITCHES: { id: 'cockpit_preparation_pack_control_switches', title: 'L + R PACK CONTROL SWITCHES', value: 'AUTO' },
        TRIM_AIR_SWITCHES: { id: 'cockpit_preparation_trim_air_switches', title: 'L + R TRIM AIR SWITCHES', value: 'ON' },
        ISOLATION_VALVES: { id: 'cockpit_preparation_isolation_valves', title: 'L-C-R ISOLATION VALVES', value: 'AUTO' },
        BLEED_AIR: { id: 'cockpit_preparation_bleed_air', title: 'ENG + APU BLEED AIR', value: 'ON / AUTO' },
        PRESSURIZATION_PANEL: { id: 'cockpit_preparation_pressurization_panel', title: 'PRESSURIZATION PANEL', value: 'SET / AUTO' },
        FLIGHT_PLAN_CLEARANCE: { id: 'cockpit_preparation_flight_plan_clearance', title: 'FLIGHT-PLAN CLEARANCE', value: 'RECEIVED' },
        ATIS: { id: 'cockpit_preparation_atis', title: 'ATIS', value: 'RECEIVED' },
        FMC_PROGRAM: { id: 'cockpit_preparation_fmc_program', title: 'FMC', value: 'PROGRAMMED' },
        MCP: { id: 'cockpit_preparation_mcp', title: 'MCP (IAS - HDG - ALT)', value: 'SET' },
        FLIGHT_DIRECTOR: { id: 'cockpit_preparation_flight_director', title: 'F/D', value: 'ON' },
        AUTOTHROTTLE: { id: 'cockpit_preparation_autothrottle', title: 'A/T', value: 'CHECK ARMED' },
        LNAV: { id: 'cockpit_preparation_lnav', title: 'LNAV', value: 'AS REQUIRED' },
        VNAV: { id: 'cockpit_preparation_vnav', title: 'VNAV', value: 'AS REQUIRED' },
        FLIGHT_INSTRUMENTS: { id: 'cockpit_preparation_flight_instruments', title: 'FLIGHT INSTRUMENTS', value: 'SET, NO FLAGS' },
        AUTOBRAKE: { id: 'cockpit_preparation_autobrake', title: 'AUTOBRAKE', value: 'RTO' },
        COMM_AUDIO_PANEL: { id: 'cockpit_preparation_comm_audio_panel', title: 'COMM / AUDIO PANEL', value: 'SET' },
        TRANSPONDER_TCAS: { id: 'cockpit_preparation_transponder_tcas', title: 'TRANSPONDER / TCAS', value: 'SET / TEST' },
        AILERON_RUDDER_TRIM: { id: 'cockpit_preparation_aileron_rudder_trim', title: 'AILERON + RUDDER TRIM', value: 'SET 0 UNITS' },
        TAKEOFF_BRIEFING: { id: 'cockpit_preparation_takeoff_briefing', title: 'TAKEOFF BRIEFING', value: 'COMPLETE' }
      }
    },
    BEFORE_START: {
      id: 'phase_before_start',
      items: {
        PUSHBACK_STARTUP_CLEARANCE: { id: 'before_start_pushback_startup_clearance', title: 'PUSHBACK & STARTUP CLEARANCE', value: 'RECEIVED' },
        DOORS: { id: 'before_start_doors', title: 'DOORS', value: 'CLOSED (CHECK DOOR PAGE)' },
        GROUND_EQUIPMENT: { id: 'before_start_ground_equipment', title: 'GROUND EQUIPMENT', value: 'DISCONNECTED' },
        R_ELEC_DEMAND_HYDR_PUMP: { id: 'before_start_r_elec_demand_hydr_pump', title: 'R ELEC DEMAND HYDR PUMP', value: 'AUTO' },
        PRIMARY_ELEC_HYDR_PUMPS: { id: 'before_start_primary_elec_hydr_pumps', title: 'PRIMARY C1 + C2 ELEC HYDR PUMPS', value: 'ON' },
        L_ELEC_DEMAND_HYDR_PUMP: { id: 'before_start_l_elec_demand_hydr_pump', title: 'L ELEC DEMAND HYDR PUMP', value: 'AUTO' },
        AIR_DEMAND_HYDR_PUMPS: { id: 'before_start_air_demand_hydr_pumps', title: 'C1 + C2 AIR DEMAND HYDR PUMPS', value: 'AUTO' },
        FUEL_PUMPS: { id: 'before_start_fuel_pumps', title: 'L + R FUEL PUMPS', value: 'ALL ON' },
        CENTER_FUEL_PUMPS: { id: 'before_start_center_fuel_pumps', title: 'L + R CENTER FUEL PUMPS', value: 'AS REQUIRED' },
        PASSENGER_SIGNS: { id: 'before_start_passenger_signs', title: 'PASSENGER SIGNS', value: 'ON' },
        BEACON: { id: 'before_start_beacon', title: 'BEACON', value: 'ON' },
        RECALL: { id: 'before_start_recall', title: 'RECALL', value: 'PUSH' }
      }
    },
    ENGINE_START: {
      id: 'phase_engine_start',
      items: {
        ENGINE_AREA: { id: 'engine_start_engine_area', title: 'ENGINE AREA', value: 'CLEAR' },
        SEC_DISPLAY_UNIT: { id: 'engine_start_sec_display_unit', title: 'SEC DISPLAY UNIT', value: 'ENGINE' },
        ENGINE_START_ANNOUNCE: { id: 'engine_start_engine_start_announce', title: 'ENGINE START', value: 'ANNOUNCE' },
        ENGINE_1_START_SELECTOR: { id: 'engine_start_engine_1_start_selector', title: 'ENGINE 1 START SELECTOR', value: 'START' },
        ENGINE_1_FUEL_CONTROL_LEVER: { id: 'engine_start_engine_1_fuel_control_lever', title: 'ENGINE 1 FUEL CONTROL LEVER', value: 'RUN' },
        ENGINE_2_START_SELECTOR: { id: 'engine_start_engine_2_start_selector', title: 'ENGINE 2 START SELECTOR', value: 'START' },
        ENGINE_2_FUEL_CONTROL_LEVER: { id: 'engine_start_engine_2_fuel_control_lever', title: 'ENGINE 2 FUEL CONTROL LEVER', value: 'RUN' }
      }
    },
    BEFORE_TAXI: {
      id: 'phase_before_taxi',
      items: {
        GENERATORS: { id: 'before_taxi_generators', title: 'L + R GENERATORS', value: 'ON (LIGHTS OFF)' },
        APU_SELECTOR: { id: 'before_taxi_apu_selector', title: 'APU SELECTOR', value: 'OFF' },
        ENG_START_SELECTORS: { id: 'before_taxi_eng_start_selectors', title: 'ENG START SELECTORS', value: 'NORM' },
        PACK_CONTROL_SWITCHES: { id: 'before_taxi_pack_control_switches', title: 'L + R PACK CONTROL SWITCHES', value: 'AUTO (LIGHTS OFF)' },
        ISOLATION_VALVES: { id: 'before_taxi_isolation_valves', title: 'L-C-R ISOLATION VALVES', value: 'AUTO (LIGHTS OFF)' },
        ENG_BLEED_AIR: { id: 'before_taxi_eng_bleed_air', title: 'ENG BLEED AIR', value: 'ON (LIGHTS OFF)' },
        FLAPS: { id: 'before_taxi_flaps', title: 'FLAPS', value: 'SET ___ CONFIRM' },
        STABILIZER_TRIM: { id: 'before_taxi_stabilizer_trim', title: 'STABILIZER TRIM', value: 'SET ___ UNITS' },
        FLIGHT_CONTROLS: { id: 'before_taxi_flight_controls', title: 'FLIGHT CONTROLS', value: 'FREE AND CORRECT' },
        RECALL: { id: 'before_taxi_recall', title: 'RECALL', value: 'CHECK' },
        LOWER_DISPLAY_UNIT: { id: 'before_taxi_lower_display_unit', title: 'LOWER DISPLAY UNIT', value: 'OFF' },
        ANTI_ICE: { id: 'before_taxi_anti_ice', title: 'ANTI-ICE', value: 'AS REQUIRED' },
        TAXI_CLEARANCE: { id: 'before_taxi_taxi_clearance', title: 'TAXI CLEARANCE', value: 'RECEIVED' },
        TAXI_LIGHTS: { id: 'before_taxi_taxi_lights', title: 'TAXI LIGHTS', value: 'ON' },
        RUNWAY_TURNOFF_LIGHTS: { id: 'before_taxi_runway_turnoff_lights', title: 'RWY TURN-OFF LIGHTS', value: 'AS REQUIRED' }
      }
    },
    TAXI: {
      id: 'phase_taxi',
      items: {
        TAXI_SPEED: { id: 'taxi_taxi_speed', title: 'TAXI TO RUNWAY', value: 'MAX 20 KNOTS' },
        BRAKES_GYRO_TURN_COORD: { id: 'taxi_brakes_gyro_turn_coord', title: 'BRKS/GYRO/TURN COORDINATOR', value: 'CHECK DURING TAXI' }
      }
    },
    BEFORE_TAKEOFF: {
      id: 'phase_before_takeoff',
      items: {
        PARKING_BRAKE: { id: 'before_takeoff_parking_brake', title: 'PARKING BRAKE', value: 'SET' },
        CABIN_LIGHTS: { id: 'before_takeoff_cabin_lights', title: 'CABIN LIGHTS', value: 'AS REQUIRED' },
        FLIGHT_INSTRUMENTS: { id: 'before_takeoff_flight_instruments', title: 'FLIGHT INSTRUMENTS', value: 'CHECK' },
        ENGINE_INSTRUMENTS: { id: 'before_takeoff_engine_instruments', title: 'ENGINE INSTRUMENTS', value: 'CHECK' },
        TAKEOFF_DATA: { id: 'before_takeoff_takeoff_data', title: 'TAKEOFF DATA (V1, VR, V2)', value: 'CHECK' },
        NAV_EQUIPMENT: { id: 'before_takeoff_nav_equipment', title: 'NAV EQUIPMENT', value: 'CHECK' },
        TAKEOFF_CLEARANCE: { id: 'before_takeoff_takeoff_clearance', title: 'TAKEOFF CLEARANCE', value: 'RECEIVED' },
        LANDING_LIGHTS: { id: 'before_takeoff_landing_lights', title: 'LANDING LIGHTS', value: 'ON' },
        STROBE_LIGHT: { id: 'before_takeoff_strobe_light', title: 'STROBE LIGHT', value: 'ON' },
        TRANSPONDER: { id: 'before_takeoff_transponder', title: 'TRANSPONDER', value: 'TA/RA' },
        TFC: { id: 'before_takeoff_tfc', title: 'TFC', value: 'PUSH ON' },
        CLOCK: { id: 'before_takeoff_clock', title: 'CLOCK', value: 'START' }
      }
    },
    AFTER_TAKEOFF: {
      id: 'phase_after_takeoff',
      items: {
        POSITIVE_RATE: { id: 'after_takeoff_positive_rate', title: 'POSITIVE RATE OF CLIMB', value: 'GEAR UP' },
        AUTOBRAKE: { id: 'after_takeoff_autobrake', title: 'AUTO-BRAKE', value: 'OFF' },
        TAXI_LIGHT: { id: 'after_takeoff_taxi_light', title: 'TAXI LIGHT', value: 'OFF' },
        RUNWAY_TURNOFF_LIGHTS: { id: 'after_takeoff_runway_turnoff_lights', title: 'RWY TURN-OFF LIGHTS', value: 'OFF' },
        CABIN_LIGHTS: { id: 'after_takeoff_cabin_lights', title: 'CABIN LIGHTS', value: 'AS REQUIRED' }
      }
    },
    CLIMB_OUT: {
      id: 'phase_climb_out',
      items: {
        AUTOPILOT: { id: 'climb_out_autopilot', title: 'AUTOPILOT', value: 'ENGAGE WHEN SUITABLE' },
        ALTIMETER_STD: { id: 'climb_out_altimeter_std', title: 'ALTIMETER (PASSING TA)', value: 'SET STD (29.92/1013)' },
        SPEED_RESTRICTION: { id: 'climb_out_speed_restriction', title: 'BELOW 10,000 FT', value: 'MAX 250 KIAS' },
        ATC: { id: 'climb_out_atc', title: 'ATC', value: 'AS REQUIRED' },
        LANDING_LIGHTS: { id: 'climb_out_landing_lights', title: 'LANDING LIGHTS (PASSING 10,000 FT)', value: 'OFF' },
        FASTEN_SEAT_BELTS: { id: 'climb_out_fasten_seat_belts', title: 'FASTEN SEAT BELTS', value: 'OFF' }
      }
    },
    CRUISE_DESCENT_PREPARATION: {
      id: 'phase_cruise_descent_preparation',
      items: {
        ENGINE_INSTRUMENTS: { id: 'cruise_descent_engine_instruments', title: 'ENGINE & INSTRUMENTS', value: 'MONITOR' },
        FUEL_QUANTITY: { id: 'cruise_descent_fuel_quantity', title: 'FUEL QUANTITY', value: 'CHECK' },
        LIGHTS: { id: 'cruise_descent_lights', title: 'LIGHTS', value: 'AS REQUIRED' },
        ATIS_AIRPORT_INFO: { id: 'cruise_descent_atis_airport_info', title: 'ATIS / AIRPORT INFORMATION', value: 'CHECK' },
        ALTIMETER: { id: 'cruise_descent_altimeter', title: 'ALTIMETER', value: 'CHECK' },
        RADIOS: { id: 'cruise_descent_radios', title: 'RADIOS', value: 'SET' },
        MCP_ALTITUDE: { id: 'cruise_descent_mcp_altitude', title: 'MCP ALTITUDE', value: 'CHECK' },
        FMC_APPR_SPEED_REF: { id: 'cruise_descent_fmc_appr_speed_ref', title: 'FMC APPR SPEED REF', value: 'SET' },
        LOCALIZER_FREQ: { id: 'cruise_descent_localizer_freq', title: 'LOCALIZER FREQ', value: 'SET' },
        ANTI_ICE: { id: 'cruise_descent_anti_ice', title: 'ANTI-ICE', value: 'AS REQUIRED' },
        LANDING_ALT: { id: 'cruise_descent_landing_alt', title: 'LANDING ALT', value: 'CHECK' },
        RECALL: { id: 'cruise_descent_recall', title: 'RECALL', value: 'CHECK' },
        RADIO_ALT_BARO_MIN: { id: 'cruise_descent_radio_alt_baro_min', title: 'RADIO ALT / BARO MIN', value: 'SET, CHECK' },
        AUTOBRAKE: { id: 'cruise_descent_autobrake', title: 'AUTO BRAKE', value: 'AS REQUIRED' },
        APPROACH_BRIEFING: { id: 'cruise_descent_approach_briefing', title: 'APPROACH BRIEFING', value: 'COMPLETE' },
        ALTIMETER_LOCAL: { id: 'cruise_descent_altimeter_local', title: 'ALTIMETER (PASSING TA)', value: 'RESET TO LOCAL' },
        SPEED_BELOW_10K: { id: 'cruise_descent_speed_below_10k', title: 'BELOW 10,000 FT', value: '250 KIAS' },
        LANDING_LIGHTS: { id: 'cruise_descent_landing_lights', title: 'LANDING LIGHTS', value: 'ON' },
        PASSENGER_SIGNS: { id: 'cruise_descent_passenger_signs', title: 'PASSENGER SIGNS', value: 'ON' }
      }
    },
    APPROACH: {
      id: 'phase_approach',
      items: {
        ALTIMETER: { id: 'approach_altimeter', title: 'ALTIMETER', value: 'CHECK' },
        LOCALIZER_FREQ: { id: 'approach_localizer_freq', title: 'LOCALIZER FREQ', value: 'CHECK' },
        LOCALIZER_COURSE: { id: 'approach_localizer_course', title: 'LOCALIZER COURSE', value: 'CHECK' },
        APPROACH_MODE: { id: 'approach_mode', title: 'APPROACH', value: 'ARM' },
        GLIDESLOPE: { id: 'approach_glideslope', title: 'GLIDESLOPE ALIVE', value: 'GEAR DOWN' },
        FLAPS: { id: 'approach_flaps', title: 'FLAPS', value: 'AS REQUIRED' },
        SPEED_BRAKE: { id: 'approach_speed_brake', title: 'SPEED BRAKE', value: 'ARM' },
        LANDING_FLAPS: { id: 'approach_landing_flaps', title: 'LANDING FLAPS', value: 'SET' }
      }
    },
    LANDING: {
      id: 'phase_landing',
      items: {
        GO_AROUND_ALTITUDE: { id: 'landing_go_around_altitude', title: 'GO-AROUND ALTITUDE', value: 'SET' },
        RUNWAY_TURNOFF_LIGHTS: { id: 'landing_runway_turnoff_lights', title: 'RWY TURN-OFF LIGHTS', value: 'ON' },
        LANDING_GEAR: { id: 'landing_landing_gear', title: 'LANDING GEAR', value: 'CHECK DOWN' },
        AUTOPILOT: { id: 'landing_autopilot', title: 'AUTOPILOT', value: 'AS REQUIRED' },
        AUTOTHROTTLE: { id: 'landing_autothrottle', title: 'AUTO-THRUST', value: 'AS REQUIRED' },
        THRUST_REVERSE: { id: 'landing_thrust_reverse', title: 'THRUST REVERSE (AFTER TOUCHDOWN)', value: 'ENGAGE' },
        AUTOPILOT_OFF: { id: 'landing_autopilot_off', title: 'AUTOPILOT (AFTER TOUCHDOWN)', value: 'OFF' },
        AUTOTHROTTLE_OFF: { id: 'landing_autothrottle_off', title: 'AUTOTHRUST (AFTER TOUCHDOWN)', value: 'OFF' }
      }
    },
    AFTER_LANDING: {
      id: 'phase_after_landing',
      items: {
        TRANSPONDER: { id: 'after_landing_transponder', title: 'TRANSPONDER', value: 'STANDBY' },
        FLAPS: { id: 'after_landing_flaps', title: 'FLAPS', value: 'RETRACT' },
        SPEED_BRAKES: { id: 'after_landing_speed_brakes', title: 'SPEED BRAKES', value: 'DOWN' },
        LANDING_LIGHTS: { id: 'after_landing_landing_lights', title: 'LANDING LIGHTS', value: 'OFF' },
        STROBE_LIGHTS: { id: 'after_landing_strobe_lights', title: 'STROBE LIGHTS', value: 'OFF' },
        TAXI_LIGHTS: { id: 'after_landing_taxi_lights', title: 'TAXI LIGHTS', value: 'ON' },
        CABIN_LIGHTS: { id: 'after_landing_cabin_lights', title: 'CABIN LIGHTS', value: 'AS REQUIRED' },
        ANTI_ICE: { id: 'after_landing_anti_ice', title: 'ANTI ICE', value: 'AUTO / OFF' },
        APU_SELECTOR: { id: 'after_landing_apu_selector', title: 'APU SELECTOR', value: 'ON' },
        AUTOBRAKE: { id: 'after_landing_autobrake', title: 'AUTO-BRAKE', value: 'OFF' },
        RUNWAY_TURNOFF_LIGHTS: { id: 'after_landing_runway_turnoff_lights', title: 'RWY TURN-OFF LIGHTS', value: 'OFF' },
        APU_GEN: { id: 'after_landing_apu_gen', title: 'APU GEN', value: 'START / CHECK VOLTS' },
        TAXI_LIGHTS_GATE: { id: 'after_landing_taxi_lights_gate', title: 'TAXI LIGHTS (TURNING INTO GATE)', value: 'OFF' }
      }
    },
    PARKING_SHUTDOWN: {
      id: 'phase_parking_shutdown',
      items: {
        PARKING_BRAKES: { id: 'parking_shutdown_parking_brakes', title: 'PARKING BRAKES', value: 'SET' },
        ENGINE_FUEL_CONTROL_LEVERS: { id: 'parking_shutdown_engine_fuel_control_levers', title: 'ENGINE FUEL CONTROL LEVERS', value: 'CUTOFF' },
        GROUND_CONTACT: { id: 'parking_shutdown_ground_contact', title: 'GROUND CONTACT', value: 'ESTABLISH' },
        GROUND_OPERATIONS: { id: 'parking_shutdown_ground_operations', title: 'GROUND OPERATIONS', value: 'AS REQUIRED (FMC)' },
        PASSENGER_SIGNS: { id: 'parking_shutdown_passenger_signs', title: 'PASSENGER SIGNS', value: 'OFF' },
        BEACON_LIGHT: { id: 'parking_shutdown_beacon_light', title: 'BEACON LIGHT', value: 'OFF' },
        AIR_DEMAND_HYDR_PUMPS: { id: 'parking_shutdown_air_demand_hydr_pumps', title: 'C1 + C2 AIR DEMAND HYDR PUMPS', value: 'OFF' },
        L_ELEC_DEMAND_HYDR_PUMP: { id: 'parking_shutdown_l_elec_demand_hydr_pump', title: 'L ELEC DEMAND HYDR PUMP', value: 'OFF' },
        PRIMARY_ELEC_HYDR_PUMPS: { id: 'parking_shutdown_primary_elec_hydr_pumps', title: 'PRIMARY C1 + C2 ELEC HYDR PUMPS', value: 'OFF' },
        R_ELEC_DEMAND_HYDR_PUMP: { id: 'parking_shutdown_r_elec_demand_hydr_pump', title: 'R ELEC DEMAND HYDR PUMP', value: 'OFF' },
        FUEL_PUMPS: { id: 'parking_shutdown_fuel_pumps', title: 'FUEL PUMPS', value: 'ALL OFF' },
        FLIGHT_DIRECTOR: { id: 'parking_shutdown_flight_director', title: 'FLIGHT DIRECTOR', value: 'OFF' },
        APU_SELECTOR: { id: 'parking_shutdown_apu_selector', title: 'APU SELECTOR', value: 'AS REQUIRED' },
        EXTERIOR_LIGHTS: { id: 'parking_shutdown_exterior_lights', title: 'EXTERIOR LIGHTS', value: 'AS REQUIRED' },
        DOORS: { id: 'parking_shutdown_doors', title: 'DOORS', value: 'OPEN' }
      }
    },
    SECURING_AIRCRAFT: {
      id: 'phase_securing_aircraft',
      items: {
        ADIRU: { id: 'securing_aircraft_adiru', title: 'ADIRU', value: 'OFF' },
        EMERG_EXIT_LIGHTS: { id: 'securing_aircraft_emerg_exit_lights', title: 'EMERG EXIT LIGHTS', value: 'OFF' },
        PACK_CONTROLS: { id: 'securing_aircraft_pack_controls', title: 'L + R PACK CONTROLS', value: 'OFF' },
        APU_SELECTOR: { id: 'securing_aircraft_apu_selector', title: 'APU SELECTOR', value: 'OFF' },
        BATTERY: { id: 'securing_aircraft_battery', title: 'BATTERY', value: 'OFF' }
      }
    }
  }
};

export default checklist;
