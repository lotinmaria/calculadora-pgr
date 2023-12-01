const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
   constructor(previousOperationText, currentOperationText) {
      this.previousOperationText = previousOperationText;
      this.currentOperationText = currentOperationText;
      this.currentOperation = "";
   }
   //add digit to calculator screen
   addDigit(digit) {
      // check if current operation already has a dot
      if (digit === "." && this.currentOperationText.innerText.includes(".")) {
         return
      }
      this.currentOperation = digit;
      this.updateScreen();
   }

   // Process all calculator operations

   processOperation(operation) {
      // Check if current is empty
      if (this.currentOperationText.innerText === "" && operation !== "C") {
         // Change operation
         if (this.previousOperationText.innerText !== "") {
            this.changeOperation(operation);
         }
         return;
      }


      // Get current and previous values
      let operationsValue;
      const previous = +this.previousOperationText.innerText.split(" ")[0];
      const current = +this.currentOperationText.innerText;

      switch (operation) {
         case "+":
            operationsValue = previous + current;
            this.updateScreen(operationsValue, operation, current, previous);
            break;
         case "-":
            operationsValue = previous - current;
            this.updateScreen(operationsValue, operation, current, previous);
            break;
         case "/":
            operationsValue = previous / current;
            this.updateScreen(operationsValue, operation, current, previous);
            break;
         case "*":
            operationsValue = previous * current;
            this.updateScreen(operationsValue, operation, current, previous);
            break;
            case "DEL":
            this.processDelOperation();
            break;
            case "CE":
            this.processClearCurrentOperation();
            break;
            
            case "=":
            this.processEqualOperation();
            break;
         default:
            return;
      }

   }
   // Change values of the calculator screen
   updateScreen(operationsValue = null,
      operation = null,
      current = null,
      previous = null
   ) {

      if (operationsValue === null) {
         this.currentOperationText.innerText += this.currentOperation
      } else {
         // Check if value is zero, if it is just add current value
         if (previous === 0) {
            operationsValue = current;
         }
         // Add current value to previous
         this.previousOperationText.innerText = `${operationsValue} ${operation}`;
         this.currentOperationText.innerText = "";
      }
   }
   // Change math operation
   changeOperation(operation){
      
      const mathOperation = ["*", "/", "+", "-"];

      if(!mathOperation.includes(operation)){
         return
      }

      this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
   }

// Delet the last digit

   processDelOperation(){
      this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
   }

// Clear current operation
   processClearCurrentOperation(){
      this.currentOperationText.innerText =  "";
   }

   // Clear all operations
   processClearOperation(){
      this.currentOperationText.innerText =  "";
      this.previousOperationText.innerText =  "";
   }

   // Process an operation
   processEqualOperation(){
      const operation = previousOperationText.innerText.split(" ")[1];
      this.processOperation(operation);
   }
}
const calc = new Calculator(previousOperationText, currentOperationText);
buttons.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      const value = e.target.innerText;

      if (+value >= 0 || value === ".") {
         calc.addDigit(value);
      } else {
         calc.processOperation(value);
      }
   });
});