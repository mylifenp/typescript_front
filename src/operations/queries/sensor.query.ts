import { gql } from "@apollo/client";
import { SENSOR_FRAGMENT } from "../fragments/sensor.fragment";

export const SENSORS = gql`
  query Sensors {
    sensors {
      id
      ...info
      ...date_info
      ...dimension_info
    }
  }
  ${SENSOR_FRAGMENT}
`;
