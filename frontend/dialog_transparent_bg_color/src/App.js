import './App.css';

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function App() {
  return (
    <div className="App">
      <Dialog open={"true"} sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' } }} >
        <DialogContent>
          <DialogContentText>hello world</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
