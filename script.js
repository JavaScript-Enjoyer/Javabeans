function useCalculator() {

    let num1 = prompt("First Number");
    num1 = Number(num1);
    const operator = prompt("Operator (+, -, *, /)");
    let num2 = prompt("Second Number");
    num2 = Number(num2);
  
    if (operator === "+") {
      alert(`The answer is ${Number(num1) + Number(num2)}`);
    } else if (operator === "-") {
      alert(`The answer is ${Number(num1) - Number(num2)}`);
    } else if (operator === "*") {
      alert(`The answer is ${Number(num1) * Number(num2)}`);
    } else if (operator === "/") {
      alert(`The answer is ${Number(num1) / Number(num2)}`);
    }
  }
