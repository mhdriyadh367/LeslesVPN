import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import giftIcon from "../assets/images/bg/plan.png"
import ceklisnoborder from "../assets/images/Icon/ceklisnoborder.png"


const Plan = () => {
  return (
    <div className='plan'>
      <Container>
        <Row className='heading'>
          <Col>
          <h1>Choose Your Plan</h1>
          <p>Let's choose the package that is best for you and explore it happily and <br/> cheerfully.</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className='icon d-flex justify-content-center'>
          <Card style={{ width: '16rem' }}>
            <Card.Body className='text-center'>
              <img className='mt-3' src={giftIcon}/>
              <h4 className='mt-3 mb-4'>Free Plan</h4>
              <span><img src={ceklisnoborder}/>Unlimited</span> <br/>
              <span><img src={ceklisnoborder}/>Encrypted</span> <br/>
              <span><img src={ceklisnoborder}/>No Traffic Logs</span> <br/>
              <span><img src={ceklisnoborder}/>Works on All Devices</span> <br/>

              <h4 className='mt-5'>Free</h4>
              <Button className='mt-3 mb-3' variant="outline-danger">Select</Button>
            </Card.Body>
          </Card>    
          </Col>
          <Col className='icon d-flex justify-content-center'>
          <Card style={{ width: '16rem' }}>
            <Card.Body className='text-center'>
              <img className='mt-3' src={giftIcon}/>
              <h4 className='mt-3 mb-4'>Standard Plan</h4>
              <span><img src={ceklisnoborder}/>Unlimited Bandwitch</span> <br/>
              <span><img src={ceklisnoborder}/>Encrypted Connection</span> <br/>
              <span><img src={ceklisnoborder}/>Yes Traffic Logs</span> <br/>
              <span><img src={ceklisnoborder}/>Works on All Devices</span> <br/>
              <span><img src={ceklisnoborder}/>Connect Anyware</span> <br/>

              <h4 className='mt-5'><strong>$9</strong> / mo</h4>
              <Button className='mt-3 mb-3' variant="outline-danger">Select</Button>
            </Card.Body>
          </Card>    
          </Col>
          <Col className='icon d-flex justify-content-center'>
          <Card style={{ width: '16rem' }}>
            <Card.Body className='text-center'>
              <img className='mt-3' src={giftIcon}/>
              <h4 className='mt-3 mb-4'>Premium Plan</h4>
              <span><img src={ceklisnoborder}/>Unlimited Bandwitch</span> <br/>
              <span><img src={ceklisnoborder}/>Encrypted Connection</span> <br/>
              <span><img src={ceklisnoborder}/>Yes Traffic Logs</span> <br/>
              <span><img src={ceklisnoborder}/>Works on All Devices</span> <br/>
              <span><img src={ceklisnoborder}/>Connect Anyware</span> <br/>
              <span><img src={ceklisnoborder}/>Get New Features</span> <br/>

              <h4 className='mt-5'><strong>$12</strong> / mo</h4>
              <Button className='mt-3 mb-3' variant="outline-danger">Select</Button>
            </Card.Body>
          </Card>    
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Plan