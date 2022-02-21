import { FC } from "react";
import SupplierView from "../../../components/supplier/SupplierView";
import { useSuppliersQuery } from "../../../generated/graphql";

interface Props {}

const Suppliers: FC<Props> = () => {
  const { data, loading, error } = useSuppliersQuery();
  if (loading || error) return <>loading ...</>;

  return (
    <>
      {data?.suppliers.map((supplier) => (
        <SupplierView key={supplier.id} supplier={supplier} />
      ))}
    </>
  );
};

export default Suppliers;
