import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

interface TButtonProps extends ButtonProps {
  LabelText?: String;
}

export default function TButton(props: TButtonProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" {...props}>
        {props.LabelText}
      </Button>
    </div>
  );
}
