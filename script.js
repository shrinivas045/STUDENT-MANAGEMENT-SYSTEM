"use strict";

const STORAGE_KEY = "campusDeskStudents";
const studentForm = document.getElementById("student-form");
const studentList = document.getElementById("student-list");
const totalCount = document.getElementById("total-count");
const studentSearch = document.getElementById("student-search");
const emptyState = document.getElementById("empty-state");
const searchState = document.getElementById("search-state");
const resultCount = document.getElementById("result-count");
const formMessage = document.getElementById("form-message");
const announcement = document.getElementById("announcement");

// Read saved records once when the app starts. Invalid saved data is safely ignored.
let students = loadStudents();
renderStudents();

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearFormMessage();

  if (!studentForm.checkValidity()) {
    studentForm.reportValidity();
    return;
  }

  const formData = new FormData(studentForm);
  const name = formData.get("name").trim();
  const rollNumber = formData.get("rollNumber").trim();
  const email = formData.get("email").trim();
  const department = formData.get("department").trim();
  const year = formData.get("year");

  // Native required checks do not reject values made only of spaces.
  if (!name || !rollNumber || !email || !department) {
    showFormMessage("Please fill in every field.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showFormMessage("Enter a valid email address.", "error");
    document.getElementById("email").focus();
    return;
  }

  const duplicateRollNumber = students.some(
    (student) => student.rollNumber.toLowerCase() === rollNumber.toLowerCase()
  );
  if (duplicateRollNumber) {
    showFormMessage("That roll number is already in use.", "error");
    document.getElementById("roll-number").focus();
    return;
  }

  students.push({
    id: createStudentId(),
    name,
    rollNumber,
    email,
    department,
    year
  });

  if (!saveStudents()) {
    students.pop();
    showFormMessage("Could not save this student. Check browser storage settings and try again.", "error");
    return;
  }

  studentForm.reset();
  renderStudents();
  showFormMessage("Student added successfully.", "success");
  announcement.textContent = `${name} was added to student records.`;
  document.getElementById("student-name").focus();
});

studentSearch.addEventListener("input", renderStudents);

// Event delegation keeps delete buttons working when table rows are re-rendered.
studentList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete-id]");
  if (!deleteButton) return;

  const student = students.find((record) => record.id === deleteButton.dataset.deleteId);
  if (!student) return;

  const previousStudents = students;
  students = students.filter((record) => record.id !== student.id);
  if (!saveStudents()) {
    students = previousStudents;
    showFormMessage("Could not update saved records. Please try again.", "error");
    return;
  }

  renderStudents();
  announcement.textContent = `${student.name} was deleted.`;
});

function loadStudents() {
  try {
    const savedStudents = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(savedStudents)) return [];
    return savedStudents.filter((student) =>
      student && typeof student.id === "string" && typeof student.name === "string" &&
      typeof student.rollNumber === "string" && typeof student.email === "string" &&
      typeof student.department === "string" && typeof student.year === "string"
    );
  } catch (error) {
    console.warn("Saved student records could not be read.", error);
    return [];
  }
}

function saveStudents() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    return true;
  } catch (error) {
    console.error("Student records could not be saved.", error);
    return false;
  }
}

function createStudentId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return `STU-${window.crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  }
  return `STU-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function renderStudents() {
  const searchTerm = studentSearch.value.trim().toLowerCase();
  const matchingStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm) ||
    student.rollNumber.toLowerCase().includes(searchTerm)
  );

  studentList.replaceChildren();
  matchingStudents.forEach((student) => {
    const row = document.createElement("tr");
    addCell(row, student.id, "student-id");
    addCell(row, student.name, "student-name");
    addCell(row, student.rollNumber);
    addCell(row, student.email, "email-cell");
    addCell(row, student.department);
    addCell(row, student.year);

    const actionCell = document.createElement("td");
    actionCell.className = "action-cell";
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.dataset.deleteId = student.id;
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${student.name}`);
    actionCell.append(deleteButton);
    row.append(actionCell);
    studentList.append(row);
  });

  totalCount.textContent = String(students.length);
  resultCount.textContent = searchTerm
    ? `Showing ${matchingStudents.length} of ${students.length} students`
    : `Showing ${students.length} ${students.length === 1 ? "student" : "students"}`;
  emptyState.hidden = students.length > 0;
  searchState.hidden = students.length === 0 || matchingStudents.length > 0;
}

function addCell(row, value, className = "") {
  const cell = document.createElement("td");
  cell.textContent = value;
  if (className) cell.className = className;
  row.append(cell);
}

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `message ${type}`;
}

function clearFormMessage() {
  formMessage.textContent = "";
  formMessage.className = "message";
}
