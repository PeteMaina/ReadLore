// Apply saved theme on load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    // If there's a toggle on the page, sync it
    const toggle = document.getElementById("darkModeToggle");
    if (toggle) {
        toggle.checked = savedTheme === "dark";
        toggle.addEventListener("change", () => {
            const newTheme = toggle.checked ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }
});
