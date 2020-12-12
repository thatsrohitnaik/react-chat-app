import React from "react";
import Grid from "@material-ui/core/Grid";
import History from "../components/history/";
import Panel from "../components/panel/";

export default function Main(props) {
  console.log(props);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <History />
      </Grid>
      <Grid item xs={12}>
        <Panel />
      </Grid>
    </Grid>
  );
}
