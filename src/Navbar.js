import React from 'react';
import logo from './assets/img/logo_circle.png';
import { Container, Row, Col } from 'react-bootstrap';

export default function Navbar() {
    return (
        <div className="container-fluid bg-black">
            <Container>
                <Row>
                    <Col>
                        <a href="https://plantbassd.github.io/">
                            <img src={logo} className="img-logo pt-4 pb-4 d-block" alt="plant bassd logo" />
                        </a>
                    </Col>
                    <Col>
                        <h1 className="vert-align">Plant Bass`d DJs</h1>
                    </Col>
                    <Col>
                        <h3 className="vert-align">- Oisin, Michael, Peter</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
