var _a;
// Function to generate the resume and make it editable
function generateResume() {
    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var gradDate = document.getElementById('gradDate').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var duration = document.getElementById('duration').value;
    var responsibilities = document.getElementById('responsibilities').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate resume
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        \n        <h3>Education</h3>\n        <p><strong>Degree:</strong> <span contenteditable=\"true\">").concat(degree, "</span></p>\n        <p><strong>Institution:</strong> <span contenteditable=\"true\">").concat(institution, "</span></p>\n        <p><strong>Graduation Date:</strong> <span contenteditable=\"true\">").concat(gradDate, "</span></p>\n        \n        <h3>Work Experience</h3>\n        <p><strong>Job Title:</strong> <span contenteditable=\"true\">").concat(jobTitle, "</span></p>\n        <p><strong>Company:</strong> <span contenteditable=\"true\">").concat(company, "</span></p>\n        <p><strong>Duration:</strong> <span contenteditable=\"true\">").concat(duration, "</span></p>\n        <p><strong>Responsibilities:</strong> <span contenteditable=\"true\">").concat(responsibilities, "</span></p>\n        \n        <h3>Skills</h3>\n        <p>").concat(skills.map(function (skill) { return "<span contenteditable=\"true\">".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n      ");
        // Add event listeners for saving changes
        var editableElements = document.querySelectorAll('#resumeOutput [contenteditable="true"]');
        editableElements.forEach(function (element) {
            element.addEventListener('input', function () {
                var _a, _b, _c;
                var key = ((_b = (_a = this.previousElementSibling) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
                var value = ((_c = this.textContent) === null || _c === void 0 ? void 0 : _c.trim()) || '';
                localStorage.setItem(key, value);
            });
        });
    }
}
// Event listener for form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    generateResume();
});
// Restore data from localStorage on page load
window.addEventListener('load', function () {
    var editableElements = document.querySelectorAll('#resumeOutput [contenteditable="true"]');
    editableElements.forEach(function (element) {
        var _a, _b;
        var key = ((_b = (_a = element.previousElementSibling) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
        var savedValue = localStorage.getItem(key) || '';
        element.textContent = savedValue;
    });
});
