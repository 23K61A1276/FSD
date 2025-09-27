// Prompt for name and age
let voterName = prompt("Enter your name:");
let voterAge = prompt("Enter your age:");

// Convert age to number
voterAge = Number(voterAge);

// Determine eligibility
let eligibility = (voterAge >= 18) ? "Can Vote" : "Cannot Vote";

// Create table HTML
let tableHTML = `
    <table>
        <tr><th>Name</th><th>Age</th><th>Eligibility</th></tr>
        <tr>
            <td>${voterName}</td>
            <td>${voterAge}</td>
            <td>${eligibility}</td>
        </tr>
    </table>
`;

// Insert table into the page
document.getElementById("voterTable").innerHTML = tableHTML;
