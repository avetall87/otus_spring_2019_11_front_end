import React, { Component } from 'react';
import AuthorServiceApi from "./service/authorServiceApi";
import '../app.css'
import Table from "react-bootstrap/Table";

export default class Author extends Component {

    constructor(props) {
        super(props);

        this.state = {
           authorData: [
               {
                   id: '',
                   firstName: '',
                   lastName: '',
                   patronymic: ''
               }
           ]
        };
    }

    componentWillMount() {
        this.getAuthorData()
            .then(data => this.setState({authorData: data}))
            .catch(reason => alert("Ошибка: " + reason));
    }

    getAuthorData() {
        const authorServiceApi = new AuthorServiceApi();
        return authorServiceApi.getAllAuthors();
    }

    render() {

        console.log(this.state);

        return (
            <div>
                <Table onSelect={this.onSelectHandler} striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.authorData.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.patronymic}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}