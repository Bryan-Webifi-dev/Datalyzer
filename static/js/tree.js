// JavaScript for Tree Visualization
document.addEventListener("DOMContentLoaded", function() {
    const treeVisualization = document.getElementById("tree-visualization");
    const addNodeButton = document.getElementById("add-node-btn");
    const treeInput = document.getElementById("tree-input");
    const statusMessage = document.getElementById("status-message");

    function displayMessage(message, color = 'blue') {
        statusMessage.textContent = message;
        statusMessage.style.color = color;
    }

    function createTreeNode(value) {
        const newNode = document.createElement("div");
        newNode.classList.add("tree-node");
        newNode.textContent = value;
        
        // Click on a node to remove it
        newNode.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevents the event from bubbling up to parent elements
            treeVisualization.removeChild(newNode);
            displayMessage("Node removed from the tree.", 'red');
        });

        return newNode;
    }

    addNodeButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents form submission behavior
        const inputValue = treeInput.value.trim();
        if (!inputValue) {
            displayMessage("Please enter a value.", 'red');
            return;
        }
        const newNode = createTreeNode(inputValue);
        treeVisualization.appendChild(newNode);
        treeInput.value = '';
        displayMessage("Node added to the tree.", 'green');
    });
});
