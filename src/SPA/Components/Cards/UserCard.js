import React from 'react';

class UserCard extends React.Component {
    
    constructor(props){
        super();
    }

    render(){
        return (
            <div className='user-card'>
                <div className='user-card-title'>
                    {this.props.name}
                </div>
                <div className='message-btn'>
                    Message
                </div>
            </div>
        );
    }
}

export default UserCard;