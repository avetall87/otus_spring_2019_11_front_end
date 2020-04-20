import React, {Component} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {AuthorService} from "./authorService";

export default class Author extends Component {

    buttonStyle = {
        marginLeft: '10px'
    };


    onDeleteHandler = (id) => {
        const { onDeleteAuthor } = this.props;
        onDeleteAuthor(id);
    };


    render() {
        const { authorData } = this.props;
        const authorService = new AuthorService();

        return (
            <ListGroup>
                {authorData.map((item) =>
                    <ListGroup.Item key={item.id}>{authorService.formatAuthorName(item.firstName, item.lastName, item.patronymic)}
                        <input type="button"
                               onClick={() => this.onDeleteHandler(item.id)}
                               value={'Удалить'}
                               style={this.buttonStyle}>
                        </input>
                    </ListGroup.Item>
                )}
            </ListGroup>
        );
    }
}