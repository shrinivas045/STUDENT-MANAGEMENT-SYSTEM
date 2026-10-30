# STUDENT MANAGEMENT SYSTEM — COMPLETE RECORDING SCRIPT

**Target recording duration:** 27–30 minutes  
**Application:** Student Management System (HTML, CSS, vanilla JavaScript, and browser LocalStorage)  
**Browser:** Google Chrome on Windows  
**Project folder:** `student-management`

> This script is adapted to the local Student Management System project. It does not describe the unrelated GitHub To-Do List, Safari, or macOS/Finder workflow. Read each line naturally, and only report results that are actually visible during your recording.

---

## BEFORE STARTING — PREPARE THE DESKTOP

Open and prepare:

- TaskRecorder with the approved Student Management System goal visible.
- Google Chrome with the local application open from `student-management/index.html`.
- A Google Docs document containing the approved task description and a blank functional-test table (instructions and suggested table are below).
- File Explorer with the `student-management` project folder available.
- Visual Studio Code with the project folder open, if you plan to show the source files.

**TaskRecorder Used Apps:**

- TaskRecorder
- Google Chrome
- Google Docs
- File Explorer
- Visual Studio Code (if used)

Keep the desktop uncluttered. Use normal application windows, not Full Screen. On Windows, minimize windows using the **Minimize** button at the upper-right of the title bar before switching applications. Keep the taskbar visible. Close unrelated tabs and windows. Avoid showing personal information or browser data unrelated to this project.

### Prepare the Google Docs test report

Create a report titled **Student Management System — Functional Test Report**. Include a short project description and a table with these columns: **Test ID**, **Test Case**, **Expected Result**, **Actual Result**, **Status**. Add the nine test rows listed in the report section below. Leave Actual Result and Status blank until you perform each test.

---

## 00:00–00:20 — START RECORDING

**On screen:** TaskRecorder showing the approved goal and selected apps.

**DO:** Click **Start Recording**. Immediately minimize TaskRecorder using the Minimize button in the upper-right corner.

**SAY:**

“I am performing manual functional testing of a Student Management System built with HTML, CSS, JavaScript, and browser LocalStorage. I will review the project files, test the local application in Google Chrome, record the observed results in Google Docs, and verify the project and report deliverables in File Explorer.”

---

## 00:20–01:00 — SHOW THE APPROVED TASK DESCRIPTION

**OPEN:** Google Docs from the Windows taskbar. Display the prepared task-description document.

**SAY:**

“The approved task description is open in Google Docs. It defines the application objective, required student fields, table columns, and the functions that need testing.”

Point to the relevant requirements.

“The key requirements are adding and viewing student records, deleting a record, searching by name or roll number, updating the total count, rejecting invalid input, preventing duplicate roll numbers, validating email addresses, and preserving data after refresh.”

“I will now inspect the local project files and then test those requirements in Chrome.”

---

## 01:00–03:00 — INSPECT THE PROJECT FILES

**SWITCH APPS:** Minimize Google Docs with the upper-right Minimize button, then open Visual Studio Code from the taskbar. If VS Code is not being used, open the project folder in File Explorer instead.

**SAY:**

“I am minimizing Google Docs before switching applications so the report window does not cover the project. I am opening the local student-management project in Visual Studio Code to identify the page, styles, JavaScript behavior, and documentation.”

**DO:** Point to `index.html`, `style.css`, `script.js`, and `README.md` in the project Explorer panel. Briefly show the source files without making edits during the recording.

**SAY:**

“The project is separated into an HTML page, a stylesheet, a JavaScript file, and a README. The JavaScript handles form validation, student record rendering, searching, deletion, and LocalStorage persistence. The README contains the setup steps and functional test scenarios.”

“I am testing the project as it is provided and will record the behavior I observe. I will not claim a test passed unless I see the expected result in the application.”

---

## 03:00–03:45 — OPEN THE LOCAL APPLICATION

**SWITCH APPS:** Minimize Visual Studio Code, then select Google Chrome from the taskbar.

**DO:** If the application tab is not already open, press **Ctrl+O** in Chrome. In the Windows file picker, open the `student-management` folder, select `index.html`, and click **Open**.

