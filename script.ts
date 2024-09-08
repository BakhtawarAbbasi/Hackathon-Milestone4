// Function to generate the resume and make it editable
function generateResume(): void {
    // Retrieve form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const gradDate = (document.getElementById('gradDate') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;
    const responsibilities = (document.getElementById('responsibilities') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  
    // Generate resume
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
      resumeOutput.innerHTML = `
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        
        <h3>Education</h3>
        <p><strong>Degree:</strong> <span contenteditable="true">${degree}</span></p>
        <p><strong>Institution:</strong> <span contenteditable="true">${institution}</span></p>
        <p><strong>Graduation Date:</strong> <span contenteditable="true">${gradDate}</span></p>
        
        <h3>Work Experience</h3>
        <p><strong>Job Title:</strong> <span contenteditable="true">${jobTitle}</span></p>
        <p><strong>Company:</strong> <span contenteditable="true">${company}</span></p>
        <p><strong>Duration:</strong> <span contenteditable="true">${duration}</span></p>
        <p><strong>Responsibilities:</strong> <span contenteditable="true">${responsibilities}</span></p>
        
        <h3>Skills</h3>
        <p>${skills.map(skill => `<span contenteditable="true">${skill.trim()}</span>`).join(', ')}</p>
      `;
  
      // Add event listeners for saving changes
      const editableElements = document.querySelectorAll('#resumeOutput [contenteditable="true"]');
      editableElements.forEach(element => {
        element.addEventListener('input', function() {
          const key = this.previousElementSibling?.textContent?.trim() || '';
          const value = this.textContent?.trim() || '';
          localStorage.setItem(key, value);
        });
      });
    }
  }
  
  // Event listener for form submission
  document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    generateResume();
  });
  
  // Restore data from localStorage on page load
  window.addEventListener('load', () => {
    const editableElements = document.querySelectorAll('#resumeOutput [contenteditable="true"]');
    editableElements.forEach(element => {
      const key = element.previousElementSibling?.textContent?.trim() || '';
      const savedValue = localStorage.getItem(key) || '';
      element.textContent = savedValue;
    });
  });
  