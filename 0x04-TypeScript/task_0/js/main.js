// Create student objects
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "San Francisco"
};
// Array of students
var studentsList = [student1, student2];
// Function to render table in DOM
function renderTable(students) {
    var body = document.body;
    // Create table element
    var table = document.createElement("table");
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";
    // Create table header
    var headerRow = document.createElement("tr");
    var th1 = document.createElement("th");
    th1.textContent = "First Name";
    th1.style.border = "1px solid black";
    th1.style.padding = "8px";
    var th2 = document.createElement("th");
    th2.textContent = "Location";
    th2.style.border = "1px solid black";
    th2.style.padding = "8px";
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    table.appendChild(headerRow);
    // Populate rows
    students.forEach(function (student) {
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.textContent = student.firstName;
        td1.style.border = "1px solid black";
        td1.style.padding = "8px";
        var td2 = document.createElement("td");
        td2.textContent = student.location;
        td2.style.border = "1px solid black";
        td2.style.padding = "8px";
        row.appendChild(td1);
        row.appendChild(td2);
        table.appendChild(row);
    });
    body.appendChild(table);
}
// Call the render function
renderTable(studentsList);
