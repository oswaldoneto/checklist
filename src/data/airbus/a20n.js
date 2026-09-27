const checklist = {
  FLIGHT_PHASES: {
    COCKPIT_PREPARATION: {
      id: 'phase_cockpit_preparation',
      items: {
        BATTERIES: {
          id: 'cockpit_preparation_batteries',
          title: 'Batteries 1 + 2',
          value: 'Check > 25.5 V, then AUTO'
        },
        AC_POWER: {
          id: 'cockpit_preparation_ac_power',
          title: 'External power / APU',
          value: 'EXT PWR ON or APU START'
        },
        APU_BLEED: {
          id: 'cockpit_preparation_apu_bleed',
          title: 'APU bleed',
          value: 'ON (if APU AVAIL)'
        },
        FUEL_PUMPS: {
          id: 'cockpit_preparation_fuel_pumps',
          title: 'Fuel pumps',
          value: 'ON'
        },
        CREW_OXYGEN: {
          id: 'cockpit_preparation_crew_oxygen',
          title: 'Crew oxygen',
          value: 'ON'
        },
        ADIRS: {
          id: 'cockpit_preparation_adirs',
          title: 'ADIRS 1, 3, 2',
          value: 'NAV'
        },
        EXT_LIGHTS: {
          id: 'cockpit_preparation_ext_lights',
          title: 'Strobe / NAV & LOGO',
          value: 'AUTO / ON'
        },
        SIGNS: {
          id: 'cockpit_preparation_signs',
          title: 'Seat belts / No smoking',
          value: 'ON / AUTO'
        },
        EMER_EXIT_LIGHTS: {
          id: 'cockpit_preparation_emer_exit_lights',
          title: 'Emergency exit lights',
          value: 'ARM'
        },
        PACK_FLOW: {
          id: 'cockpit_preparation_pack_flow',
          title: 'Pack flow',
          value: 'As required'
        },
        PARKING_BRAKE: {
          id: 'cockpit_preparation_parking_brake',
          title: 'Parking brake / ACCU PRESS',
          value: 'ON / green band'
        },
        TRANSPONDER: {
          id: 'cockpit_preparation_transponder',
          title: 'Transponder',
          value: 'STBY, ATC SYS 1'
        },
        RMP: {
          id: 'cockpit_preparation_rmp',
          title: 'Radios',
          value: 'VHF1 ATC, VHF2 ATIS'
        },
        ATIS: {
          id: 'cockpit_preparation_atis',
          title: 'ATIS',
          value: 'Received (information ____)'
        },
        IFR_CLEARANCE: {
          id: 'cockpit_preparation_ifr_clearance',
          title: 'IFR clearance',
          value: 'Received (SID ____, ALT ____, SQK ____)'
        }
      }
    },
    FMGS_INITIALIZATION: {
      id: 'phase_fmgs_initialization',
      items: {
        INIT_A: {
          id: 'fmgs_initialization_init_a',
          title: 'INIT A (city pair, FLT NBR, CI, CRZ FL)',
          value: 'Set, ALIGN IRS'
        },
        F_PLN: {
          id: 'fmgs_initialization_f_pln',
          title: 'F-PLN (RWY, SID, airways, STAR)',
          value: 'Set, no discontinuities'
        },
        RAD_NAV: {
          id: 'fmgs_initialization_rad_nav',
          title: 'RAD NAV',
          value: 'Checked'
        },
        INIT_B: {
          id: 'fmgs_initialization_init_b',
          title: 'INIT B (ZFW, ZFWCG, block fuel)',
          value: 'Set'
        },
        PERF_TO: {
          id: 'fmgs_initialization_perf_to',
          title: 'PERF TO',
          value: 'V1 ____ VR ____ V2 ____ FLEX ____'
        },
        THR_RED_ACC: {
          id: 'fmgs_initialization_thr_red_acc',
          title: 'THR RED / ACC / EO ACC',
          value: 'Set'
        },
        FLAPS_THS: {
          id: 'fmgs_initialization_flaps_ths',
          title: 'Flaps / THS',
          value: 'CONF ____ / ____'
        }
      }
    },
    BEFORE_START: {
      id: 'phase_before_start',
      items: {
        BARO_REF: {
          id: 'before_start_baro_ref',
          title: 'Baro reference (both sides)',
          value: 'QNH ____ set'
        },
        FD: {
          id: 'before_start_fd',
          title: 'Flight directors',
          value: 'ON (both sides)'
        },
        FCU: {
          id: 'before_start_fcu',
          title: 'FCU',
          value: 'SPD dashed, HDG/VS, ALT ____'
        },
        IRS: {
          id: 'before_start_irs',
          title: 'IRS alignment',
          value: 'Complete'
        },
        APU: {
          id: 'before_start_apu',
          title: 'APU',
          value: 'START (if on EXT PWR)'
        },
        EXT_PWR: {
          id: 'before_start_ext_pwr',
          title: 'External power',
          value: 'OFF / disconnected'
        },
        APU_BLEED: {
          id: 'before_start_apu_bleed',
          title: 'APU bleed',
          value: 'ON'
        },
        PUSH_START_CLEARANCE: {
          id: 'before_start_push_start_clearance',
          title: 'Pushback & start clearance',
          value: 'Received'
        },
        TRANSPONDER: {
          id: 'before_start_transponder',
          title: 'Transponder',
          value: 'XPNDR'
        },
        DOORS_WINDOWS: {
          id: 'before_start_doors_windows',
          title: 'Doors & windows',
          value: 'CLOSED'
        },
        SLIDES: {
          id: 'before_start_slides',
          title: 'Slides',
          value: 'ARMED'
        },
        BEACON: {
          id: 'before_start_beacon',
          title: 'Beacon',
          value: 'ON'
        },
        THRUST_LEVERS: {
          id: 'before_start_thrust_levers',
          title: 'Thrust levers',
          value: 'IDLE'
        }
      }
    },
    ENGINE_START: {
      id: 'phase_engine_start',
      items: {
        ENG_MODE: {
          id: 'engine_start_eng_mode',
          title: 'ENG MODE selector',
          value: 'IGN / START'
        },
        DUAL_COOLING: {
          id: 'engine_start_dual_cooling',
          title: 'Dual cooling (PW engine)',
          value: 'As required'
        },
        ENG_2_MASTER: {
          id: 'engine_start_eng_2_master',
          title: 'ENG 2 master',
          value: 'ON, stabilized'
        },
        ENG_1_MASTER: {
          id: 'engine_start_eng_1_master',
          title: 'ENG 1 master',
          value: 'ON, stabilized'
        },
        IDLE_PARAMETERS: {
          id: 'engine_start_idle_parameters',
          title: 'Idle',
          value: 'N1 ~19%, N2 ~60% (PW) / ~68% (LEAP)'
        }
      }
    },
    AFTER_START: {
      id: 'phase_after_start',
      items: {
        ENG_MODE: {
          id: 'after_start_eng_mode',
          title: 'ENG MODE selector',
          value: 'NORM'
        },
        DUAL_COOLING: {
          id: 'after_start_dual_cooling',
          title: 'Dual cooling (PW engine)',
          value: 'OFF'
        },
        APU_BLEED: {
          id: 'after_start_apu_bleed',
          title: 'APU bleed',
          value: 'OFF'
        },
        ANTI_ICE: {
          id: 'after_start_anti_ice',
          title: 'ENG / WING anti-ice',
          value: 'As required'
        },
        APU_MASTER: {
          id: 'after_start_apu_master',
          title: 'APU master',
          value: 'OFF'
        },
        GROUND_SPOILERS: {
          id: 'after_start_ground_spoilers',
          title: 'Ground spoilers',
          value: 'ARM'
        },
        RUDDER_TRIM: {
          id: 'after_start_rudder_trim',
          title: 'Rudder trim',
          value: 'ZERO'
        },
        FLAPS: {
          id: 'after_start_flaps',
          title: 'Flaps',
          value: 'CONF ____'
        },
        PITCH_TRIM: {
          id: 'after_start_pitch_trim',
          title: 'Pitch trim',
          value: '____ (ISCS T/O calculator)'
        },
        ECAM_STATUS: {
          id: 'after_start_ecam_status',
          title: 'ECAM status',
          value: 'Checked'
        },
        NW_STEER_DISC: {
          id: 'after_start_nw_steer_disc',
          title: 'N/W STEER DISC memo',
          value: 'Not displayed'
        }
      }
    },
    TAXI: {
      id: 'phase_taxi',
      items: {
        TAXI_CLEARANCE: {
          id: 'taxi_taxi_clearance',
          title: 'Taxi clearance',
          value: 'Received (RWY ____)'
        },
        NOSE_LIGHT: {
          id: 'taxi_nose_light',
          title: 'Nose light',
          value: 'TAXI'
        },
        RWY_TURN_OFF_LIGHTS: {
          id: 'taxi_rwy_turn_off_lights',
          title: 'RWY turn off lights',
          value: 'ON'
        },
        PARKING_BRAKE: {
          id: 'taxi_parking_brake',
          title: 'Parking brake',
          value: 'OFF'
        },
        BRAKES: {
          id: 'taxi_brakes',
          title: 'Brakes',
          value: 'Checked'
        },
        FLIGHT_CONTROLS: {
          id: 'taxi_flight_controls',
          title: 'Flight controls',
          value: 'Checked'
        },
        FCU: {
          id: 'taxi_fcu',
          title: 'FCU cleared altitude',
          value: 'Set'
        },
        FMA: {
          id: 'taxi_fma',
          title: 'FMA',
          value: 'CLB / NAV armed'
        },
        WX_RADAR: {
          id: 'taxi_wx_radar',
          title: 'WX radar / PWS',
          value: 'SYS 1 / ON'
        },
        TRANSPONDER: {
          id: 'taxi_transponder',
          title: 'Transponder code',
          value: '____, XPNDR'
        },
        AUTO_BRAKE: {
          id: 'taxi_auto_brake',
          title: 'Auto brake',
          value: 'MAX'
        },
        CABIN: {
          id: 'taxi_cabin',
          title: 'Cabin report',
          value: 'CABIN READY'
        },
        TO_CONFIG: {
          id: 'taxi_to_config',
          title: 'T.O CONFIG',
          value: 'TEST, no alarm'
        },
        TO_MEMO: {
          id: 'taxi_to_memo',
          title: 'Takeoff memo',
          value: 'NO BLUE'
        }
      }
    },
    BEFORE_TAKEOFF: {
      id: 'phase_before_takeoff',
      items: {
        BRAKE_TEMP: {
          id: 'before_takeoff_brake_temp',
          title: 'Brake temperature',
          value: '< 150 °C'
        },
        TAKEOFF_CLEARANCE: {
          id: 'before_takeoff_takeoff_clearance',
          title: 'Line up / takeoff clearance',
          value: 'Received'
        },
        APPROACH_PATH: {
          id: 'before_takeoff_approach_path',
          title: 'Approach path',
          value: 'Clear of traffic'
        },
        STROBE: {
          id: 'before_takeoff_strobe',
          title: 'Strobe',
          value: 'ON'
        },
        TCAS: {
          id: 'before_takeoff_tcas',
          title: 'Transponder',
          value: 'TA/RA'
        },
        ENG_MODE: {
          id: 'before_takeoff_eng_mode',
          title: 'ENG MODE selector',
          value: 'As required'
        },
        PACKS: {
          id: 'before_takeoff_packs',
          title: 'Packs',
          value: 'As required'
        },
        LANDING_LIGHTS: {
          id: 'before_takeoff_landing_lights',
          title: 'Landing lights',
          value: 'ON'
        },
        NOSE_LIGHT: {
          id: 'before_takeoff_nose_light',
          title: 'Nose light',
          value: 'T.O'
        },
        RWY_TURN_OFF_LIGHTS: {
          id: 'before_takeoff_rwy_turn_off_lights',
          title: 'RWY turn off lights',
          value: 'ON'
        }
      }
    },
    AFTER_TAKEOFF: {
      id: 'phase_after_takeoff',
      items: {
        LANDING_GEAR: {
          id: 'after_takeoff_landing_gear',
          title: 'Landing gear',
          value: 'UP'
        },
        THRUST_LEVERS: {
          id: 'after_takeoff_thrust_levers',
          title: 'Thrust levers',
          value: 'CL at LVR CLB'
        },
        PACKS: {
          id: 'after_takeoff_packs',
          title: 'Packs',
          value: 'ON'
        },
        FLAPS: {
          id: 'after_takeoff_flaps',
          title: 'Flaps',
          value: '1 at F speed, 0 at S speed'
        },
        GROUND_SPOILERS: {
          id: 'after_takeoff_ground_spoilers',
          title: 'Ground spoilers',
          value: 'DISARM'
        },
        NOSE_RWY_LIGHTS: {
          id: 'after_takeoff_nose_rwy_lights',
          title: 'Nose / RWY turn off lights',
          value: 'OFF'
        },
        APU: {
          id: 'after_takeoff_apu',
          title: 'APU bleed / APU',
          value: 'As required'
        },
        ENG_MODE: {
          id: 'after_takeoff_eng_mode',
          title: 'ENG MODE selector',
          value: 'As required'
        },
        ANTI_ICE: {
          id: 'after_takeoff_anti_ice',
          title: 'ENG / WING anti-ice',
          value: 'As required'
        }
      }
    },
    CLIMB: {
      id: 'phase_climb',
      items: {
        BARO_REF: {
          id: 'climb_baro_ref',
          title: 'Baro reference',
          value: 'STD at transition altitude'
        },
        CRZ_FL: {
          id: 'climb_crz_fl',
          title: 'FCU altitude',
          value: 'Cleared FL ____'
        },
        LANDING_LIGHTS: {
          id: 'climb_landing_lights',
          title: 'Landing lights (FL100)',
          value: 'OFF / RETRACT'
        },
        SEAT_BELTS: {
          id: 'climb_seat_belts',
          title: 'Seat belts (FL100)',
          value: 'As required'
        },
        ECAM_MEMO: {
          id: 'climb_ecam_memo',
          title: 'ECAM memo',
          value: 'Reviewed'
        }
      }
    },
    DESCENT_PREPARATION: {
      id: 'phase_descent_preparation',
      items: {
        ATIS: {
          id: 'descent_preparation_atis',
          title: 'Destination ATIS',
          value: 'Received (information ____)'
        },
        LDG_ELEV: {
          id: 'descent_preparation_ldg_elev',
          title: 'LDG ELEV',
          value: 'AUTO'
        },
        ARRIVAL: {
          id: 'descent_preparation_arrival',
          title: 'Arrival (APPR, VIA, STAR)',
          value: 'Set'
        },
        PERF_APPR: {
          id: 'descent_preparation_perf_appr',
          title: 'PERF APPR (QNH, temp, wind, TL, MINS)',
          value: 'Set'
        },
        DES_WIND: {
          id: 'descent_preparation_des_wind',
          title: 'Descent winds',
          value: 'Set'
        },
        GPWS_FLAP_3: {
          id: 'descent_preparation_gpws_flap_3',
          title: 'GPWS LDG FLAP 3',
          value: 'As required'
        },
        AUTO_BRAKE: {
          id: 'descent_preparation_auto_brake',
          title: 'Auto brake',
          value: 'LO / MED'
        },
        ANTI_ICE: {
          id: 'descent_preparation_anti_ice',
          title: 'ENG / WING anti-ice',
          value: 'As required'
        },
        APPROACH_BRIEFING: {
          id: 'descent_preparation_approach_briefing',
          title: 'Approach briefing',
          value: 'Completed'
        }
      }
    },
    DESCENT: {
      id: 'phase_descent',
      items: {
        DESCENT_CLEARANCE: {
          id: 'descent_descent_clearance',
          title: 'Descent clearance',
          value: 'Received'
        },
        FCU: {
          id: 'descent_fcu',
          title: 'FCU altitude',
          value: 'Set, pushed (DES)'
        },
        BARO_REF: {
          id: 'descent_baro_ref',
          title: 'Baro reference (incl. standby)',
          value: 'QNH ____ at transition level'
        },
        ECAM_STATUS: {
          id: 'descent_ecam_status',
          title: 'ECAM status',
          value: 'Checked'
        },
        LANDING_LIGHTS: {
          id: 'descent_landing_lights',
          title: 'Landing lights (FL100)',
          value: 'ON'
        },
        SEAT_BELTS: {
          id: 'descent_seat_belts',
          title: 'Seat belts (FL100)',
          value: 'ON'
        },
        LS: {
          id: 'descent_ls',
          title: 'LS pushbutton',
          value: 'As required'
        },
        RAD_NAV: {
          id: 'descent_rad_nav',
          title: 'RAD NAV',
          value: 'Checked'
        }
      }
    },
    APPROACH: {
      id: 'phase_approach',
      items: {
        APPROACH_CLEARANCE: {
          id: 'approach_approach_clearance',
          title: 'Approach clearance',
          value: 'Received'
        },
        APPROACH_PHASE: {
          id: 'approach_approach_phase',
          title: 'Approach phase',
          value: 'Active at DECEL'
        },
        SPEED: {
          id: 'approach_speed',
          title: 'Speed',
          value: 'Managed'
        },
        APPR: {
          id: 'approach_appr',
          title: 'APPR pushbutton',
          value: 'Pressed, both APs (ILS)'
        },
        GO_AROUND_ALT: {
          id: 'approach_go_around_alt',
          title: 'Go-around altitude',
          value: 'Set after G/S or FINAL'
        },
        FLAPS: {
          id: 'approach_flaps',
          title: 'Flaps',
          value: '1 below 230 kt, 2 by 2000 ft AGL'
        },
        LANDING_GEAR: {
          id: 'approach_landing_gear',
          title: 'Landing gear',
          value: 'DOWN'
        },
        GROUND_SPOILERS: {
          id: 'approach_ground_spoilers',
          title: 'Ground spoilers',
          value: 'ARM'
        },
        AUTO_BRAKE: {
          id: 'approach_auto_brake',
          title: 'Auto brake',
          value: 'Confirmed'
        },
        NOSE_LIGHT: {
          id: 'approach_nose_light',
          title: 'Nose light',
          value: 'T.O'
        },
        RWY_TURN_OFF_LIGHTS: {
          id: 'approach_rwy_turn_off_lights',
          title: 'RWY turn off lights',
          value: 'ON'
        }
      }
    },
    LANDING: {
      id: 'phase_landing',
      items: {
        LANDING_CLEARANCE: {
          id: 'landing_landing_clearance',
          title: 'Landing clearance',
          value: 'Received'
        },
        LANDING_GEAR: {
          id: 'landing_landing_gear',
          title: 'Landing gear',
          value: '3 green (WHEEL page)'
        },
        FLAPS: {
          id: 'landing_flaps',
          title: 'Flaps',
          value: 'CONF 3 / FULL'
        },
        ATHR: {
          id: 'landing_athr',
          title: 'A/THR',
          value: 'SPEED'
        },
        CABIN: {
          id: 'landing_cabin',
          title: 'Cabin report',
          value: 'Received'
        },
        LDG_MEMO: {
          id: 'landing_ldg_memo',
          title: 'Landing memo',
          value: 'NO BLUE'
        },
        AUTOPILOT: {
          id: 'landing_autopilot',
          title: 'Autopilot',
          value: 'OFF by 400 ft (if no autoland)'
        }
      }
    },
    AFTER_LANDING: {
      id: 'phase_after_landing',
      items: {
        GROUND_SPOILERS: {
          id: 'after_landing_ground_spoilers',
          title: 'Ground spoilers',
          value: 'DISARM'
        },
        LANDING_LIGHTS: {
          id: 'after_landing_landing_lights',
          title: 'Landing lights',
          value: 'RETRACT'
        },
        STROBE: {
          id: 'after_landing_strobe',
          title: 'Strobe',
          value: 'AUTO'
        },
        NOSE_LIGHT: {
          id: 'after_landing_nose_light',
          title: 'Nose light',
          value: 'TAXI'
        },
        WX_RADAR: {
          id: 'after_landing_wx_radar',
          title: 'WX radar / PWS',
          value: 'OFF'
        },
        ENG_MODE: {
          id: 'after_landing_eng_mode',
          title: 'ENG MODE selector',
          value: 'NORM'
        },
        FLAPS: {
          id: 'after_landing_flaps',
          title: 'Flaps',
          value: 'RETRACT'
        },
        TRANSPONDER: {
          id: 'after_landing_transponder',
          title: 'Transponder',
          value: 'XPNDR'
        },
        APU: {
          id: 'after_landing_apu',
          title: 'APU',
          value: 'START (if required)'
        },
        ANTI_ICE: {
          id: 'after_landing_anti_ice',
          title: 'ENG anti-ice',
          value: 'As required'
        },
        TAXI_CLEARANCE: {
          id: 'after_landing_taxi_clearance',
          title: 'Taxi to gate',
          value: 'Received (stand ____)'
        }
      }
    },
    PARKING: {
      id: 'phase_parking',
      items: {
        PARKING_BRAKE: {
          id: 'parking_parking_brake',
          title: 'Parking brake / ACCU PRESS',
          value: 'ON / green band'
        },
        ANTI_ICE: {
          id: 'parking_anti_ice',
          title: 'Anti-ice',
          value: 'OFF'
        },
        APU_BLEED_EXT_PWR: {
          id: 'parking_apu_bleed_ext_pwr',
          title: 'APU bleed / EXT PWR',
          value: 'ON'
        },
        ENG_MASTERS: {
          id: 'parking_eng_masters',
          title: 'ENG 1 + 2 masters',
          value: 'OFF'
        },
        SLIDES: {
          id: 'parking_slides',
          title: 'Slides',
          value: 'DISARMED'
        },
        SEAT_BELTS: {
          id: 'parking_seat_belts',
          title: 'Seat belts',
          value: 'OFF'
        },
        EXT_LIGHTS: {
          id: 'parking_ext_lights',
          title: 'RWY turn off / WING / Nose lights',
          value: 'OFF'
        },
        BEACON: {
          id: 'parking_beacon',
          title: 'Beacon',
          value: 'OFF (engines spooled down)'
        },
        FUEL_PUMPS: {
          id: 'parking_fuel_pumps',
          title: 'Fuel pumps',
          value: 'OFF'
        },
        TRANSPONDER: {
          id: 'parking_transponder',
          title: 'Transponder',
          value: 'STBY'
        },
        BRAKE_FANS: {
          id: 'parking_brake_fans',
          title: 'Brake fans',
          value: 'OFF'
        }
      }
    },
    SECURING: {
      id: 'phase_securing',
      items: {
        PARKING_BRAKE: {
          id: 'securing_parking_brake',
          title: 'Parking brake',
          value: 'ON'
        },
        CREW_OXYGEN: {
          id: 'securing_crew_oxygen',
          title: 'Crew oxygen',
          value: 'OFF'
        },
        ADIRS: {
          id: 'securing_adirs',
          title: 'ADIRS 1, 3, 2',
          value: 'OFF'
        },
        EXT_LIGHTS: {
          id: 'securing_ext_lights',
          title: 'Exterior lights',
          value: 'OFF'
        },
        APU_BLEED: {
          id: 'securing_apu_bleed',
          title: 'APU bleed',
          value: 'OFF'
        },
        APU_MASTER: {
          id: 'securing_apu_master',
          title: 'APU master',
          value: 'OFF'
        },
        SIGNS: {
          id: 'securing_signs',
          title: 'Emergency exit lights / No smoking',
          value: 'OFF'
        },
        EXT_PWR: {
          id: 'securing_ext_pwr',
          title: 'External power',
          value: 'OFF'
        },
        BATTERIES: {
          id: 'securing_batteries',
          title: 'Batteries 1 + 2',
          value: 'OFF'
        }
      }
    }
  }
};

export default checklist;
