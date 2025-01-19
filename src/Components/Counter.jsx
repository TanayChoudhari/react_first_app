import React, {useState, useReducer} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    function reducer (state, action) {
        switch(action){
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            default :
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, 0)
    
    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    const decrementCounter = () => {
        setCounter(counter - 1);
    }
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2>This is Basic State Changing Counter App</h2>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <h3 className="text-center">Current Counter Val : {state}</h3>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Button variant="success" onClick={incrementCounter}>INCREMENT</Button>
                    </Col>
                    <Col lg={6}>
                        <Button variant="danger" onClick={decrementCounter}>DECREMENT</Button>
                    </Col>
                </Row>


                <Row>
                    <Col lg={6}>
                        <Button variant="success" onClick={() => dispatch({ type: "increment"})}>INCREMENT</Button>
                    </Col>
                    <Col lg={6}>
                        <Button variant="danger" onClick={() => dispatch({ type: "decrement"})}>DECREMENT</Button>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    );

}

export default Counter;