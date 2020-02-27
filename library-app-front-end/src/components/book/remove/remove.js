import React, {Component} from 'react';
import BookServiceApi from "../service/bookServiceApi";

export default class Remove extends Component {

    onClickHandler = (bookId) => {
        const bookServiceApi = new BookServiceApi();
        bookServiceApi.removeBook(bookId).then(response => response.text().then(t=> alert(t)));
    };

    render() {
        const {bookId} = this.props;

        return (
            <button type="input" className="btn btn-danger" onClick={() => this.onClickHandler(bookId)}>
                <i className="glyphicon glyphicon-remove-circle"/>
            </button>
        );
    }
}