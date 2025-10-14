document.getElementById("runBtn").addEventListener("click", runStringExample);

function runStringExample() {
  const output = [];
  const message = "Hello, JavaScript!";

  output.push("Original message: " + message);
  output.push("Length: " + message.length);
  output.push("Uppercase: " + message.toUpperCase());
  output.push("Lowercase: " + message.toLowerCase());
  output.push("Substring (7,17): " + message.substring(7, 17));
  output.push("Includes 'Java': " + message.includes("Java"));
  output.push("Replace 'JavaScript' with 'World': " + message.replace("JavaScript", "World"));
  output.push("Split by ', ': " + JSON.stringify(message.split(", ")));

  document.getElementById("output").textContent = output.join("\n");
}
