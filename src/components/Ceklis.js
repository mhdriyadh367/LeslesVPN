import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ceklisBg from "../assets/images/bg/2.png"
import ceklisIcon from "../assets/images/Icon/ceklis.png"


const Ceklis = () => {
  return (
    <div className='ceklis'>
      <Container>
        <Row>
          <Col>
          <img className="ceklisBG" src={ceklisBg}/>
          </Col>
          <Col className="tulisan">
          <h2>We Provide Many Features You Can Use</h2>
          <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
          <span><img src={ceklisIcon}/> Powerfull online protection.</span> <br/>
          <span><img src={ceklisIcon}/> Internet without borders</span><br/>
          <span><img src={ceklisIcon}/> Supercharged VPN</span><br/>
          <span><img src={ceklisIcon}/> No specific time limits.</span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Ceklis