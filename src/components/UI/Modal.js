import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../UI/Backdrop'
import { Button } from '../../../node_modules/bootstrap-4-react'
const Modal = (props) => {
    const toggleShow=() =>{
    props.setModalShow(false)
    }
    return (
        <React.Fragment>
        {props.show ?<Backdrop clicked = {toggleShow} ></Backdrop>:null};
        {props.show ?
        <div className = {classes.Modal}
        style = {{
            transform: props.show ? 'translateY(0)':'translateY(-100vh)',
            opacity : props.show ? '1':'0'
        }} > 
        
        <section className="ingredient-list">
      <ul>
          <li>
            <span>{props.ingredient.title}</span>
            <span>{props.ingredient.amount}x</span>
          </li>
      </ul>
      <div style = {{display:'inline'}}>
      <Button danger outline>Delete</Button>
      <Button float="right" primary outline >Modify</Button> 
      </div>
    </section>
      </div>:null};
      
    
        </React.Fragment>
    )
}
export default Modal;