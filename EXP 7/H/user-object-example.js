document.getElementById("runBtn").addEventListener("click", runUserObjectExample);

function runUserObjectExample() {
  const output = [];

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function() {
      return this.firstName + " " + this.lastName;
    };

    Object.defineProperty(this, "info", {
      get: function() {
        return `${this.getFullName()}, Age: ${this.age}`;
      },
      set: function(value) {
        const parts = value.split(", ");
        if (parts.length === 2) {
          const nameParts = parts[0].split(" ");
          if (nameParts.length === 2) {
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
          }
          this.age = parseInt(parts[1].replace("Age: ", ""));
        }
      }
    });
  }

  const person1 = new Person("John", "Doe", 30);

  output.push("Full name: " + person1.getFullName());
  output.push("Info (getter): " + person1.info);

  person1.info = "Jane Smith, Age: 28";

  output.push("After using setter:");
  output.push("Full name: " + person1.getFullName());
  output.push("Age: " + person1.age);
  output.push("Info (getter): " + person1.info);

  document.getElementById("output").textContent = output.join("\n");
}
