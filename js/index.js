// document.write("hello");
// alert("i am good");


class calculator{
    constructor(previousOperandTextElement,currentOperandTextElement)
    this.previousOperandTextElement=previousOperandTextElement
    this.currentOperandTextElement=currentOperandTextElement
    this.clear()
 }
clear(){ 
     this.currentOperand=''
    this.PreviousOperand=''
    this.Operation=undefined

 }
 delete() {

 }
 appendNumber(number){
     this.currentOperand = number

 }
 chooseoperation(operation){

 }
 compute(){

 }
 updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand

}

 const numberbuttons=document.querySelectorAll('[data-number]')
 const operationbuttons=document.querySelectorAll('[data-operation]')
 const equalsbutton=document.querySelector('[data-equals]')
 const deletebutton=document.querySelector('[data-delete]')
 const allclearbutton=document.querySelector('[data-all-clear]')
 const previousOperandtextelement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement=document.querySelector('[data-current-operand]')

 const calculator = new calculator(previousOperandTextElement,currentOperandTextElement)
 numberbuttons.forEach(button => {
     button.addEventListener('click',() => {
         calculator.appendNumber(button.innerText)
         calculator.updateDisplay()

     })
 })
