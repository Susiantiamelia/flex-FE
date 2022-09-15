import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { bindActionCreators } from "redux";

import actionCreators from '../store/actionCreators'

const Card = ({film}) => {
    console.log(film)
    return (
        <Col xs={2} className="px-3 py-3" key={film?.id}>
            <Link to={'films/' + film?.id}>
                <img src={film?.image} width="100%" />
            </Link>
        </Col>

    )
}

export default Card