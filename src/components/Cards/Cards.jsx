import React from 'react'
import style from './Cards.module.css'

import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    //the value is undefind at first
    if(!confirmed){
        return 'Loading...'
    }

    return(
        <div className={style.container}>
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card}>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0}  end={confirmed.value}  duration={1.5}  separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </Grid>

                <Grid item component={Card}>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp start={0}  end={recovered.value}  duration={1.5}  separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                </Grid>

                <Grid item component={Card}>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0}  end={deaths.value}  duration={1.5}  separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;