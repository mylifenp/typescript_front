import { gql } from "@apollo/client";

export const SUPPLIER_FRAGMENT = gql`
  fragment supplier_info on Supplier {
    id
    name
    url
  }
`;