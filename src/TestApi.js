import React, { Component } from 'react';
import axios from 'axios';

class TestApi extends Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <div class="container">
            <br/>
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.persons.map(person => 
                        <tr>
                            <th scope="row">{person.id}</th>
                            <td>{person.name}</td>
                            <td>{person.username}</td>
                            <td>{person.email}</td>
                            <td>
                              <a class="btn btn-sm btn-primary" data-toggle="modal" data-target="#detail-modal-"data-toggle="modal" data-target={person.id}>
                                Detail
                              </a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      )
    }
}

export default TestApi;