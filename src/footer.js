import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';import NavBarHeading from './styles/stylesNavBar';
import GitHubIcon from '@mui/icons-material/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
      <Link color="inherit" href="https://github.com/Orelso">
        <GitHubIcon/>
      </Link>{' '}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />
      <Container component="main"  maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Gotta Catch em All
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Click the Pokeball to learn more about Pokemon.
            <Link color="inherit" href="https://www.serebii.net/">
        <CatchingPokemonTwoToneIcon/>
      </Link>{' '}
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

