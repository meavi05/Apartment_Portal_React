import React from 'react'
import CustomModal from '../../UI/Modal'
import { Modal , Button } from '../../../../node_modules/bootstrap-4-react'

const ModifyIngredient = (props) =>{
   
    const setModifyIngredientShow = () =>{
        props.openEditIngredients();
    }
    console.log("Rendering Modal")
    return (
        <div>
        {/* <CustomModal show ={props.showModal} ingredient = {props.ingredient} setModalShow = {setModifyIngredientShow}></CustomModal> */}
        <Modal id="largeModal" fade>
          <Modal.Dialog lg>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
      
            <section className="ingredient-list">
            <ul>
                <li>
                    <span> {props.ingredient && props.ingredient.title}</span>
                    <span> {props.ingredient && props.ingredient.amount}x</span>
                </li>
            </ul>
            </section>
              </Modal.Body>
              <Modal.Footer>
                <Button danger data-dismiss="modal" onClick= {() => props.deleteIngredient(props.ingredient.id)}>Delete</Button>
                <Button primary>Edit</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>
        </div>
    )
}
export default ModifyIngredient;