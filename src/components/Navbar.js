import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import SearchIcon from '@material-ui/icons/Search';

import logo from '../assets/img/logo_circle.png';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.90),'&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.80),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch', '&:focus': {
                width: '20ch',
            },
        },
        fontSize: '1.4em'
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-nav-colour">

            <Navbar.Brand href="#home">
                <img
                    alt="plant bassd logo" src={logo}
                    width="110" height="110"
                    className="d-inline-block align-center"
                />{' '}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="me-auto nav-text-size">
                    <Nav.Link href="#home" className="pr-4">Home</Nav.Link>
                    <Nav.Link href="#home" className="pr-4">Contact</Nav.Link>
                </Nav>

                <Nav className="ml-auto">
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>

                        <InputBase placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}/>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}