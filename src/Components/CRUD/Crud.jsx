import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'

const Crud = () => {

    return(
        <React.Fragment>
            <div className="App">
            <h5>React CRUD operations using PHP API and MySQL</h5>
                <nav>
                    <ul>
                        <li>
                            <Link to="/crud/user/list">List Users</Link>
                        </li>
                        <li>
                            <Link to="crud/user/create">Create User</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );

}

export default Crud;