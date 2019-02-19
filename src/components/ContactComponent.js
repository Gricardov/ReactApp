import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import { onErrorResumeNext } from 'rxjs';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {

            firstName: '',
            lastName: '',
            telNum: '',
            eMail: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {

                firstName: false,
                lastName: false,
                telNum: false,
                eMail: false
            }

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validate = this.validate.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

    }

    /*handleBlur = (field) => (evt) => {

        this.setState({

            touched: {
                ...this.state.touched,
                [field]: true

            }

        })

    }*/

    handleBlur(field,evt){

        this.setState({

            touched: {

                [field]: true

            }

        })

    }

    validate(firstName, lastName, telNum, eMail) {

        const errors = {

            firstName: '',
            lastName: '',
            telNum: '',
            eMail: ''

        };

        if (this.state.touched.firstName && firstName.length < 3) {

            errors.firstName = 'First name should be greater than 3'

        }

        else if (this.state.touched.firstName && firstName.length > 10) {

            errors.firstName = 'First name should be les than 10'


        }

        if (this.state.touched.lastName && lastName.length < 3) {

            errors.lastName = 'Last name should be greater than 3'

        }

        else if (this.state.touched.lastName && lastName.length > 10) {

            errors.lastName = 'Last name should be les than 10'


        }

        const reg = /^\d+$/;


        if (this.state.touched.telNum && !reg.test(telNum)) {

            errors.telNum = 'Phone should only contain numbers'

        }


        if (this.state.touched.eMail && eMail.split('').filter(x => x === '@').length !== 1) {

            errors.eMail = "E-mail should contain a @ sign"

        }
        return errors;

    }

    handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({

            [name]: value

        });

    }

    handleSubmit(event) {

        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current state is: " + JSON.stringify(this.state))
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.telNum, this.state.eMail);
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact us
                    </BreadcrumbItem>

                    </Breadcrumb>

                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>

                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>


                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>
                                    First Name
                                </Label>
                                <Col md={10}>
                                    <Input type="text" id="firstName"
                                        name="firstName" placeholder="First Name"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        valid={errors.firstName === ''}
                                        invalid={errors.firstName !== ''}
                                        onBlur={(e)=>this.handleBlur('firstName',e)} />
                                    <FormFeedback>
                                        {errors.firstName}
                                    </FormFeedback>
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>
                                    Last Name
                                </Label>
                                <Col md={10}>
                                    <Input type="text" id="lastName"
                                        name="lastName" placeholder="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        valid={errors.lastName === ''}
                                        invalid={errors.lastName !== ''}
                                        onBlur={(e)=>this.handleBlur('lastName',e)} />
                                    <FormFeedback>
                                        {errors.lastName}
                                    </FormFeedback>
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telNum" md={2}>
                                    Contact tel
                                </Label>
                                <Col md={10}>
                                    <Input type="tel" id="telNum"
                                        name="telNum" placeholder="Telephone number"
                                        value={this.state.telNum}
                                        onChange={this.handleInputChange}
                                        valid={errors.telNum === ''}
                                        invalid={errors.telNum !== ''}
                                        onBlur={(e)=>this.handleBlur('telNum',e)} />
                                    <FormFeedback>
                                        {errors.telNum}
                                    </FormFeedback>
                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="eMail" md={2}>
                                    E-mail
                                </Label>
                                <Col md={10}>
                                    <Input type="email" id="eMail"
                                        name="eMail" placeholder="E-Mail"
                                        value={this.state.eMail}
                                        onChange={this.handleInputChange}
                                        valid={errors.eMail === ''}
                                        invalid={errors.eMail !== ''}
                                        onBlur={(e)=>this.handleBlur('eMail',e)} />
                                    <FormFeedback>
                                        {errors.eMail}
                                    </FormFeedback>
                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <div className="col-md-6 offset-md-2">
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                                checked={this.state.agree} onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you</strong>
                                        </Label>
                                    </FormGroup>
                                </div>

                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}>
                                    Your beautiful feedback
                                    </Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={{ size: 12, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedbackk
                                    </Button>

                                </Col>
                            </FormGroup>

                        </Form>
                    </div>
                </div>

            </div>
        );

    }

}


export default Contact;