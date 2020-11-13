import React, { Component } from 'react'
import { ButtonGroup, Card, Col, Container, Row, ToggleButton } from 'react-bootstrap'
import { Menu, MenuItem, Typeahead } from "react-bootstrap-typeahead"
import { connect } from 'react-redux'
import Header from './../../FrontController/Header/Header'
import { TenantDetails } from './../../ImportComponents'
class FindSearch extends Component {
    state = {
        radioValue: 1,
        allTenants: [],
        searchedItem: null,
        tenantApartment: null,
        allApartments: []
    }

    url = `http://localhost:8080/getTenantsData/${this.props.userEmailId}`
    radios = [
        { name: 'For Tenants', value: '1' },
        { name: 'For Apartments', value: '2' }
    ];

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true
    }

    onClickTenantHandler = (result) => {
        // var tenantApartment = this.state.allApartments.filter((apartment, idx) => {
        //     return apartment.id === result.apartmentId
        // })
        this.setState({ searchedItem: result })

    }

    componentDidMount = () => {
        fetch(this.url).then(response => response.json()).then(responseData => {
            const resultSet = responseData.map(data => {
                const label = data.tenantName;
                return {
                    id: data.email,
                    label,
                    ...data
                }
            })
            this.setState({ allTenants: resultSet })
            console.log(this.state.allTenants)
        })
        this.setState({ allApartments: this.props.apartments })
    }

    _renderMenu = (results, menuProps) => {
        return (
            <Menu {...menuProps}>
                {results.map((result, idx) => (
                    <MenuItem
                        key={idx}
                        onClick={(result) => this.onClickTenantHandler(result)}
                        option={result}
                        position={idx}>
                        {result.tenantName}
                    </MenuItem>
                ))
                }
            </Menu>
        );
    }

    render() {
        return <Container style={{ color: 'white' }} fluid>
            <Header
                isAuthenticated={true}
                handleShow={this.handleShow}
                logOutAction={this.logOutAction}>
            </Header>
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
                            <Typeahead
                                {...this.state}
                                options={this.state.allTenants}
                                renderMenu={this._renderMenu}
                            />
                        </Card>
                    </section>
                </Col>
                <Col>
                    {
                        this.state.searchedItem ?
                            this.state.radioValue === 1 ?
                                <div style={{ background: 'white' }}>
                                    <h5 style={{ color: 'black' }}>Searched Item :</h5>
                                    <TenantDetails apartment={this.state.tenantApartment} {...this.state.searchedItem}></TenantDetails></div> : null
                            : null
                    }
                </Col>
            </Row>
        </Container >
    }
}
const mapStateToProps = (state) => {
    return {
        userEmailId: state.app.userData.email,
        apartment: state.app.userData.apartments
    }
}
export default connect(mapStateToProps, null)(FindSearch)