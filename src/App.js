import React, { useEffect, useState } from 'react'
import { Container, AppBar, Grid, Grow, Typography } from "@material-ui/core";
import memories from "./images/memories.png";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

export default function App() {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item sx={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item sx={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />    
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
