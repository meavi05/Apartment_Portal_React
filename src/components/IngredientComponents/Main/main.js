import React from 'react';
import Ingredients from '../Ingredients/Ingredients';
import Charts from '../Charts/Charts'
import {Row, Col } from 'bootstrap-4-react';
import { connect } from 'react-redux';


const Main = (props) => {
  return (
    props.show ? <>  
    <Row>
      <Col>
      <h2 align='center'>Item List</h2>
    </Col>
    </Row>
      <Row>
      <Col md="auto"><Ingredients ingredients={props.ingredients}></Ingredients></Col>
      <Col md="auto"><Charts ingredients={props.ingredients}></Charts></Col>
    </Row>
    </> : null
  )
}
const mapStateToProps = state => {
  console.log(state)
  return {
    ingredients: state.ingredients
  };
}
export default connect(mapStateToProps)(Main);
