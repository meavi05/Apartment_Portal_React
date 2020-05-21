import React from 'react'
import Search from '../Search'
import IngredientList from '../IngredientList'
import CustomModal from '../../../UI/CustomModal'
import {connect,useDispatch} from 'react-redux'
import * as  actions from '../../../../store/action'

const FindItem = (props) => {
    console.log("Rendering FindItem")
    const dispatch = useDispatch()
   const searchIngredientHandler = (recievedIngredients) =>{
    dispatch(actions.initIngredientsAction(recievedIngredients));
      }
    const body = (<><Search Change ={searchIngredientHandler}></Search>
    <IngredientList ingredients={props.userIngredients} /></>)
           return (
           <CustomModal title = 'Find The Item ' Body = {body} show = {props.show} handleClose = {props.handleClose}></CustomModal>  )
}
const mapStateToProps=(state)=>{
    return {
        userIngredients: state.ingredients
    }
}
export default connect(mapStateToProps)(FindItem)
