document.addEventListener("DOMContentLoaded", function() {
    const stackVisualization = document.getElementById("stack-visualization");
    const pushButton = document.getElementById("push-btn");
    const popButton = document.getElementById("pop-btn");
    const stackInput = document.getElementById("stack-input");

    function createStackElement(value) {
        const newElement = document.createElement("div");
        newElement.classList.add("stack-element", "animate__animated", "animate__fadeInDown");
        newElement.textContent = value;
        return newElement;
    }

    pushButton.addEventListener("click", function() {
        const inputValue = stackInput.value.trim();
        if (inputValue) {
            const newElement = createStackElement(inputValue);
            stackVisualization.appendChild(newElement);
            stackInput.value = '';
        }
    });

    popButton.addEventListener("click", function() {
        if (stackVisualization.lastElementChild) {
            const elementToRemove = stackVisualization.lastElementChild;
            stackVisualization.removeChild(elementToRemove);
        }
    });
    
});
