// JavaScript for Queue Visualization
document.addEventListener("DOMContentLoaded", function() {
    const queueVisualization = document.getElementById("queue-visualization");
    const enqueueButton = document.getElementById("enqueue-btn");
    const dequeueButton = document.getElementById("dequeue-btn");
    const queueInput = document.getElementById("queue-input");
    const statusMessage = document.getElementById("status-message");

    function createQueueElement(value) {
        const newElement = document.createElement("div");
        newElement.classList.add("queue-element");
        newElement.textContent = value;
        return newElement;
    }

    function displayMessage(message, isError = false) {
        statusMessage.textContent = message;
        statusMessage.style.color = isError ? 'red' : 'green';
    }

    enqueueButton.addEventListener("click", function() {
        const inputValue = queueInput.value.trim();
        if (!inputValue) {
            displayMessage("Please enter a value.", true);
            return;
        }
        const newElement = createQueueElement(inputValue);
        queueVisualization.appendChild(newElement);
        queueInput.value = '';
        displayMessage("Element enqueued.");
    });

    dequeueButton.addEventListener("click", function() {
        if (!queueVisualization.firstChild) {
            displayMessage("Queue is empty: no elements to dequeue.", true);
            return;
        }
        queueVisualization.removeChild(queueVisualization.firstChild);
        displayMessage("Element dequeued.");
    });
});
