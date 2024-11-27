import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BaComponentCss.css';

const BaComponent = () => {

    document.title = "AxisDirect - Business Associates";

    return (
        <React.Fragment>
            <div className="mainDiv">
                <Container className="mt-5">

                    <Row>
                        <Col className="text-center">
                            <span className='small-text'>Become A Business Associate with Axis Direct</span>

                            <div className="content-details">
						        <div className="title">EARN UPTO ₹ 5,00,000</div>
						        <span className="black-small-text">or more per month by partnering with Axis Direct</span>
					        </div>

                        </Col>
                    </Row>
                </Container>

                <section className='content-section associate-section'>
                    <Container>
                        <Row>
                            <Col className='text-center whitebg'>
                                <div className='form-details-section text-center'>
                                    <span class="small-text">ENTER YOUR DETAILS</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>



            </div>
        </React.Fragment>
    );
}

export default BaComponent;