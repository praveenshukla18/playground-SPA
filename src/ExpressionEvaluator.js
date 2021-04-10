const operators = ['-', '+', '*', '/'];

const operatorPrecedenceMap = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 3
};

const operations = {
    '+': (operand1, operand2) => operand1 + operand2,
    '-': (operand1, operand2) => operand1 - operand2,
    '*': (operand1, operand2) => operand1 * operand2,
    '/': (operand1, operand2) => operand1 / operand2
}

const performOperation = (operand1, operand2, operator) => {
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
    return operations[operator](operand1, operand2);
}

const top = arr => {
    return arr[arr.length-1];
}

const evaluateExpression = (expression) => {
    let operatorStack = [], operandStack = [];
    expression = expression.replace(/\s/g,'');

    [...expression].forEach(character => {
        if(operators.includes(character)){
            if(operatorStack.length){
                while(operatorPrecedenceMap[top(operatorStack)] > operatorPrecedenceMap[character]){
                    let operand1 = operandStack.pop();
                    let operand2 = operandStack.pop();
                    let operator = operatorStack.pop();
                    operandStack.push(performOperation(operand2, operand1, operator));
                    if(!operatorStack.length){
                        break;
                    }
                }
            }
            operatorStack.push(character);
        }else if(!isNaN(character)){
            operandStack.push(character);
        }else{
            //error
        }    
    });
    
    while(operatorStack.length){
        let operand1 = operandStack.pop();
        let operand2 = operandStack.pop();
        let operator = operatorStack.pop();
        operandStack.push(performOperation(operand2, operand1, operator));
    }

    return top(operandStack);
};

export default evaluateExpression;