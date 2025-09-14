const html = document.getElementById("htmlPage");
const checkbox = document.getElementById("checkbox");

// Check and apply saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    html.setAttribute("data-bs-theme", savedTheme);
    checkbox.checked = savedTheme === "dark"; // Sync checkbox with the theme
}

// Listen for changes in the checkbox
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        html.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark"); // Save the preference
    } else {
        html.setAttribute("data-bs-theme", "light");
        localStorage.setItem("theme", "light"); // Save the preference
    }
});

// Initialize all tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
