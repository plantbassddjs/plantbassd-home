import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'linear-gradient(to right bottom, #d9689e, #f9ba63)',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

export default function FooterComponent() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <footer className={classes.footer}>

            <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            p={1}
            m={1}
            sx={{ maxWidth: 300 }}
        >

            <Box p={1}>
                <Link
                    href="https://www.instagram.com/plantbassddjs/" 
                    variant="h6" align="center" 
                    color="textSecondary" component="p">
                    
                    <em className="fab fa-instagram"></em> Instagram 
                </Link>
            </Box>

            <Box p={1}>
                <Link
                    href="mailto: plantbassddjs@gmail.com" 
                    variant="h6" align="center" 
                    color="textSecondary" component="p">
                    
                        <em className="far fa-envelope"></em> Email Us
                </Link>
            </Box>

            <Box p={1}>
                <Link
                    href="https://open.spotify.com/embed/playlist/5skAgzUfGmZLwrOPNLnGVf"
                    variant="h6" align="center" 
                    color="textSecondary" component="p">
                    
                        <em className="fab fa-spotify"></em> Spotify
                </Link>
            </Box>

            <Box p={1}>
                <Link
                    href="https://soundcloud.com/oisin-campbell" 
                    variant="h6" align="center" 
                    color="textSecondary" component="p">
                    
                        <em className="fab fa-soundcloud"></em> Soundcloud
                </Link>
            </Box>
        </Box>

            <Typography variant="subtitle1" color="textSecondary" align="center">
                {'© '} {new Date().getFullYear()} {" Copyright: Plant Bass'd DJs"}
            </Typography>
        </footer>

    </React.Fragment>
  );
}
