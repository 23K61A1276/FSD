document.getElementById("runBtn").addEventListener("click", runArrayExample);

function runArrayExample() {
  const output = [];
  const fruits = ["Apple", "Banana", "Cherry"];
  output.push("Original array: " + JSON.stringify(fruits));

  fruits.push("Date");
  output.push("After push: " + JSON.stringify(fruits));

  const firstFruit = fruits.shift();
  output.push("Removed first fruit: " + firstFruit);
  output.push("After shift: " + JSON.stringify(fruits));

  const index = fruits.indexOf("Banana");
  output.push("Index of Banana: " + index);

  output.push("Iterating over fruits:");
  fruits.forEach((fruit, idx) => {
    output.push(`  Fruit at index ${idx}: ${fruit}`);
  });

  document.getElementById("output").textContent = output.join("\n");
}
