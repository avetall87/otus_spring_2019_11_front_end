import React, {Component} from 'react';

export default class Edit extends Component {

    render() {
        return (
            <button type="input" className="btn btn-success" onClick={this.onClickHandler}>
                <i className="glyphicon glyphicon-edit"/>
            </button>

        );
    }
}