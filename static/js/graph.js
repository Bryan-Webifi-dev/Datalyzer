document.addEventListener("DOMContentLoaded", function() {
    const graphVisualization = document.getElementById("graph-visualization");
    const addNodeButton = document.getElementById("add-node-btn");
    const graphInput = document.getElementById("graph-input");

    addNodeButton.addEventListener("click", function() {
        const inputValue = graphInput.value.trim();
        if (inputValue) {
            const newNode = document.createElement("div");
            newNode.classList.add("graph-node");
            newNode.textContent = inputValue;
            graphVisualization.appendChild(newNode);
            graphInput.value = '';
        }
    });

    // Future enhancements: logic for adding edges and more complex graph operations
});
