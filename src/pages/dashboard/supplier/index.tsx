import { Box, TextField } from "@mui/material";
import Fuse from "fuse.js";
import {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import AddSupplier from "../../../components/supplier/AddSupplier";
import SupplierView from "../../../components/supplier/SupplierView";
import { Supplier, useSuppliersQuery } from "../../../generated/graphql";

interface Props {}

const options = {
  keys: ["name", "url"],
  threshold: 0.0,
  minMatchCharLength: 1,
  ignoreLocation: true,
};

const Suppliers: FC<Props> = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useSuppliersQuery();
  const [suppliers, setSuppliers] = useState<Supplier[] | null>(null);

  useEffect(() => {
    if (!data) return;
    const { suppliers } = data;
    setSuppliers(suppliers);
  }, [data]);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    if (!data) return;
    const { suppliers } = data;
    const { value } = event.target;
    if (!value) {
      return setSuppliers(suppliers);
    }

    const fuse = new Fuse(suppliers, options);
    setSuppliers(() => fuse.search(value).map((res) => res.item));
  };

  if (loading || error) return <>loading ...</>;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          m: 1,
          p: 1,
          alignItems: "center",
        }}
      >
        <TextField placeholder={t("_search")} onChange={handleSearch} />
        <Box sx={{ml: 1}}><AddSupplier /></Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", flexFlow: "wrap" }}
      >
        {suppliers &&
          suppliers.map((supplier) => (
            <SupplierView key={supplier.id} supplier={supplier} />
          ))}
      </Box>
    </>
  );
};

export default Suppliers;
