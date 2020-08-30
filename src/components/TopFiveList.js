import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    justifyContent: "space-around",
    overflow: "scroll",
    minHeight: 600,
    width: 900
  },
  name: {
    fontWeight: "bold"
  }
});

export default function CountedList(props) {
    const classes = useStyles(props);
  const {data} = props

 let sortedData = data
 let topFive = []

 sortedData.sort(function(a, b){return b.count - a.count});
  

sortedData.slice([0], [5]).map((data, i) => {
    return topFive.push(data);
  });

  
    
  return (
    <div className={classes.root}>
      <Container component="main">
        <Grid container>
            <h2>List of Top 5 Outward Codes with the most Surgeries</h2>
        {topFive.map(area => (
          <ListItem key={area.key}>
          <ListItemText
            classes={{ root: classes.name }}
            primary={`Outward Code: ${area.key}`}
          />
          <ListItemText
              classes={{ root: classes.name }}
              primary={`Amount of Surgeries in Area : ${area.count}`}
            />
             <ListItemText
              classes={{ root: classes.name }}
              primary={`Percentage Value : ${area.percentage}%`}
            />
        </ListItem>
        ))}
          
        </Grid>
      </Container>
    </div>
  );
}
