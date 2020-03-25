import React from 'react'
import { Modal } from 'react-bootstrap'

const CustomModal = (props) => {
    console.log("Rendering CustomModal")
          return (
            <Modal show= {props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                   <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   {props.Body}
                </Modal.Body>
            </Modal>
    )
}
export default CustomModal
