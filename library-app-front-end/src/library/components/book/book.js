import React, {Component} from 'react';
import './book.css';
import BookGridRow from "./bookGrid";
import BookServiceApi from "./service/bookServiceApi";
import {BookService} from "./service/bookService";
import Table from "react-bootstrap/Table";
import Remove from "./remove";
import Edit from "./edit";

export default class Book extends Component {

    editStyle = {
        marginLeft: '10px',
        marginBottom: '10px'
    };

    bookTableStyle = {
      margin: '10px'
    };

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
        this.reloadBookData();
    }

    reloadBookData() {
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
                <div style={this.editStyle}>
                    <Edit bookId={''} reloadBookData={() => this.reloadBookData()}/>
                </div>
                <div style={this.bookTableStyle}>
                    <Table onSelect={this.onSelectHandler} striped bordered hover>
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
                                             edit={<Edit bookId={item.id} reloadBookData={() => this.reloadBookData()}/>}
                                             remove={<Remove bookId={item.id} reloadBookData={() => this.reloadBookData()}/>}/>
                            )
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}
