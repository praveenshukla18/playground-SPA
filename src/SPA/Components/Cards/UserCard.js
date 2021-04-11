import React from 'react';

class UserCard extends React.Component {
    
    constructor(props){
        super();
        this.state = {
            isOpen: false
        };
    }

    toggleCollapsible = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderContact = () => {
        return (
            <div className='user-card-contact'>
                <div>Lives in: {this.props.user.city ? this.props.user.city : ''} {this.props.user.country}</div>
                <div>Contact: {this.props.user.email} | {this.props.user.phone}</div>
            </div>
        );
    }

    render(){
        return (
            <div className='user-card'>
                <div className='user-card-title'>
                    {this.props.user.firstName} {this.props.user.lastName}
                </div>
                <div className='user-card-body'>
                    About..
                </div>
                <div className='user-card-footer'>
                    <button className='button-card' onClick={this.toggleCollapsible}>contact</button>
                </div>
                { this.state.isOpen ? this.renderContact(): ''}
            </div>
        );
    }
}

export default UserCard;