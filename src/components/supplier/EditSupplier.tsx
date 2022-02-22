import { Box, TextField } from "@mui/material";
import { FC, ChangeEventHandler } from "react";
import { useTranslation } from "react-i18next";
import { Supplier, SupplierInput } from "../../generated/graphql";

interface Props {
  supplier: Supplier | SupplierInput;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const EditSupplier: FC<Props> = ({ supplier, onChange }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <TextField
        label={t("_name")}
        sx={{ m: 1, p: 1 }}
        value={supplier.name}
        name="name"
        onChange={onChange}
      />
      <TextField
        label={t("_url")}
        sx={{ m: 1, p: 1 }}
        value={supplier.url}
        name="url"
        onChange={onChange}
      />
    </Box>
  );
};

export default EditSupplier;
