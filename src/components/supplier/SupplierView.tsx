import { Card, CardContent, Typography, CardActions, Box } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Supplier } from "../../generated/graphql";
import DeleteSupplierDialog from "./DeleteSupplierDialog";
import EditSupplierDialog from "./EditSupplierDialog";

interface Props {
  supplier: Supplier;
}

const SupplierView: FC<Props> = ({ supplier }) => {
  const { t } = useTranslation();

  return (
    <Card sx={{ minWidth: "20%", m: 1, p: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {supplier.name}
        </Typography>
        <Typography>{supplier.url}</Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", justifyContent: "flex-end", flexDirection: 'row' }}>
          <EditSupplierDialog supplier={supplier} />
          <DeleteSupplierDialog supplier={supplier} />
        </Box>
      </CardActions>
    </Card>
  );
};

export default SupplierView;
