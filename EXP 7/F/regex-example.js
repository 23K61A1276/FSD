document.getElementById("runBtn").addEventListener("click", runRegexExample);

function runRegexExample() {
  const output = [];
  const text = "The rain in SPAIN stays mainly in the plain.";
  const regex = /ain/gi;

  output.push("Text: " + text);
  output.push("Test for 'ain': " + regex.test(text));

  const matches = text.match(regex);
  output.push("Matches: " + JSON.stringify(matches));

  const replaced = text.replace(regex, "XXX");
  output.push("Replaced text: " + replaced);

  output.push("Match positions:");
  let match;
  regex.lastIndex = 0;
  while ((match = regex.exec(text)) !== null) {
    output.push(`  Found '${match[0]}' at index ${match.index}`);
  }

  document.getElementById("output").textContent = output.join("\n");
}
