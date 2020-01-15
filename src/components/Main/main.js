import React, {useState} from 'react';
import Ingredients from '../Ingredients/Ingredients';
import Charts from '../Charts/Charts'
import {Container, Row, Col} from 'bootstrap-4-react';


const Main = () => {
    const [mainIngredients, setMainIngredients] = useState([]);
    const fetchIngredientHandler = (recievedIngredients) =>{
        console.log('In search Handler')
        setMainIngredients(recievedIngredients);
      }
    return (<Container>
    <Row>
    <Col md="auto"><Ingredients ingredients ={fetchIngredientHandler}></Ingredients></Col>
    <Col><Charts ingredients = {mainIngredients}></Charts></Col>
    </Row>
    </Container>);
}

export default Main;
