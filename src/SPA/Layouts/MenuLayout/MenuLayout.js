import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';

class MenuLayout extends React.Component{
    constructor(props){
        super();
        this.props = props;
    }

    getMenuItems(){
        let menuConfig = this.props.menuConfig.MenuConfig,
            menuItemElements = [];
        for(const key in menuConfig){
            menuItemElements.push(<NavLink to={menuConfig[key].path}><div className='menu-item'>{menuConfig[key].text}</div></NavLink>);
        }
        return menuItemElements;
    }

    getMenuContext(){
        let contextConfig = this.props.menuConfig,
            menuConfig = this.props.menuConfig.MenuConfig,
            elements = [];
        for(const key in contextConfig){
            if(key != 'MenuConfig'){
                elements.push(<Route path={menuConfig[key].path} component={contextConfig[key]} />);
            }
        }
        return elements;
    }

    render(){
        return (
            
            <div className='menu-layout'>
                <div className='side-menu'>
                    {this.getMenuItems()}
                </div>
                <div className='menu-content'>
                    <Switch>
                        {this.getMenuContext()}
                    </Switch>  
                </div>
            </div>
            
        );
    }
}

export default MenuLayout;