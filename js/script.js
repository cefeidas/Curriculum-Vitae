document.addEventListener("DOMContentLoaded", function () {
    function removeActiveClassFromNavItems() {
      document.querySelectorAll('#navbarNavAltMarkup .nav-item').forEach(function (navItem) {
        navItem.classList.remove('active');
      });
    }
  
    function hideAllSectionsExcept(activeSectionId) {
      document.querySelectorAll('section').forEach(function (section) {
        if (section.id !== activeSectionId) {
          section.style.display = 'none';
        }
      });
    }
  
    function showSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section && section.style.display !== 'block') {
        hideAllSectionsExcept(sectionId);
        section.style.display = 'block';
      }
      removeActiveClassFromNavItems();
      const activeNavItem = document.querySelector(`#navbarNavAltMarkup .nav-item[href="#${sectionId}"]`);
      if (activeNavItem) {
        activeNavItem.classList.add('active');
      }
    }
  
    document.querySelectorAll('#navbarNavAltMarkup .nav-item').forEach(function (navItem) {
      navItem.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substr(1);
        showSection(sectionId);
      });
    });
  
    document.querySelectorAll('#navbarNavAltMarkup .nav-link').forEach(function(navLink) {
      navLink.addEventListener('mouseover', function() {
        this.style.color = '#21e6c1'; // electric cyan for hover state
      });
      navLink.addEventListener('mouseout', function() {
        this.style.color = ''; // revert back to original color on mouse out
      });
    });
  
    // Show the 'home' section on page load
    showSection('home');
  });