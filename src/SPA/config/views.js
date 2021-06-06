/**
 * This file is used as the configuration for rendering header component and setup routing(navigation) from the header.
 */

/**
 * Re-export views (react component to be rendered in the context) from here, every time a view is added.
 */
export {Home} from "../Views/Home";
export {UserList} from "../Views/UserListView/UserList";
export {CovidPortal} from "../Views/CovidPortal/CovidPortal";
//export {Contact} from "../Views/Contact";
//export {ComponentsView} from "../Views/ComponentsView/ComponentsView";

/**
 * Add header configuration for the views. User same key as the eported named module from the view component.
 */
const headerConfig = {
    Home: {
        path: '/home',
        text: 'Home'
    },
    UserList: {
        path: '/user',
        text: 'User'
    },
    CovidPortal: {
        path: '/covidportal',
        text: 'Covid'
    }
    /*,
    Contact: {
        path: '/contact',
        text: 'Contact'
    },
    ComponentsView: {
        path: '/components',
        text: 'Components'
    }*/
};

export {headerConfig};