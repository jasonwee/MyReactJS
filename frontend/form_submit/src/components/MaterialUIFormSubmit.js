import React, { useReducer } from "react";

import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


//import { makeStyles } from "@material-ui/core/styles";
import styles from './styles'
import useClasses from './Hook'


export function MaterialUIFormSubmit(props) {


  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: ""
    }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };

    fetch("https://pointy-gauge.glitch.me/api/form", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  //const classes = useStyles();
  const classes = useClasses(styles)

  console.log(props);

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            id="margin-normal"
            name="name"
            defaultValue={formInput.email}
            className={classes.textField}
            helperText="Enter your full name"
            onChange={handleInput}
          />
          <TextField
            label="Email"
            id="margin-normal"
            name="email"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="e.g. name@gmail.com"
            onChange={handleInput}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Subscribe <Icon className={classes.rightIcon}></Icon>
          </Button>
        </form>
      </Paper>
    </div>
  );
}

