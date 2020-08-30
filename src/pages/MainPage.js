import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircleLoadAnimation from "../components/LoadingCircle";
import Chart from "../components/Chart";
import { Box, Grid } from "@material-ui/core";
import CountedList from "../components/TopFiveList";
import {getData} from "../helpers/HelperFunctions"
import SurgeryTable from "../components/SurgeryTable"


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "white"
  }
});

export default function MainPage() {
  const [stage, setStage] = useState("loading");
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const result = getData();
      setData(result);
      setStage("ready")
    }, 500);
  }, []);

  

  const renderReady = () => (
    <div className={classes.root}>
      <Box>
        <Chart data={data} />
        <Grid container>
        <SurgeryTable data={data} />
        <CountedList data={data}/>
      </Grid>
      </Box>
      
    </div>
  );

  const renderLoading = () => (
    <div className={classes.root}>
        <CircleLoadAnimation />
      
    </div>
  );

  let content = null;
  if (stage === "loading") {
    content = renderLoading();
  } else {
    content = renderReady();
  }

  return content;
}
