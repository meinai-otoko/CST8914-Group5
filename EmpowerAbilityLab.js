// JavaScript for Empower Ability Labs Interactive Components
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    alert('Thank you for scheduling a call. We will get back to you soon!');
}

// Function to toggle the extra form details
function toggleFormDetails() {
    const checkbox = document.getElementById('inviteCheckbox');
    const extraField = document.getElementById('extraField');
    if (checkbox.checked) {
        extraField.style.display = 'block';
    } else {
        extraField.style.display = 'none';
    }
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        // Return focus to the element that triggered the modal
        const triggerButton = document.querySelector(`[onclick="openModal('${modalId}')"]`);
        if (triggerButton) {
            triggerButton.focus();
        }
    }
}

// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        // Move focus to the first focusable element inside the modal
        const focusableElement = modal.querySelector('button, [href], input, select, textarea');
        if (focusableElement) {
            focusableElement.focus();
        }
    }
}

// Close modals when clicking outside of the modal content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = 'none';
            modals[i].setAttribute('aria-hidden', 'true');
        }
    }
};

// Close modals with the Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            if (modals[i].style.display === 'block') {
                modals[i].style.display = 'none';
                modals[i].setAttribute('aria-hidden', 'true');
            }
        }
    }
});
