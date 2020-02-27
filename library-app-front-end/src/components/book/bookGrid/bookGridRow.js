import React, {Component} from 'react';

export default class BookGridRow extends Component {

    actionStyle = {
        display: 'flex',
    };

    actionElementStyle = {
        margin: '5px'
    };

    render() {
        const {idx, id, name, description, genres, review, edit, remove} = this.props;

        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{genres}</td>
                <td className={'action-col-style'}>
                    <div style={this.actionStyle}>
                        <div style={this.actionElementStyle}>{review}</div>
                        <div style={this.actionElementStyle}>{edit}</div>
                        <div style={this.actionElementStyle}>{remove}</div>
                    </div>
                </td>
            </tr>
        );
    }
}
