import React, { Component } from 'react'
import StudioPicture from '../studio-pics/burgundy.jpg'
import {Container, Row, Col} from 'reactstrap'

function HeroImage(){
    return(
        <Container fluid>
        <Row>
            <Col>
            <img src={StudioPicture} style={{height:'auto', width:'100%'}}></img>
            </Col>
            </Row>
        </Container>
    )
}
export default HeroImage