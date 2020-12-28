import React, { Component } from "react";
import { HomePage } from '../ImportComponents.js'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
class FrontController extends Component {
    handleShow = (element) => this.setState({ ...this.state, [element]: true });
    handleCloseLogin = (element) => this.setState({ [element]: false })
    render() {
        console.log('RENDERING FRONT CONTROLLER')
        return (
            <HomePage />
            //     <PrivateRoute path='/apartment/:apartmentId' auth={true}
            //         component={(props) =>
            //             <ApartmentDetails
            //                 {...this.props}{...props}></ApartmentDetails>}>
            //     </PrivateRoute>
            // </Switch>

        );
    }
}
const mapStateToProps = state => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FrontController))