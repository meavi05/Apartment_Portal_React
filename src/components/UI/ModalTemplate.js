import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../UI/Backdrop'
import { Button } from '../../../node_modules/bootstrap-4-react'
const ModalTemplate = (props) => {
    const toggleShow=() =>{
    props.setModalShow(false)
    }
    console.log("Rendering ModalTemplate")
    return (
        <React.Fragment>
        {props.show ?<Backdrop clicked = {toggleShow} ></Backdrop>:null};
        {props.show ?
        <div className = {classes.Modal}
        style = {{
            transform: props.show ? 'translateY(0)':'translateY(-100vh)',
            opacity : props.show ? '1':'0'
        }} > 
        {props.children}
      </div>:null};
      
    
        </React.Fragment>
    )
}
export default ModalTemplate;