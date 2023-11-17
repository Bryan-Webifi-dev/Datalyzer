document.addEventListener("DOMContentLoaded", function() {
    const linkedListVisualization = document.getElementById("linked-list-visualization");
    const addNodeButton = document.getElementById("add-node-btn");
    const removeNodeButton = document.getElementById("remove-node-btn");
    const linkedListInput = document.getElementById("linked-list-input");

    addNodeButton.addEventListener("click", function() {
        const inputValue = linkedListInput.value.trim();
        if (inputValue) {
            const newNode = document.createElement("div");
            newNode.classList.add("linked-list-node");
            newNode.textContent = inputValue; // The text inside the div is the user input
            linkedListVisualization.appendChild(newNode); // Adding the new node to the linked list
            linkedListInput.value = ''; // Clearing the input field
        }
    });

    removeNodeButton.addEventListener("click", function() {
        if (linkedListVisualization.firstChild) {
            linkedListVisualization.removeChild(linkedListVisualization.firstChild);
        }
    });
});
