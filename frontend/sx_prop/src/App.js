import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const style = { 
  mt: 2,
  width: {
    sm: 200,
    md: 300,
  },
  backgroundColor: {
    xs: "secondary.light",
    sm: "#0000ff"
  },
  boxShadow: 6,
};

function App() {
  return (
    <Stack>
      <TextField
        sx={{...style, mb: 2, border: "solid black 2px", "& .MuiFilledInput-input": {color: "white"} }}
        id="standard-basic"
        label="Filled"
        variant="filled"
      />
      <TextField
        sx={{
          ...style, 
          "& .MuiOutlinedInput-root:hover" : {
            "& > fieldset" : {
              borderColor: "orange"
            }
          }
        }}
        id="standard-basic"
        label="standard"
        variant="outlined"
      />
    </Stack>
  );
}

export default App;
