import React from 'react';

import UserCard from '../Components/Cards/UserCard'

class Stuff extends React.Component{

    constructor(){
        super();
        this.state = {
            name: '',
            users: []
        };
    }

    componentDidMount(){
        this.fetchUsers();
    }

    nameChanged = e => {
        this.setState({ name: e.target.value });
    }

    fetchUsers = () => {
        fetch('https://blooming-dusk-79442.herokuapp.com/user/')
            .then(response => response.json())
            .then(userList => {
                this.setState({users: userList});
            });
    }

    saveUser = () => {
        fetch('https://blooming-dusk-79442.herokuapp.com/user/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(() => this.fetchUsers());
    }

    renderUsers = () => {
        return this.state.users.map(user => {
            return (
                <UserCard user={user}/>
            );
        });
    }

    render(){
        return(
            <div>
                <div className='user-list'>
                    {this.renderUsers()}
                </div>
            </div>
        );
    }
}

export {Stuff};
export default Stuff;