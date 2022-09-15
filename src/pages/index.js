import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { bindActionCreators } from "redux";

import actionCreators from '../store/actionCreators'
import Card from '../components/card'

const Homepage = () => {
    const films = useSelector(state => state.films.films)
    const dispatch = useDispatch()

    const { fetchFilms } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        fetchFilms()
    }, [])

    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src="/logo.png" style={{height: '60px'}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
            <Container className="justify-content-center px-5 pt-3">
                <Row className="pt-2">
                {
                    films?.map((film, idx) => (
                        <Card film={film} />
                    ))
                }
                </Row>
            </Container>
        </div>

    )
}

export default Homepage