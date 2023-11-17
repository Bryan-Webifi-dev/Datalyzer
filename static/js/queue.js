document.addEventListener("DOMContentLoaded", function() {
    const queueVisualization = document.getElementById("queue-visualization");
    const enqueueButton = document.getElementById("enqueue-btn");
    const dequeueButton = document.getElementById("dequeue-btn");

    enqueueButton.addEventListener("click", function() {
        const newElement = document.createElement("div");
        newElement.classList.add("queue-element");
        newElement.textContent = "Element"; // Customize as needed
        queueVisualization.appendChild(newElement);
    });

    dequeueButton.addEventListener("click", function() {
        if (queueVisualization.firstChild) {
            queueVisualization.removeChild(queueVisualization.firstChild);
        }
    });
});
