# Student Management System

A small, browser-based dashboard for adding, viewing, searching, and deleting student records. It uses the browser's LocalStorage, so no server, database, build tools, or internet connection is required.

## Project objectives

- Keep basic student records organized in a clear dashboard.
- Make common record tasks available through a simple form and table.
- Store records in the browser so they remain after refreshes.
- Provide a responsive interface that works on desktop and mobile screens.

## Features

- Add a student with a name, roll number, email, department, and year.
- View student IDs and all submitted details in a records table.
- Search by student name or roll number.
- Delete a student record.
- See the total number of saved students update automatically.
- Save records in LocalStorage and restore them when the page is opened again.
- Reject blank fields, invalid email addresses, and duplicate roll numbers (duplicate checking ignores letter case).
- Keep user-entered text safe by inserting it as text rather than HTML.

## Technologies used

- HTML5
- CSS3
- Vanilla JavaScript
- Browser LocalStorage

## Folder structure

```text
student-management/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Installation

1. Download or copy the `student-management` folder to your computer.
2. No packages or dependency installation are needed.
3. Open the folder in Visual Studio Code or in File Explorer.

## How to run

1. Open the `student-management` folder.
2. Open `index.html` in Google Chrome (for example, right-click the file and choose **Open with > Google Chrome**).
3. Fill in all five fields and select **Submit student**.
4. Use the search field to find a student by name or roll number.
5. Select **Delete** in a student's row to remove that record.
6. Refresh Chrome. Saved records should still be present.

The app is designed to work directly from a local file in Chrome. Records are stored only in the current browser profile and device. Clearing site/browser data or using a different browser profile will remove or hide them. For the most consistent local-file storage behavior, keep using the same file location and Chrome profile.

## Testing scenarios

| Test | Steps | Expected result |
| --- | --- | --- |
| TC-01: Add one student | Submit all valid details for one student. | The row appears, a student ID is shown, and the total becomes 1. |
| TC-02: Add multiple students | Submit details for two or more students with different roll numbers. | Each student appears as a separate row. |
| TC-03: Verify total count | Add several students, then compare the card to the record rows. | The card shows the number of saved records. |
| TC-04: Delete a student | Select **Delete** in a student's row. | The row disappears and the total decreases by one. |
| TC-05: Search by name | Enter part or all of a student's name in the search field. | Matching names appear; non-matching rows are filtered out. |
| TC-06: Reject empty input | Submit with a field blank (or containing only spaces). | The form is not saved and prompts for valid required details. |
| TC-07: Prevent duplicate roll numbers | Add a student, then submit another with the same roll number, including a different letter case. | The second record is rejected with a duplicate warning. |
| TC-08: Verify persistence | Add a student and refresh the browser tab. | The saved record and total count are restored. |
| Email validation | Enter an incorrectly formatted email address and submit. | The browser or app reports that the email is invalid. |
