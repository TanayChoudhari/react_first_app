import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomeComponent = () => {

    document.title = "Home";

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col className="mt-5">
                        <h1>This is Homepage</h1>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} className="mt-5">
                    <NavLink to="/login"><Button variant="danger">Login</Button></NavLink>
                        
                    </Col>

                    <Col lg={6} className="mt-5">
                    <NavLink to="/ba"><Button variant="danger">BA</Button></NavLink>
                    </Col>

                </Row>

            </Container>
        </React.Fragment>
    );
}


export default HomeComponent;