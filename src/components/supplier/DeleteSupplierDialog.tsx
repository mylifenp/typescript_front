import { FC, useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import {
  Supplier,
  SuppliersDocument,
  SuppliersQuery,
  useDeleteSupplierMutation,
} from "../../generated/graphql";
import { useTranslation } from "react-i18next";

interface Props {
  supplier: Supplier;
}

const DeleteSupplierDialog: FC<Props> = ({ supplier }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const [deleteSupplier, { error, loading }] = useDeleteSupplierMutation({
    update(cache, { data }) {
      const existingSuppliersList = cache.readQuery<SuppliersQuery>({
        query: SuppliersDocument,
      });
      if (!existingSuppliersList || !existingSuppliersList.suppliers.length)
        return;
      const newSuppliersList = existingSuppliersList.suppliers.filter(
        (item) => item.id === supplier.id
      );
      cache.writeQuery({
        query: SuppliersDocument,
        data: { suppliers: newSuppliersList },
      });
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // TODO save
  // const handleSave

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`${t("_are_you_sure_delete")} ${
          supplier.name
        }`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t("_are_you_sure")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteSupplierDialog;
