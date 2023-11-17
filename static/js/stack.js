document.addEventListener("DOMContentLoaded", function() {
    const stackVisualization = document.getElementById("stack-visualization");
    const pushButton = document.getElementById("push-btn");
    const popButton = document.getElementById("pop-btn");
    const stackInput = document.getElementById("stack-input");

    pushButton.addEventListener("click", function() {
        const inputValue = stackInput.value.trim();
        if (inputValue) {
            // Creating a new div element to represent the stack item
            const newElement = document.createElement("div");
            newElement.classList.add("stack-element");
            newElement.textContent = inputValue; // The text inside the div is the user input
            stackVisualization.appendChild(newElement); // Adding the new element to the top of the stack
            stackInput.value = ''; // Clearing the input field
        }
    });

    popButton.addEventListener("click", function() {
        // Removing the top element of the stack
        if (stackVisualization.lastElementChild) {
            stackVisualization.removeChild(stackVisualization.lastElementChild);
        }
    });
});
