import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class Review extends Component {
    state = {
        show: false
    };

    onClickHandler = () => {
        this.setState({show: true})
    };

    onHandleClose = () => {
        this.setState({show: false})
    };

    render() {
        const {bookName} = this.props;

        return (
            <div>
                <button type="input" className="btn btn-info" onClick={this.onClickHandler}>
                    <i className="glyphicon glyphicon-search"/>
                </button>

                <Modal show={this.state.show} onHide={this.onHandleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Просмотрт издания: {bookName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.onHandleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.onHandleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}