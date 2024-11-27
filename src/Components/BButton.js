import React from 'react';
import './Button.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

const BButton = () =>
{
	return (
		<React.Fragment>
			<div className="top-right-wrapper">
				<Button variant="primary" size="xxl" className="btnOpenAnAccount" type="submit">
					OPEN AN ACCOUNT
				</Button>
				<Button variant="danger" size="xxl" className="btn" type="submit">
					LOGIN
				</Button>
			</div>
		</React.Fragment>

	);
}

export default BButton;