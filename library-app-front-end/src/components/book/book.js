import React, {Component} from 'react';
import '../book/book.css';
import {Table} from "react-bootstrap";
import BookGridRow from "./bookGrid";
import BookServiceApi from "./service/bookServiceApi";
import {BookService} from "./service/bookService";

export default class Book extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookData: [
                {
                    id: '',
                    name: '',
                    description: '',
                    genres: []
                }
            ]
        };
    }

    componentWillMount() {
        this.getBookData()
            .then(data => this.setState({bookData: data}))
            .catch(reason => alert("Ошибка: " + reason));
    }

    getBookData() {
        const bookServiceApi = new BookServiceApi();
        return bookServiceApi.getAllBooks();
    }

    render() {
        const bookService = new BookService();

        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Наименование</th>
                        <th>Описание</th>
                        <th>Жанр</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.bookData.map((item, index) =>
                            <BookGridRow key={index}
                                         idx={index}
                                         id={item.id}
                                         name={item.name}
                                         description={item.description}
                                         genres={bookService.genreLinearization(item.genres)}/>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}
