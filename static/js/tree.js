document.addEventListener("DOMContentLoaded", function() {
    const treeVisualization = document.getElementById("tree-visualization");
    const addNodeButton = document.getElementById("add-node-btn");
    const treeInput = document.getElementById("tree-input");

    addNodeButton.addEventListener("click", function() {
        const inputValue = treeInput.value.trim();
        if (inputValue) {
            const newNode = document.createElement("div");
            newNode.classList.add("tree-node");
            newNode.textContent = inputValue;
            treeVisualization.appendChild(newNode);
            treeInput.value = '';
        }
    });

    // More complex logic will be needed for properly visualizing tree structure
});