**SAY:**

“I am minimizing Visual Studio Code before returning to Chrome. I am opening the local `index.html` entry point from the `student-management` folder. This runs the application directly in the browser; it does not require a backend, database, or external library.”

Wait for the page to load.

“The Student Management System dashboard is visible. I can see the student form, total-students card, search field, and records table. The test data starts empty, so I can clearly observe each change.”

---

## 03:45–06:00 — TC-01: ADD A STUDENT

**DO:** Click the Student name field and enter `Alex Johnson`. Fill the remaining fields:

- Roll number: `CS-2026-014`
- Email: `alex.johnson@example.com`
- Department: `Computer Science`
- Year: `Year 2`

**SAY:**

“I am entering a complete, valid student record. I am using a unique roll number and a correctly formatted email address so this test isolates the normal add-student workflow.”

**DO:** Click **Submit student**.

**SAY:**

“I am clicking Submit student to add the record. I am checking the table for the student name, generated student ID, roll number, email, department, year, and Delete control. I am also checking whether the total-students card changed from zero to one.”

Point to the actual visible result.

“If the row and total are present as expected, TC-01 passes. I will record the result after completing the rest of the checks.”

---

## 06:00–07:45 — TC-02: ADD MULTIPLE STUDENTS

**DO:** Add another student with valid details:

- Student name: `Jamie Chen`
- Roll number: `IT-2026-022`
- Email: `jamie.chen@example.com`
- Department: `Information Technology`
- Year: `Year 3`

**SAY:**

“I am entering a second student with a different roll number. This checks that the application can keep multiple records rather than replacing the first one.”

Click **Submit student**.

“Both student records are visible as separate rows. The total should now show two. I am checking that the details in the original row remain unchanged. If both rows and the total are correct, TC-02 passes.”

---

## 07:45–08:45 — TC-03: TOTAL STUDENT COUNT

**DO:** Point to the Total students card and count the two visible records.

**SAY:**

“I am comparing the Total students card with the number of records currently saved. There are two student rows, and the card should show two. This verifies that the count reflects all saved records, not just the visible search results.”

“If the card shows two for two saved records, TC-03 passes.”

---

## 08:45–11:00 — TC-04: SEARCH BY NAME AND ROLL NUMBER

**DO:** Click the search field and enter `Jamie`.

**SAY:**

“I am entering part of Jamie Chen’s name in the search field. I am checking that the matching student remains visible and the other student is filtered out.”

Point to the result, then replace the query with `CS-2026-014`.

“I am replacing the search text with Alex’s roll number. This checks search by roll number independently of the name search. I am confirming that the matching record appears.”

Clear the search field.

“I am clearing the search field and confirming that both student records return. If both name and roll-number searches work and clearing the query restores the full list, TC-04 passes.”

---

## 11:00–12:30 — TC-05: DELETE A STUDENT

**DO:** Locate Jamie Chen’s row and click its **Delete** button.

**SAY:**

“I am locating the Delete button in Jamie Chen’s row so I remove only the selected record. I am clicking that row’s Delete button and checking that Jamie’s row disappears.”

Point to Alex’s remaining row and the total card.

“Alex’s record remains, and the total count has decreased by one. If the selected record was removed without affecting the other row, TC-05 passes.”

---

## 12:30–14:00 — TC-06: REJECT EMPTY OR WHITESPACE INPUT

**DO:** Leave the form empty and click **Submit student**. Observe the browser validation response and check that no new record appears. If time permits, also try a name containing only spaces while completing the other fields.

**SAY:**

“I am submitting the form with its required fields empty. This checks that an incomplete record cannot be added. I am observing the browser’s validation response and confirming that the record count does not increase.”

“If I test whitespace-only text, I will enter spaces in a text field while providing the other required values. This checks that spaces are not accepted as a real student name or roll number.”

Point to the table and total.

“No incomplete record was added. If whitespace-only text is also rejected, that confirms the trimmed-field check. TC-06 passes when the empty or whitespace submission is rejected and the total remains unchanged.”

---

## 14:00–15:45 — TC-07: PREVENT DUPLICATE ROLL NUMBERS

