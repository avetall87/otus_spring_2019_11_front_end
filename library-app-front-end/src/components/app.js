import React, {Component} from 'react';
import './app.css';
import Book from "./book";
import BrowserRouter from "react-router-dom/modules/BrowserRouter";
import Link from "react-router-dom/modules/Link";
import Switch from "react-bootstrap/cjs/Switch";
import Route from "react-router/modules/Route";

export default class App extends Component {

    render() {
        return (
            // <div className={"App-margin"}>
            //
            //     <div className={"App-margin-top"}>
            //         <Book/>
            //     </div>
            // </div>
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
                    {/*<Route exact path={'/author'} component={Author}/>*/}
                    <Route exact path={'/book'} component={Book}/>
                    <Route exact path={'/genre'} component={Book}/>
                    {/*<Route component={ErrorInfo}/>*/}
                </Switch>
            </BrowserRouter>
        );
    }
}