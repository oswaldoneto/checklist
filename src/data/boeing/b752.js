const checklist = {
  FLIGHT_PHASES: {
    COCKPIT_SAFETY_INSPECTION: {
      id: 'phase_cockpit_safety_inspection',
      items: {
        AIRCRAFT_GROUND_ACTIVITY: { id: 'cockpit_safety_inspection_aircraft_ground_activity', title: 'AIRCRAFT / GROUND ACTIVITY', value: 'ASSESS' },
        LANDING_GEAR_LEVER: { id: 'cockpit_safety_inspection_landing_gear_lever', title: 'LANDING GEAR LEVER', value: 'DOWN' },
        FLAP_LEVER: { id: 'cockpit_safety_inspection_flap_lever', title: 'FLAP LEVER', value: 'UP OR IN AGREEMENT WITH EXTERIOR / INDICATOR' },
        ALTN_FLAPS_SELECTOR: { id: 'cockpit_safety_inspection_altn_flaps_selector', title: 'ALTN FLAPS SELECTOR', value: 'NORM' },
        ALTN_FLAPS_LE_TE: { id: 'cockpit_safety_inspection_altn_flaps_le_te', title: 'ALTN FLAPS LE / TE', value: 'OFF' },
        ELECTRIC_HYDRAULIC_SWITCHES: { id: 'cockpit_safety_inspection_electric_hydraulic_switches', title: 'ELECTRIC HYDRAULIC SWITCHES', value: 'OFF' },
        THRUST_LEVERS: { id: 'cockpit_safety_inspection_thrust_levers', title: 'THRUST LEVERS', value: 'IDLE' },
        REVERSE_THRUST_LEVERS: { id: 'cockpit_safety_inspection_reverse_thrust_levers', title: 'REVERSE THRUST LEVERS', value: 'STOWED' },
        FUEL_CONTROL_SWITCHES: { id: 'cockpit_safety_inspection_fuel_control_switches', title: 'FUEL CONTROL SWITCHES', value: 'CUTOFF' },
        ANTI_COLLISION_LIGHT: { id: 'cockpit_safety_inspection_anti_collision_light', title: 'ANTI-COLLISION LIGHT', value: 'OFF' }
      }
    },
    ESTABLISHING_AIRCRAFT_POWER: {
      id: 'phase_establishing_aircraft_power',
      items: {
        BATTERY_SWITCH: { id: 'establishing_aircraft_power_battery_switch', title: 'BATTERY SWITCH', value: 'ON' },
        STANDBY_POWER_SELECTOR: { id: 'establishing_aircraft_power_standby_power_selector', title: 'STANDBY POWER SELECTOR', value: 'AUTO' },
        BUS_TIE_SWITCHES: { id: 'establishing_aircraft_power_bus_tie_switches', title: 'BUS TIE SWITCHES', value: 'AUTO' },
        GENERATOR_CONTROL_SWITCHES: { id: 'establishing_aircraft_power_generator_control_switches', title: 'GENERATOR CONTROL SWITCHES', value: 'ON' },
        EFB_GROUND_POWER: { id: 'establishing_aircraft_power_efb_ground_power', title: 'EFB GROUND POWER', value: 'CONNECT' },
        EXT_PWR_AVAIL_LIGHT: { id: 'establishing_aircraft_power_ext_pwr_avail_light', title: 'EXT PWR AVAIL LIGHT', value: 'ILLUMINATED (WHITE)' },
        EXT_PWR_SWITCH: { id: 'establishing_aircraft_power_ext_pwr_switch', title: 'EXT PWR SWITCH', value: 'PRESS' },
        APU_SELECTOR: { id: 'establishing_aircraft_power_apu_selector', title: 'APU SELECTOR', value: 'START, THEN ON' },
        APU_AC_POWER: { id: 'establishing_aircraft_power_apu_ac_power', title: 'APU / AC POWER', value: 'VERIFY' },
        APU_BEFORE_TRANSFER: { id: 'establishing_aircraft_power_apu_before_transfer', title: 'APU BEFORE TRANSFER', value: 'VERIFY RUNNING' },
        EXT_PWR_SWITCH_DESELECT: { id: 'establishing_aircraft_power_ext_pwr_switch_deselect', title: 'EXT PWR SWITCH', value: 'PRESS TO DESELECT' }
      }
    },
    COCKPIT_PREFLIGHT_SETUP: {
      id: 'phase_cockpit_preflight_setup',
      items: {
        COCKPIT_SAFETY_INSPECTION: { id: 'cockpit_preflight_setup_cockpit_safety_inspection', title: 'COCKPIT SAFETY INSPECTION', value: 'COMPLETE' },
        AIRCRAFT_POWER: { id: 'cockpit_preflight_setup_aircraft_power', title: 'AIRCRAFT POWER', value: 'ESTABLISHED' },
        IRS_SELECTORS: { id: 'cockpit_preflight_setup_irs_selectors', title: 'IRS SELECTORS', value: 'OFF, THEN NAV' },
        HYDRAULIC_QUANTITIES: { id: 'cockpit_preflight_setup_hydraulic_quantities', title: 'HYDRAULIC QUANTITIES', value: 'CHECK' },
        CREW_OXYGEN_PRESSURE: { id: 'cockpit_preflight_setup_crew_oxygen_pressure', title: 'CREW OXYGEN PRESSURE', value: 'CHECK' },
        BRAKE_TEMPERATURES: { id: 'cockpit_preflight_setup_brake_temperatures', title: 'BRAKE TEMPERATURES', value: 'CHECK' },
        ENGINE_OIL_QUANTITIES: { id: 'cockpit_preflight_setup_engine_oil_quantities', title: 'ENGINE OIL QUANTITIES', value: 'CHECK' },
        P61_CONTROLS: { id: 'cockpit_preflight_setup_p61_controls', title: 'P61 CONTROLS', value: 'CHECK' },
        CIRCUIT_BREAKERS_EQUIPMENT: { id: 'cockpit_preflight_setup_circuit_breakers_equipment', title: 'CIRCUIT BREAKERS / EQUIPMENT', value: 'INSPECT' },
        SQUIB_TEST: { id: 'cockpit_preflight_setup_squib_test', title: 'SQUIB TEST', value: 'HOLD / CHECK' },
        EGPWS_GND_PROX_TEST: { id: 'cockpit_preflight_setup_egpws_gnd_prox_test', title: 'EGPWS / GND PROX TEST', value: 'HOLD TO START / MONITOR' },
        LEFT_RIGHT_STALL_WARNING_TESTS: { id: 'cockpit_preflight_setup_left_right_stall_warning_tests', title: 'LEFT / RIGHT STALL-WARNING TESTS', value: 'HOLD / CHECK' },
        CONFIG_T_O_TEST: { id: 'cockpit_preflight_setup_config_t_o_test', title: 'CONFIG T/O TEST', value: 'HOLD / CHECK' },
        CONFIG_LDG_TEST: { id: 'cockpit_preflight_setup_config_ldg_test', title: 'CONFIG LDG TEST', value: 'HOLD / CHECK' },
        SEAT_RUDDER_PEDALS: { id: 'cockpit_preflight_setup_seat_rudder_pedals', title: 'SEAT / RUDDER PEDALS', value: 'ADJUST' },
        PARKING_BRAKE: { id: 'cockpit_preflight_setup_parking_brake', title: 'PARKING BRAKE', value: 'SET' },
        IRS_ALIGNMENT: { id: 'cockpit_preflight_setup_irs_alignment', title: 'IRS ALIGNMENT', value: 'VERIFY IN PROGRESS' },
        EFB_ACARS: { id: 'cockpit_preflight_setup_efb_acars', title: 'EFB / ACARS', value: 'INITIALIZE' }
      }
    },
    OVERHEAD_PANEL: {
      id: 'phase_overhead_panel',
      items: {
        IRS_SELECTORS: { id: 'overhead_panel_irs_selectors', title: 'IRS SELECTORS', value: 'VERIFY NAV' },
        EEC_SWITCHES_RR_ONLY: { id: 'overhead_panel_eec_switches_rr_only', title: 'EEC SWITCHES (RR ONLY)', value: 'ON, GUARDED' },
        YAW_DAMPER_SWITCHES: { id: 'overhead_panel_yaw_damper_switches', title: 'YAW DAMPER SWITCHES', value: 'ON' },
        ENGINE_HYDRAULIC_PUMPS: { id: 'overhead_panel_engine_hydraulic_pumps', title: 'ENGINE HYDRAULIC PUMPS', value: 'ON' },
        HYDRAULIC_PANEL_INDICATIONS: { id: 'overhead_panel_hydraulic_panel_indications', title: 'HYDRAULIC PANEL INDICATIONS', value: 'CHECK' },
        BATTERY_STANDBY_POWER: { id: 'overhead_panel_battery_standby_power', title: 'BATTERY / STANDBY POWER', value: 'TEST' },
        ELECTRICAL_PANEL: { id: 'overhead_panel_electrical_panel', title: 'ELECTRICAL PANEL', value: 'CHECK' },
        CVR: { id: 'overhead_panel_cvr', title: 'CVR', value: 'TEST' },
        OVERHEAD_LIGHTING: { id: 'overhead_panel_overhead_lighting', title: 'OVERHEAD LIGHTING', value: 'AS REQUIRED' },
        EMERGENCY_LIGHTS: { id: 'overhead_panel_emergency_lights', title: 'EMERGENCY LIGHTS', value: 'ARMED' },
        PASSENGER_OXYGEN_BUTTON: { id: 'overhead_panel_passenger_oxygen_button', title: 'PASSENGER OXYGEN BUTTON', value: 'GUARDED AND DARK' },
        RAT_BUTTON: { id: 'overhead_panel_rat_button', title: 'RAT BUTTON', value: 'GUARDED AND DARK' },
        ENGINE_LIMITERS_RR_ONLY: { id: 'overhead_panel_engine_limiters_rr_only', title: 'ENGINE LIMITERS (RR ONLY)', value: 'ON' },
        IGNITION_SELECTOR: { id: 'overhead_panel_ignition_selector', title: 'IGNITION SELECTOR', value: '1 OR 2' },
        ENGINE_START_SELECTORS: { id: 'overhead_panel_engine_start_selectors', title: 'ENGINE START SELECTORS', value: 'AUTO' },
        FUEL_CROSSFEED_SWITCHES: { id: 'overhead_panel_fuel_crossfeed_switches', title: 'FUEL CROSSFEED SWITCHES', value: 'OFF' },
        FUEL_PUMP_SWITCHES: { id: 'overhead_panel_fuel_pump_switches', title: 'FUEL PUMP SWITCHES', value: 'OFF' },
        FUEL_PANEL_INDICATIONS: { id: 'overhead_panel_fuel_panel_indications', title: 'FUEL PANEL INDICATIONS', value: 'CHECK' },
        WING_ENGINE_ANTI_ICE: { id: 'overhead_panel_wing_engine_anti_ice', title: 'WING / ENGINE ANTI-ICE', value: 'OFF' },
        WIPERS: { id: 'overhead_panel_wipers', title: 'WIPERS', value: 'OFF' },
        POSITION_LIGHT: { id: 'overhead_panel_position_light', title: 'POSITION LIGHT', value: 'ON' },
        ANTI_COLLISION_WING_LIGHTS: { id: 'overhead_panel_anti_collision_wing_lights', title: 'ANTI-COLLISION / WING LIGHTS', value: 'OFF' },
        LANDING_LIGHTS: { id: 'overhead_panel_landing_lights', title: 'LANDING LIGHTS', value: 'OFF' },
        LOGO_LIGHT: { id: 'overhead_panel_logo_light', title: 'LOGO LIGHT', value: 'AS REQUIRED' },
        WINDOW_HEAT: { id: 'overhead_panel_window_heat', title: 'WINDOW HEAT', value: 'ON' },
        PASSENGER_SIGNS: { id: 'overhead_panel_passenger_signs', title: 'PASSENGER SIGNS', value: 'SET AS REQUIRED' },
        CABIN_ALTITUDE_CONTROLS: { id: 'overhead_panel_cabin_altitude_controls', title: 'CABIN ALTITUDE CONTROLS', value: 'SET' },
        ALTERNATE_EQUIPMENT_COOLING: { id: 'overhead_panel_alternate_equipment_cooling', title: 'ALTERNATE EQUIPMENT COOLING', value: 'OFF' },
        TEMPERATURE_CONTROLS: { id: 'overhead_panel_temperature_controls', title: 'TEMPERATURE CONTROLS', value: 'SET IN AUTO RANGE' },
        TRIM_AIR_RECIRC_FANS: { id: 'overhead_panel_trim_air_recirc_fans', title: 'TRIM AIR / RECIRC FANS', value: 'ON' },
        PACK_SELECTORS: { id: 'overhead_panel_pack_selectors', title: 'PACK SELECTORS', value: 'AS REQUIRED' },
        ISOLATION_SWITCH: { id: 'overhead_panel_isolation_switch', title: 'ISOLATION SWITCH', value: 'OPEN' },
        ENGINE_BLEED_SWITCHES: { id: 'overhead_panel_engine_bleed_switches', title: 'ENGINE BLEED SWITCHES', value: 'ON' },
        APU_BLEED_SWITCH: { id: 'overhead_panel_apu_bleed_switch', title: 'APU BLEED SWITCH', value: 'ON' },
        HIGH_ALTITUDE_LANDING_WHERE_INSTALLED: { id: 'overhead_panel_high_altitude_landing_where_installed', title: 'HIGH ALTITUDE LANDING (WHERE INSTALLED)', value: 'AS REQUIRED' }
      }
    },
    MCP_OXYGEN_AND_INSTRUMENT_SOURCES: {
      id: 'phase_mcp_oxygen_and_instrument_sources',
      items: {
        GLARESHIELD_LIGHTING: { id: 'mcp_oxygen_and_instrument_sources_glareshield_lighting', title: 'GLARESHIELD LIGHTING', value: 'AS REQUIRED' },
        VOR_DME_SELECTION: { id: 'mcp_oxygen_and_instrument_sources_vor_dme_selection', title: 'VOR / DME SELECTION', value: 'AS REQUIRED' },
        FLIGHT_DIRECTOR_SWITCHES: { id: 'mcp_oxygen_and_instrument_sources_flight_director_switches', title: 'FLIGHT DIRECTOR SWITCHES', value: 'ON' },
        AUTOTHROTTLE_ARM_SWITCH: { id: 'mcp_oxygen_and_instrument_sources_autothrottle_arm_switch', title: 'AUTOTHROTTLE ARM SWITCH', value: 'ARM' },
        BANK_LIMIT_SELECTOR: { id: 'mcp_oxygen_and_instrument_sources_bank_limit_selector', title: 'BANK LIMIT SELECTOR', value: 'AUTO' },
        CREW_OXYGEN_EQUIPMENT: { id: 'mcp_oxygen_and_instrument_sources_crew_oxygen_equipment', title: 'CREW OXYGEN EQUIPMENT', value: 'TEST' },
        FOOT_SHOULDER_HEAT: { id: 'mcp_oxygen_and_instrument_sources_foot_shoulder_heat', title: 'FOOT / SHOULDER HEAT', value: 'AS REQUIRED' },
        INSTRUMENT_SOURCES: { id: 'mcp_oxygen_and_instrument_sources_instrument_sources', title: 'INSTRUMENT SOURCES', value: 'NORMAL' }
      }
    },
    MAIN_PANEL_AND_EICAS: {
      id: 'phase_main_panel_and_eicas',
      items: {
        FLIGHT_INSTRUMENTS: { id: 'main_panel_and_eicas_flight_instruments', title: 'FLIGHT INSTRUMENTS', value: 'CHECK / SET' },
        INITIAL_FMA_AFDS: { id: 'main_panel_and_eicas_initial_fma_afds', title: 'INITIAL FMA / AFDS', value: 'CHECK' },
        AUTOLAND_STATUS_ANNUNCIATORS: { id: 'main_panel_and_eicas_autoland_status_annunciators', title: 'AUTOLAND STATUS ANNUNCIATORS', value: 'CHECKED' },
        STANDBY_ENGINE_INDICATOR: { id: 'main_panel_and_eicas_standby_engine_indicator', title: 'STANDBY ENGINE INDICATOR', value: 'AUTO' },
        AUTOBRAKE_SELECTOR: { id: 'main_panel_and_eicas_autobrake_selector', title: 'AUTOBRAKE SELECTOR', value: 'RTO' },
        HEADING_REFERENCE: { id: 'main_panel_and_eicas_heading_reference', title: 'HEADING REFERENCE', value: 'NORM' },
        THRUST_REFERENCE: { id: 'main_panel_and_eicas_thrust_reference', title: 'THRUST REFERENCE', value: 'VERIFY GREEN "TO"' },
        GEAR_ALTERNATE_CONTROLS: { id: 'main_panel_and_eicas_gear_alternate_controls', title: 'GEAR / ALTERNATE CONTROLS', value: 'CHECK' },
        ALTN_STAB_TRIM_SWITCHES: { id: 'main_panel_and_eicas_altn_stab_trim_switches', title: 'ALTN STAB TRIM SWITCHES', value: 'NEUTRAL' },
        STAB_TRIM_CUTOUT_SWITCHES: { id: 'main_panel_and_eicas_stab_trim_cutout_switches', title: 'STAB TRIM CUTOUT SWITCHES', value: 'GUARDED CLOSED' },
        GROUND_PROXIMITY_OVERRIDES: { id: 'main_panel_and_eicas_ground_proximity_overrides', title: 'GROUND PROXIMITY OVERRIDES', value: 'OFF' },
        EICAS_DISPLAYS: { id: 'main_panel_and_eicas_eicas_displays', title: 'EICAS DISPLAYS', value: 'CHECK' },
        EICAS_CONTROL_PANEL: { id: 'main_panel_and_eicas_eicas_control_panel', title: 'EICAS CONTROL PANEL', value: 'SET' },
        EFIS_CONTROLS: { id: 'main_panel_and_eicas_efis_controls', title: 'EFIS CONTROLS', value: 'SET AS REQUIRED' }
      }
    },
    THRUST_QUADRANT_AND_AISLE_STAND: {
      id: 'phase_thrust_quadrant_and_aisle_stand',
      items: {
        THRUST_REVERSE_LEVERS: { id: 'thrust_quadrant_and_aisle_stand_thrust_reverse_levers', title: 'THRUST / REVERSE LEVERS', value: 'IDLE / STOWED' },
        FLAP_LEVER: { id: 'thrust_quadrant_and_aisle_stand_flap_lever', title: 'FLAP LEVER', value: 'UP OR IN AGREEMENT WITH EXTERIOR / INDICATOR' },
        PARKING_BRAKE: { id: 'thrust_quadrant_and_aisle_stand_parking_brake', title: 'PARKING BRAKE', value: 'VERIFY SET' },
        FUEL_CONTROL_SWITCHES: { id: 'thrust_quadrant_and_aisle_stand_fuel_control_switches', title: 'FUEL CONTROL SWITCHES', value: 'CUTOFF' },
        WEATHER_RADAR: { id: 'thrust_quadrant_and_aisle_stand_weather_radar', title: 'WEATHER RADAR', value: 'OFF' },
        VHF_AUDIO_ADF: { id: 'thrust_quadrant_and_aisle_stand_vhf_audio_adf', title: 'VHF / AUDIO / ADF', value: 'SET AS REQUIRED' },
        ENGINE_APU_FIRE_HANDLES: { id: 'thrust_quadrant_and_aisle_stand_engine_apu_fire_handles', title: 'ENGINE / APU FIRE HANDLES', value: 'IN, NOT ROTATED' },
        TRANSPONDER: { id: 'thrust_quadrant_and_aisle_stand_transponder', title: 'TRANSPONDER', value: 'SET AS REQUIRED' },
        ILS: { id: 'thrust_quadrant_and_aisle_stand_ils', title: 'ILS', value: 'SET OR PARKED AS REQUIRED' },
        TCAS_TEST: { id: 'thrust_quadrant_and_aisle_stand_tcas_test', title: 'TCAS TEST', value: 'INITIATE / VERIFY' },
        CARGO_FIRE_PANEL: { id: 'thrust_quadrant_and_aisle_stand_cargo_fire_panel', title: 'CARGO FIRE PANEL', value: 'CHECK' },
        RUDDER_AILERON_TRIM: { id: 'thrust_quadrant_and_aisle_stand_rudder_aileron_trim', title: 'RUDDER / AILERON TRIM', value: 'ZERO' },
        FIRE_OVHT_WHL_WELL: { id: 'thrust_quadrant_and_aisle_stand_fire_ovht_whl_well', title: 'FIRE/OVHT - WHL WELL', value: 'COMPLETE' },
        FIRE_OVHT_ENG: { id: 'thrust_quadrant_and_aisle_stand_fire_ovht_eng', title: 'FIRE/OVHT - ENG', value: 'COMPLETE' },
        FIRE_OVHT_ENG_APU_CARGO: { id: 'thrust_quadrant_and_aisle_stand_fire_ovht_eng_apu_cargo', title: 'FIRE/OVHT - ENG/APU/CARGO', value: 'COMPLETE' }
      }
    },
    BASIC_FMS_PREFLIGHT: {
      id: 'phase_basic_fms_preflight',
      items: {
        IDENT_PAGE: { id: 'basic_fms_preflight_ident_page', title: 'IDENT PAGE', value: 'CHECK' },
        REF_AIRPORT: { id: 'basic_fms_preflight_ref_airport', title: 'REF AIRPORT', value: 'ENTER / VERIFY' },
        SET_IRS_POS: { id: 'basic_fms_preflight_set_irs_pos', title: 'SET IRS POS', value: 'ENTER VERIFIED POSITION' },
        RAD_NAV_INHIBIT: { id: 'basic_fms_preflight_rad_nav_inhibit', title: 'RAD NAV INHIBIT', value: 'AS REQUIRED' },
        GPS: { id: 'basic_fms_preflight_gps', title: 'GPS', value: 'ON' }
      }
    },
    FMS_PREPARATION: {
      id: 'phase_fms_preparation',
      items: {
        ROUTE_REQUEST: { id: 'fms_preparation_route_request', title: 'ROUTE REQUEST', value: 'SEND / LOAD' },
        DEPARTURE_ARRIVAL: { id: 'fms_preparation_departure_arrival', title: 'DEPARTURE / ARRIVAL', value: 'SELECT / VERIFY' },
        ROUTE_LEGS: { id: 'fms_preparation_route_legs', title: 'ROUTE / LEGS', value: 'REVIEW' },
        ROUTE: { id: 'fms_preparation_route', title: 'ROUTE', value: 'ACTIVATE / EXECUTE' },
        ROUTE_WIND_ALTITUDES: { id: 'fms_preparation_route_wind_altitudes', title: 'ROUTE-WIND ALTITUDES', value: 'ENTER / EXECUTE' },
        ROUTE_WIND_REQUEST: { id: 'fms_preparation_route_wind_request', title: 'ROUTE-WIND REQUEST', value: 'SEND' },
        ROUTE_WINDS: { id: 'fms_preparation_route_winds', title: 'ROUTE WINDS', value: 'LOAD / REVIEW / EXECUTE' },
        DESCENT_FORECAST: { id: 'fms_preparation_descent_forecast', title: 'DESCENT FORECAST', value: 'LOAD / REVIEW' },
        WEIGHT_BALANCE_TAKEOFF: { id: 'fms_preparation_weight_balance_takeoff', title: 'WEIGHT / BALANCE / TAKEOFF', value: 'RECONCILE' },
        PERFORMANCE_UPLINK: { id: 'fms_preparation_performance_uplink', title: 'PERFORMANCE UPLINK', value: 'LOAD / REVIEW / ACCEPT' },
        TAKEOFF_REF_UPLINK: { id: 'fms_preparation_takeoff_ref_uplink', title: 'TAKEOFF REF UPLINK', value: 'REVIEW BOTH PAGES' },
        ALIGNMENT_DEPENDENT_INDICATIONS: { id: 'fms_preparation_alignment_dependent_indications', title: 'ALIGNMENT-DEPENDENT INDICATIONS', value: 'RECHECK' }
      }
    },
    PREFLIGHT_CHECKS_AND_BRIEFINGS: {
      id: 'phase_preflight_checks_and_briefings',
      items: {
        IFR_CLEARANCE: { id: 'preflight_checks_and_briefings_ifr_clearance', title: 'IFR CLEARANCE', value: 'RECEIVED, ACCEPTED, AND REVIEWED' },
        FLIGHT_PLAN_CHECK_ROUTE_VALIDATION: { id: 'preflight_checks_and_briefings_flight_plan_check_route_validation', title: 'FLIGHT PLAN CHECK / ROUTE VALIDATION', value: 'COMPLETE' },
        DEPARTURE_PROCEDURE_BRIEFING_VERIFICATION: { id: 'preflight_checks_and_briefings_departure_procedure_briefing_verification', title: 'DEPARTURE PROCEDURE BRIEFING / VERIFICATION', value: 'COMPLETE' },
        NAVIGATION_COMMUNICATION_RADIOS: { id: 'preflight_checks_and_briefings_navigation_communication_radios', title: 'NAVIGATION / COMMUNICATION RADIOS', value: 'SET AS REQUIRED' },
        OPERATIONAL_WEATHER_BRIEFING: { id: 'preflight_checks_and_briefings_operational_weather_briefing', title: 'OPERATIONAL / WEATHER BRIEFING', value: 'COMPLETE' },
        DEPARTURE_BRIEFING: { id: 'preflight_checks_and_briefings_departure_briefing', title: 'DEPARTURE BRIEFING', value: 'COMPLETE FOR RUNWAY ____' },
        MCP_HEADING_INITIAL_LATERAL_GUIDANCE: { id: 'preflight_checks_and_briefings_mcp_heading_initial_lateral_guidance', title: 'MCP HEADING / INITIAL LATERAL GUIDANCE', value: 'SET AND VERIFY' },
        MCP_ALTITUDE: { id: 'preflight_checks_and_briefings_mcp_altitude', title: 'MCP ALTITUDE', value: 'SET TO CLEARED ALTITUDE' },
        PERFORMANCE_BRIEFING: { id: 'preflight_checks_and_briefings_performance_briefing', title: 'PERFORMANCE BRIEFING', value: 'COMPLETE FOR RUNWAY ____' },
        SPEED_BUGS_MCP_SPEED: { id: 'preflight_checks_and_briefings_speed_bugs_mcp_speed', title: 'SPEED BUGS / MCP SPEED', value: 'SET FROM VERIFIED PERFORMANCE' },
        DEPARTURE_SUMMARY_T_BRIEF: { id: 'preflight_checks_and_briefings_departure_summary_t_brief', title: 'DEPARTURE SUMMARY / T BRIEF', value: 'COMPLETE' }
      }
    },
    BEFORE_START: {
      id: 'phase_before_start',
      items: {
        PARKING_BRAKE: { id: 'before_start_parking_brake', title: 'PARKING BRAKE', value: 'SET' },
        BRIEFINGS: { id: 'before_start_briefings', title: 'BRIEFINGS', value: 'COMPLETE FOR RUNWAY ____' },
        MCP: { id: 'before_start_mcp', title: 'MCP', value: 'CHECK SPEED, LATERAL GUIDANCE, HEADING AND ALTITUDE' },
        DOORS: { id: 'before_start_doors', title: 'DOORS', value: 'CLOSED' },
        COCKPIT_WINDOWS: { id: 'before_start_cockpit_windows', title: 'COCKPIT WINDOWS', value: 'CLOSED AND LOCKED' },
        HYDRAULIC_PANEL: { id: 'before_start_hydraulic_panel', title: 'HYDRAULIC PANEL', value: 'SET / PUMPS SELECTED ON' },
        FUEL_PANEL: { id: 'before_start_fuel_panel', title: 'FUEL PANEL', value: 'SET' },
        DUCT_PRESSURE: { id: 'before_start_duct_pressure', title: 'DUCT PRESSURE', value: 'CHECK' },
        RECALL: { id: 'before_start_recall', title: 'RECALL', value: 'CHECK' },
        GROUND_CREW_COMMUNICATION: { id: 'before_start_ground_crew_communication', title: 'GROUND CREW COMMUNICATION', value: 'ESTABLISHED' },
        PARKING_BRAKE_CHOCKS: { id: 'before_start_parking_brake_chocks', title: 'PARKING BRAKE / CHOCKS', value: 'SET / REMOVED AS COORDINATED' },
        PUSH_START_PERMISSION: { id: 'before_start_push_start_permission', title: 'PUSH / START PERMISSION', value: 'RECEIVED / CHECKLISTS COMPLETE' },
        PUSHBACK: { id: 'before_start_pushback', title: 'PUSHBACK', value: 'COMMENCE AS COORDINATED' }
      }
    },
    ENGINE_START: {
      id: 'phase_engine_start',
      items: {
        START_PLAN_AIR_SOURCE: { id: 'engine_start_start_plan_air_source', title: 'START PLAN / AIR SOURCE', value: 'CONFIRM' },
        APU_BLEED: { id: 'engine_start_apu_bleed', title: 'APU BLEED', value: 'ON' },
        ENGINE_BLEEDS: { id: 'engine_start_engine_bleeds', title: 'ENGINE BLEEDS', value: 'ON' },
        PACKS: { id: 'engine_start_packs', title: 'PACKS', value: 'OFF' },
        DUCT_PRESSURE: { id: 'engine_start_duct_pressure', title: 'DUCT PRESSURE', value: 'VERIFY SUFFICIENT FOR START' },
        ENGINE_START_SELECTOR: { id: 'engine_start_engine_start_selector', title: 'ENGINE START SELECTOR', value: 'GND' },
        UPPER_LOWER_EICAS: { id: 'engine_start_upper_lower_eicas', title: 'UPPER / LOWER EICAS', value: 'MONITOR MOTORING' },
        FUEL_CONTROL_SWITCH: { id: 'engine_start_fuel_control_switch', title: 'FUEL CONTROL SWITCH', value: 'RUN / RICH AS APPLICABLE' },
        UPPER_LOWER_EICAS_STABILIZATION: { id: 'engine_start_upper_lower_eicas_stabilization', title: 'UPPER / LOWER EICAS', value: 'MONITOR START TO STABILIZATION' },
        STARTER_CUTOUT_ENGINE_IDLE: { id: 'engine_start_starter_cutout_engine_idle', title: 'STARTER CUTOUT / ENGINE IDLE', value: 'VERIFY' },
        FUEL_CONTROL_AFTER_A_RICH_START_RR_ONLY: { id: 'engine_start_fuel_control_after_a_rich_start_rr_only', title: 'FUEL CONTROL AFTER A RICH START (RR ONLY)', value: 'RUN' }
      }
    },
    AFTER_START: {
      id: 'phase_after_start',
      items: {
        APU: { id: 'after_start_apu', title: 'APU', value: 'OFF / AS REQUIRED' },
        ENGINE_ANTI_ICE: { id: 'after_start_engine_anti_ice', title: 'ENGINE ANTI-ICE', value: 'AS REQUIRED' },
        PACKS: { id: 'after_start_packs', title: 'PACKS', value: 'AUTO' },
        ISOLATION_VALVE: { id: 'after_start_isolation_valve', title: 'ISOLATION VALVE', value: 'CLOSED' },
        BLEEDS: { id: 'after_start_bleeds', title: 'BLEEDS', value: 'SET' },
        FLAPS: { id: 'after_start_flaps', title: 'FLAPS', value: 'SET / VERIFY' },
        TRIMS: { id: 'after_start_trims', title: 'TRIMS', value: 'ZERO / ZERO / ____ UNITS' },
        SPEEDBRAKE_LEVER: { id: 'after_start_speedbrake_lever', title: 'SPEEDBRAKE LEVER', value: 'STOWED DN / VERIFY' },
        AUTOBRAKES: { id: 'after_start_autobrakes', title: 'AUTOBRAKES', value: 'RTO / VERIFY' },
        SECONDARY_ENGINE_INDICATIONS: { id: 'after_start_secondary_engine_indications', title: 'SECONDARY ENGINE INDICATIONS', value: 'AUTO' },
        RECALL: { id: 'after_start_recall', title: 'RECALL', value: 'CHECK' }
      }
    },
    TAXI: {
      id: 'phase_taxi',
      items: {
        TAXI_CLEARANCE_AND_ROUTE: { id: 'taxi_taxi_clearance_and_route', title: 'TAXI CLEARANCE AND ROUTE', value: 'CONFIRMED' },
        AIRCRAFT_TAXI_PATH_AND_CLEARANCE: { id: 'taxi_aircraft_taxi_path_and_clearance', title: 'AIRCRAFT TAXI PATH AND CLEARANCE', value: 'MONITOR' },
        ENGINE_START_AND_WARMUP_PLAN: { id: 'taxi_engine_start_and_warmup_plan', title: 'ENGINE START AND WARMUP PLAN', value: 'CONFIRM' },
        TAXI_SPEED_AND_THRUST: { id: 'taxi_taxi_speed_and_thrust', title: 'TAXI SPEED AND THRUST', value: 'AS CONDITIONS REQUIRE' }
      }
    },
    BEFORE_TAKEOFF: {
      id: 'phase_before_takeoff',
      items: {
        FLAPS: { id: 'before_takeoff_flaps', title: 'FLAPS', value: 'REQUIRED SETTING / CHECKED' },
        LOWER_EICAS: { id: 'before_takeoff_lower_eicas', title: 'LOWER EICAS', value: 'STATUS DISPLAY' },
        FLIGHT_CONTROLS: { id: 'before_takeoff_flight_controls', title: 'FLIGHT CONTROLS', value: 'CHECK' },
        LOWER_EICAS_ENGINE_DISPLAY: { id: 'before_takeoff_lower_eicas_engine_display', title: 'LOWER EICAS', value: 'ENGINE DISPLAY' },
        ENGINES: { id: 'before_takeoff_engines', title: 'ENGINES', value: 'BOTH RUNNING' },
        CABIN: { id: 'before_takeoff_cabin', title: 'CABIN', value: 'SECURED / CREW NOTIFIED' },
        TAKEOFF_SPEEDS: { id: 'before_takeoff_takeoff_speeds', title: 'TAKEOFF SPEEDS', value: 'VERIFY' },
        TAKEOFF_CONFIGURATION: { id: 'before_takeoff_takeoff_configuration', title: 'TAKEOFF CONFIGURATION', value: 'CHECKED' },
        EXTERIOR_LIGHTS: { id: 'before_takeoff_exterior_lights', title: 'EXTERIOR LIGHTS', value: 'SET FOR THE OPERATION' },
        FUEL: { id: 'before_takeoff_fuel', title: 'FUEL', value: 'REQUIRED MINIMUM / ACTUAL CHECKED' },
        RUNWAY_AND_CLEARANCE: { id: 'before_takeoff_runway_and_clearance', title: 'RUNWAY AND CLEARANCE', value: 'VERIFY' },
        SEATBELTS_AND_HARNESSES: { id: 'before_takeoff_seatbelts_and_harnesses', title: 'SEATBELTS AND HARNESSES', value: 'FASTENED' }
      }
    },
    TAKEOFF: {
      id: 'phase_takeoff',
      items: {
        FLIGHT_CONTROLS: { id: 'takeoff_flight_controls', title: 'FLIGHT CONTROLS', value: 'TRANSFER AS REQUIRED TO PF' },
        INITIAL_THRUST: { id: 'takeoff_initial_thrust', title: 'INITIAL THRUST', value: 'SET 1.10 EPR / STABILIZE' },
        TAKEOFF_THRUST: { id: 'takeoff_takeoff_thrust', title: 'TAKEOFF THRUST', value: 'COMMAND / VERIFY' },
        TAKEOFF_ROLL: { id: 'takeoff_takeoff_roll', title: 'TAKEOFF ROLL', value: 'MONITOR / MAKE BRIEFED CALLOUTS' },
        AT_VR: { id: 'takeoff_at_vr', title: 'AT VR', value: 'ROTATE SMOOTHLY' },
        AFTER_LIFTOFF: { id: 'takeoff_after_liftoff', title: 'AFTER LIFTOFF', value: 'ESTABLISH / MONITOR CLIMB' },
        POSITIVE_RATE: { id: 'takeoff_positive_rate', title: 'POSITIVE RATE', value: 'GEAR UP' },
        AT_400_FT_AGL: { id: 'takeoff_at_400_ft_agl', title: 'AT 400 FT AGL', value: 'SELECT / VERIFY LATERAL MODE' },
        AT_BRIEFED_ACCELERATION_HEIGHT: { id: 'takeoff_at_briefed_acceleration_height', title: 'AT BRIEFED ACCELERATION HEIGHT', value: 'SELECT / VERIFY CLIMB GUIDANCE' },
        ACCELERATION_AND_FLAP_RETRACTION: { id: 'takeoff_acceleration_and_flap_retraction', title: 'ACCELERATION AND FLAP RETRACTION', value: 'ON SCHEDULE' }
      }
    },
    AFTER_TAKEOFF: {
      id: 'phase_after_takeoff',
      items: {
        THRUST: { id: 'after_takeoff_thrust', title: 'THRUST', value: 'VERIFY "CLB"' },
        FLAPS: { id: 'after_takeoff_flaps', title: 'FLAPS', value: 'VERIFY UP' },
        LANDING_GEAR: { id: 'after_takeoff_landing_gear', title: 'LANDING GEAR', value: 'OFF' }
      }
    },
    CLIMB: {
      id: 'phase_climb',
      items: {
        FLIGHT_PATH_SPEED_AND_MODES: { id: 'climb_flight_path_speed_and_modes', title: 'FLIGHT PATH, SPEED AND MODES', value: 'MONITOR' },
        FMC_SPEED_PLAN: { id: 'climb_fmc_speed_plan', title: 'FMC SPEED PLAN', value: 'REVIEW / ADJUST AS REQUIRED' },
        ALTIMETERS: { id: 'climb_altimeters', title: 'ALTIMETERS', value: 'STANDARD AT APPLICABLE TRANSITION' },
        EXTERIOR_LIGHTS: { id: 'climb_exterior_lights', title: 'EXTERIOR LIGHTS', value: 'SET FOR CLIMB / CRUISE' }
      }
    },
    CRUISE: {
      id: 'phase_cruise',
      items: {
        RECALL_AND_AIRCRAFT_STATUS: { id: 'cruise_recall_and_aircraft_status', title: 'RECALL AND AIRCRAFT STATUS', value: 'CHECK' },
        FLIGHT_PROGRESS_FUEL_AND_ARRIVAL: { id: 'cruise_flight_progress_fuel_and_arrival', title: 'FLIGHT PROGRESS, FUEL AND ARRIVAL', value: 'REVIEW' },
        ARRIVAL_PREPARATION: { id: 'cruise_arrival_preparation', title: 'ARRIVAL PREPARATION', value: 'AS REQUIRED' }
      }
    },
    DESCENT: {
      id: 'phase_descent',
      items: {
        DESCENT_PLAN: { id: 'descent_descent_plan', title: 'DESCENT PLAN', value: 'COMPLETE / VERIFIED' },
        APPROACH_AND_MISSED_APPROACH_BRIEFING: { id: 'descent_approach_and_missed_approach_briefing', title: 'APPROACH AND MISSED-APPROACH BRIEFING', value: 'COMPLETE FOR RUNWAY ___' },
        LANDING_PERFORMANCE: { id: 'descent_landing_performance', title: 'LANDING PERFORMANCE', value: 'CHECKED' },
        APPROACH_SPEEDS: { id: 'descent_approach_speeds', title: 'APPROACH SPEEDS', value: 'CHECKED / SET' },
        MINIMUMS: { id: 'descent_minimums', title: 'MINIMUMS', value: '___ RADIO / ___ BARO' },
        SEAT_BELT_SIGN: { id: 'descent_seat_belt_sign', title: 'SEAT BELT SIGN', value: 'ON' },
        CABIN: { id: 'descent_cabin', title: 'CABIN', value: 'BRIEFED' },
        RECALL: { id: 'descent_recall', title: 'RECALL', value: 'CHECKED' },
        IN_RANGE_REPORT_AND_GROUND_POWER_PLAN: { id: 'descent_in_range_report_and_ground_power_plan', title: 'IN RANGE REPORT AND GROUND-POWER PLAN', value: 'COMPLETE / REVIEW' },
        ALTIMETERS: { id: 'descent_altimeters', title: 'ALTIMETERS', value: 'LOCAL SETTING AT APPLICABLE TRANSITION' },
        EXTERIOR_LIGHTS: { id: 'descent_exterior_lights', title: 'EXTERIOR LIGHTS', value: 'SET FOR DESCENT / APPROACH' }
      }
    },
    APPROACH: {
      id: 'phase_approach',
      items: {
        NAVIGATION_AND_APPROACH_GUIDANCE: { id: 'approach_navigation_and_approach_guidance', title: 'NAVIGATION AND APPROACH GUIDANCE', value: 'VERIFIED' },
        APPROACH_MODES: { id: 'approach_approach_modes', title: 'APPROACH MODES', value: 'AS REQUIRED' },
        ALTIMETERS: { id: 'approach_altimeters', title: 'ALTIMETERS', value: '___ / CHECKED AND SET' },
        CABIN: { id: 'approach_cabin', title: 'CABIN', value: 'SECURED / CONFIRMED' },
        APPROACH_PATH_SPEED_AND_CONFIGURATION: { id: 'approach_approach_path_speed_and_configuration', title: 'APPROACH PATH, SPEED AND CONFIGURATION', value: 'STABLE BY 1,000 FT AGL' }
      }
    },
    BEFORE_LANDING: {
      id: 'phase_before_landing',
      items: {
        AUTOBRAKES: { id: 'before_landing_autobrakes', title: 'AUTOBRAKES', value: 'AS REQUIRED / STATE SETTING' },
        SPEEDBRAKE: { id: 'before_landing_speedbrake', title: 'SPEEDBRAKE', value: 'ARMED' },
        LANDING_GEAR: { id: 'before_landing_landing_gear', title: 'LANDING GEAR', value: 'DOWN / THREE GREEN' },
        FLAPS: { id: 'before_landing_flaps', title: 'FLAPS', value: 'REQUIRED LANDING SETTING / VERIFIED' }
      }
    },
    LANDING: {
      id: 'phase_landing',
      items: {
        FINAL_APPROACH: { id: 'landing_final_approach', title: 'FINAL APPROACH', value: 'MONITOR / MAINTAIN STABILITY' },
        FLARE_AND_THRUST: { id: 'landing_flare_and_thrust', title: 'FLARE AND THRUST', value: 'SMOOTH / COORDINATED' },
        TOUCHDOWN_AND_NOSE_LOWERING: { id: 'landing_touchdown_and_nose_lowering', title: 'TOUCHDOWN AND NOSE LOWERING', value: 'SMOOTHLY RELAX BACK PRESSURE' },
        SPOILERS: { id: 'landing_spoilers', title: 'SPOILERS', value: 'VERIFY DEPLOYED' },
        REVERSE_THRUST: { id: 'landing_reverse_thrust', title: 'REVERSE THRUST', value: 'SELECT / VERIFY AS REQUIRED' },
        AUTOBRAKES_AND_DECELERATION: { id: 'landing_autobrakes_and_deceleration', title: 'AUTOBRAKES AND DECELERATION', value: 'MONITOR' },
        LOW_SPEED_TRANSITION: { id: 'landing_low_speed_transition', title: 'LOW-SPEED TRANSITION', value: 'BRAKING / REVERSE AS REQUIRED' },
        RUNWAY_EXIT: { id: 'landing_runway_exit', title: 'RUNWAY EXIT', value: 'SAFE SPEED / POSITIVE CONTROL' }
      }
    },
    GO_AROUND_AND_MISSED_APPROACH: {
      id: 'phase_go_around_and_missed_approach',
      items: {
        GO_AROUND: { id: 'go_around_and_missed_approach_go_around', title: 'GO-AROUND', value: 'ANNOUNCE / FLAPS 20' },
        GO_AROUND_BUTTON: { id: 'go_around_and_missed_approach_go_around_button', title: 'GO-AROUND BUTTON', value: 'PRESS' },
        THRUST: { id: 'go_around_and_missed_approach_thrust', title: 'THRUST', value: 'CHECKED' },
        POSITIVE_RATE_OF_CLIMB: { id: 'go_around_and_missed_approach_positive_rate_of_climb', title: 'POSITIVE RATE OF CLIMB', value: 'GEAR UP' },
        MCP_ALTITUDE: { id: 'go_around_and_missed_approach_mcp_altitude', title: 'MCP ALTITUDE', value: 'CHECKED FOR GO-AROUND' },
        AT_400_FT_RADIO_ALTITUDE: { id: 'go_around_and_missed_approach_at_400_ft_radio_altitude', title: 'AT 400 FT RADIO ALTITUDE', value: 'SELECT / VERIFY LATERAL MODE' },
        AT_1_000_FT_RADIO_ALTITUDE: { id: 'go_around_and_missed_approach_at_1_000_ft_radio_altitude', title: 'AT 1,000 FT RADIO ALTITUDE', value: 'SELECT / VERIFY VERTICAL MODE' },
        MCP_SPEED: { id: 'go_around_and_missed_approach_mcp_speed', title: 'MCP SPEED', value: 'SET WHEN USING SELECTED SPEED' },
        ACCELERATION_FLAP_RETRACTION: { id: 'go_around_and_missed_approach_acceleration_flap_retraction', title: 'ACCELERATION / FLAP RETRACTION', value: 'ON SCHEDULE' },
        FLAPS_UP: { id: 'go_around_and_missed_approach_flaps_up', title: 'FLAPS UP', value: 'VERIFY / AFTER TAKEOFF CHECKLIST' },
        LANDING_GEAR: { id: 'go_around_and_missed_approach_landing_gear', title: 'LANDING GEAR', value: 'OFF AFTER RETRACTION' },
        RECALL: { id: 'go_around_and_missed_approach_recall', title: 'RECALL', value: 'CHECKED' },
        NOTIFY: { id: 'go_around_and_missed_approach_notify', title: 'NOTIFY', value: 'FA / COMPANY / ATC' }
      }
    },
    AFTER_LANDING: {
      id: 'phase_after_landing',
      items: {
        RUNWAY_VACATED_TAXI_PLAN: { id: 'after_landing_runway_vacated_taxi_plan', title: 'RUNWAY VACATED / TAXI PLAN', value: 'CONFIRMED' },
        APU: { id: 'after_landing_apu', title: 'APU', value: 'AS REQUIRED' },
        ANTI_ICE: { id: 'after_landing_anti_ice', title: 'ANTI-ICE', value: 'WING OFF / ENGINE AS REQUIRED' },
        FLIGHT_DIRECTORS: { id: 'after_landing_flight_directors', title: 'FLIGHT DIRECTORS', value: 'OFF' },
        EXTERIOR_LIGHTS: { id: 'after_landing_exterior_lights', title: 'EXTERIOR LIGHTS', value: 'SET FOR TAXI' },
        TRIMS: { id: 'after_landing_trims', title: 'TRIMS', value: 'ZERO / ZERO / 4.0' },
        FLAPS: { id: 'after_landing_flaps', title: 'FLAPS', value: 'UP / VERIFY FULL RETRACTION' },
        ILS_CONTROLS: { id: 'after_landing_ils_controls', title: 'ILS CONTROLS', value: 'PARK AS APPROPRIATE' },
        WEATHER_RADAR_AND_TERRAIN_DISPLAY: { id: 'after_landing_weather_radar_and_terrain_display', title: 'WEATHER RADAR AND TERRAIN DISPLAY', value: 'OFF' },
        SPEEDBRAKE: { id: 'after_landing_speedbrake', title: 'SPEEDBRAKE', value: 'STOWED / DOWN' },
        BEFORE_STAND_ENTRY: { id: 'after_landing_before_stand_entry', title: 'BEFORE STAND ENTRY', value: 'LIGHTS / WEATHER RADAR CHECKED' }
      }
    },
    SHUTDOWN_AND_TURNAROUND: {
      id: 'phase_shutdown_and_turnaround',
      items: {
        PARKING_BRAKE: { id: 'shutdown_and_turnaround_parking_brake', title: 'PARKING BRAKE', value: 'SET / VERIFY' },
        AC_POWER_SOURCE: { id: 'shutdown_and_turnaround_ac_power_source', title: 'AC POWER SOURCE', value: 'CONFIRMED' },
        ENGINE_ANTI_ICE: { id: 'shutdown_and_turnaround_engine_anti_ice', title: 'ENGINE ANTI-ICE', value: 'OFF BEFORE SHUTDOWN' },
        ENGINE_FUEL_CONTROLS: { id: 'shutdown_and_turnaround_engine_fuel_controls', title: 'ENGINE FUEL CONTROLS', value: 'CUTOFF' },
        BEACON_AND_SEAT_BELT_SIGN: { id: 'shutdown_and_turnaround_beacon_and_seat_belt_sign', title: 'BEACON AND SEAT BELT SIGN', value: 'OFF WHEN APPROPRIATE' },
        LIGHT_OVERRIDE: { id: 'shutdown_and_turnaround_light_override', title: 'LIGHT OVERRIDE', value: 'AS REQUIRED' },
        IRS: { id: 'shutdown_and_turnaround_irs', title: 'IRS', value: 'SET FOR TURNAROUND / TERMINATION' },
        HYDRAULIC_ELECTRIC_PUMPS: { id: 'shutdown_and_turnaround_hydraulic_electric_pumps', title: 'HYDRAULIC ELECTRIC PUMPS', value: 'OFF / L, THEN C, THEN R' },
        APU: { id: 'shutdown_and_turnaround_apu', title: 'APU', value: 'AS REQUIRED' },
        RUNWAY_TURNOFF_AND_PANEL_LIGHTING: { id: 'shutdown_and_turnaround_runway_turnoff_and_panel_lighting', title: 'RUNWAY TURNOFF AND PANEL LIGHTING', value: 'SET' },
        EMERGENCY_LIGHTS: { id: 'shutdown_and_turnaround_emergency_lights', title: 'EMERGENCY LIGHTS', value: 'SET FOR OPERATION' },
        IGNITION_SELECTION: { id: 'shutdown_and_turnaround_ignition_selection', title: 'IGNITION SELECTION', value: 'ALTERNATE AS APPLICABLE' },
        ENGINE_START_SELECTORS: { id: 'shutdown_and_turnaround_engine_start_selectors', title: 'ENGINE START SELECTORS', value: 'AUTO' },
        FUEL_PANEL: { id: 'shutdown_and_turnaround_fuel_panel', title: 'FUEL PANEL', value: 'SET' },
        ANTI_ICE_AND_WIPERS: { id: 'shutdown_and_turnaround_anti_ice_and_wipers', title: 'ANTI-ICE AND WIPERS', value: 'OFF' },
        EXTERIOR_LIGHTS: { id: 'shutdown_and_turnaround_exterior_lights', title: 'EXTERIOR LIGHTS', value: 'SET' },
        WINDOW_HEAT: { id: 'shutdown_and_turnaround_window_heat', title: 'WINDOW HEAT', value: 'OFF' },
        SEAT_BELT_SIGN: { id: 'shutdown_and_turnaround_seat_belt_sign', title: 'SEAT BELT SIGN', value: 'OFF' },
        OVERHEAD_LIGHTING_PANEL: { id: 'shutdown_and_turnaround_overhead_lighting_panel', title: 'OVERHEAD LIGHTING PANEL', value: 'AS REQUIRED' },
        PACKS: { id: 'shutdown_and_turnaround_packs', title: 'PACKS', value: 'AS REQUIRED' },
        ISOLATION_VALVE: { id: 'shutdown_and_turnaround_isolation_valve', title: 'ISOLATION VALVE', value: 'OPEN / SELECTED IN' },
        BLEED_CONTROLS: { id: 'shutdown_and_turnaround_bleed_controls', title: 'BLEED CONTROLS', value: 'ON' },
        GLARESHIELD_LIGHTING: { id: 'shutdown_and_turnaround_glareshield_lighting', title: 'GLARESHIELD LIGHTING', value: 'AS REQUIRED' },
        FLIGHT_DIRECTORS: { id: 'shutdown_and_turnaround_flight_directors', title: 'FLIGHT DIRECTORS', value: 'OFF' },
        AUTOTHROTTLE_ARM: { id: 'shutdown_and_turnaround_autothrottle_arm', title: 'AUTOTHROTTLE ARM', value: 'ARM' },
        MCP: { id: 'shutdown_and_turnaround_mcp', title: 'MCP', value: 'CHECKED' },
        SHOULDER_AND_FOOT_HEAT: { id: 'shutdown_and_turnaround_shoulder_and_foot_heat', title: 'SHOULDER AND FOOT HEAT', value: 'OFF / AS REQUIRED' },
        EICAS_AND_STATUS: { id: 'shutdown_and_turnaround_eicas_and_status', title: 'EICAS AND STATUS', value: 'REVIEW' },
        SPEEDBRAKE: { id: 'shutdown_and_turnaround_speedbrake', title: 'SPEEDBRAKE', value: 'STOWED / DOWN' },
        FUEL_CONTROLS: { id: 'shutdown_and_turnaround_fuel_controls', title: 'FUEL CONTROLS', value: 'CUTOFF / VERIFIED' },
        FLAPS: { id: 'shutdown_and_turnaround_flaps', title: 'FLAPS', value: 'UP / INDICATION AGREES' },
        STABILIZER_TRIM: { id: 'shutdown_and_turnaround_stabilizer_trim', title: 'STABILIZER TRIM', value: '4.0 / VERIFY' },
        TRANSPONDER: { id: 'shutdown_and_turnaround_transponder', title: 'TRANSPONDER', value: 'OFF / AS REQUIRED' },
        ACARS_FLIGHT_CLOSEOUT: { id: 'shutdown_and_turnaround_acars_flight_closeout', title: 'ACARS FLIGHT CLOSEOUT', value: 'SENT / CLOSED' },
        DEBRIEF_AND_HANDOVER: { id: 'shutdown_and_turnaround_debrief_and_handover', title: 'DEBRIEF AND HANDOVER', value: 'COMPLETE' }
      }
    },
    FINAL_SECURING: {
      id: 'phase_final_securing',
      items: {
        IRS_SELECTORS: { id: 'final_securing_irs_selectors', title: 'IRS SELECTORS', value: 'VERIFY OFF' },
        APU_IF_RUNNING: { id: 'final_securing_apu_if_running', title: 'APU - IF RUNNING', value: 'SELECTOR OFF / SHUTDOWN COMPLETE' },
        EXTERNAL_POWER_IF_CONNECTED: { id: 'final_securing_external_power_if_connected', title: 'EXTERNAL POWER - IF CONNECTED', value: 'DESELECT / REMOVE' },
        BATTERY: { id: 'final_securing_battery', title: 'BATTERY', value: 'OFF' },
        FINAL_AIRCRAFT_STATE: { id: 'final_securing_final_aircraft_state', title: 'FINAL AIRCRAFT STATE', value: 'CHECK / HANDOVER COMPLETE' }
      }
    }
  }
};

export default checklist;
