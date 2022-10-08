import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Paper } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import NavBarHeading from './styles/stylesNavBar';
import StyleIcon from './styles/stylesIcon';

const cards =[1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {

    return (
        <>
            <CssBaseline />  
            <AppBar position="relative"> 
                <Toolbar>
                    <StyleIcon>
                    <PhotoCameraIcon />
                    </StyleIcon>
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
                                        Find Pokemon
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Collect pokemon
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container maxWidth="md" sx={{padding:'20px 0'}}>
                    <Grid container spacing={4}>
                        {cards.map(() =>(
                             <Grid item xs={12} sm={6} md={4}>
                             <Card sx={{height: '100%', display: 'flex', flexDirection: 'column', width: '100%'}}>
                                 <CardMedia 
                                 sx={{paddingTop: '98%'}}
                                 image="https://lorempokemon.fakerapi.it/pokemon"
                                 title="Image title"
                                 />
                                 <CardContent sx={{flexGrow: 1}}>
                                     <Typography gutterBottom variant="h5">
                                         Heading
                                     </Typography>
                                     <Typography>
                                         This is a social media card. You can use this to describe content.
                                     </Typography>
                                 </CardContent>
                                 <CardActions>
                                     <Button size="small" color="primary">View</Button>
                                     <Button size="small" color="primary">Edit</Button>
                                 </CardActions>
                             </Card>
                    </Grid>
            ))}   
                    </Grid>
                </Container>
            </main>
            <footer sx={{backgroundColor: 'primary', padding: '50px 0'}}>
                    <Typography variant="h6" align='center' gutterBottom>
                            Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary">
                            info
                    </Typography>

            </footer>
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