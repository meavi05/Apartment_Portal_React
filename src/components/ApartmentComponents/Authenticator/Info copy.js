import React from 'react'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import Avinash1 from './../../../static/Avinash.jpg'
import { Card, Button, Alert, Badge } from 'react-bootstrap'
const Info = (props) => {
  return (<div align="left"><h3 style={{ color: 'white' }}>Contact Details </h3>
    <Card style={{ width: '25rem', height: '29rem' }}>
      <Card.Img variant="top" src={Avinash1} width={100} height={300} />
      <Card.Body>
        <Card.Title>
          <b>
            Avinash Singh
          </b>
        </Card.Title>
        <Card.Text>
          <b>
            A React enthusiast.. !<br></br>
          </b>
            All I do is to check for react stuffs.<br></br>
          <Button variant="light" onClick={() => window.open("https://www.facebook.com/avinashsingh08", "_blank")}>
            <FaFacebook />
          </Button>
          <Button variant="light" onClick={() => window.open("https://twitter.com/aaaavinash", "_blank")}>
            <FaTwitter />
          </Button>
          <Button variant="light" onClick={() => window.open("https://github.com/meavi05/ApartmentPortal", "_blank")}>
            <FaGithub />
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>)
}

export default Info