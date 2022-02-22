import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";
import EditSupplier from "./EditSupplier";
import {
  SupplierInput,
  SuppliersDocument,
  SuppliersQuery,
  useAddSupplierMutation,
} from "../../generated/graphql";

interface Props {}

const AddSupplier: FC<Props> = () => {
  const { t } = useTranslation();
  const [supplier, setSupplier] = useState<SupplierInput | null>(null);

  const [addSupplier, { loading, error }] = useAddSupplierMutation({
    update(cache, { data }) {
      const new_supplier = data?.addSupplier.supplier;
      const result = cache.readQuery<SuppliersQuery>({
        query: SuppliersDocument,
      });
      if (!result || !result.suppliers || !result.suppliers) {
        return cache.writeQuery({
          query: SuppliersDocument,
          data: { suppliers: [supplier] },
        });
      }
      cache.writeQuery({
        query: SuppliersDocument,
        data: { suppliers: [...result.suppliers, new_supplier] },
      });
    },
  });

  const handleClickOpen = () => {
    setSupplier(
      () =>
        ({
          name: "",
          url: "",
        } as SupplierInput)
    );
  };

  const handleClose = () => {
    setSupplier(null);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setSupplier((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave: MouseEventHandler = (event) => {
    event.preventDefault();
    if (!supplier) return;
    addSupplier({
      variables: { ...supplier },
      onError: (err) => console.log("error", err),
      onCompleted: () => {
        setSupplier(null);
      },
    });
  };

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>{`Submission error! ${error.message}`}</p>;

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        {t("_add_supplier")}
      </Button>
      <Dialog
        open={!!supplier}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t("_add_new_supplier")}
        </DialogTitle>
        <DialogContent>
          {supplier && (
            <EditSupplier supplier={supplier} onChange={handleChange} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleSave} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddSupplier;
