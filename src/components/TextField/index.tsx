import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

interface TTextFieldProps extends TextFieldProps {}

export default function TTextField(props: TTextFieldProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField {...props}> </TextField>
    </div>
  );
}
