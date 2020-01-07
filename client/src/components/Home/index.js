import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { FullColumn, FullRow } from '../../Layout'
import { Row } from 'mui-flex-layout'
import { employs } from './employs';

const useStyles = makeStyles({
    main: {
        width: '100%',
        height: '60%',
    },
    employs: {
        flexWrap: 'nowrap',
        width: '100%',
        height: '40%',
        justifyContent: 'center'
    },
    card: {
        margin: '10px',
        width: '250px',
        height: '250px'
    },
    cardImg: {
        width: '100%',
        height: '75%',
    },
});

export default () => {
    const classes = useStyles();

    const cards = () => employs.map(x =>
        <Card key={x.name} className={classes.card}>
            <CardMedia image={x.url} className={classes.cardImg} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2"> {x.name} - {x.job} </Typography>
            </CardContent>
        </Card>
    )

    return (
        <FullColumn>
            <Row className={classes.main}>

            </Row>
            <Row className={classes.employs}>
                {cards()}
            </Row>
        </FullColumn>
    )
}