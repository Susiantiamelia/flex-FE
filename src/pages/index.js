import React, { useState, useEffect } from "react";
import { Container, Rown} from 'react-bootstrap'

import Card from '../components/card'

const Homepage = () => {

    return (
        <div>
            <Container className="justify-content-center px-5 pt-3">
                <Row className="pt-2">
                    <Card film={film} />
                </Row>
            </Container>
        </div>

    )
}

export default Homepage