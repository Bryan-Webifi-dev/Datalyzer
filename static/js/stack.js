// JavaScript for Stack Visualization
document.addEventListener("DOMContentLoaded", function() {
    const stackVisualization = document.getElementById("stack-visualization");
    const pushButton = document.getElementById("push-btn");
    const popButton = document.getElementById("pop-btn");
    const stackInput = document.getElementById("stack-input");
    const statusMessage = document.getElementById("status-message");
    const maxStackSize = 10; // Set a limit for stack size

    function createStackElement(value) {
        const newElement = document.createElement("div");
        newElement.classList.add("stack-element");
        newElement.textContent = value;
        return newElement;
    }

    function displayMessage(message) {
        statusMessage.textContent = message;
    }

    pushButton.addEventListener("click", function() {
        const inputValue = stackInput.value.trim();
        if (!inputValue) {
            displayMessage("Please enter a value.");
            return;
        }
        if (stackVisualization.children.length >= maxStackSize) {
            displayMessage("Stack overflow: cannot add more elements.");
            return;
        }
        const newElement = createStackElement(inputValue);
        stackVisualization.appendChild(newElement);
        stackInput.value = '';
        displayMessage("Element pushed onto the stack.");
    });

    popButton.addEventListener("click", function() {
        if (!stackVisualization.lastElementChild) {
            displayMessage("Stack underflow: no elements to pop.");
            return;
        }
        const elementToRemove = stackVisualization.lastElementChild;
        elementToRemove.classList.add("animate__fadeOutUp");
        setTimeout(() => {
            stackVisualization.removeChild(elementToRemove);
            displayMessage("Element popped from the stack.");
        }, 500); // Delay for animation completion
    });
});
