import { gql } from "@apollo/client";

export const SENSOR_TYPE_FRAGMENT = gql`
  fragment sensor_type_info on SensorType {
    name
  }
`;
