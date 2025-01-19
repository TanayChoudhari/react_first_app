import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomeComponent.css';

const HomeComponent = () => {

    document.title = "Home";

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col className="mt-5">
                        <h1 className="text-center">This is Homepage</h1>
                    </Col>
                </Row>

                <Row className="menuDiv">
                    <Col md={4} className="mt-5">
                        <NavLink to="/login"><Button variant="danger">Login</Button></NavLink>
                    </Col>

                    <Col md={4} className="mt-5">
                        <NavLink to="/ba"><Button variant="danger">BA</Button></NavLink>
                    </Col>

                    <Col md={4} className="mt-5">
                        <NavLink to="/converter"><Button variant="danger">Currency Converter</Button></NavLink>
                    </Col>

                </Row>

            </Container>
        </React.Fragment>
    );
}


export default HomeComponent;