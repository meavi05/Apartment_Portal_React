import React from 'react';
import Ingredients from '../Ingredients/Ingredients';
import Charts from '../Charts/Charts'
import {Container, Row, Col} from 'bootstrap-4-react';
import { connect } from 'react-redux';


const Main = (props) => {
    return (<Container>
    <Row>
    <Col md="auto"><Ingredients ingredients ={props.ingredients}></Ingredients></Col>
    <Col><Charts ingredients = {props.ingredients}></Charts></Col>
    </Row>
    </Container>);
}
const mapStateToProps = state =>{
  console.log(state)
  return {
    ingredients : state.ingredients
  };
}
export default connect(mapStateToProps)(Main);
