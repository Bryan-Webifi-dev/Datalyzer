document.getElementById('resource-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var resourceName = document.getElementById('resource-name').value;
    var resourceUrl = document.getElementById('resource-url').value;
    var resourceDescription = document.getElementById('resource-description').value;

    if(resourceName && resourceUrl && resourceDescription) {
        console.log(resourceName, resourceUrl, resourceDescription);
        // Add AJAX request or other methods to send data to the server

        // Optional: Close the modal upon successful submission
        var modalElement = document.getElementById('resourceModal');
        var modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
    } else {
        alert("Please fill in all fields.");
    }
});

// Script to handle the resource form submission within the modal
document.addEventListener('DOMContentLoaded', function() {
    const resourceForm = document.getElementById('resource-form');

    resourceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const resourceName = document.getElementById('resource-name').value;
        const resourceUrl = document.getElementById('resource-url').value;
        const resourceDescription = document.getElementById('resource-description').value;

        if (resourceName && resourceUrl && resourceDescription) {
            console.log(resourceName, resourceUrl, resourceDescription); // For testing purpose
            // TODO: Implement AJAX request or other methods to send data to the server

            // Close the modal upon successful submission
            const modalElement = document.getElementById('resourceModal');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();

            // TODO: Add the new resource to the resource list on the page
        } else {
            alert("Please fill in all fields.");
        }
    });
});
