const images = document.querySelectorAll('.image');
let draggedElement = null;

images.forEach((image) => {
    image.addEventListener('dragstart', handleDragStart);
    image.addEventListener('dragover', handleDragOver);
    image.addEventListener('drop', handleDrop);
});

function handleDragStart(event) {
    draggedElement = event.target;
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    if (draggedElement && draggedElement !== event.target) {
        const tempContent = draggedElement.textContent;
        draggedElement.textContent = event.target.textContent;
        event.target.textContent = tempContent;
    }
}
