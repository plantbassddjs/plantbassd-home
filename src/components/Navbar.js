import { Navbar, Nav } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import logo from '../images/logo_circle.png';
import '../css/index.css';


export default function NavbarComponent() {

    var [variant, setVariant] = useState('dark')

    useEffect(() => {
        var handleScroll = () => {
            var nextDiv = window.scrollY > 900
            if (nextDiv) {
                setVariant('light')
            } else {
                setVariant('dark')
            }
        }
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Navbar collapseOnSelect 
            expand="lg"
            className="navStyle"
            variant={variant}
            fixed="top">

            <Navbar.Brand href="#home">
                <img
                alt="plant bassd logo" src={logo}
                width="100" height="100"
                className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navText">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}