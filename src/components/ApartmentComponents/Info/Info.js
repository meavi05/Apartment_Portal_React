import React from 'react'
import Avinash1 from './../../../static/Avinash.jpg'
import {Card,Button} from 'react-bootstrap'
const Info = (props) =>{
    return (<div align="left"><h3 style={{color:'white'}}>Contact Details </h3>
 <Card style={{ width: '25rem', height: '31rem' }}>
  <Card.Img variant="top" src={Avinash1} width={100} height={330} />
  <Card.Body>
    <Card.Title>Avinash Singh</Card.Title>
    <Card.Text>
     A React enthusiast.. !
    </Card.Text>
    <Button variant="primary" onClick={()=> window.open("https://github.com/meavi05/ApartmentPortal", "_blank")}>More Details</Button>
  </Card.Body>
</Card>
    </div>)
}

export default Info