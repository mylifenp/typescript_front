import { gql } from "@apollo/client";

export const COMPLETED_FRAGMENT = gql`
  fragment completed_info on Complete {
    id
    name
  }
`;