import { gql } from "@apollo/client";

export const SENSOR_FRAGMENT = gql`
  fragment sensor_info on Sensor {
    id
    sensor_model
  }
  fragment sensor_date_info on Sensor {
    entry_year
    end_of_life
  }
  fragment sensor_dimension_info on Sensor {
    x_resolution
    y_resolution
    pixel_size
    housing_x
    housing_y
    optical_center_x
    optical_center_y
    optical_area_x
    optical_area_y
    exact_optical_area_diagonal
  }
  fragment sensor_other_info on Sensor {
    housing_glass
  }
`;
