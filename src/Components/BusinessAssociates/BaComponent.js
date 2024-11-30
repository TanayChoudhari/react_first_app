import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BaComponentCss.css';
import '../../Constants/globalStyle.css';

const BaComponent = () => {

    document.title = "AxisDirect - Business Associates";

    return (
        <React.Fragment>
            <div className="mainDiv">

				<section className='content-section graybg associate-section'>
					<Container className="mt-5">
						<Row>

						<NavLink to="/"><Button variant="danger">Home</Button></NavLink>

							<Col className="text-center">

								<span className='small-text'>Become A Business Associate with Axis Direct</span>

								<div className="content-details">
									<div className="title">EARN UPTO ₹ 5,00,000</div>
									<span className="black-small-text">or more per month by partnering with Axis Direct</span>
								</div>

							</Col>
						</Row>
					</Container>
				</section>
                
                <section class="content-section associate-section">
		            <Container>
                        <Row>
                            <Col className="text-center whitebg">

                                <div className="form-details-section text-center">
                                    <span className="small-text">ENTER YOUR DETAILS</span>

                                    <form method="post" id="open-account-form" name="open-account-form" className="form-inline">
                                        <div className="row">
                                            <div className="col-12 col-lg-3">
                                                <div className="form-group">
                                                    <input type="text" id="ip1" className="form-control" name="name" maxlength="50" minlength="2" placeholder="Name"/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-3 mt-3 mt-lg-0">
                                                <div className="form-group">
                                                    <input type="text" id="ip2" className="form-control" maxlength="10" name="mobile" placeholder="Mobile number"/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-3 mt-3 mt-lg-0">
                                                <div className="form-group">
                                                    <input type="text" id="ip3" className="form-control" name="email" placeholder="Email ID" data-temp-mail-org="0"/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-3 mt-3 mt-lg-0">
                                                <div className="form-group cityDropdown">

                                                    <select className="form-select" name="city" id="city" aria-label="Default select example">
                                                        <option selected="">Select City</option>
															<option value="Adilabad">Adilabad</option>
															<option value="Zunhebotto">Zunhebotto</option>
														</select>
                                                </div>
                                            </div>

                                            <div className="col-6 mt-3 currentProfile">
                                                <div className="form-group productDropdown">
                                                    <select className="form-select" name="Current_Profile" id="Current_Profile">
                                                        <option selected="">Current Profile</option>
                                                        <option value="Existing AP with other Broker">Existing AP with other Broker</option>
                                                        <option value="IFA">IFA</option>
                                                        <option value="MF agent/ARN holder">MF agent/ARN holder</option>
                                                        <option value="Insurance Agent">Insurance Agent</option>
                                                        <option value="Working in financial industry">Working in financial industry</option>
                                                        <option value="CA/CS">CA/CS</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-6 mt-3 selectProduct">
                                                <div className="form-group">
                                                    <select className="form-select" name="product" id="product">
                                                        <option selected="">Select Product</option>
                                                        <option value="Business associate with terminal">Business associate with terminal</option>
                                                        <option value="Business associate without terminal">Business associate without terminal</option>
                                                        <option value="Independent Financial Advisor (IFA)">Independent Financial Advisor (IFA)</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <Col lg={12} className="mt-3">
                                                <Button variant="primary" className='maroonBtn' >GET OTP</Button>
                                            </Col>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

				<section class="content-section income-cal">
					<Container className="whitebg">

						<Row>
							<Col className="text-center">
								<span class="small-text">ANNUAL INCOME CALCULATOR</span>
								<p className="mt-2 belowCalculator">Use the below calculator to see how much you can earn.</p>
							</Col>
						</Row>

						<Row className="ms-5">
							<Col className="ps-2">
								<p className="section_title">BROKERAGE INCOME</p>
							</Col>
						</Row>

						<Row className="second-progresbar mt-0">
							<Col class="p-4">
								<Row className="brokerage-btn rounded gy-4">
									<Col lg={6}>
										<div className="sharing-brokerage pt-3 pb-3 ps-3">
											<span style={{ fontSize: '16px'}}>Brokerage Sharing (%)</span>
											<div className="grabtn1">
												<input type="text" name="brokerageSharing" id="brokerageSharing" value="70" max="100" min="1" placeholder="70" className="bg-white" style={{ height: '35px', paddingLeft: '6px', borderRadius: '8px' }} />
											</div>
										</div>
									</Col>

									<Col lg={6}>
										<div className="expected-brokerage pt-3 pb-3 ps-3" style={{ backgroundColor:  '#F9F9F9', borderRadius: '8px' }}>
											<span>Expected Brokerage (per client per month)</span>
											<div class="grabtn1" style={{ padding: '0px', maxWidth: '245px' }}>
												<input type="text" name="expectedBrokerage" id="expectedBrokerage" value="5000" placeholder="₹5,000" className="bg-white" style={{ height: '35px', paddingLeft: '6px', borderRadius: '8px' }} />
											</div>
										</div>
									</Col>
								</Row>

								<Row className="customer-count ms-1 me-0">
									<div class="col-md-offset-3 col-lg-9 pt-4 mb-3 mb-lg-0 pb-3 graybg rounded">
										<h3 class="progress-title">No. of Customers per month</h3>
										<div class="range-wrap">
											<input type="range" class="range" id="monthly-income" />
											<output class="bubble" style={{ left: 'calc(50% + 0.5px)' }}>50</output>
										</div>
									</div>
									<div class="col-lg-3 text-center">
										<div class="monthly-income-box m-0 pt-5 ps-5" style={{ border: 'none' , height: '150px' }}>
											<div class="text">Annual Income</div>
											<div class="price brokerageIncome" id="monthlyIncomeTotal" style={{ color: '#12877f' }}>₹1,36,50,000.00</div>
											<input type="hidden" name="monthly-income-hidden" id="monthly-income-hidden" value="13650000" />
										</div>
									</div>
								</Row>
							</Col>
						</Row>



					</Container>
				</section>

            </div>
        </React.Fragment>
    );
}

export default BaComponent;