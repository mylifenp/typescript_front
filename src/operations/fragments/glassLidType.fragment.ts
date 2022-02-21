import { gql } from "@apollo/client";

export const GLASS_LID_TYPE_FRAGMENT = gql`
  fragment glass_lid_type_info on GlassLidType {
    id
    name
  }
`;
