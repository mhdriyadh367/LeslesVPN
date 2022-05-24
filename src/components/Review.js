import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import fotoreview1 from "../assets/images/review/1.png"
import fotoreview2 from "../assets/images/review/2.png"
import fotoreview3 from "../assets/images/review/3.png"

const Review = () => {
  return (
    <div className='Review'>
      <Container>
        <Row>
          <Col className='text-center'>
            <h1>Trusted by Thousands <br></br> of Happy Customer</h1>
            <p className='paragraf'>These are the stories of our customers who have joined us with great <br/> pleasure when using this crazy feature.</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='mt-5'>
          <Col className='d-flex justify-content-center'>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                <img className='fotoreview' style= {{ width: '50px'}} src={fotoreview1}/>
                <h6 className='mb-0'>Viezh Robert</h6>
                <small className='text-secondary text-small'>Warsau, Poland</small>
                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
              </Card.Body>
            </Card>    
          </Col>
          <Col className='d-flex justify-content-center'>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                <img className='fotoreview' style= {{ width: '50px'}} src={fotoreview2}/>
                <h6 className='mb-0'>Viezh Robert</h6>
                <small className='text-secondary text-small'>Warsau, Poland</small>
                <p>“I like it because I like to travel far and still can connect with high speed.”</p>
              </Card.Body>
            </Card>    
          </Col>
          <Col className='d-flex justify-content-center'>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                <img className='fotoreview' style= {{ width: '50px'}} src={fotoreview3}/>
                <h6 className='mb-0'>Viezh Robert</h6>
                <small className='text-secondary text-small'>Warsau, Poland</small>
                <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”</p>
              </Card.Body>
            </Card>    
          </Col>
        </Row>

        <Row className='subscribe'>
          <Col>
          <Card sytle= {{ width: '100%' }}>
            <Card.Body style={{ padding: '20px' }}>
              <Col>
                <h1>Subscribe Now for Get Special Features!</h1>
                <p>Let's subscribe with us and find the fun.</p>
                
                <Button className='mt-5' variant="danger">Subscribe Now</Button>
              </Col>
              
             
            </Card.Body>


          </Card>
          </Col>
        </Row>


      </Container>

      

    </div>


  )
}

export default Review