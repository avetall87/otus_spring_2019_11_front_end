import React, {Component} from "react";
import Button from "react-bootstrap/Button";

export class ToolbarButton extends Component {

    render() {
        const {sign, description} = this.props;

        return (
            <Button disabled={ sign } variant="primary">{ description }</Button>
        );
    }
}