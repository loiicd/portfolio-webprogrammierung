
/**
 * @description This function checks the URL and displays the 404 error page if the URL is not found.
 * @function checkURL
 */

function checkURL() {
        const validURLs = ['../html/index.html', '../html/objects.html', '/html/contact.html', '../html/favorites.html', '../html/errorPage.html','../html/impressum.html', '../html/noConnectionErrorPage.html']; 
    
        // Get the current URL
        const currentURL = window.location.pathname;
    
        // Check if the current URL is included in the list of valid URLs
        if (!validURLs.includes(currentURL)) {
            // If not found, redirect to the error page
           window.location.href = '../html/errorPage.html';
        }
    }
    
    // Call the function when the page is loaded
    window.addEventListener('DOMContentLoaded', checkURL);
    
