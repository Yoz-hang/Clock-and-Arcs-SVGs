const resizer = document.getElementById('resizer');
const sidePage = document.getElementById('side-page');
let isResizing = false;

resizer.addEventListener('mousedown', (e) => {
  // Enable resizing when mouse is pressed
  isResizing = true;
  
  // Prevent the default behavior of page after resizing
  e.preventDefault();

  console.log("hello");

  // Store initial position
  const startX = e.clientX;
  const startWidth = sidePage.offsetWidth;

  // Function to update width while mouse is moved
  const onMouseMove = (e) => {
    console.log("hello");
    if (isResizing) {
        const newWidth = startWidth + (e.clientX - startX);
        const minWidth = 225; // Minimum width
        const maxWidth = 600; // Maximum width
        sidePage.style.minWidth = `${Math.min(Math.max(newWidth, minWidth), maxWidth)}px`;

    }
  };

  // Stop resizing when mouse button is released
  const onMouseUp = () => {
    isResizing = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  // Attach mousemove and mouseup events to the document
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});


