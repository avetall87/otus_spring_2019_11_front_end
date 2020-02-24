import React, {Component} from 'react';
import './app.css';
import Book from "./book";
import BrowserRouter from "react-router-dom/modules/BrowserRouter";
import {Route, Switch} from "react-router";
import ErrorInfo from "./error";
import Author from "./author";
import {Link} from "react-router-dom";

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Домой</Link></li>
                            <li><Link to='/author'>Авторы</Link></li>
                            <li><Link to='/book'>Книги</Link></li>
                            <li><Link to='/genre'>Жанры</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route exact path={'/'}/>
                    <Route exact path={'/author'} component={Author}/>
                    <Route exact path={'/book'} component={Book}/>
                    <Route exact path={'/genre'}/>
                    <Route component={ErrorInfo}/>
                </Switch>
            </BrowserRouter>
        );
    }
}