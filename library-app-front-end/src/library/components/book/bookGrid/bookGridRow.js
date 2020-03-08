import React, {Component} from 'react';

export default class BookGridRow extends Component {

    actionStyle = {
        display: 'flex',
    };

    actionElementStyle = {
        margin: '5px'
    };

    render() {
        const {idx, id, name, description, genres, edit, remove} = this.props;

        return (
            <tr key={id}>
                <td className='table-td-height'>{idx + 1}</td>
                <td className='table-td-height'>{name}</td>
                <td className='table-td-height'>{description}</td>
                <td className='table-td-height'>{genres}</td>
                <td className={'table-td-height action-col-style'}>
                    <div style={this.actionStyle}>
                        <div style={this.actionElementStyle}>{edit}</div>
                        <div style={this.actionElementStyle}>{remove}</div>
                    </div>
                </td>
            </tr>
        );
    }
}
