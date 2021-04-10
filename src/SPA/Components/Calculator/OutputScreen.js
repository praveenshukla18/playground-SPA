import React from 'react';
import OutputScreenRow from './OutputScreenRow';

const OutputScreen = (props) => {
    return(
        <div className="screen">
            <OutputScreenRow value={props.input}/>
            <OutputScreenRow value={props.output}/>
        </div>
    )
};

export default OutputScreen;