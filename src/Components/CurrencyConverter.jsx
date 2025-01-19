import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CurrencyConverter = () => {

    return (
        <React.Fragment>
            <Container>

                <div id="mainDiv" style={{width:"600px"}}>
                    <Row>
                        <h1>Currency Convertor</h1>
                    </Row>

                    <Row>
                        <div className="amountLabelDiv">
                            <label className="amtLabel">Amount</label>
                            <input
                                type="text"
                                value="500"
                            />
                        </div>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <div className="fromLabelDiv">
                                <label className="fromLabel">From : </label>
                                <select className="form-control">
                                    <option selected>Select Your Currency</option> 
                                    <option>USD</option> 
                                    <option>EUR</option> 
                                    <option>IND</option> 
                                </select>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="fromLabelDiv">
                                <label className="fromLabel">To : </label>
                                <select className="form-control">
                                    <option selected>Select Your Currency</option>
                                    <option>USD</option> 
                                    <option>EUR</option> 
                                    <option>IND</option> 
                                </select>
                            </div>
                        </Col>
                    </Row>

                </div>

            </Container>
        </React.Fragment>
    );

}

export default CurrencyConverter;