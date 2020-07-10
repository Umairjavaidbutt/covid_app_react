import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import {fetchData} from './api';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(12),
    },
  },
}));

export default function GlobalData() {
  const classes = useStyles();

  const loading = "Loading...";
  const [globalData, setGlobalData] = useState();
  
  useEffect(() => {
           
        const globaldata = async () => {
          setGlobalData(await fetchData());

        }
      globaldata();
    },[setGlobalData]
  )

  if (!globalData) {
    return (loading)
  }

  return (
    <div className={classes.root}>
        <Paper elevation={3} >
            <Typography variant="h4" gutterBottom style={{color:'green'}}>
                <CountUp start={0} end={globalData.confirmed.value} duration={1} separator="," />
            </Typography>
            <Typography variant="body1" gutterBottom style={{fontWeight:'bold'}}>
            Global
            </Typography>
        </Paper>
         
        <Paper elevation={3}>
            <Typography variant="h4" gutterBottom style={{color:'green'}}>
                <CountUp start={0} end={globalData.recovered.value} duration={1} separator="," />
            </Typography>
            <Typography variant="body1" gutterBottom style={{fontWeight:'bold'}}>
                Recovered
            </Typography>
        </Paper>  
        <Paper elevation={3}>
            <Typography variant="h4" gutterBottom style={{color:'red'}}>
            <CountUp start={0} end={globalData.deaths.value} duration={1} separator="," />
            </Typography>
            <Typography variant="body1" gutterBottom style={{fontWeight:'bold'}}>
                Deaths
            </Typography>
        </Paper>
    </div>
  );
}
