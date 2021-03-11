const PROMPT_1 = "Enter the first number";
const PROMPT_2 = "Enter the second number";
const INVALID_INPUT = `<p class="alert">&#9888; One of the inputs was invald &#9888;</p>`;

const resultElement = document.getElementById('result');

function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

(function () {
    const first = prompt(PROMPT_1);
    const a = Number(first);

    const second = prompt(PROMPT_2);
    const b = Number(second);

    const startingOutput = `
      <p>First input: ${first}</p>
      <p>Second input: ${second}</p>
    `;
    const invalid = Number.isNaN(a) || Number.isNaN(b);

    if (invalid) {
      resultElement.innerHTML = `
        ${INVALID_INPUT}
        ${startingOutput}
      `;
      return;
    }
    
    // valid inputs
    resultElement.innerHTML = `
      ${startingOutput}
      <p>${a} ➕ ${b} = ${add(a,b)} </p>
      <p>${a} ➖ ${b} = ${subtract(a,b)} </p>
      <p>${a} ✖️ ${b} = ${multiply(a,b)} </p>      
      <p>${a} ➗ ${b} = ${parseFloat(divide(a,b).toFixed(3))} </p>
    `;
  }
)();
