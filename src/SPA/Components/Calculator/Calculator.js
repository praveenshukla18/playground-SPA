import React from 'react';
import CalculatorTitle from './CalculatorTitle';
import OutputScreen from './OutputScreen';
import Button from './Button';

class Calculator extends React.Component {

    constructor(){
        super();
        
        this.state = {
            inputExpression: '',
            outputValue: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event){
        const value = event.currentTarget.getAttribute('value');
        switch(value){
            case '=': 
                this.equalClicked();
                break;
            case 'C':
                this.clearScreen();
                break;
            case '<':
                this.delete();
                break;
            default:
                this.setState({inputExpression: this.state.inputExpression += value });
        }
    }

    equalClicked(){
        if(this.state.inputExpression != ""){
            let output = '';
            try{
                output = eval(this.state.inputExpression);
            }catch(err){
                this.setState({outputValue: "Error"});
            }
            if(!output){
                this.setState({outputValue: "Error"});
                return;
            }
            this.setState({outputValue: output});
        }
    }

    clearScreen(){
        this.setState({inputExpression: '', outputValue: ''});
    }

    delete(){
        let newStr = this.state.inputExpression.substring(0, this.state.inputExpression.length-1);
        this.setState({inputExpression: newStr});
    }

    render(){
        return (
            <div className="calculator">
                <div className="calculator-body">
                    <OutputScreen input={this.state.inputExpression} output={this.state.outputValue}/>
                    <div className="keypad">
                        <div className="numbers">
                            <div className="numbers-btn-row">
                                <Button label={'('} btnType='func' handleClick={this.handleClick}/>
                                <Button label={')'} btnType='func' handleClick={this.handleClick}/>
                                <Button label={'C'} btnType='func' handleClick={this.handleClick}/>
                                <Button label={'<'} btnType='func' handleClick={this.handleClick}/>
                            </div>
                            <div className="numbers-btn-row">
                                <Button label={7} btnType='num' handleClick={this.handleClick}/>
                                <Button label={8} btnType='num' handleClick={this.handleClick}/>
                                <Button label={9} btnType='num' handleClick={this.handleClick}/>
                                <Button label={'/'} btnType='op' handleClick={this.handleClick}/>
                            </div>
                            <div className="numbers-btn-row">
                                <Button label={4} btnType='num' handleClick={this.handleClick}/>
                                <Button label={5} btnType='num' handleClick={this.handleClick}/>
                                <Button label={6} btnType='num' handleClick={this.handleClick}/>
                                <Button label={'*'} btnType='op' handleClick={this.handleClick}/>
                            </div>
                            <div className="numbers-btn-row">
                                <Button label={1} btnType='num' handleClick={this.handleClick}/>
                                <Button label={2} btnType='num' handleClick={this.handleClick}/>
                                <Button label={3} btnType='num' handleClick={this.handleClick}/>
                                <Button label={'-'} btnType='op' handleClick={this.handleClick}/>
                            </div>
                            <div className="numbers-btn-row">
                                <Button label={0} btnType='num' handleClick={this.handleClick}/>
                                <Button label={'.'} btnType='num' handleClick={this.handleClick}/>
                                <Button label={'='} btnType='num' handleClick={this.handleClick}/>
                                <Button label={'+'} btnType='op' handleClick={this.handleClick}/>
                            </div>
                            <div>
                                
                                </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;