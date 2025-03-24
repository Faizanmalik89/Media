/**
 * GitHub Pages Helper Script
 * 
 * This script provides fallback functionality and path corrections
 * for the MediaHub website when deployed on GitHub Pages.
 */

// Check if we're running on GitHub Pages
function isGitHubPages() {
  return window.location.hostname.indexOf('github.io') !== -1;
}

// Adjust image paths if necessary
function adjustImagePaths() {
  if (!isGitHubPages()) return;
  
  // No adjustments needed since we're using external image URLs
  // If you add local images later, you would handle them here
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add GitHub Pages specific adjustments
  adjustImagePaths();
  
  // Log deployment type to console
  if (isGitHubPages()) {
    console.log('Running on GitHub Pages');
  } else {
    console.log('Running locally or on custom domain');
  }
  
  // Track page view (for analytics)
  const pageTitle = document.title;
  console.log(`Page viewed: ${pageTitle}`);
});

// Expose a function to handle any GitHub Pages specific issues
window.handleGitHubPagesIssue = function(issue) {
  console.warn(`GitHub Pages issue: ${issue}`);
  // Handle specific GitHub Pages issues here
};