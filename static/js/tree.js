document.addEventListener("DOMContentLoaded", function() {
    const treeVisualization = document.getElementById("tree-visualization");
    const addNodeButton = document.getElementById("add-node-btn");
    const treeInput = document.getElementById("tree-input");
    const statusMessage = document.getElementById("status-message");

    function displayMessage(message) {
        statusMessage.textContent = message;
    }

    addNodeButton.addEventListener("click", function() {
        const inputValue = treeInput.value.trim();
        if (!inputValue) {
            displayMessage("Please enter a value.");
            return;
        }
        const newNode = document.createElement("div");
        newNode.classList.add("tree-node", "animate__animated", "animate__fadeIn");
        newNode.textContent = inputValue;
        treeVisualization.appendChild(newNode);
        treeInput.value = '';
        displayMessage("Node added to the tree.");
    });

    // Additional logic for tree structure visualization
});
