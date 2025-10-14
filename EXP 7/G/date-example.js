document.getElementById("runBtn").addEventListener("click", runDateExample);

function runDateExample() {
  const output = [];
  const now = new Date();

  output.push("Current date and time: " + now);
  output.push("Year: " + now.getFullYear());
  output.push("Month (0-11): " + now.getMonth());
  output.push("Date: " + now.getDate());
  output.push("Hours: " + now.getHours());
  output.push("Minutes: " + now.getMinutes());
  output.push("Seconds: " + now.getSeconds());

  const christmas = new Date(2025, 11, 25);
  output.push("Christmas 2025: " + christmas.toDateString());

  const diff = christmas - now;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
  output.push(`Days until Christmas: ${daysLeft}`);

  document.getElementById("output").textContent = output.join("\n");
}
