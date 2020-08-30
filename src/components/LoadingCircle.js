import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    

  },
}));

export default function CircleLoadAnimation() {
  const classes = useStyles();

  const size = 300

  return (
    <div className={classes.root}>
      <CircularProgress size={size}/>
    </div>
  );
}