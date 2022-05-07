import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

export default function MyForm() {

  const [staffNumber, setStaffNumber] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleCreate = (e) => {
    e.preventDefault();
    console.log(staffNumber);
    setStaffNumber("");
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>open</Button>
      <Dialog title="Dialog" open={open}>
        <DialogContent>
          <form onSubmit={handleCreate} id="myform">
            <TextField
              value={staffNumber}
              onChange={(e) => setStaffNumber(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" form="myform">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}
