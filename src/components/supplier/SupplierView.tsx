import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { FC } from "react";
import { Supplier } from "../../generated/graphql";

interface Props {
  supplier: Supplier;
}

const SupplierView: FC<Props> = ({ supplier }) => {
  return (
    <Card sx={{ minWidth: "20%", m: 1, p: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {supplier.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{supplier.url}</Button>
      </CardActions>
    </Card>
  );
};

export default SupplierView;
