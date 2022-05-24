import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import logofooter from "../assets/images/logo/logofooter.png"
import iconfb from "../assets/images/Icon/Facebook.png"
import icontwitter from "../assets/images/Icon/Twitter.png"
import iconig from "../assets/images/Icon/Instagram.png"

const Footer = () => {
  return (
    <div className='Footer'>
      <Container>
        <Row>
          <Col className='sosmed col-md-6'>
            <img src={logofooter}/>
            <p className='mt-3 text-secondary'><strong> LaslesVPN </strong>is a private virtual network that has unique features and has high security.</p>

            <div className='iconsosmed'>
              <img src={iconfb}/>
              <img src={icontwitter}/>
              <img src={iconig}/>
            </div>
            <span className='text-secondary'>©2020LaslesVPN</span>
          </Col>

          <Col className='Product'>
            <ul>
              <h6>Product</h6>
              <li className='mt-3 mb-2' >Download</li>
              <li className='mb-2'>Pricing</li>
              <li className='mb-2'>Locations</li>
              <li className='mb-2'>Server</li>
              <li className='mb-2'>Countries</li>
              <li>Blog</li>
            </ul>
          </Col>
          <Col className='Engage'>
            <ul>
              <h6>Engage</h6>
              <li className='mt-3 mb-2' >LaslesVPN ? </li>
              <li className='mb-2'>FAQ</li>
              <li className='mb-2'>Tutorials</li>
              <li className='mb-2'>About Us</li>
              <li className='mb-2'>Privacy</li>
              <li>Terms of Service</li>
            </ul>
          </Col>
          <Col className='earnMoney'>
            <ul>
              <h6>Earn Money</h6>
              <li className='mt-3 mb-2' >Affiliate</li>
              <li className='mb-2'>Become Partner </li>
              <li className='mb-2'>Locations</li>
              <li className='mb-2'>Server</li>
              <li className='mb-2'>Countries</li>
              <li>Blog</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer