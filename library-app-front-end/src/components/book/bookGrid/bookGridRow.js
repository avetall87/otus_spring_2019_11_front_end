import React, {Component} from 'react';

export default class BookGridRow extends Component {

    render() {
        const {idx, id, name, description, genres} = this.props;

        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{genres}</td>
            </tr>
        );
    }
}
