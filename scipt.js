document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing input fields
    initializeInputFields();
    
});

function initializeInputFields() {
    const inputFields = document.querySelectorAll('.input-field');
    
    inputFields.forEach(field => {
        setupInputField(field);
    });
}

function setupInputField(field) {
    // Handle focus event
    field.addEventListener('focus', function() {
        if (!this.classList.contains('has-content')) {
            this.textContent = '';
        }
    });
    
    // Handle blur event
    field.addEventListener('blur', function() {
        if (this.textContent.trim() === '') {
            this.classList.remove('has-content');
        } else {
            this.classList.add('has-content');
        }
    });
    
    // Handle input event
    field.addEventListener('input', function() {
        if (this.textContent.trim() !== '') {
            this.classList.add('has-content');
        } else {
            this.classList.remove('has-content');
        }
    });
    
    // Handle Enter key to move to next field
    field.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const nextField = getNextInputField(this);
            if (nextField) {
                nextField.focus();
            }
        }
    });
}

function getNextInputField(currentField) {
    const allFields = Array.from(document.querySelectorAll('.input-field'));
    const currentIndex = allFields.indexOf(currentField);
    return allFields[currentIndex + 1] || null;
}

function addNewEntry() {
    const container = document.querySelector('.form-container');
    
    // Create separator
    const separator = document.createElement('div');
    separator.className = 'entry-separator';
    separator.innerHTML = '<h2>Entry ' + (getEntryCount() + 1) + '</h2>';
    
    // Create new form rows
    const fieldNames = [
        { id: 'title', label: 'Title' },
        { id: 'author', label: 'Author' },
        { id: 'year', label: 'Year' },
        { id: 'format', label: 'Format' },
        { id: 'audience', label: 'Audience' },
        { id: 'bibliography-author', label: 'Bibliography of Author' },
        { id: 'bibliography-others', label: 'Bibliography of Others' }
    ];
    
    container.appendChild(separator);
    
    fieldNames.forEach(field => {
        const formRow = document.createElement('div');
        formRow.className = 'form-row';
        
        formRow.innerHTML = `
            <div class="label-column">
                <label for="${field.id}">${field.label}</label>
            </div>
            <div class="input-column">
                <div class="input-field" contenteditable="true" data-placeholder="Input text here"></div>
            </div>
        `;
        
        container.appendChild(formRow);
        
        // Setup the new input field
        const newInputField = formRow.querySelector('.input-field');
        setupInputField(newInputField);
    });
}

function getEntryCount() {
    return document.querySelectorAll('.entry-separator').length;
}