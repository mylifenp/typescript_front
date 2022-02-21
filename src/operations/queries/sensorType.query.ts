import { gql } from "@apollo/client";
import { SENSOR_TYPE_FRAGMENT } from "../fragments/sensorType.fragment";

export const SENSOR_TYPE = gql`
  query SensorTypes {
    sensorTypes {
      id
      ...sensor_type_info
    }
  }
  ${SENSOR_TYPE_FRAGMENT}
`;
