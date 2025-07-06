// Simple JavaScript to make cells editable when clicked
document.addEventListener('DOMContentLoaded', function() {
    const inputCells = document.querySelectorAll('.input-cell');
    
    inputCells.forEach(cell => {
        cell.addEventListener('click', function() {
            if (this.textContent === 'Input text here') {
                this.textContent = '';
                this.style.color = '#000000';
                this.style.fontStyle = 'normal';
                this.style.backgroundColor = '#ffffff';
            }
            this.contentEditable = true;
            this.focus();
        });

        cell.addEventListener('blur', function() {
            this.contentEditable = false;
            if (this.textContent.trim() === '') {
                this.textContent = 'Input text here';
                this.style.color = '#666666';
                this.style.fontStyle = 'italic';
                this.style.backgroundColor = '#f9f9f9';
            }
        });

        cell.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                this.blur();
            }
        });
    });
});

// Function to add a new row
function addRow() {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    for (let i = 0; i < 7; i++) {
        const cell = newRow.insertCell(i);
        cell.className = 'input-cell';
        cell.textContent = 'Input text here';
        
        // Add event listeners to new cells
        cell.addEventListener('click', function() {
            if (this.textContent === 'Input text here') {
                this.textContent = '';
                this.style.color = '#000000';
                this.style.fontStyle = 'normal';
                this.style.backgroundColor = '#ffffff';
            }
            this.contentEditable = true;
            this.focus();
        });

        cell.addEventListener('blur', function() {
            this.contentEditable = false;
            if (this.textContent.trim() === '') {
                this.textContent = 'Input text here';
                this.style.color = '#666666';
                this.style.fontStyle = 'italic';
                this.style.backgroundColor = '#f9f9f9';
            }
        });

        cell.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                this.blur();
            }
        });
    }
}

// Add button functionality
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.createElement('button');
    addButton.textContent = 'Add New Row';
    addButton.style.marginTop = '20px';
    addButton.style.padding = '10px 20px';
    addButton.style.backgroundColor = '#000000';
    addButton.style.color = '#ffffff';
    addButton.style.border = 'none';
    addButton.style.cursor = 'pointer';
    addButton.style.fontSize = '16px';
    
    addButton.addEventListener('click', addRow);
    addButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#333333';
    });
    addButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#000000';
    });
    
    document.body.appendChild(addButton);
});