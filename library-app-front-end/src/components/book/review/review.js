import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import BookServiceApi from "../service/bookServiceApi";

export default class Review extends Component {
    state = {
        show: false
    };

    constructor(props) {
        super(props);

        this.state = {
            bookData:
                {
                    id: '',
                    name: '',
                    description: '',
                    genres: []
                }
            ,
            show: false
        };
    }

    componentWillMount() {
        this.getBookData()
            .then(data => this.setState({bookData: data}))
            .catch(reason => alert("Ошибка: " + reason));
    }

    getBookData() {
        const bookServiceApi = new BookServiceApi();
        return bookServiceApi.getBookById();
    }

    onClickHandler = () => {
        this.setState({show: true})
    };

    onHandleClose = () => {
        this.setState({show: false})
    };

    render() {
        const { bookName } = this.props;

        return (
            <div>
                <button type="input" className="btn btn-info" onClick={this.onClickHandler}>
                    <i className="glyphicon glyphicon-search"/>
                </button>

                <Modal show={this.state.show} onHide={this.onHandleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Просмотрт издания: {bookName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Col} controlId="formGridBookName">
                                <Form.Label>Наименование</Form.Label>
                                <Form.Control placeholder="Наименование издания" defaultValue={bookName}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAuthors">
                                <Form.Label>Авторы</Form.Label>
                                <Form.Control placeholder="Авторы" defaultValue={bookName}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGenres">
                                <Form.Label>Жанры</Form.Label>
                                <Form.Control placeholder="Жанры" defaultValue={bookName}/>
                            </Form.Group>

                            <Form.Group controlId="formGridDescription">
                                <Form.Label>Описание</Form.Label>
                                <FormControl as="textarea">{bookName}</FormControl>
                            </Form.Group>

                            <Form.Group controlId="formGridComments">
                                <Form.Label>Комментарии</Form.Label>
                                <FormControl as="textarea">{bookName}</FormControl>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.onHandleClose}>
                            Отменить
                        </Button>
                        <Button variant="primary" onClick={this.onHandleClose}>
                            Сохранить
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}