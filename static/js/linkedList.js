// JavaScript for Linked List Visualization
document.addEventListener("DOMContentLoaded", function() {
    const linkedListVisualization = document.getElementById("linked-list-visualization");
    const addNodeButton = document.getElementById("add-node-btn");
    const removeNodeButton = document.getElementById("remove-node-btn");
    const linkedListInput = document.getElementById("linked-list-input");
    const statusMessage = document.getElementById("status-message");

    function displayMessage(message, isError = false) {
        statusMessage.textContent = message;
        statusMessage.style.color = isError ? 'red' : 'green';
    }

    function createLinkedListNode(value) {
        const newNode = document.createElement("div");
        newNode.classList.add("linked-list-node");
        newNode.textContent = value;
        newNode.addEventListener("click", function() {
            linkedListVisualization.removeChild(newNode);
            displayMessage("Node removed.", false);
        });
        return newNode;
    }

    addNodeButton.addEventListener("click", function() {
        const inputValue = linkedListInput.value.trim();
        if (!inputValue) {
            displayMessage("Please enter a value.", true);
            return;
        }
        const newNode = createLinkedListNode(inputValue);
        linkedListVisualization.appendChild(newNode);
        linkedListInput.value = '';
        displayMessage("Node added.", false);
    });

    removeNodeButton.addEventListener("click", function() {
        if (linkedListVisualization.firstChild) {
            linkedListVisualization.removeChild(linkedListVisualization.firstChild);
            displayMessage("First node removed.", false);
        } else {
            displayMessage("The list is empty.", true);
        }
    });
});

