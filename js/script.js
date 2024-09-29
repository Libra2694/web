document.addEventListener('DOMContentLoaded', function() {
    // Show the popup after page loads
    const popup = document.getElementById('popup');
    popup.classList.add('show');

    // Close popup when button is clicked
    const closePopup = document.getElementById('closePopup');
    closePopup.addEventListener('click', function() {
        popup.classList.remove('show');
    });
});
