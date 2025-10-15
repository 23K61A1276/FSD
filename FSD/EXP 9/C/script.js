function validateForm() {
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;

    const namePattern = /^[A-Za-z][A-Za-z0-9]{5,}$/;
    const mobilePattern = /^[0-9]{10}$/;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    let messages = [];

    if (!namePattern.test(name)) {
        messages.push("Invalid Name: Should start with a letter, contain only alphanumeric, and be at least 6 characters.");
    }

    if (!mobilePattern.test(mobile)) {
        messages.push("Invalid Mobile: Must be exactly 10 digits.");
    }

    if (!emailPattern.test(email)) {
        messages.push("Invalid Email format.");
    }

    if (messages.length > 0) {
        alert(messages.join("\n"));
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
