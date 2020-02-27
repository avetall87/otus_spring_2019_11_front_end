import React, {Component} from 'react';
import '../book/book.css';
import BookGridRow from "./bookGrid";
import BookServiceApi from "./service/bookServiceApi";
import {BookService} from "./service/bookService";
import Table from "react-bootstrap/Table";
import Remove from "./remove";
import Review from "./review";
import Edit from "./edit";

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
            ],
            toolBarActive: false
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

    onSelectHandler = () => {
        this.setState({toolBarActive: true});
    };

    render() {
        const bookService = new BookService();

        return (
            <div>
                <Table onSelect={this.onSelectHandler} className={'App-margin-top'} striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Наименование</th>
                        <th>Описание</th>
                        <th>Жанр</th>
                        <th className={'action-col-style'}>Действие</th>
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
                                         genres={bookService.genreLinearization(item.genres)}
                                         review={<Review bookName={item.name}/>}
                                         edit={<Edit/>}
                                         remove={<Remove bookId={item.id}/>}/>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}
