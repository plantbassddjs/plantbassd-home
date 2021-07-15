import React, {useEffect, useRef, useState} from 'react';
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
        backgroundColor: fade(theme.palette.primary.main, 0.40),'&:hover': {
            backgroundColor: fade(theme.palette.primary.main, 0.60),
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
    navbarBackgroundTransparent: {
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    navbarBackgroundSolid: {
        backgroundColor: 'rgb(255, 255, 255)'
    },
}));

export default function NavAppBar() {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('navbarBackgroundTransparent')
    
    const navRef = useRef()
    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('navbarBackgroundSolid')
            } else {
                setNavBackground('navbarBackgroundTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className={classes[navRef.current]}>

            <Navbar.Brand href="#home">
                <img
                    alt="plant bassd logo" src={logo}
                    width="100" height="100"
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