import { gql } from "@apollo/client";
import { SUPPLIER_FRAGMENT } from "../fragments/supplier.fragment";

export const ADD_SUPPLIER = gql`
  mutation AddSupplier($name: String!, $url: String) {
    addSupplier(input: { name: $name, url: $url }) {
      success
      supplier {
        ...supplier_info
      }
    }
  }
  ${SUPPLIER_FRAGMENT}
`;
