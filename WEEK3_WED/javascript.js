// Get the target drop area
const imageDiv = document.getElementById('image');

// Add dragover event to allow dropping
imageDiv.addEventListener('dragover', (e) => {
    e.preventDefault(); // Prevent default behavior
    console.log("Dragging over the drop area...");
});

// Add drop event
imageDiv.addEventListener('drop', (e) => {
    e.preventDefault(); // Prevent default link opening
    const imgId = e.dataTransfer.getData('text/plain'); // Get dragged image ID
    const draggedImg = document.getElementById(imgId); // Find the dragged image

    if (draggedImg) {
        console.log("Dropped image:", draggedImg.alt);
        // Update text and background
        imageDiv.innerText = draggedImg.alt;
        imageDiv.style.backgroundImage = `url('${draggedImg.src}')`;
    } else {
        console.log("No valid image found!");
    }
});

// Add event listeners for dragstart on images
document.querySelectorAll('.preview').forEach(img => {
    img.addEventListener('dragstart', (e) => {
        console.log("Dragging:", img.alt);
        e.dataTransfer.setData('text/plain', img.id); // Store image ID
    });
});

// Function to reset the image div
function resetImage() {
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerText = "Hover over or drag an image below to display here.";
}

// Reset on double-click
imageDiv.addEventListener('dblclick', resetImage);
