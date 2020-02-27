import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export class ReviewButton extends Component {
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
        const {reviewButtonDisable, bookName} = this.props;

        return (
            <div>
                <Button type="input" className="btn btn-primary" onClick={this.onClickHandler} disabled={reviewButtonDisable}>
                    <i className="glyphicon glyphicon-search"/>
                </Button>

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