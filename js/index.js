class calculator{
    constructor(previousOperandTextElement,currentOperandTextElement)
    this.previousOperandTextElement=previousOperandTextElement
    this.currentOperandTextElement=currentOperandTextElement
}
const numberbuttons=document.querySelectorAll('[data-number]')
const operationbuttons=document.querySelectorAll('[data-operation]')
const equalsbutton=document.querySelector('[data-equals]')
const deletebutton=document.querySelector('[data-delete]')
const allclearbutton=document.querySelector('[data-all-clear]')
const previousOperandtextelement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement=document.querySelector('[data-current-operand]')
