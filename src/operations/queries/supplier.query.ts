import { gql } from "@apollo/client";
import { SUPPLIER_FRAGMENT } from "../fragments/supplier.fragment";

export const SUPPLIERS = gql`
  query Suppliers {
    suppliers {
      id
      ...supplier_info
    }
  }
  ${SUPPLIER_FRAGMENT}
`;