**DO:** Add a valid student with roll number `BIO-2026-031` and the other fields filled with valid values. Then attempt another student using `bio-2026-031` (same value with different capitalization).

**SAY:**

“I am first saving a record with roll number BIO-2026-031. Next, I am submitting a second record with the same roll number using lowercase letters. This checks whether duplicate detection ignores capitalization.”

Click **Submit student** for the duplicate attempt.

“I am checking for the duplicate warning and confirming that the total did not increase and that no second row with the same roll number was added. If the duplicate is rejected, TC-07 passes.”

---

## 15:45–17:15 — TC-08: VALIDATE EMAIL ADDRESSES

**DO:** Fill the form with otherwise valid new student details but enter `not-an-email` in the email field. Click **Submit student**.

**SAY:**

“I am entering an incorrectly formatted email address while keeping the other student fields complete. I am clicking Submit student to check that invalid email input is rejected.”

Point to the browser’s validation response or app message, and verify the count is unchanged.

“The invalid email was not saved. I am correcting the address to a valid format and submitting the form so I can confirm that a correctly formatted email is accepted.”

Use a new unique roll number when submitting the valid record. Point to the new row.

“If the malformed address is rejected and the valid one is accepted, TC-08 passes.”

---

## 17:15–19:00 — TC-09: PERSISTENCE AFTER REFRESH

**DO:** Identify a saved row that will remain in the table. Press **Ctrl+R** to refresh Chrome.

**SAY:**

“I am selecting a saved student record as the persistence check. I am pressing Ctrl+R to reload the local application. This checks whether LocalStorage restores records after a browser refresh.”

Wait for the page to reload.

“The application has reloaded. I am checking that the selected student and its details are still present and that the total count matches the saved records. If the record remains after refresh, TC-09 passes.”

---

## 19:00–20:00 — REVIEW THE BROWSER RESULTS

**DO:** Show the table and count. Optionally search again for one of the saved records.

**SAY:**

“I am reviewing the final browser state before writing the report. The visible records, current total, search results, and validation messages must agree with the interactions I performed. I will enter only the results I actually observed in Google Docs.”

---

## 20:00–25:00 — DOCUMENT THE NINE TEST RESULTS IN GOOGLE DOCS

**SWITCH APPS:** Minimize Chrome using the upper-right Minimize button, then open Google Docs from the taskbar. Open the prepared report and scroll to the test table.

**SAY:**

“I have finished the browser tests and am minimizing Chrome before switching to Google Docs. I am entering the observed result in the Actual Result column and the status in the Status column for each test. I will use PASS only where the observed result matched the expected result.”

For each row, select the cells and enter the actual result and status:

| Test ID | Test case | Suggested Actual Result text | Status rule |
| --- | --- | --- | --- |
| TC-01 | Add a student | The student appeared with a generated ID and all entered details; total updated to 1. | PASS only if observed |
| TC-02 | Add multiple students | Both valid students appeared in separate rows. | PASS only if observed |
| TC-03 | Total student count | The total card matched the number of saved records. | PASS only if observed |
| TC-04 | Search by name and roll number | Name and roll-number queries showed the matching record; clearing search restored the list. | PASS only if observed |
| TC-05 | Delete a student | The selected student was removed, the other record remained, and the total decreased. | PASS only if observed |
| TC-06 | Reject empty or whitespace input | Empty/whitespace submission was rejected and no invalid record was added. | PASS only if observed |
| TC-07 | Prevent duplicate roll numbers | The duplicate roll number was rejected, including when letter case differed. | PASS only if observed |
| TC-08 | Validate email | The malformed address was rejected; a valid address was accepted. | PASS only if both observed |
| TC-09 | Refresh persistence | Saved student data and total were restored after refreshing Chrome. | PASS only if observed |

**SAY while entering results:**

“I am entering the result for TC-01 from the student record I observed in Chrome.”

“I am entering the result for TC-02 from the two separate rows I observed.”

“I am recording TC-03 based on the visible total and saved-record count.”

“I am documenting TC-04 using the name and roll-number searches I performed.”

“I am recording TC-05 from the selected row deletion and the remaining student record.”

