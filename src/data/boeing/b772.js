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
        THRUST_ASYM_COMP_SWITCH: { id: 'preflight_thrust_asym_comp_switch', title: 'THRUST ASYM COMP SWITCH', value: 'AUTO' },
        PRIMARY_FLIGHT_COMPUTER_DISCONNECT_SWITCH: { id: 'preflight_primary_flight_computer_disconnect_switch', title: 'PRIMARY FLIGHT COMPUTER DISCONNECT SWITCH', value: 'GUARD CLOSED' },
        BATTERY_SWITCH: { id: 'preflight_battery_switch', title: 'BATTERY SWITCH', value: 'ON' },
        IFE_PASS_SEAT_SWITCH: { id: 'preflight_ife_pass_seat_switch', title: 'IFE/PASS SEAT SWITCH', value: 'ON' },
        CABIN_UTILITY_SWITCH: { id: 'preflight_cabin_utility_switch', title: 'CABIN / UTILITY SWITCH', value: 'ON' },
        APU_GEN_SWITCH: { id: 'preflight_apu_gen_switch', title: 'APU GEN SWITCH', value: 'ON' },
        BUS_TIE_SWITCH: { id: 'preflight_bus_tie_switch', title: 'BUS TIE SWITCH', value: 'AUTO' },
        GEN_CTRL_SWITCHES: { id: 'preflight_gen_ctrl_switches', title: 'GEN CTRL SWITCHES', value: 'ON' },
        BACKUP_GEN_SWITCHES: { id: 'preflight_backup_gen_switches', title: 'BACKUP GEN SWITCHES', value: 'ON' },
        CAMERA_LTS_SWITCH: { id: 'preflight_camera_lts_switch', title: 'CAMERA LTS SWITCH', value: 'AS NEEDED' },
        L_WIPER: { id: 'preflight_l_wiper', title: 'L WIPER', value: 'OFF' },
        GND_PROX_RUNWAY_OVRD_SWITCH: { id: 'preflight_gnd_prox_runway_ovrd_switch', title: 'GND PROX RUNWAY OVRD SWITCH', value: 'OFF' },
        EMER_LIGHTS_SWITCH: { id: 'preflight_emer_lights_switch', title: 'EMER LIGHTS SWITCH', value: 'GUARD CLOSED' },
        SERV_INTPH_SWITCH: { id: 'preflight_serv_intph_switch', title: 'SERV INTPH SWITCH', value: 'OFF' },
        WINDOW_HEAT_SWITCHES: { id: 'preflight_window_heat_switches', title: 'WINDOW HEAT SWITCHES', value: 'ON' },
        HYDRAULIC_PANEL: { id: 'preflight_hydraulic_panel', title: 'HYDRAULIC PANEL', value: 'SET' },
        PASS_SIGNS_PANEL: { id: 'preflight_pass_signs_panel', title: 'PASS SIGNS PANEL', value: 'SET' },
        LIGHT_PANEL: { id: 'preflight_light_panel', title: 'LIGHT PANEL', value: 'SET' },
        APU_FIRE_PANEL: { id: 'preflight_apu_fire_panel', title: 'APU FIRE PANEL', value: 'SET' },
        CARGO_FIRE_PANEL: { id: 'preflight_cargo_fire_panel', title: 'CARGO FIRE PANEL', value: 'SET' },
        ENGINE_PANEL: { id: 'preflight_engine_panel', title: 'ENGINE PANEL', value: 'SET' },
        FUEL_JETTISON_PANEL: { id: 'preflight_fuel_jettison_panel', title: 'FUEL JETTISON PANEL', value: 'SET' },
        FUEL_PANEL: { id: 'preflight_fuel_panel', title: 'FUEL PANEL', value: 'SET' },
        ANTI_ICE_PANEL: { id: 'preflight_anti_ice_panel', title: 'ANTI-ICE PANEL', value: 'SET' },
        LIGHTNING_PANEL: { id: 'preflight_lightning_panel', title: 'LIGHTNING PANEL', value: 'SET' },
        AIR_CONDITIONING_PANEL: { id: 'preflight_air_conditioning_panel', title: 'AIR CONDITIONING PANEL', value: 'SET' },
        BLEED_AIR_PANEL: { id: 'preflight_bleed_air_panel', title: 'BLEED AIR PANEL', value: 'SET' },
        PRESSURIZATION_PANEL: { id: 'preflight_pressurization_panel', title: 'PRESSURIZATION PANEL', value: 'SET' },
        R_WIPER: { id: 'preflight_r_wiper', title: 'R WIPER', value: 'OFF' },
        FLIGHT_DIRECTOR_SWITCH: { id: 'preflight_flight_director_switch', title: 'F/D SWITCH', value: 'ON' },
        EFIS_CONTROL_PANEL: { id: 'preflight_efis_control_panel', title: 'EFIS CONTROL PANEL', value: 'SET' },
        OXYGEN: { id: 'preflight_oxygen', title: 'OXYGEN', value: 'TEST AND SET' },
        INSTRUMENT_SOURCE_SELECT_PANEL: { id: 'preflight_instrument_source_select_panel', title: 'INSTRUMENT SOURCE SELECT PANEL', value: 'SET' },
        INBOARD_DSPL_SELECTOR: { id: 'preflight_inboard_dspl_selector', title: 'INBOARD DSPL SELECTOR', value: 'MFD' },
        FMC_SELECTOR: { id: 'preflight_fmc_selector', title: 'FMC SELECTOR', value: 'AUTO' },
        FLIGHT_INSTRUMENTS: { id: 'preflight_flight_instruments', title: 'FLIGHT INSTRUMENTS', value: 'CHECK' },
        LANDING_GEAR_PANEL: { id: 'preflight_landing_gear_panel', title: 'LANDING GEAR PANEL', value: 'SET' },
        EICAS_DISPLAY: { id: 'preflight_eicas_display', title: 'EICAS DISPLAY', value: 'CHECK' },
        MFD: { id: 'preflight_mfd', title: 'MFD', value: 'CHECK' },
        LEFT_RADIO_TUNING_PANEL: { id: 'preflight_left_radio_tuning_panel', title: 'LEFT RADIO TUNING PANEL', value: 'SET' },
        WX_RDR_PANEL: { id: 'preflight_wx_rdr_panel', title: 'WX RDR PANEL', value: 'SET' },
        CENTER_RADIO_TUNING_PANEL: { id: 'preflight_center_radio_tuning_panel', title: 'CENTER RADIO TUNING PANEL', value: 'SET' },
        FLT_DECK_DOOR_PANEL: { id: 'preflight_flt_deck_door_panel', title: 'FLT DECK DOOR PANEL', value: 'AUTO' },
        ENGINE_FIRE_PANEL: { id: 'preflight_engine_fire_panel', title: 'ENGINE FIRE PANEL', value: 'SET' },
        CENTER_CDU: { id: 'preflight_center_cdu', title: 'CENTER CDU', value: 'SET' },
        ATC_TCAS_PANEL: { id: 'preflight_atc_tcas_panel', title: 'ATC / TCAS PANEL', value: 'AS NEEDED' },
        EVACUATION_COMMAND_SWITCH: { id: 'preflight_evacuation_command_switch', title: 'EVACUATION COMMAND SWITCH', value: 'GUARD CLOSED' },
        FLOOR_LIGHTS_SWITCH: { id: 'preflight_floor_lights_switch', title: 'FLOOR LIGHTS SWITCH', value: 'AS NEEDED' },
        SEAT: { id: 'preflight_seat', title: 'SEAT', value: 'ADJUST' },
        RUDDER_PEDALS: { id: 'preflight_rudder_pedals', title: 'RUDDER PEDALS', value: 'ADJUST' },
        AT_ARM_SWITCHES: { id: 'preflight_at_arm_switches', title: 'A/T ARM SWITCHES', value: 'ARM' },
        AP_DISENGAGE_BAR: { id: 'preflight_ap_disengage_bar', title: 'A/P DISENGAGE BAR', value: 'UP' },
        HDG_TRK_REFERENCE_SWITCH: { id: 'preflight_hdg_trk_reference_switch', title: 'HDG/TRK REFERENCE SWITCH', value: 'AS NEEDED' },
        BANK_LIMIT_SELECTOR: { id: 'preflight_bank_limit_selector', title: 'BANK LIMIT SELECTOR', value: 'AUTO' },
        VS_FPA_REFERENCE_SWITCH: { id: 'preflight_vs_fpa_reference_switch', title: 'VS/FPA REFERENCE SWITCH', value: 'AS NEEDED' },
        ALTITUDE_INCREMENT_SELECTOR: { id: 'preflight_altitude_increment_selector', title: 'ALTITUDE INCREMENT SELECTOR', value: 'AS NEEDED' },
        HDG_REF_SWITCH: { id: 'preflight_hdg_ref_switch', title: 'HDG REF SWITCH', value: 'NORM' },
        SPEEDBRAKE_LEVER: { id: 'preflight_speedbrake_lever', title: 'SPEEDBRAKE LEVER', value: 'DOWN' },
        REVERSE_THRUST_LEVER: { id: 'preflight_reverse_thrust_lever', title: 'REVERSE THRUST LEVER', value: 'DOWN' },
        FORWARD_THRUST_LEVER: { id: 'preflight_forward_thrust_lever', title: 'FORWARD THRUST LEVER', value: 'CLOSED' },
        FLAP_LEVER: { id: 'preflight_flap_lever', title: 'FLAP LEVER', value: 'SET' },
        PARKING_BRAKE: { id: 'preflight_parking_brake', title: 'PARKING BRAKE', value: 'SET' },
        STAB_CUTOUT_SWITCHES: { id: 'preflight_stab_cutout_switches', title: 'STAB CUTOUT SWITCHES', value: 'GUARD CLOSED' },
        FUEL_CONTROL_SWITCHES: { id: 'preflight_fuel_control_switches', title: 'FUEL CONTROL SWITCHES', value: 'CUTOFF' },
        ALTN_FLAPS_PANEL: { id: 'preflight_altn_flaps_panel', title: 'ALTN FLAPS PANEL', value: 'SET' }
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
