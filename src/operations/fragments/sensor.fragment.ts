import { gql } from "@apollo/client";

export const SENSOR_FRAGMENT = gql`
  fragment info on Sensor {
    sensor_model
  }
  fragment date_info on Sensor {
    entry_year
    end_of_life
  }
  fragment dimension_info on Sensor {
    housing_x
    housing_y
  }
`;