“I am entering TC-06 based on the empty-input validation behavior.”

“I am recording TC-07 based on the duplicate warning and unchanged record count.”

“I am entering TC-08 based on the invalid and valid email submissions.”

“I am recording TC-09 based on the saved record that remained after refreshing Chrome.”

**DO:** Review every Actual Result and Status cell. Mark a case **FAIL** if its observed result did not match the expected result. Mark **NOT RUN** if you did not perform it; do not infer a pass.

**SAY:**

“I am reviewing all nine status entries and comparing each actual result with its expected result. The report summary will count only tests marked PASS and will identify any failed or not-run cases accurately.”

Add a conclusion with the actual totals, for example:

> **Conclusion:** 9 passed, 0 failed, 0 not run. The tested student-management workflows behaved as expected in Google Chrome.

Replace those numbers and the conclusion text if the actual results differ.

---

## 25:00–26:00 — EXPORT THE REPORT

**DO:** In Google Docs, choose **File > Download > PDF Document (.pdf)**. Wait for the download to finish.

**SAY:**

“I am opening the File menu in Google Docs and choosing Download, then PDF Document. This exports the completed functional test report. I am waiting for the PDF download to finish before checking it in File Explorer.”

---

## 26:00–28:30 — VERIFY PROJECT AND REPORT IN FILE EXPLORER

**SWITCH APPS:** Minimize Google Docs using the upper-right Minimize button, then open File Explorer from the taskbar. Navigate to the location containing the project folder and downloaded PDF.

**SAY:**

“I am minimizing Google Docs before switching to File Explorer. I am checking the project folder and downloaded PDF so I can confirm the expected deliverables are present.”

**DO:** Open the `student-management` folder and point to `index.html`, `style.css`, `script.js`, `README.md`, and this recording script if it is included. Return to the parent folder and locate the exported report PDF.

**SAY:**

“The project folder contains the HTML page, CSS stylesheet, JavaScript behavior, and README documentation. I am also confirming that the exported functional test report is present.”

### Optional ZIP packaging

If a ZIP deliverable is required, select the complete `student-management` folder and the exported test-report PDF. In Windows 11, right-click and choose **Compress to ZIP file**. In earlier Windows versions, right-click and choose **Send to > Compressed (zipped) folder**. Give the archive a clear name such as `Student-Management-Deliverables.zip`.

**SAY:**

“I am selecting the complete project folder and the exported test report. I am compressing these deliverables into one ZIP archive without removing or renaming the original project files.”

If created, open the ZIP and verify that the project folder and PDF are both included. Do not claim to have created or checked a ZIP unless you actually do so.

---

## 28:30–29:30 — FINAL SUMMARY

**On screen:** File Explorer showing the project folder and report (and ZIP if created).

**SAY:**

“I completed manual functional testing of the Student Management System in Google Chrome. I tested adding students, multiple records, the total count, searching by name and roll number, deletion, empty input, duplicate roll numbers, email validation, and persistence after refresh.”

“I documented the results in the functional test report and exported it as a PDF. I verified the project files in File Explorer. Any status in the report reflects the behavior I actually observed during the test.”

“The application uses browser LocalStorage, so records are stored in the browser profile used for testing. The project does not require a backend or external libraries. The test report and project files are ready for review.”

“I have completed the testing, documentation, and deliverable verification. I am now finishing the recording.”

**DO:** Return to TaskRecorder from the taskbar and stop recording. Wait for the recording file to finish saving.

---

## RECORDING RULES TO FOLLOW THROUGHOUT

1. When switching away from an app, minimize it using the Windows title-bar Minimize button before opening the next app.
2. Use normal windows; do not use Full Screen.
3. Before an important click, identify the exact field, button, row, menu item, or file.
4. Explain briefly why each test action is being performed.
5. Pause about one second after important clicks so the result is visible.
6. Keep the test data and report results consistent with what appeared in Chrome.
7. Do not claim PASS for untested behavior. Record FAIL or NOT RUN when appropriate.
8. Leave no personal or unrelated information visible in the recording.
9. Keep the recording uninterrupted and within the approved duration.
10. Upload or submit only the files requested by the task owner or recording platform.
