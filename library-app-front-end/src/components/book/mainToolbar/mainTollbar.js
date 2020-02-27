import React, {Component} from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {ReviewButton} from "./button/reviewButton";

export default class MainToolbar extends Component {

    render() {

        const { reviewButtonDisable } = this.props;

        return (<ButtonToolbar>
                    <ReviewButton active={reviewButtonDisable} variant="primary"/>
                </ButtonToolbar>
        );
    }
}