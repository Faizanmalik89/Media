// Main JavaScript for MediaHub

// DOM Elements
const userButton = document.querySelector('.profile-button');
const userDropdown = document.querySelector('.profile-dropdown');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const searchBar = document.querySelector('.search-bar');

// Show/Hide User Profile Dropdown
if (userButton && userDropdown) {
  userButton.addEventListener('click', () => {
    userDropdown.classList.toggle('show');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!userButton.contains(event.target) && !userDropdown.contains(event.target)) {
      userDropdown.classList.remove('show');
    }
  });
}

// Mobile Menu Toggle (for smaller screens)
// Note: In a full implementation, we would add a mobile menu to the HTML
if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', () => {
    // This would toggle a mobile menu that would be added to the HTML
    console.log('Mobile menu clicked - would toggle menu visibility');
    
    // Example implementation (uncomment when mobile menu is added to HTML):
    // const mobileMenu = document.querySelector('.mobile-menu');
    // if (mobileMenu) {
    //   mobileMenu.classList.toggle('show');
    // }
  });
}

// Search bar focus/blur effects
if (searchBar) {
  searchBar.addEventListener('focus', () => {
    searchBar.classList.add('focused');
  });
  
  searchBar.addEventListener('blur', () => {
    searchBar.classList.remove('focused');
  });
}

// Add hover effect for all media cards
const mediaCards = document.querySelectorAll('.media-card');
mediaCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    // Add any additional hover effects here if needed
  });
});

// Helper function to handle all play button clicks
function handlePlayClick(event) {
  event.preventDefault();
  const title = event.currentTarget.closest('.media-card').querySelector('h3').textContent;
  console.log(`Playing: ${title}`);
  
  // In a real implementation, this would trigger a video player or redirect to a video page
  alert(`Playing: ${title} - This would open a video player in a full implementation.`);
}

// Attach click event to all play buttons
const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach(button => {
  button.addEventListener('click', handlePlayClick);
});

// Handle hero play button
const heroPlayButton = document.querySelector('.hero-actions .btn-primary');
if (heroPlayButton) {
  heroPlayButton.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('.hero-title').textContent;
    alert(`Playing: ${title} - This would open a video player in a full implementation.`);
  });
}

// Detect when media rows are being scrolled to add visual effects
const mediaRows = document.querySelectorAll('.media-row');
mediaRows.forEach(row => {
  row.addEventListener('scroll', () => {
    // Could add scroll effects like fading edges
  });
});

// Simple analytics tracking function (placeholder)
function trackEvent(category, action, label) {
  console.log(`Analytics: ${category} - ${action} - ${label}`);
  // In a real implementation, this would send data to an analytics service
}

// Track page view
document.addEventListener('DOMContentLoaded', () => {
  trackEvent('page', 'view', document.title);
});
