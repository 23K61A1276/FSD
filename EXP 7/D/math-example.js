document.getElementById("runBtn").addEventListener("click", runMathExample);

function runMathExample() {
  const output = [];
  output.push("Math.PI: " + Math.PI);
  output.push("Math.E: " + Math.E);

  const num = 7.25;
  output.push("Original number: " + num);

  output.push("Rounded: " + Math.round(num));
  output.push("Floor: " + Math.floor(num));
  output.push("Ceil: " + Math.ceil(num));

  output.push("Square root of 16: " + Math.sqrt(16));
  output.push("Random number (0-1): " + Math.random());

  const randomInt = Math.floor(Math.random() * 10) + 1;
  output.push("Random integer between 1 and 10: " + randomInt);

  document.getElementById("output").textContent = output.join("\n");
}
