import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Paper,
} from "@mui/material";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import NavBarHeading from "./styles/stylesNavBar";
import StyleIcon from "./styles/stylesIcon";
import BasicModal from "./view";
import StickyFooter from "./footer";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ backgroundColor: " #2a75bb" }}>
        <Toolbar>
          <StyleIcon>
            <CatchingPokemonTwoToneIcon />
          </StyleIcon>
          <NavBarHeading>
            <Typography sx={{ color: "#ffcb05" }} variant="h4">
              Pokemon
            </Typography>
          </NavBarHeading>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              sx={{ color: "#ffcb05", textShadow: "2px 2px 5px #3c5aa6" }}
              gutterBottom
            >
              Pokedex
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello this is a pokedex of all the Pokemon that have ever
              exsisted. Are you ready to be a Pokemon Master like no one ever
              was.
            </Typography>
            <div>
              <Grid container spacing={4} justifyContent="center">
                <Grid item>
                  <Button
                    onClick={() => window.location.reload()}
                    variant="contained"
                    color="primary"
                  >
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
        <Container maxWidth="md" sx={{ padding: "20px 0" }}>
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <CardMedia
                    sx={{ paddingTop: "98%" }}
                    onclick="enlargeImg(this)"
                    image={`https://lorempokemon.fakerapi.it/pokemon/${
                      Math.floor(Math.random() * 898) + 1
                    }`}
                    title="Image title"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                      Pokemon Name
                    </Typography>
                    <Typography>
                      Cranidos wailmer trubbish cresselia pancham shieldon aipom
                      dewpider. Vigoroth staravia magnezone budew latios foongus
                      trapinch. Terrakion huntail torterra cubone zweilous
                      dragonair.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <BasicModal />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <StickyFooter></StickyFooter>
      {/* <footer sx={{backgroundColor: 'primary', padding: '50px 0'}}>
                    <Typography variant="h6" align='center' gutterBottom>
                            Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary">
                            info
                    </Typography>

            </footer> */}
    </>
  );
};

export default App;
