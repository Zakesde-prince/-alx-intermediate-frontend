interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "San Francisco"
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Function to render table in DOM
function renderTable(students: Student[]): void {
  const body = document.body;

  // Create table element
  const table = document.createElement("table");
  table.style.border = "1px solid black";
  table.style.borderCollapse = "collapse";

  // Create table header
  const headerRow = document.createElement("tr");

  const th1 = document.createElement("th");
  th1.textContent = "First Name";
  th1.style.border = "1px solid black";
  th1.style.padding = "8px";

  const th2 = document.createElement("th");
  th2.textContent = "Location";
  th2.style.border = "1px solid black";
  th2.style.padding = "8px";

  headerRow.appendChild(th1);
  headerRow.appendChild(th2);
  table.appendChild(headerRow);

  // Populate rows
  students.forEach(student => {
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = student.firstName;
    td1.style.border = "1px solid black";
    td1.style.padding = "8px";

    const td2 = document.createElement("td");
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
