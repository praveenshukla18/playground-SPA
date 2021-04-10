import React from 'react';

import MenuLayout from '../../Layouts/MenuLayout/MenuLayout';
import * as menuConfig from './ContextConfig';

const ComponentsView = () => (
    <div className='component-view'>
        <MenuLayout menuConfig={menuConfig}/>
    </div>
);

export {ComponentsView};
export default ComponentsView;