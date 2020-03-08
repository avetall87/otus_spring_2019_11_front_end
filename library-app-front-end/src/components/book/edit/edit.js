import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import BookServiceApi from "../service/bookServiceApi";
import {BookService} from "../service/bookService";
import AuthorServiceApi from "../../author/service/authorServiceApi";
import Author from "../author";
import {AuthorService} from "../author/authorService";

export default class Edit extends Component {

    addAuthorStyle = {
        marginLeft: '10px'
    };

    constructor(props) {
        super(props);

        this.state = {
            bookData:
                {
                    id: '',
                    name: '',
                    description: '',
                    authors: [],
                    genres: [],
                    comments: []
                }
            ,
            authorData: [{
                id: '',
                firstName: '',
                lastName: '',
                patronymic: ''
            }],
            allAuthorData: [{
                id: '',
                firstName: '',
                lastName: '',
                patronymic: ''
            }],
            selectedAuthor: {
                id: '',
                firstName: '',
                lastName: '',
                patronymic: ''
            },
            selectedGenres: '',
            selectedComments: '',
            show: false
        };
    }

    loadBookData(bookId) {
        const bookServiceApi = new BookServiceApi();
        return bookServiceApi.getBookById(bookId);
    }

    loadAuthors(bookId) {
        const authorServiceApi = new AuthorServiceApi();
        return authorServiceApi.getAuthorsByBookId(bookId);
    }

    loadAllAuthors() {
        const authorServiceApi = new AuthorServiceApi();
        return authorServiceApi.getAllAuthors();
    }

    onClickHandlerEdit = (bookId) => {
        const bookService = new BookService();

        this.loadBookData(bookId)
            .then(data => {
                    this.setState({bookData: data});

                    this.setState({selectedGenres: bookService.genreLinearization(this.state.bookData.genres)});
                    this.setState({selectedComments: bookService.commentsLinearization(this.state.bookData.comments)});

                    this.loadAuthors(bookId).then(authors =>
                        this.setState({authorData: authors})
                    ).catch(error => alert('Ошибка при загрузке авторов:' + error));

                    this.loadAllAuthors().then(authors =>
                        this.setState({allAuthorData: authors})
                    ).catch(error => alert('Ошибка при загрузке авторов:' + error));

                }
            )
            .catch(error => alert('Ошибка при загрузке книги:' + error));

        this.setState({show: true})
    };

    onClickHandlerNew = () => {
        this.loadAllAuthors().then(authors =>
            this.setState({allAuthorData: authors})
        ).catch(error => alert('Ошибка при загрузке авторов:' + error));

        this.setState({authorData: []});
        this.setState({show: true});
    };

    onHandleSave = () => {
        const bookServiceApi = new BookServiceApi();

        let newBookData = this.state.bookData;
        newBookData.authors = this.state.authorData;
        newBookData.genres = this.state.selectedGenres.split(',');
        newBookData.comments = this.state.selectedComments.split('\n');

        bookServiceApi.saveBook(newBookData)
            .then(() => {
                    console.log("Кгина обновлена !");
                    this.props.reloadBookData();
                }
            )
            .catch(data => alert('Ошибка при сохранении книги ' + data));
        this.onHandleClose();
    };

    onHandleClose = () => {
        this.setState({show: false})
    };

    onNameChange = (event) => {
        let newBookData = this.state.bookData;
        newBookData.name = event.target.value;
        this.setState({bookData: newBookData});
    };

    onDescriptionChange = (event) => {
        let newBookData = this.state.bookData;
        newBookData.description = event.target.value;
        this.setState({bookData: newBookData});
    };

    onGenreChange = (event) => {
        const newValue = event.target.value;
        this.setState({selectedGenres: newValue});
    };

    onCommentsChange = (event) => {
        const newValue = event.target.value;
        this.setState({selectedComments: newValue});
    };

    onDeleteAuthor = (id) => {
        let newAuthorData = [];

        this.state.authorData.forEach(value => {
            if (value.id !== id) {
                newAuthorData.push(value);
            }
        });

        this.setState({authorData: newAuthorData})
    };

    onAddAuthor = () => {
        let newAuthorData = this.state.authorData;

        const filteredData = newAuthorData.filter(item => item.id === this.state.selectedAuthor.id);

        if (filteredData.length > 0) {
            alert('Данный автор уже был добавлен !');
            return;
        }

        if (this.state.selectedAuthor.id === '') {
            alert('Автор не выбран !');
            return;
        }

        newAuthorData.push(this.state.selectedAuthor);
        this.setState({authorData: newAuthorData});
    };

    onChangeAuthor = (event) => {
        const id = event.target.value;

        let newSelectedAuthor = {};

        this.state.allAuthorData.map((item) => {
            if (item.id === id) {
                return newSelectedAuthor = item;
            }
        });

        this.setState({selectedAuthor: newSelectedAuthor})
    };


    render() {
        const {bookId} = this.props;
        const authorService = new AuthorService();
        const bookName = this.state.bookData.name;

        let button;

        if (bookId === null || bookId === '') {
            button = <button type="input" className="btn btn-success" onClick={this.onClickHandlerNew}>
                Добавить новую книгу
                <i className="glyphicon-glyphicon-plus"/>
            </button>;
        } else {
            button = <button type="input" className="btn btn-info" onClick={() => this.onClickHandlerEdit(bookId)}>
                <i className="glyphicon glyphicon-edit"/>
            </button>;
        }

        return (
            <div>
                {button}
                <Modal show={this.state.show} onHide={this.onHandleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Просмотрт издания: {bookName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Col} controlId="formGridBookName">
                                <Form.Label>Наименование</Form.Label>
                                <Form.Control placeholder="Наименование издания"
                                              onChange={this.onNameChange}
                                              value={this.state.bookData.name}/>

                                <Form.Label className={'App-margin-top'}>Авторы</Form.Label>
                                <select id="authors" style={this.addAuthorStyle} onChange={this.onChangeAuthor}>
                                    <option key='' value=''/>
                                    {this.state.allAuthorData.map((item) =>
                                        <option key={item.id} value={item.id}>
                                            {authorService.formatAuthorName(item.firstName, item.lastName, item.patronymic)}
                                        </option>
                                    )}
                                </select>

                                <button type="button" style={this.addAuthorStyle} onClick={this.onAddAuthor}>Добавить автора</button>
                                <Author authorData={this.state.authorData} onDeleteAuthor={this.onDeleteAuthor}/>
                                <Form.Label className={'App-margin-top'}>Жанры</Form.Label>
                                <Form.Control placeholder="Жанры"
                                              onChange={this.onGenreChange}
                                              value={this.state.selectedGenres}/>

                                <Form.Label>Описание</Form.Label>
                                <Form.Control as="textarea"
                                              onChange={this.onDescriptionChange}
                                              value={this.state.bookData.description}/>

                                <Form.Label>Комментарии</Form.Label>
                                <Form.Control as="textarea"
                                              onChange={this.onCommentsChange}
                                              value={this.state.selectedComments}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.onHandleClose}>
                            Отменить
                        </Button>
                        <Button variant="primary" onClick={this.onHandleSave}>
                            Сохранить
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}