import { FC } from "react";
import { Supplier } from "../../generated/graphql";

interface Props {
  supplier: Supplier;
}

const SupplierView: FC<Props> = ({ supplier }) => {
  return <>{supplier.name}</>;
};

export default SupplierView;
