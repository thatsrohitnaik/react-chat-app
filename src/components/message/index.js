import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "2px",
    width: "50%",
    backgroundColor: "aquamarine",
    padding: "5px"
  }
}));

export default function Message(props) {
  const classes = useStyles();
  const { senderId, message } = props.data;
  const userId = props.userId;
  const value = senderId === userId;

  return (
    <Alert
      className={classes.root}
      style={
        ({ backgroundColor: value ? "aquamarine" : "green" },
        { marginLeft: senderId == userId ? "auto" : null })
      }
      variant="filled"
      severity=""
    >
      {message}
    </Alert>
  );
}
