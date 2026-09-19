button = document.getElementById("dark-mode-btn");

button.addEventListener("click", function() {
    // toggle ON, function adds the class .dark-mode
    // toggle OFF, function removes the class .dark-mode
    document.body.classList.toggle("dark-mode");
});