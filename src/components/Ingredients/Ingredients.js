import React,{ Component } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorModal from '../UI/ErrorModal';
import { connect } from 'react-redux';
import * as  actions from './../../store/action'

class Ingredients extends Component {
  state = {
    loading : false,
    error : ''
  }
   
  removeIngredientHandler = id => {
    this.setState({loading : true});
    fetch(`https://react-hooks-62633.firebaseio.com/ingredients/${id}.json`,{
      method:'DELETE'
    }).then(response=>{
      this.setState({loading : false});
      this.props.deleteIngredient(id);
      }).catch(error => {
      this.setState({error: error.message});
    })
  };
  addIngredientHandler = ingredient => {
   this.setState({loading : true});
    fetch('https://react-hooks-62633.firebaseio.com/ingredients.json  ',{
      method:'POST',
      body:JSON.stringify(ingredient),
      headers: {'Content-Type':'application/json'}
    }).then(response => response.json()).then(responseData =>{
      this.setState({loading : false});
      this.props.addIngredient(responseData.name,ingredient);
    }).catch(error =>{
      this.setState({error: error.message});
    })
  };
  

  searchIngredientHandler = (recievedIngredients) =>{
    console.log('In search Handler')
    this.props.initIngredients(recievedIngredients);
  }
  closeError=()=>{
    this.setState({error: null});
    this.setState({loading : false});
  }
  render(){
    return (
      <div className="App">
        {this.state.error?<ErrorModal onClose={this.state.closeError}>{this.state.error}</ErrorModal>:null}
        <IngredientForm click={this.addIngredientHandler}  loading = {this.state.loading ? <LoadingIndicator/>:null}/>
        <section>
          <Search Change ={this.searchIngredientHandler}></Search>
             <IngredientList ingredients={this.props.userIngredients}  deleteIngredient = {this.removeIngredientHandler}/>
        </section>
      </div>
    );
  }
};



const mapStateToProps = state =>{
  console.log(state)
  return {
    userIngredients : state.ingredients
  };
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addIngredient : (id,ingredient) => dispatch(actions.addIngredientAction(id,ingredient)),
    initIngredients : (recievedIngredients) => dispatch(actions.initIngredientsAction(recievedIngredients)),
    deleteIngredient : (id) => dispatch(actions.deleteIngredientAction(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Ingredients);

