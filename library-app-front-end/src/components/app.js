import React, {Component} from 'react';
import './app.css';
import Book from "./book";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ErrorInfo from "./error";
import Author from "./author";

export default class App extends Component {

    render() {
        return (
            <Router>
                <header>
                    <Navbar bg="light" variant="light">
                        <Navbar.Brand href="/">Библиотека</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/author">Авторы</Nav.Link>
                            <Nav.Link href="/book">Кинги</Nav.Link>
                        </Nav>
                    </Navbar>
                </header>
                <Switch>
                    <Route exact path={'/'}/>
                    <Route exact path={'/author'} component={Author}/>
                    <Route exact path={'/book'} component={Book}/>
                    <Route component={ErrorInfo}/>
                </Switch>
            </Router>
        );
    }
}