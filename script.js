/**
 * showPage(pageId)
 * -----------------
 * Hides all pages, then shows only the one with the matching ID.
 * Also updates the nav button styles to show which page is active.
 *
 * @param {string} pageId - The id of the page div to show (e.g. "home", "manhattan")
 */
function showPage(pageId) {
  // 1. Get every element with class "page"
  const allPages = document.querySelectorAll('.page');

  // 2. Loop through and remove the "active" class from each
  allPages.forEach(function(page) {
    page.classList.remove('active');
  });

  // 3. Find the page we want and add "active" to show it
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // 4. Update nav button highlighting
  const allNavBtns = document.querySelectorAll('.nav-btn');
allNavBtns.forEach(function(btn) {
  // Remove active from everyone first
  btn.classList.remove('active');
  
  // If the button's text (lowercase) matches the borough or 
  // if the click handler contains the pageId, highlight it.
  if (btn.getAttribute('onclick').includes(`'${pageId}'`)) {
    btn.classList.add('active');
  }
});

  // 5. Scroll back to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}