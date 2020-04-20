import React, {Component} from 'react';
import BookServiceApi from "../service/bookServiceApi";

export default class Remove extends Component {

    onClickHandler = (bookId) => {
        const { reloadBookData } = this.props;
        const bookServiceApi = new BookServiceApi();
        bookServiceApi.removeBook(bookId).then(response => response.text().then(t=> {
            if (t.length !== 0) {
                alert(t);
            }

            reloadBookData();
        }));
    };

    render() {
        const { bookId } = this.props;

        return (
            <button type="input" className="btn btn-danger" onClick={() => this.onClickHandler(bookId)}>
                <i className="glyphicon glyphicon-remove-circle"/>
            </button>
        );
    }
}