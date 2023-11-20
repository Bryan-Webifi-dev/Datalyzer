document.addEventListener("DOMContentLoaded", function() {
    const graphVisualization = document.getElementById("graph-visualization");
    const addNodeButton = document.getElementById("add-node-btn");
    const addEdgeButton = document.getElementById("add-edge-btn");
    const nodeInput = document.getElementById("graph-node-input");
    const sourceInput = document.getElementById("source-node-input");
    const targetInput = document.getElementById("target-node-input");
    const statusMessage = document.getElementById("status-message");

    let nodes = {};
    let edges = [];

    function displayMessage(message) {
        statusMessage.textContent = message;
    }

    function createGraphNode(value) {
        const newNode = document.createElement("div");
        newNode.classList.add("graph-node", "animate__animated", "animate__fadeIn");
        newNode.textContent = value;
        graphVisualization.appendChild(newNode);
        return newNode;
    }

    function addNode(nodeValue) {
        if (nodes[nodeValue]) {
            displayMessage(`Node ${nodeValue} already exists.`);
            return;
        }
        nodes[nodeValue] = createGraphNode(nodeValue);
        displayMessage(`Node ${nodeValue} added.`);
    }

    function addEdge(source, target) {
        if (!nodes[source] || !nodes[target]) {
            displayMessage("Both source and target nodes must exist.");
            return;
        }
        if (edges.find(edge => edge.source === source && edge.target === target)) {
            displayMessage(`Edge from ${source} to ${target} already exists.`);
            return;
        }
        edges.push({ source, target });
        displayMessage(`Edge from ${source} to ${target} added.`);
    }

    addNodeButton.addEventListener("click", function() {
        const nodeValue = nodeInput.value.trim();
        if (nodeValue) {
            addNode(nodeValue);
            nodeInput.value = '';
        }
    });

    addEdgeButton.addEventListener("click", function() {
        const sourceValue = sourceInput.value.trim();
        const targetValue = targetInput.value.trim();
        if (sourceValue && targetValue) {
            addEdge(sourceValue, targetValue);
            sourceInput.value = '';
            targetInput.value = '';
        }
    });
});
