import React , {useState} from 'react'
import { Modal , Button ,Form } from '../../../../node_modules/bootstrap-4-react'

const ModifyIngredient = (props) =>{
    const [editMode,setEditMode] = useState(false);
    const [amount, setAmount] =  useState(props.ingredient && props.ingredient.amount);
   
    const toggleEditMode = () =>{
        setEditMode(!editMode)
    }
    const closeEditWindow = () =>{
      setEditMode(false)
  }
  //alert(amount)
    console.log("Rendering Modal")
    return (
        <div>
        {/* <CustomModal show ={props.showModal} ingredient = {props.ingredient} setModalShow = {setModifyIngredientShow}></CustomModal> */}
        <Modal id="largeModal" fade>
          <Modal.Dialog lg>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                <Modal.Close onClick = {closeEditWindow}>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
      
            <section className="ingredient-list">
            <Form>
                <Form.Group>
                <ul>
                <li>
                    <span>
                         {props.ingredient && props.ingredient.title}
                    </span>
                    {props.ingredient ?
                    <span>
                
                    { editMode ?
                    <Form.Input type ="Input" id = 'amount'  defaultValue = {props.ingredient.amount} onChange = {e => setAmount(e.target.value)} ></Form.Input>
                    : props.ingredient && props.ingredient.amount} 
                    {/* {props.ingredient && props.ingredient.amount} */}
                    </span>
                    :null}
                </li>
            </ul>
                </Form.Group>
            </Form>
            </section>
              </Modal.Body>
              <Modal.Footer>
              {
                editMode ?
                <>
                <Button success data-dismiss="modal" onClick= {() => props.updateIngredient({...props.ingredient,amount : amount})}>Save</Button>
                </>
                :
                <>
                <Button danger data-dismiss="modal" onClick= {() => props.deleteIngredient(props.ingredient.id)}>Delete</Button>
                <Button primary onClick = {toggleEditMode}>Edit</Button>
                </>
                }
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>
        </div>
    )
}
export default ModifyIngredient;