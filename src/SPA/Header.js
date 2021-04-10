import React from 'react';
import {
    NavLink
} from 'react-router-dom';

const getListOfHeaderItems = (headerConfig) => {
    let elements = [];
    for(const key in headerConfig){
        elements.push(<NavLink to={headerConfig[key].path}><div className='link-div'>{headerConfig[key].text}</div></NavLink>);
    }
    return elements;
};

const Header = (props) => (
    <div className='app-header'>
        {getListOfHeaderItems(props.headerConfig)}
    </div>
);

export default Header;