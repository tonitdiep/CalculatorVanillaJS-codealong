// console.log("first JS program this week");
//create a calcutaor class
class Calculator {
    // orchestrating the diplay of calculator text
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
        // ^clearrs all inputs fields to default values when creting a new calculator
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        //we want our numbers to be appended, not added 111 not 3 
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        // computation is the results of calculation
        let computation 
        //convert string to a number in prev and current variables
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        // if it is not a # at previous OR is not a current # then we want to return, and cancles the function, completely
        if (isNaN(prev) || isNaN(current)) return
        //switch statements aka a bunch of if statements changed after each other on a single object on this.opeartion
        switch (this.operation){
            case '+' : 
                computation = prev + current 
                break
            case '-' : 
                computation = prev - current 
                break
            case '*' : 
                computation = prev * current 
                break
            case '÷' : 
                computation = prev / current 
                break
            default: 
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand   
    }


}
//select all different #, operations, AC, DEL and other misc buttons
//add classes to HTML so use data attributes to not mixed w/ HTML
// between stylizng classes and JS

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll(`[data-operation]`)
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// create new Calculator
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    // console.log(botton)
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})