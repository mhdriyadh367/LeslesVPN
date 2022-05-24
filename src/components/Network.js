import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import bgpeta from "../assets/images/bg/peta.png"
import bgsponsor from "../assets/images/bg/sponsor.png"

const Network = () => {
  return (
    <div className='Network'>
      <Container>
      <Row >
        <Col className='text-center'>
        <h1>Huge Global Network<br/> of Fast VPN</h1>
        <p>See LaslesVPN everywhere to make it easier for you when you move <br/> locations.</p>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col className='d-flex justify-content-md-center'>
        <img  src = {bgpeta}/>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col className='d-flex justify-content-xs-center justify-content-md-center '>
        <img  src = {bgsponsor}/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Network