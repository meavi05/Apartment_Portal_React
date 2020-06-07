import React, { Component } from 'react'
import Header from './../../FrontController/Header/Header'
import { Container, Row, Col, Card, ButtonGroup, ToggleButton, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { connect } from 'react-redux'
class FindSearch extends Component {
    state = {
        radioValue: 1,
        searchString: '',
        searchItems: [],
        allTenants: [],
        allApartments: []
    }
    url = `http://localhost:8080/getTenantsData/${this.props.userEmailId}`
    radios = [
        { name: 'For Tenants', value: '1' },
        { name: 'For Apartments', value: '2' }
    ];

    handleChange = (value) => {
        this.setState({ searchString: value })
    }

    handleSubmit = () => {
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true
    }

    componentDidMount = () => {
        fetch(this.url).then(response => response.json()).then(responseData => {
            this.setState({ allTenants: responseData })
            console.log(this.state.allTenants)
        })
    }


    render() {
        return <Container style={{ color: 'white' }} fluid>
            <Header
                isAuthenticated={true}
                handleShow={this.handleShow}
                logOutAction={this.logOutAction}></Header>
            <Row>
                <Col>
                    <section className="search">
                        <Card>
                            <ButtonGroup toggle>
                                {this.radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="info"
                                        name="radio"
                                        value={radio.value}
                                        checked={this.state.radioValue === radio.value}
                                        onChange={(e) => this.setState({ radioValue: e.currentTarget.value })}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                            <br></br>
                            <div className="search-input">
                                {(this.state.radioValue == 1) ?
                                    <input type="text" placeholder="Search Tenants" style={{ width: '90%' }} onChange={(e) => this.handleChange(e.target.value)} />
                                    :
                                    <input type="text" placeholder="Search Apartments" style={{ width: '90%' }} onChange={(e) => this.handleChange(e.target.value)} />
                                }
                                <Button variant="light" onClick={this.handleSubmit}>   <FaSearch style={{ color: 'black' }} /></Button>
                                <br></br>
                            </div>
                        </Card>
                    </section>
                </Col>
            </Row>
        </Container>
    }
}
const mapStateToProps = (state) => {
    return {
        userEmailId: state.app.userData.email
    }
}
export default connect(FindSearch)