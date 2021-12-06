console.log("first JS program this week");
//create a calcutaor class
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    clear() {

    }

    delete() {

    }

    appendNumber(number) {
           
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay() {

    }
    

}
//select all different #, operations, AC, DEL and other misc buttons
//add classes to HTML so use data attributes to not mixed w/ HTML
// between stylizng classes and JS

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const equalsButton = document.querySelector('[data-equals]')

