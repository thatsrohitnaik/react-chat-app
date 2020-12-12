import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "2px",
    backgroundColor: "cornflowerblue",
    width: "50%",
    padding: "5px"
  }
}));

export default function Message(props) {
  const classes = useStyles();

  const { senderId, receiverId, message } = props.data;
  const userId = props.userId;

  console.log(senderId, receiverId, message);
  console.log(userId);

  return (
    <Alert
      className={classes.root}
      style={{ marginLeft: senderId == userId ? "auto" : null }}
      variant="filled"
      severity="none"
    >
      {message}
    </Alert>
  );
}
