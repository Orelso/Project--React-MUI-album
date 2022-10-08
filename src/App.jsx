import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Paper } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { spacing, styled } from '@mui/system';

import NavBarHeading from './styles/stylesNavBar'
import Icon from './styles/stylesIcon';


const App = () => {

    return (
        <>
            <CssBaseline />  
            <AppBar position="relative"> 
                <Toolbar>
                    <Icon>
                    <PhotoCameraIcon />
                    </Icon>
                    <NavBarHeading>
                    <Typography variant="h4">Pokemon</Typography>
                    </NavBarHeading>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Pokedex</Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>Hello this is a pokedex of all the Pokemon that have ever exsisted. Are you ready to be a Pokemon Master like no one ever was.</Typography>
                        <div>
                            <Grid container spacing={4} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        poop
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        caca
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container maxWidth="md">
                    
                </Container>
            </main>
        </>
    )
}

export default App;



/* 1.cssbaseline = default basic stylings.
   2.appbar = navigation.
   3.toolbar = blue line.
   4.icon = icon image.
   5.typography = piece of text.
   6.container = contains things insde of it.
   7.grid = position content.








*/