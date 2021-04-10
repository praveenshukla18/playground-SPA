import {useState} from 'react';
import evaluateExpression from './ExpressionEvaluator'

const ClickCounterApp = () => {
    
    const [count, setCount] = useState(0);

    const btnClickCounter = () => {
        alert(evaluateExpression('2/2*6'));
        setCount(count+1);
    }

    const btnResetHandler = () => {
        setCount(0);
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={btnClickCounter}>Click</button>
            <button onClick={btnResetHandler}>Reset</button>
        </div>
    );
}

export default ClickCounterApp;