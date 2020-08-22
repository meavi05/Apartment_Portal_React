import React, { Component } from 'react'
import SearchResult from './SearchResult'
import Header from './../../FrontController/Header/Header'
import { Container, Row, Col, Card, ButtonGroup, ToggleButton, Button, Dropdown, FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { connect } from 'react-redux'
class FindSearch extends Component {
    state = {
        radioValue: 1,
        searchString: '',
        value: '',
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
        if (this.state.radioValue == 1) {
            this.tempTenants = this.state.allTenants.filter(tenant =>
                tenant.tenantName.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1)
        }
        if (this.state.radioValue == 2) {
            this.tempApartments = this.state.allApartments.filter(apartment =>
                apartment.apartmentName.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1)
        }
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
        this.setState({ allApartments: this.props.apartments })
    }

    CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
          &#x25bc;
        </a>
    ));

    CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <FormControl
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => this.setState({ value: e.target.value })}
                        value={this.state.value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !this.state.value || child.props.children.toLowerCase().startsWith(this.state.value),
                        )}
                    </ul>
                </div>
            );
        },
    );


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
                            <Dropdown>
                                <Dropdown.Toggle as={this.CustomToggle} id="dropdown-custom-components">
                                    Custom toggle
                                 </Dropdown.Toggle>

                                <Dropdown.Menu as={this.CustomMenu}>
                                    <SearchResult
                                        isForTenant={this.state.radioValue == 1}
                                        tempTenants={this.tempTenants}
                                        tempApartments={this.tempApartments} />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card>
                    </section>
                </Col>
            </Row>
        </Container>
    }
}
const mapStateToProps = (state) => {
    return {
        userEmailId: state.app.userData.email,
        apartment: state.app.userData.apartments
    }
}
export default connect(mapStateToProps, null)(FindSearch)