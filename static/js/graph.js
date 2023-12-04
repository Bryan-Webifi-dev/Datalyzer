document.addEventListener("DOMContentLoaded", function() {
    const graphVisualization = document.getElementById("graph-visualization");
    const addNodeButton = document.getElementById("add-node-btn");
    const removeNodeButton = document.getElementById("remove-node-btn");
    const nodeInput = document.getElementById("graph-node-input");
    const statusMessage = document.getElementById("status-message");

    let nodes = new Set();

    function displayMessage(message) {
        statusMessage.textContent = message;
    }

    function createGraphNode(value) {
        const newNode = document.createElement("div");
        newNode.classList.add("graph-node", "animate__animated", "animate__fadeIn");
        newNode.textContent = value;
        newNode.setAttribute('data-value', value); // Adding a data attribute for easy identification
        graphVisualization.appendChild(newNode);
        newNode.addEventListener("click", function() {
            removeNode(value);
        });
    }

    function addNode(nodeValue) {
        if (nodes.has(nodeValue)) {
            displayMessage(`Node ${nodeValue} already exists.`);
            return;
        }
        nodes.add(nodeValue);
        createGraphNode(nodeValue);
        displayMessage(`Node ${nodeValue} added.`);
    }

    function removeNode(nodeValue) {
        if (!nodes.has(nodeValue)) {
            displayMessage(`Node ${nodeValue} does not exist.`);
            return;
        }
        nodes.delete(nodeValue);
        // Updated selector to find the node element
        const nodeElement = graphVisualization.querySelector(`.graph-node[data-value='${nodeValue}']`);
        graphVisualization.removeChild(nodeElement);
        displayMessage(`Node ${nodeValue} removed.`);
    }

    addNodeButton.addEventListener("click", function() {
        const nodeValue = nodeInput.value.trim();
        if (nodeValue) {
            addNode(nodeValue);
            nodeInput.value = '';
        }
    });

    removeNodeButton.addEventListener("click", function() {
        const nodeValue = nodeInput.value.trim();
        if (nodeValue) {
            removeNode(nodeValue);
            nodeInput.value = '';
        }
    });
});
