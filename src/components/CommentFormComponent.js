import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => !(val) || val.length <= len;

class CommentForm extends Component {

    constructor(props) {

        super(props);
        this.state = {
            isModalOpen: false

        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {

        this.setState({

            isModalOpen: !this.state.isModalOpen

        });
    }

    handleSubmit(values) {

        alert(JSON.stringify(values));

    }

    render() {

        return (
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-edit"></span> Add a comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Submit your comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div class="container">
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={12}>Rating</Label>
                                    <Col md={12}>
                                        <Control.select id="rating" name="rating" model=".rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor="author" md={12}>Your name</Label>
                                    <Col md={12}>
                                        <Control.text id="author" name="author" model=".author" class="form-control"
                                            validators={{

                                                minLength: minLength(3), maxLength: maxLength(15)

                                            }}
                                        />
                                        <Errors

                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{

                                                minLength: 'The name must be 3 characters long as minimum',
                                                maxLength: 'The name must be 15 characters long as maximum'

                                            }}

                                        />

                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor="comment" md={12}>Comment</Label>
                                    <Col md={12}>
                                        <Control.textarea id="comment" name="comment" model=".comment" class="form-control" rows={6} />

                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col md={12}>
                                        <Button type="submit" color="primary">Submit comment</Button>
                                    </Col>
                                </Row>

                            </div>
                        </LocalForm>

                    </ModalBody>
                </Modal>
            </>


        );

    }

}

export default CommentForm;