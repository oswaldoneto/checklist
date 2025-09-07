const checklist = {
  FLIGHT_PHASES: {
    "BEFORE_START": {
      id: "phase_before_start",
      items: {
        PREFLIGHT_TESTS: { id: "before_start_preflight_tests", title: "PRE-FLIGHT & TESTS", value: "COMPLETED" },
        OXYGEN_BTL: { id: "before_start_oxygen_btl", title: "OXYGEN BTL", value: "PUSH, PAX AUTO" },
        OXYGEN_PRESS: { id: "before_start_oxygen_press", title: "OXYGEN PRESS", value: "DISPATCH" },
        ELEC_PANEL: { id: "before_start_elec_panel", title: "ELEC PANEL", value: ">27 VOLTS/GPU AS RQRD" },
        BLEED_PANEL: { id: "before_start_bleed_panel", title: "BLEED PANEL", value: "ALL AUTO" },
        FUEL_PANEL: { id: "before_start_fuel_panel", title: "FUEL PANEL", value: "PUMPS AUTO/XFEED OFF" },
        HYD_PUMPS_SOV: { id: "before_start_hyd_pumps_sov", title: "HYD PUMPS SOV", value: "BOTH OPEN" },
        PUSHER_CUTOUT: { id: "before_start_pusher_cutout", title: "PUSHER CUTOUT", value: "PUSHED OUT" },
        ICE_PROT_ADS: { id: "before_start_ice_prot_ads", title: "ICE PROTECTION/ADS", value: "OFF/AS RQRD" },
        PRESSURIZATION_AC_PNL: { id: "before_start_press_ac_pnl", title: "PRESSURIZATION & A/C PNL", value: "CHECKED" },
        ENGINE_FIRE_PANEL: { id: "before_start_engine_fire_panel", title: "ENGINE FIRE PANEL", value: "PUSHED OUT/BTL OFF" },
        START_STOP_EIS: { id: "before_start_start_stop_eis", title: "START/STOP & EIS", value: "STOP & OFF 2x" },
        IGNITION: { id: "before_start_ignition", title: "IGNITION", value: "BOTH AUTO" },
        THRUST_LEVERS: { id: "before_start_thrust_levers", title: "THRUST LEVERS", value: "IDLE" },
        FLAPS_SPEED_BRAKE: { id: "before_start_flaps_speed_brake", title: "FLAPS & SPEED BRAKE", value: "UP & CLOSED" },
        PARKING_BRAKE: { id: "before_start_parking_brake", title: "PARKING BRAKE", value: "SET" },
        DOORS: { id: "before_start_doors", title: "DOORS", value: "CLOSED" }
      }
    },
    "AFTER_START": {
      id: "phase_after_start",
      items: {
        GPU: { id: "after_start_gpu", title: "GPU", value: "DISC/AS RQRD" },
        ELEC_EMER: { id: "after_start_elec_emer", title: "ELEC EMER", value: ">23.5V/PUSHED OUT" },
        STALL_PROTECTION: { id: "after_start_stall_protection", title: "STALL PROTECTION", value: "TESTED" },
        T_O_DATA: { id: "after_start_to_data", title: "T/O DATA", value: "SET" },
        TRIMS: { id: "after_start_trims", title: "TRIMS", value: "RUD & YAW 0/PITCH GREEN" },
        FLIGHT_CTL_SPEED_BRAKE: { id: "after_start_flight_ctl_speed_brake", title: "FLIGHT CTL + SPEED BRAKE", value: "CHECKED" },
        ICE_PROTECTION: { id: "after_start_ice_protection", title: "ICE PROTECTION", value: "AS RQRD" },
        FLAPS: { id: "after_start_flaps", title: "FLAPS", value: "_____ T/O" }
      }
    },
    "BEFORE_TAKE_OFF": {
      id: "phase_before_takeoff",
      items: {
        T_O_CONFIG: { id: "before_takeoff_to_config", title: "TAKEOFF CONFIG", value: "TAKEOFF OK" },
        CAS: { id: "before_takeoff_cas", title: "CAS", value: "CHECKED" },
        SIGNS: { id: "before_takeoff_signs", title: "SIGNS", value: "PED-BELTS/OFF" },
        YAW_DAMPER: { id: "before_takeoff_yaw_damper", title: "YAW DAMPER", value: "OFF" },
        ICE_PROTECTION_SET: { id: "before_takeoff_ice_protection_set", title: "ICE PROTECTION", value: "(AS RQRD: TESTED & SET)" },
        ATR: { id: "before_takeoff_atr", title: "ATR", value: "GREEN" },
        PAX: { id: "before_takeoff_pax", title: "PAX", value: "ADVISED" },
        EXT_LIGHTS: { id: "before_takeoff_ext_lights", title: "EXT. LIGHTS", value: "AS RQRD" },
        XPDR: { id: "before_takeoff_xpdr", title: "XPDR", value: "ALT" }
      }
    },
    "AFTER_TAKE_OFF": {
      id: "phase_after_take_off",
      items: {
        LANDING_GEAR: { id: "after_takeoff_landing_gear", title: "LANDING GEAR", value: "UP" },
        FLAPS: { id: "after_takeoff_flaps", title: "FLAPS", value: "UP" },
        YAW_DAMPER: { id: "after_takeoff_yaw_damper", title: "YAW DAMPER", value: "ON" },
        THRUST_LEVERS: { id: "after_takeoff_thrust_levers", title: "THRUST LEVERS", value: "MCT" },
        PRESSURIZATION: { id: "after_takeoff_pressurization", title: "PRESSURIZATION", value: "CHECKED" },
        ALTIMETERS: { id: "after_takeoff_altimeters", title: "ALTIMETERS", value: "X-CHECKED" },
        ICE_PROTECTION: { id: "after_takeoff_ice_protection", title: "ICE PROTECTION", value: "AS RQRD" },
        EXT_LIGHTS: { id: "after_takeoff_ext_lights", title: "EXT. LIGHTS", value: "AS RQRD" }
      }
    },
    "DESCENT": {
      id: "phase_descent",
      items: {
        APPROACH_BRIEFING: { id: "descent_approach_briefing", title: "APPROACH BRIEFING", value: "COMPLETED" },
        LANDING_DATA: { id: "descent_landing_data", title: "LANDING DATA", value: "SET" },
        WINDSHIELD_HEAT: { id: "descent_windshield_heat", title: "WINDSHIELD HEAT", value: "ON" },
        SIGNS_OUTLET: { id: "descent_signs_outlet", title: "SIGNS/OUTLET", value: "AS RQRD" },
        ICE_PROTECTION: { id: "descent_ice_protection", title: "ICE PROTECTION", value: "AS RQRD" }
      }
    },
    "APPROACH": {
      id: "phase_approach",
      items: {
        ALTIMETERS: { id: "approach_altimeters", title: "ALTIMETERS", value: "X-CHECKED" },
        DA_BARO: { id: "approach_da_baro", title: "DA(BARO)", value: "SET, ______ ft" },
        XFEED_KNOB: { id: "approach_xfeed_knob", title: "XFEED KNOB", value: "OFF" },
        EXT_LIGHTS: { id: "approach_ext_lights", title: "EXT. LIGHTS", value: "SET" },
        SIGNS_OUTLET: { id: "approach_signs_outlet", title: "SIGNS/OUTLET", value: "AS RQRD" },
        PAX: { id: "approach_pax", title: "PAX", value: "ADVISED" }
      }
    },
    "BEFORE_LANDING": {
      id: "phase_before_landing",
      items: {
        LANDING_GEAR: { id: "before_landing_landing_gear", title: "LANDING GEAR", value: "DOWN, 3 GREEN" },
        FLAPS: { id: "before_landing_flaps", title: "FLAPS", value: "SET ______" },
        YAW_DAMPER: { id: "before_landing_yaw_damper", title: "YAW DAMPER", value: "OFF" },
        SPEED_BRAKE: { id: "before_landing_speed_brake", title: "SPEED BRAKE", value: "CLOSED" },
        GO_AROUND_ALT: { id: "before_landing_go_around_alt", title: "GO AROUND ALTITUDE", value: "SET" },
        ICE_PROTECTION: { id: "before_landing_ice_protection", title: "ICE PROTECTION", value: "AS RQRD" }
      }
    },
    "AFTER_LANDING": {
      id: "phase_after_landing",
      items: {
        FLAPS_SPEED_BRAKE: { id: "after_landing_flaps_speed_brake", title: "FLAPS + SPEED BRAKE", value: "UP & CLOSED" },
        EXT_LIGHTS: { id: "after_landing_ext_lights", title: "EXT. LIGHTS", value: "SET" },
        ICE_PROTECTION: { id: "after_landing_ice_protection", title: "ICE PROTECTION", value: "AS RQRD" },
        CABIN_PRESSURE: { id: "after_landing_cabin_pressure", title: "CABIN PRESSURE", value: "ALT AD (0.2 PSI DIFF MAX)" }
      }
    }
  }
};

export default checklist;


