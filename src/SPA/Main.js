import React from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';

import Header from './Header';
import {headerConfig} from './config/views';
import * as views from './config/views';

class Main extends React.Component{
    
    constructor(){
        super();
    }

    getListOfRoutesElements(){
        let elements = [];
        for(const view in views){
            if(view != 'headerConfig'){
                elements.push(<Route path={headerConfig[view].path} component={views[view]} />);
            }
        }
        return elements;
    }

    render(){
         
        return (
            <HashRouter>
                <div className='main'>
                    <Header headerConfig={headerConfig}/>
                    <div className='app-content'>
                        <Switch>
                            {this.getListOfRoutesElements()} 
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;