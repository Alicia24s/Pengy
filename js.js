// script.js

// Initialize variables
let currentCheckpoint = 0;
const totalCheckpoints = 8; // Total number of checkpoints
const checkpointInterval = 5000; // Interval in milliseconds (5 seconds)

// Array of translucent image filenames (replace with actual filenames)
const translucentImages = ["image1.png", "image2.png", "image3.png"];
let currentTranslucentImage = 0;

// Function to update the progress bar
function updateProgressBar() {
    currentCheckpoint = (currentCheckpoint + 1) % totalCheckpoints;
    // Update the visual representation of the progress bar (e.g., move a marker)
    // You can adjust this based on your HTML/CSS structure
    console.log(`Progress: ${currentCheckpoint}/${totalCheckpoints}`);
}

// Function to change the translucent image
function changeTranslucentImage() {
    currentTranslucentImage = (currentTranslucentImage + 1) % translucentImages.length;
    // Update the displayed translucent image
    // You can use an <img> element and set its src attribute dynamically
    console.log(`Translucent Image: ${translucentImages[currentTranslucentImage]}`);
}

// Call the functions initially
updateProgressBar();
changeTranslucentImage();

// Set intervals for updating progress bar and changing translucent image
setInterval(updateProgressBar, checkpointInterval);
setInterval(changeTranslucentImage, checkpointInterval);
