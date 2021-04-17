import React from 'react';

import UserCard from '../../Components/Cards/UserCard';
import SearchBox from '../../Components/SearchBox/SearchBox';

class UserList extends React.Component{

    constructor(){
        super();
        this.state = {
            users: [],
            filteredUsers: [],
            isLoading: true
        };
    }

    componentDidMount(){
        this.fetchUsers();
    }

    fetchUsers = () => {
        fetch('https://blooming-dusk-79442.herokuapp.com/user/')
            .then(response => response.json())
            .then(userList => {
                this.setState({
                    users: userList,
                    filteredUsers: userList,
                    isLoading: false
                });
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

    filterUsers = (keyword) => {
        let filteredUsers = this.state.users.filter(user => {
            return user.firstName.toLowerCase().includes(keyword) || 
                    user.lastName.toLowerCase().includes(keyword) || 
                    user.userName.toLowerCase().includes(keyword);
        });
        this.setState({
            filteredUsers : filteredUsers
        });
    }

    renderUsers = () => {
        return this.state.filteredUsers.map(user => {
            return (
                <UserCard user={user}/>
            );
        });
    }

    render(){
        return(
            <div className='user-list-view'>
                <div className='search-box'>
                    <SearchBox onSearch={this.filterUsers}/>
                </div>
                { this.state.isLoading ? (
                    <h1>Loading...</h1>
                ): (
                    <div className='user-list'>
                        {this.renderUsers()}
                    </div>
                )}
            </div>
        );
    }
}

export {UserList};
export default UserList;