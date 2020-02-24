import React, {Component} from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {ToolbarButton} from "./button/toolbarButton";

export default class MainToolbar extends Component {

    render() {

        const { reviewButtonDisable } = this.props;

        return (<ButtonToolbar>
                    <ToolbarButton disabled={reviewButtonDisable} description={'Просмотреть'} variant="primary"/>
                </ButtonToolbar>
        );
    }
}