(function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    } else if (savedTheme === "dark") {
        document.body.classList.remove("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }

    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.getElementById("theme-toggle");
        if (!toggle) return;

        toggle.textContent = document.body.classList.contains("light-mode")
            ? "🌙"
            : "☀️";

        toggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");

            const isLight = document.body.classList.contains("light-mode");
            toggle.textContent = isLight ? "🌙" : "☀️";

            localStorage.setItem("theme", isLight ? "light" : "dark");
        });
    });
})();
