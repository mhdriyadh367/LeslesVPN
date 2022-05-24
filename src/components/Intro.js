import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import bg from "../assets/images/bg/1.png"
import userIcon from "../assets/images/Icon/user.png"
import locationIcon from "../assets/images/Icon/location.png"
import serverIcon from "../assets/images/Icon/Server.png"


const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-dark">
            <Row>
              <Col>
              <h1>Want anything to be easy with <strong>LaslesVPN.</strong> </h1>
              <p>Provide a network for all your needs with ease and fun using <strong>LaslesVPN</strong> discover interesting features from us.</p>
              <Button variant="danger"><strong>Get Started</strong></Button>
              </Col>


              <Col>
              <img src={bg}/>
              </Col>


              
            </Row>
            <Row className="kartu text-center ">
              <Col className='d-flex justify-content-center'><Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <img src={userIcon}/>
                      <h4><strong>90+</strong></h4> <br/>
                      <p>Users</p>
                      
                    </Card.Body>
                  </Card>
                </Col>
              <Col><Card   style={{ width: '18rem' }}>
                    <Card.Body>
                      <img src={locationIcon}/>
                      <h4><strong>50+</strong></h4> <br/>
                      <p>Location</p>
                      
                    </Card.Body>
                  </Card>
                </Col>
              <Col><Card   style={{ width: '18rem' }}>
                    <Card.Body>
                      <img src={serverIcon}/>
                      <h4><strong>50+</strong></h4> <br/>
                      <p>Server</p>
                      
                    </Card.Body>
                  </Card>
                </Col>
                
            </Row>
          </Container>
    </div>
  )
}
export default Intro