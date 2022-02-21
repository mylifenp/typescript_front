import { gql } from "@apollo/client";

export const SENSOR_FRAGMENT = gql`
  fragment sensor_info on Sensor {
    id
    sensor_model
    pixel_lens_cra
    glass_index
    glass_lid_thickness
    focal_plane_from_bottom
    housing_glass
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
    center_shift_x
    center_shift_y
    optical_area_x
    optical_area_y
    exact_optical_area_diagonal
    aspect_ratio
    next_optical_class
  }
  fragment sensor_other_info on Sensor {
    housing_glass
    other_info
    alternative_designation
  }
`;
