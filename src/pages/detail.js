import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'

import Api from '../utils/Api'

const Detail = () => {
    const [detail, setDetail] = useState({})
    let { id } = useParams();

    useEffect(() => {
        // console.log(id, 'hereee')
        getDetail(id)
    }, [])

    const getDetail = async (id) => {
        try {
            let fetch = await Api.get('/films/' + id)
            setDetail(fetch.data)
            console.log(fetch.data)
        } catch (error) {
            
        }
    }

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
                    <Col xs={4} className="px-3 py-3">
                        <img src={detail?.image} width="100%"/>
                    </Col>
                    <Col xs={8} className="px-3 py-3">
                        <p>Directed by <b>{detail?.director}</b></p>
                        <hr/>
                        <h4 className="py-2">{detail?.title} ( {detail?.original_title} / {detail?.original_title_romanised} )</h4>
                        <p>{detail?.description}</p>
                        <small>Producer: <b>{detail?.producer} • </b> Year of production: <b>{detail?.release_date} • </b>Runtime: <b>{detail?.running_time} mins</b></small>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Detail