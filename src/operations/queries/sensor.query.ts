import { gql } from "@apollo/client";
import { COMPLETED_FRAGMENT } from "../fragments/completed.fragments";
import { GLASS_LID_TYPE_FRAGMENT } from "../fragments/glassLidType.fragment";
import { SENSOR_FRAGMENT } from "../fragments/sensor.fragment";
import { SENSOR_TYPE_FRAGMENT } from "../fragments/sensorType.fragment";
import { SUPPLIER_FRAGMENT } from "../fragments/supplier.fragment";

export const SENSORS = gql`
  query Sensors {
    sensors {
      ...sensor_info
      ...sensor_date_info
      ...sensor_dimension_info
      ...sensor_other_info
      complete {
        ...completed_info
      }
      sensor_type {
        ...sensor_type_info
      }
      glass_lid_type {
        ...glass_lid_type_info
      }
      supplier {
        ...supplier_info
      }
    }
  }
  ${SENSOR_FRAGMENT}
  ${COMPLETED_FRAGMENT}
  ${SENSOR_TYPE_FRAGMENT}
  ${GLASS_LID_TYPE_FRAGMENT}
  ${SUPPLIER_FRAGMENT}
`;
